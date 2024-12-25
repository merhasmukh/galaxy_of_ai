import AgenticAiRoadmap from "../../../components/Roadmaps/AgenticAi/AgenticAi";


export const metadata = {
  title: "Agentic AI Developer Roadmap for Aspiring Innovators",
  description:
    "Delve into the world of Agentic AI with this roadmap. Learn to build autonomous agents, master multi-agent systems, and excel in the cutting-edge field of AI development.",
  keywords: [
    "Agentic AI roadmap",
    "Autonomous agents",
    "Multi-agent systems",
    "AI development",
    "Agent-based AI",
    "AI career path",
    "Agentic AI learning",
    "Agentic AI engineer",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Agentic AI Developer Roadmap for Aspiring Innovators",
    description:
      "Explore the pathway to mastering Agentic AI. From foundational skills to advanced multi-agent systems, this roadmap guides you to success.",
    url: "https://galaxyofai.com/roadmaps/agentic-ai-developer",
    images: [
      {
        url: "https://galaxyofai.com/globe.svg",
        width: 1200,
        height: 630,
        alt: "Agentic AI roadmap for developers and engineers",
      },
    ],
    type: "website",
  },
};



export default async function Page() {
  
  return <AgenticAiRoadmap />;
}
