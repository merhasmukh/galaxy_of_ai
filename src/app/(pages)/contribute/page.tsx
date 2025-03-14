import Contributors from "@/app/components/Contributors/Contributors";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galaxy of AI - Open Source Contribution",
  description: "Join Galaxy of AI and contribute to cutting-edge open-source projects in AI, ML, and backend development.",
  keywords: ["open source", "AI", "machine learning", "backend", "frontend", "contribution"],
  authors: [{ name: "Galaxy of AI Team", url: "https://github.com/contribute" }],
  openGraph: {
    title: "Contribute to Galaxy of AI 🚀",
    description: "Join our open-source initiative and collaborate on AI & ML projects.",
    url: "https://galaxyofai.com/contribute",
    siteName: "Galaxy of AI",
    images: [
      {
        url: "https://galaxyofai.com/galaxy-of-ai-logo.png",
        width: 1200,
        height: 630,
        alt: "Galaxy of AI Logo",
      },
    ],
    type: "website",
  },
  
  robots: "index, follow",
  alternates: {
    canonical: "https://galaxyofai.com/contribute",
  },
};



export default async function Page() {
  
  return <Contributors />;
}
