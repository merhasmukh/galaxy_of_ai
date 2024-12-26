import AgenticAiComparison from "../../../components/Blog/AgenticAi/AgenticAiComparison";



export const metadata = {
    title: "Agentic AI Developer vs Engineer: Key Differences and Roles",
    description:
      "Discover the key differences between an Agentic AI Developer and an Engineer. Explore their roles, skills, and responsibilities to choose the right career path in AI.",
    keywords: [
      "Agentic AI Developer",
      "Agentic AI Engineer",
      "AI roles comparison",
      "Agentic AI skills",
      "AI developer vs engineer",
      "Autonomous AI agents",
      "AI career paths",
      "AI system design",
    ],
    author: "Hasmukh Mer",
    openGraph: {
      title: "Agentic AI Developer vs Engineer: Key Differences and Roles",
      description:
        "Learn the distinctions between an Agentic AI Developer and an Engineer. Understand their roles, skills, and responsibilities in building intelligent systems.",
      url: "/blog/comparison-agentic-ai",
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
  
  return <AgenticAiComparison />;
}
