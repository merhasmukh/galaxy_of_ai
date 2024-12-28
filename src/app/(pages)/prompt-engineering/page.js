import PromptListing from "../../components/Prompts/PromptList";


export const metadata = {
  title: "Prompt Engineering Library",
  description: "Explore a curated collection of prompts to enhance your skills in Next.js, Python, Tailwind CSS, and more. Each prompt includes detailed descriptions, difficulty levels, and tags to help you learn effectively.",
  keywords: ["Prompt Engineering", "Next.js Prompts", "Python Prompts", "Tailwind CSS Prompts", "Programming Challenges", "Learning Resources", "Web Development", "AI Prompts"],
  author: "Hasmukh Mer",
  openGraph: {
    title: "Prompt Engineering Library",
    description: "A curated collection of prompts to help you grow your skills in Next.js, Python, Tailwind CSS, and more.",
    type: "website",
    url: "https://galaxyofai.com/prompt-engineering"
  },
  
}

export default async function Page() {
  
  return <PromptListing />;
}
