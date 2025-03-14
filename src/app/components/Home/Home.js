
import { Brain, ChevronRight, ExternalLink, Code, Activity, Book } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col items-center text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg mb-6">
            Galaxy of AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 px-4">
            Your Gateway to <span className="text-blue-400 font-semibold">Generative AI</span>, <span className="text-purple-400 font-semibold">LLMs</span>, 
            <span className="text-pink-400 font-semibold">Agentic AI</span> and <span className="text-green-400 font-semibold">Python Programming</span>.  
            <br />Join us on a journey into the **future of AI!**
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <Link href="/roadmaps" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition duration-300 hover:scale-105">
              Explore Roadmaps <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="https://www.youtube.com/@galaxyofai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition duration-300 hover:scale-105"
            >
              Visit YouTube <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Roadmaps Section */}
      <section id="roadmaps" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">🚀 Developer Roadmaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Python Developer", desc: "Master Python development skills.", icon: <Code className="w-12 h-12 text-blue-400 mb-4" />, link: "/roadmaps/python-developer" },
            { title: "GenAI & LLM Developer", desc: "Build and deploy AI/LLM applications.", icon: <Brain className="w-12 h-12 text-purple-400 mb-4" />, link: "/roadmaps/genai-llm-developer" },
            { title: "AI/ML Developer", desc: "Dive into ML algorithms and AI applications.", icon: <Activity className="w-12 h-12 text-pink-400 mb-4" />, link: "/roadmaps/ai-ml-developer" }
          ].map((roadmap, idx) => (
            <Link
              key={idx}
              href={roadmap.link}
              className="group bg-white/5 p-6 rounded-xl backdrop-blur-md transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-400"
            >
              {roadmap.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{roadmap.title}</h3>
              <p className="text-gray-400">{roadmap.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Study Notes Section */}
      <section id="notes" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">📚 Study Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Machine Learning Notes", desc: "Master ML concepts & techniques.", icon: <Book className="w-12 h-12 text-blue-400 mb-4" />, link: "/notes/machine-learning-handwritten-notes" },
            { title: "NLP Notes", desc: "Explore Natural Language Processing.", icon: <Brain className="w-12 h-12 text-purple-400 mb-4" />, link: "/notes/natural-language-processing-nlp-handwritten-notes" },
            { title: "Mathematics Notes", desc: "Comprehensive math notes for AI.", icon: <Code className="w-12 h-12 text-green-400 mb-4" />, link: "/notes/mathematics-handwritten-notes" }
          ].map((note, idx) => (
            <Link
              key={idx}
              href={note.link}
              className="group bg-white/5 p-6 rounded-xl backdrop-blur-md transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-green-400"
            >
              {note.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{note.title}</h3>
              <p className="text-gray-400">{note.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
