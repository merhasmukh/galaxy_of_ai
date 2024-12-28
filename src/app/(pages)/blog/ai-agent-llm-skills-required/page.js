import AIAgentLLMSkillsPost from "../../../components/Blog/AgenticAi/SkillsRequired";


export const metadata = {
  title: "Skills Required for AI Agent and LLM Engineer",
  description:
    "Explore the essential skills needed to excel as an AI Agent and LLM Engineer. Learn about cutting-edge AI technologies, engineering principles, and problem-solving abilities.",
  keywords: [
    "AI Agent Skills",
    "LLM Engineer Skills",
    "Artificial Intelligence",
    "Large Language Models",
    "Machine Learning",
    "Python Programming",
    "NLP Skills",
    "AI Tools",
    "AI Development",
    "Full-Stack AI Development",
  ],
  author: "Hasmukh Mer",
  robots: "index, follow",
  updatedDate: new Date().toLocaleDateString(),
  openGraph: {
    title: "Agentic AI Developer vs Engineer: Key Differences and Roles",
    description:
      "Learn the distinctions between an Agentic AI Developer and an Engineer. Understand their roles, skills, and responsibilities in building intelligent systems.",
    url: "/blog/ai-agent-llm-skills-required",
    images: [
      {
        url: "https://galaxyofai.com/blog/agentic-ai-comparison.png",
        width: 1200,
        height: 630,
        alt: "Agentic AI Developer vs Engineer Comparison",
      },
    ],
    type: "website",
  },
};

  
export default async function Page() {
  
  return <AIAgentLLMSkillsPost />;
}
