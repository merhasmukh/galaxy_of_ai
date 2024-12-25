import PythonAIRoadmap from "../../../components/Roadmaps/Python/Python";


export const metadata = {
  title: "Python Roadmap for AI, ML, GenAI, LLMs, and Python Developers",
  description:
    "Explore the comprehensive Python roadmap tailored for aspiring AI, ML, Generative AI, LLMs, and Python developers. Start your journey to mastering Python in cutting-edge fields.",
  keywords: [
    "Python roadmap",
    "AI development",
    "ML development",
    "Generative AI",
    "LLM roadmap",
    "Python developer guide",
    "learn Python",
    "AI career path",
    "ML learning path",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Python Roadmap for AI, ML, GenAI, LLMs, and Python Developers",
    description:
      "A step-by-step guide for mastering Python and excelling in AI, ML, Generative AI, and LLM development.",
    url: "https://galaxyofai.com/roadmaps/python",
    images: [
      {
        url: "https://galaxyofau.com/tech/svg/Python.svg",
        width: 1200,
        height: 630,
        alt: "Python roadmap for AI, ML, GenAI, and LLMs",
      },
    ],
    type: "website",
  },
};

export default async function Page() {
  
  return <PythonAIRoadmap />;
}
