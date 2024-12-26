import LLMPricing from "../../../components/Blog/LLMPricing/LLMPricing";


export const metadata = {
  metadataBase: new URL('https://galaxyofai.com'),
  title: 'LLM Model Pricing | Compare AI Model Costs',
  description: 'Explore and compare the pricing of top LLM models from OpenAI, Anthropic, Google, AWS, and more. Analyze token costs, context windows, and capabilities to find the best fit for your needs.',
  keywords: [
    'LLM pricing',
    'AI model costs',
    'GPT pricing',
    'Claude pricing',
    'OpenAI costs',
    'Anthropic pricing',
    'AWS AI pricing',
    'Google AI costs',
    'token pricing',
    'context window',
    'AI model comparison',
  ],
  openGraph: {
    title: 'LLM Model Pricing Comparison',
    description: 'Compare pricing and capabilities of leading LLM models from OpenAI, Anthropic, AWS, Google, and others. Discover token costs, features, and more.',
    type: 'article',
    locale: 'en_US',
    url: '/blog/llm-pricing',
    siteName: 'Galaxy Of AI',
    images: [
      {
        url: 'https://galaxyofai.com/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'LLM Pricing Comparison',
      },
    ],
  },
};



export default async function Page() {
  
  return <LLMPricing />;
}
