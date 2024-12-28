
import HomePage from "./(pages)/home/page";
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://galaxyofai.com'),
  title: {
    default: 'Galaxy of AI | Artificial Intelligence & Machine Learning Resources',
    template: '%s | Galaxy of AI'
  },
  description: 'Explore the universe of Artificial Intelligence, Machine Learning, Generative AI, AGentic AI and Python Programming with comprehensive guides, tutorials, and insights. Learn about the latest AI trends and technologies.',
  keywords: [
    'artificial intelligence',
    'machine learning',
    'AI tutorials',
    'ML resources',
    'deep learning',
    'AI research',
    'data science',
    'neural networks',
    'AI technology',
    'machine learning tutorials',
    'AI blog',
    'tech education',
    'AI insights',
    'future technology',
    'AI development',
    'Generative AI',
    'Agentic AI',
    'AI Agent',
    'LLM'
  ],
  authors: [
    {
      name: 'Galaxy of AI',
      url: 'https://galaxyofai.com',
    }
  ],
  creator: 'Galaxy of AI',
  publisher: 'Galaxy of AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Galaxy of AI | AI, ML, GenAI, Agentic AI & LLM Resources',
    description: 'Explore the universe of Artificial Intelligence, Machine Learning, Generative AI, AGentic AI and Python Programming with comprehensive guides, tutorials, and insights. Learn about the latest AI trends and technologies.',
    url: 'https://galaxyofai.com',
    siteName: 'Galaxy of AI',
    images: [
      {
        url: '/favicon.ico', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Galaxy of AI - Exploring the Universe of Artificial Intelligence',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon.ico',
      },
    ],
  },
  alternates: {
    canonical: 'https://galaxyofai.com',
    languages: {
      'en-US': 'https://galaxyofai.com',
    },
  },
}
export default function Home() {
  return <HomePage />
}