import Home from "../../components/Home/Home";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galaxy of AI - Open Source AI & ML Community",
  description: "Join Galaxy of AI, an open-source community dedicated to AI, ML, LLMs, and backend development. Contribute to cutting-edge projects and collaborate with experts.",
  keywords: ["AI", "Machine Learning", "Open Source", "Deep Learning", "LLM", "Backend", "Frontend", "Contribute"],
  authors: [{ name: "Galaxy of AI Team", url: "https://galaxyofai.com/contribute" }],
  openGraph: {
    title: "Galaxy of AI 🚀 | Open Source AI & ML Community",
    description: "Join our open-source AI & ML community and collaborate on innovative projects.",
    url: "https://galaxyofai.com",
    siteName: "Galaxy of AI",
    images: [
      {
        url: "https://galaxyofai.com/galaxy-of-ai-logo.png",
        width: 1200,
        height: 630,
        alt: "Galaxy of AI - Open Source AI Community",
      },
    ],
    type: "website",
  },
 
  robots: "index, follow",
  alternates: {
    canonical: "https://galaxyofai.com",
  },
};


export default async function Page() {
  
  return <Home />;
}
