"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Layers ,Calculator} from 'lucide-react';
const modelData = [
  // Your data array would be here
  // I'll show how to structure one item as example
  {
    name: "o1",
    logo: "OpenAI Logo",
    inputPrice: 15,
    outputPrice: 60 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200K" 

  },
  {
    name: "o1-mini",
    logo: "OpenAI Logo",
    inputPrice: 3,
    outputPrice: 12 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200K" 

  },
  {
    name: "gpt-4o",
    logo: "OpenAI Logo",
    inputPrice: 2.50,
    outputPrice: 10 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-2024-11-20",
    logo: "OpenAI Logo",
    inputPrice: 2.50,
    outputPrice: 10 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-mini",
    logo: "OpenAI Logo",
    inputPrice: 0.150,
    outputPrice: 0.600 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-mini-2024-07-18",
    logo: "OpenAI Logo",
    inputPrice: 0.150,
    outputPrice: 0.600 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-realtime-preview (Text)",
    logo: "OpenAI Logo",
    inputPrice: 5,
    outputPrice: 20 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-realtime-preview (Audio)",
    logo: "OpenAI Logo",
    inputPrice: 40,
    outputPrice: 80 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-mini-realtime-preview (Text)",
    logo: "OpenAI Logo",
    inputPrice: 0.60,
    outputPrice: 2.40 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "gpt-4o-mini-realtime-preview (Audio)",
    logo: "OpenAI Logo",
    inputPrice: 10,
    outputPrice: 20 ,
    provider: "OpenAI",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "128K" 

  },
  {
    name: "Claude 3.5 Sonnet",
    logo: "Anthropic Logo",
    inputPrice: 3,
    outputPrice: 15 ,
    provider: "Anthropic",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200k" 

  },
  {
    name: "Claude 3.5 Haiku",
    logo: "Anthropic Logo",
    inputPrice: 0.80,
    outputPrice: 4 ,
    provider: "Anthropic",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200k" 

  },
  {
    name: "Claude 3 Opus",
    logo: "Anthropic Logo",
    inputPrice: 15,
    outputPrice: 75 ,
    provider: "Anthropic",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200k" 

  },
  {
    name: "Claude 3 Haiku",
    logo: "Anthropic Logo",
    inputPrice: 0.25,
    outputPrice: 1.25 ,
    provider: "Anthropic",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200k" 

  },
  {
    name: "Claude 3 Sonnet",
    logo: "Anthropic Logo",
    inputPrice: 3,
    outputPrice: 15 ,
    provider: "Anthropic",
    date: "Dec 26, 2024, 04:00:00 PM",
    contextWindow: "200k" 

  },

  
];

export default function LLMPricing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig] = useState({ key: 'outputPrice', direction: 'desc' }); // Removed setSortConfig
  const [selectedProvider, setSelectedProvider] = useState('all');

  const providers = ['all', 'Google', 'OpenAI', 'Anthropic', 'AWS', 'Azure', 'Mistral', 'Cohere'];


  const filteredAndSortedData = modelData
    .filter(model => 
      (selectedProvider === 'all' || model.provider === selectedProvider) &&
      model.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] - b[sortConfig.key];
      }
      return b[sortConfig.key] - a[sortConfig.key];
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 md:p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          LLM Model Pricing
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Compare pricing across different LLM providers and models
        </p>

         
          <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-blue-400/30 max-w-2xl mx-auto m-4">
            <div className="flex items-start gap-4 ">
              <Calculator className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold  mx-auto text-blue-200">Understanding Token Units</h3>
                
                <div className="space-y-5 mx-auto items-center flex-col">
                  <div className="p-4 bg-blue-500/10 rounded-lg">
                    <h4 className="text-blue-200 font-medium mb-2">1K (1,000) Tokens ≈</h4>
                    <ul className="space-y-2 text-blue-300">
                      <li>• 750 words</li>
                      <li>• 3 pages of text</li>
                      <li>• A medium-length email</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-500/10 rounded-lg">
                    <h4 className="text-blue-200 font-medium mb-2">1M (1,000,000) Tokens ≈</h4>
                    <ul className="space-y-2 text-blue-300">
                      <li>• 750,000 words</li>
                      <li>• 3,000 pages of text</li>
                      <li>• A long novel</li>
                    </ul>
                  </div>

                  <div className="text-blue-300 text-sm">
                    <p className="mb-2">Example: If a model costs $0.01 per 1K tokens:</p>
                    <ul className="space-y-1 pl-4">
                      <li>• Processing an email (1K tokens) would cost $0.01</li>
                      <li>• Processing a book (1M tokens) would cost $10.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-blue-300" size={20} />
              <input
                type="text"
                placeholder="Search models..."
                className="w-full bg-white/10 border border-blue-400/30 rounded-lg pl-10 pr-4 py-2 text-blue-100 placeholder-blue-300 focus:outline-none focus:border-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="bg-white/10 border border-blue-400/30 rounded-lg px-4 py-2 text-blue-100 focus:outline-none focus:border-blue-400"
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
            >
              {providers.map(provider => (
                <option key={provider} value={provider} className="bg-[#1E293B]">
                  {provider === 'all' ? 'All Providers' : provider}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredAndSortedData.map((model, index) => (
            <motion.div
              key={`${model.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-blue-400/30">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-blue-200 truncate">
                    {model.name}
                  </h2>
                  <span className="text-sm text-blue-300 px-3 py-1 bg-blue-500/20 rounded-full">
                    {model.provider}
                  </span>
                </div>

                <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-300 bg-blue-500/10 p-2 rounded-lg">
                    <Layers size={16} />
                    <span>Context Length: {model.contextWindow}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Input Price:</span>
                    <span className="text-blue-200">${model.inputPrice.toFixed(2)}/1M tokens</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Output Price:</span>
                    <span className="text-blue-200">${model.outputPrice.toFixed(2)}/1M tokens</span>
                  </div>
                  <div className="pt-4 border-t border-blue-400/30">
                    <span className="text-sm text-blue-300">Last Updated:</span>
                    <span className="text-sm text-blue-200 block mt-1">{model.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAndSortedData.length === 0 && (
          <div className="text-center text-blue-300 mt-8">
            No models found matching your criteria
          </div>
        )}
      </motion.div>
    </div>
  );
}