import MLOpsRoadmap from "../../../components/Roadmaps/MLOps/MLOps";


export const metadata = {
  title: "MLOps Developer Roadmap - Master the Intersection of ML and DevOps",
  description:
    "Explore the MLOps Developer Roadmap to learn how to integrate Machine Learning models into production environments, manage model life cycles, and create scalable AI solutions.",
  keywords: [
    "MLOps",
    "MLOps roadmap",
    "Machine Learning Operations",
    "ML DevOps",
    "ML deployment",
    "ML model life cycle",
    "AI operations",
    "AI model deployment",
    "MLOps tools",
    "ML pipelines",
    "CI/CD for ML",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "MLOps Developer Roadmap - Master MLOps for Scalable AI Systems",
    description:
      "Learn the skills required to integrate machine learning models into production environments with the MLOps Developer Roadmap. Step-by-step guidance for building scalable AI systems and managing model life cycles.",
    url: "https://galaxyofai.com/roadmaps/mlops-developer",
    images: [
      {
        url: "https://galaxyofai.com/galaxy-of-ai-logo.png", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "MLOps Developer Roadmap",
      },
    ],
    type: "website",
  },
};


export default async function Page() {
  
  return <MLOpsRoadmap />;
}
