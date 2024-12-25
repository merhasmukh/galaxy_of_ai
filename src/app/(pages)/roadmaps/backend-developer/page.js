import BackendRoadmap from "../../../components/Roadmaps/Backend/Backend";


export const metadata = {
  title: "Backend Development Roadmap for Modern Web and API Designers",
  description:
    "Explore the essential roadmap for becoming a skilled backend developer. Learn the best practices in API design, databases, system architecture, and security to build reliable backend systems.",
  keywords: [
    "Backend development",
    "API development",
    "Databases",
    "System architecture",
    "Backend career path",
    "Backend developer guide",
    "learn backend",
    "web development",
    "security in backend",
  ],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Backend Development Roadmap for Modern Web and API Designers",
    description:
      "A comprehensive guide to mastering backend development, covering API design, databases, and system architecture.",
    url: "https://galaxyofai.com/roadmaps/backend-developer",
    images: [
      {
        url: "https://galaxyofai.com/tech/svg/Chart.svg",
        width: 1200,
        height: 630,
        alt: "Backend development roadmap for modern web developers",
      },
    ],
    type: "website",
  },
};


export default async function Page() {
  
  return <BackendRoadmap />;
}
