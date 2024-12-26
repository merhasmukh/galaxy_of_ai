'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ToolsPage() {
  const tools = [
    {
      name: "LLM Token Counter & Price Calculator",
      description:
        "Calculate token counts and pricing for AI models like GPT-3 and GPT-4.",
      link: "/tools/llm-token-price-calculator",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 md:p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Tools
        </h1>
        <p className="text-center text-blue-200 mb-12">
          Explore our collection of tools to boost your productivity and workflow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-lg p-6 hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-blue-200 mb-4">
                {tool.name}
              </h2>
              <p className="text-blue-300 mb-6">{tool.description}</p>
              <Link
                href={tool.link}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
              >
                Go to Tool →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
