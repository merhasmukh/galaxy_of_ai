
import {Brain, ChevronRight, ExternalLink, Code, Activity ,Book} from 'lucide-react';
import Link from 'next/link';
export default function Home() {
 
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
              Galaxy of AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 px-4">
            Your Gateway to Generative AI, LLMs, and Python Programming. 
            <p>
            Join us on a journey of Generative AI and LLMs.

            </p>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <a
              href="/roadmaps"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
            >
              Explore Roadmaps <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="https://blog.galaxyofai.com"
              className="border border-blue-600 text-blue-400 hover:bg-blue-900/20 px-6 py-3 rounded-full flex items-center justify-center gap-2"
            >
              Visit Blog <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Roadmaps Section */}
      <section id="roadmaps" className="container mx-auto px-4 py-16 border-2 border-purple-400 rounded-lg mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Developer Roadmaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="/roadmaps/python-developer"
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform"
          >
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Python Developer</h3>
            <p className="text-gray-400">
              Follow a comprehensive roadmap to master Python development skills.
            </p>
          </a>
          <a
            href="/roadmaps/genai-llm-developer"
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform"
          >
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">GenAI & LLM Developer</h3>
            <p className="text-gray-400">
              Learn how to build and deploy generative AI and large language model applications.
            </p>
          </a>
          <a
            href="/roadmaps/ai-ml-developer"
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform"
          >
            <Activity className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">AI/ML Developer</h3>
            <p className="text-gray-400">
              Dive into machine learning algorithms and AI applications with a step-by-step roadmap.
            </p>
          </a>
        </div>
      </section>

      <section id="notes" className="container mx-auto px-4 py-16 border-2px border-2 border-blue-400 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Study Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/notes/machine-learning-handwritten-notes"
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform"
          >
            <Book className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Machine Learning Notes</h3>
            <p className="text-gray-400">
              Detailed notes and resources to master machine learning concepts and techniques.
            </p>
          </Link>
          <Link
            href="/notes/natural-language-processing-nlp-handwritten-notes"
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform"
          >
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Natural Language Processing (NLP) Notes</h3>
            <p className="text-gray-400">
              Explore NLP.
            </p>
          </Link>
          <Link
            href="/notes/mathematics-handwritten-notes"
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform"
          >
            <Code className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Mathematics Notes</h3>
            <p className="text-gray-400">
              Comprehensive notes on Mathematics for beginners.
            </p>
          </Link>
         
        </div>
      </section>



    
     

      {/* Newsletter Section */}
      {/* <section id="contact" className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto px-4">
            Subscribe to our newsletter for the latest AI insights and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
