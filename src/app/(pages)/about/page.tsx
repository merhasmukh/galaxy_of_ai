import { Metadata } from "next";
import About from "../../components/About/About";

export const metadata: Metadata = {
  title: "About | Galaxy of AI - Open Source AI & ML Community",
  description: "Learn about Galaxy of AI, an open-source platform dedicated to AI, ML, NLP, and LLM development. Join us in collaborative AI research and development.",
  keywords: [
    "AI", "Machine Learning", "Deep Learning", "Open Source AI",
    "Generative AI", "NLP", "LLM", "TensorFlow", "PyTorch",
    "Hugging Face", "LangChain", "OpenAI API", "AI Research"
  ],
  authors: [{ name: "Galaxy of AI Team", url: "https://github.com/merhasmukh" }],
  openGraph: {
    title: "About | Galaxy of AI - Open Source AI & ML Community",
    description: "Galaxy of AI is an open-source platform that fosters collaboration in AI, ML, NLP, and LLM development. Join us in building the future of AI.",
    url: "https://galaxyofai.com/about",
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
    canonical: "https://galaxyofai.com/about",
  },
};
const Page = () => {
  return <About />;
};

export default Page;
