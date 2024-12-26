
import TokenCounter from "../../../components/Tools/TokenPriceCounter";

export const metadata = {
    metadataBase: new URL('https://galaxyofai.com'),
    title: "LLM Token Counter & Price Calculator",
    description:
      "Effortlessly calculate token counts and pricing for AI models. Enter your text, select a model, and get accurate token counts with pricing insights.",
    keywords: [
      "LLM Token Counter",
      "LLM Pricing",
      "AI Model Pricing",
      "GPT-3",
      "GPT-4",
      "GPT-4o",
      "GPT-4o-mini",
      "Token Calculator",
      "OpenAI",
      "AI Tools",
    ],
    author: "Hasmukh Mer",
    openGraph: {
      title: "LLM Token Counter & Price Calculator",
      description:
        "Easily count tokens and calculate the cost for various AI models like GPT-3, GPT-4, and more.",
      url: "/tools/llm-token-price-counter",
      type: "website",
      images: [
        {
          url: "/favicon.ico",
          width: 1200,
          height: 630,
          alt: "LLM Token Counter & Price Calculator",
        },
      ],
    },
   
};
  
const page = () =>{
    return <TokenCounter />
     
};

export default page;