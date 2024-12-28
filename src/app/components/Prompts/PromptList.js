'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Code } from 'lucide-react';

const PromptListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Prompts' },
    { id: 'nextjs', name: 'Next.js' },
    { id: 'python', name: 'Python' },
    { id: 'tailwind', name: 'Tailwind CSS' },
  ];

  const prompts = [
    {
      id: '1',
      title: "Calaculator Page In Next Js",
      description: "Create a calculator with dark theme and gradient background",
      category: 'nextjs',
      tags: ['Next.js', 'Tailwind CSS', 'Layout'],
      difficulty: 'intermediate'
    },
    // {
    //   id: 'prompt-showcase',
    //   title: "Prompt Showcase Page",
    //   description: "Build a page to display AI prompts and generated code with copy functionality",
    //   category: 'nextjs',
    //   tags: ['Next.js', 'Tailwind CSS', 'API'],
    //   difficulty: 'advanced'
    // },
    // {
    //   id: 'data-analysis',
    //   title: "Data Analysis Script",
    //   description: "Python script for analyzing and visualizing sales data",
    //   category: 'python',
    //   tags: ['Python', 'Pandas', 'Data Analysis'],
    //   difficulty: 'intermediate'
    // },
    // Add more prompts here
  ];

  const filteredPrompts = selectedCategory === 'all' 
    ? prompts 
    : prompts.filter(prompt => prompt.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500/20 text-green-300';
      case 'intermediate':
        return 'bg-blue-500/20 text-blue-300';
      case 'advanced':
        return 'bg-purple-500/20 text-purple-300';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Prompt Engineering Library
        </h1>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <Link 
              href={`/prompt-engineering/${prompt.id}`} 
              key={prompt.id}
              className="block"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{prompt.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {prompt.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Category */}
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Code className="w-4 h-4" />
                    <span>{categories.find(c => c.id === prompt.category)?.name}</span>
                  </div>

                  {/* Difficulty */}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(prompt.difficulty)}`}>
                    {prompt.difficulty.charAt(0).toUpperCase() + prompt.difficulty.slice(1)}
                  </span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {prompt.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center text-slate-400 mt-8">
            No prompts found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptListing;