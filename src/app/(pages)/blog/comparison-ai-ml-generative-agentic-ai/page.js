import AIAIComparisonPage from "../../../components/Blog/Comparison/AiMlGenAI";

export const metadata = {
    title: "Comparison of AI, ML, Generative AI, and Agentic AI",
    description: "Explore the distinctions and key features of Artificial Intelligence, Machine Learning, Generative AI, and Agentic AI. Understand their scopes, examples, and unique characteristics.",
    keywords: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "AI technologies",
      "AI vs ML",
      "AI applications",
      "Advanced AI"
    ],
    author: "Hasmukh Mer",
    robots: "index, follow",
    updatedDate: new Date().toLocaleDateString(),
    openGraph: {
      title: "Comparison of AI, ML, Generative AI, and Agentic AI",
      description: "Understand the differences between AI, ML, Generative AI, and Agentic AI. Learn about their scopes, applications, and examples.",
      type: "website",
      url: "https://galaxyofai.com/blog/comparison-ai-ml-generative-agentic-ai",
    },
   
}
  
  
export default async function Page() {
  
  return <AIAIComparisonPage />;
}
