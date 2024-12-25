'use client';

import { Globe, Brain, Sparkles, ChevronRight, ExternalLink, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]-950">
  
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
              Galaxy of AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 px-4">
              Exploring the infinite possibilities of Artificial Intelligence and Machine Learning. 
              Join us on a journey through the digital cosmos.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <a href="#explore" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2">
              Explore Now <ChevronRight className="w-5 h-5" />
            </a>
            <a href="https://blog.galaxyofai.com" 
              className="border border-blue-600 text-blue-400 hover:bg-blue-900/20 px-6 py-3 rounded-full flex items-center justify-center gap-2">
              Visit Blog <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
            <Globe className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">AI Insights</h3>
            <p className="text-gray-400">
              Deep dive into the latest AI trends, breakthroughs, and applications shaping our future.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">ML Resources</h3>
            <p className="text-gray-400">
              Comprehensive guides and tutorials on machine learning concepts and implementations.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
            <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Future Tech</h3>
            <p className="text-gray-400">
              Explore emerging technologies and their potential impact on society and industry.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Posts Preview */}
      <section id="blog" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
              <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Featured AI Article Title
                </h3>
                <p className="text-gray-400 mb-4">
                  Preview of the article content goes here. This showcases the latest insights...
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  Read More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
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
      </section>
    </div>
  );
}