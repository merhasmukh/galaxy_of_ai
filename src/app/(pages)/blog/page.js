import Blogs from "../../components/Blog/Blog";

export const metadata = {
    title: "Exploring Agentic AI, LLMs, and Generative AI with Python",
    description:
      "Dive into real-world scenarios and examples of Agentic AI, Large Language Models (LLMs), and Generative AI using Python. Learn how these cutting-edge technologies solve complex problems.",
    keywords: [
      "Agentic AI scenarios",
      "LLM applications",
      "Generative AI with Python",
      "AI use cases",
      "Python AI development",
      "Large Language Models",
      "Autonomous AI agents",
      "Generative AI projects",
      "AI problem solving",
    ],
    author: "Hasmukh Mer",
    openGraph: {
      title: "Exploring Agentic AI, LLMs, and Generative AI with Python",
      description:
        "Discover practical examples and use cases of Agentic AI, LLMs, and Generative AI. Leverage Python to implement intelligent systems and solve real-world problems.",
      url: "https://galaxyofai.com/blog",
      images: [
        {
          url: "https://galaxyofai.com/favicon.ico",
          width: 1200,
          height: 630,
          alt: "Agentic AI, LLM, and Generative AI with Python",
        },
      ],
      type: "article",
    },
   
  };
  
export default async function Page() {
  
  return <Blogs />;
}
