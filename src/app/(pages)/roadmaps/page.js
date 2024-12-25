import RoadmapHub from "../../components/Roadmaps/Roadmaps";


export const metadata = {
  title: "Roadmap Hub - Choose Your Path to Master AI, ML, Backend, and Python Development",
  description:
    "Explore a variety of developer roadmaps in our Roadmap Hub. Choose from AI, ML, Backend Development, Python, and more to begin your journey toward mastering the latest technologies.",
  keywords: [
    "developer roadmaps",
    "AI roadmap",
    "ML roadmap",
    "backend development roadmap",
    "Python roadmap",
    "career path for developers",
    "learn AI",
    "learn ML",
    "learn backend development",
    "roadmap for developers",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Roadmap Hub - Choose Your Path to Master AI, ML, Backend, and Python Development",
    description:
      "Discover and choose from various developer roadmaps to start mastering AI, ML, Backend, Python, and more. Your journey to becoming a top-tier developer starts here.",
    url: "https://galaxyofai.com/roadmaps",
    images: [
      {
        url: "https://galaxyofai.com/galaxy-of-ai-logo.png",
        width: 1200,
        height: 630,
        alt: "Roadmap hub for AI, ML, Backend, and Python development",
      },
    ],
    type: "website",
  },
};


export default async function Page() {
  
  return <RoadmapHub />;
}
