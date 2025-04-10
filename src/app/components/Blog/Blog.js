'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
export default function Blogs() {
  const blogs = [
    {
      title: "Comparison of AI, ML, Generative AI, and Agentic AI",
      description: "Explore the distinctions and key features of Artificial Intelligence, Machine Learning, Generative AI, and Agentic AI. Understand their scopes, examples, and unique characteristics.",
      link: "/blog/comparison-ai-ml-generative-agentic-ai",
    },
    {
      title: "Skills Required for AI Agent and LLM Engineer",
      description: "Explore the essential skills needed to excel as an AI Agent and LLM Engineer. Learn about cutting-edge AI technologies, engineering principles, and problem-solving abilities.",
      link: "/blog/ai-agent-llm-skills-required",
    },
    {
      title: "LLM Model Pricing | Compare AI Model Costs",
      description: "Explore and compare the pricing of top LLM models from OpenAI, Anthropic, Google, AWS, and more. Analyze token costs, context windows, and capabilities to find the best fit for your needs",
      link: "/blog/llm-pricing",
    },
    {
      title: "Agentic AI Developer vs Agentic AI Engineer: Key Differences and Roles",
      description: "Discover the key differences between an Agentic AI Developer and an Engineer. Explore their roles, skills, and responsibilities to choose the right career path in AI.",
      link: "/blog/comparison-agentic-ai",
    },

  ];
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">

      {/* Latest Posts Preview */}
      <section id="blog" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Latest Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
            
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.description}</p>
                <Link
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
