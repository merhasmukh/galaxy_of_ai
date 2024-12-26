'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
export default function Blogs() {
  const blogs = [
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
    {
      title: "Understanding Vector Embeddings in AI",
      description: "Learn how vector embeddings are used to represent data in AI systems, including their applications in NLP and beyond.",
      link: "https://blog.galaxyofai.com/everything-about-vector-embeddings/",
    },
    {
      title: "Introduction: Improving Accuracy of LLM Applications",
      description: "Introduction: Improving Accuracy of LLM Applications, we give overview of the how we can improve accuracy of LLM applications.",
      link: "https://blog.galaxyofai.com/introduction-improving-accuracy-of-llm-applications/",
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
