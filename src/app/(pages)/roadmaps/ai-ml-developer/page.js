import AiMlRoadmap from "../../../components/Roadmaps/AiMl/AiMl";


export const metadata = {
  title: "AI & ML Roadmap for Aspiring Data Scientists and Engineers",
  description:
    "Discover the pathway to becoming an expert in Artificial Intelligence (AI) and Machine Learning (ML). This roadmap covers essential topics like data science, algorithms, and model development for AI and ML.",
  keywords: [
    "AI roadmap",
    "ML roadmap",
    "Machine learning development",
    "AI development",
    "Data science",
    "Machine learning engineer",
    "AI career path",
    "ML learning path",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "AI & ML Roadmap for Aspiring Data Scientists and Engineers",
    description:
      "Master the skills of AI and ML with a step-by-step guide, from data science to advanced machine learning techniques.",
    url: "https://galaxyofai.com/roadmaps/ai-ml-developer",
    images: [
      {
        url: "https://galaxyofai.com/globe.svg",
        width: 1200,
        height: 630,
        alt: "AI and ML roadmap for developers and engineers",
      },
    ],
    type: "website",
  },
};


export default async function Page() {
  
  return <AiMlRoadmap />;
}
