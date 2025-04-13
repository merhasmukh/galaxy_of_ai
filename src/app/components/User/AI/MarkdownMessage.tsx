import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { Components } from "react-markdown";

type MarkdownMessageProps = {
  text: string;
};

// Define proper CodeComponent props type
type CodeComponentProps = {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const CodeBlock = ({ inline, className, children }: CodeComponentProps) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";
  
  return !inline && language ? (
    <SyntaxHighlighter
      language={language}
      PreTag="div"
      style={oneDark}
      className="rounded-lg overflow-x-auto text-sm"
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={`bg-gray-800 text-white px-1 py-0.5 rounded ${className || ""}`}>
      {children}
    </code>
  );
};

const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ text }) => {
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock as Components["code"],
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownMessage;