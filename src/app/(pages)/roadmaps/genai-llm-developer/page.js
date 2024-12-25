import GenAIRoadmap from "../../../components/Roadmaps/GenAI/GenAI";


export const metadata = {
  title: "Generative AI and LLMs Roadmap for AI Enthusiasts and Developers",
  description:
    "Discover the ultimate roadmap for mastering Generative AI and Large Language Models (LLMs). A guide for enthusiasts and developers aiming to excel in cutting-edge AI technologies.",
  keywords: [
    "Generative AI roadmap",
    "LLM roadmap",
    "AI career path",
    "learn Generative AI",
    "LLM development",
    "AI learning path",
    "AI enthusiast guide",
    "Generative AI developer",
    "large language models",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Generative AI and LLMs Roadmap for AI Enthusiasts and Developers",
    description:
      "Step into the world of Generative AI and Large Language Models with this comprehensive roadmap for developers and AI enthusiasts.",
    url: "https://galaxyofai.com/roadmaps/genai",
    images: [
      {
        url: "https://galaxyofai.com/tech/svg/Brain.svg",
        width: 1200,
        height: 630,
        alt: "Generative AI and LLM roadmap for developers",
      },
    ],
    type: "website",
  },
};

export default async function Page() {
  
  return <GenAIRoadmap />;
}
