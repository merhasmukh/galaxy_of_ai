'use client';

import { useState } from 'react';

export default function TokenCounter() {
  const [text, setText] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4o-mini');
  const [tokenCount, setTokenCount] = useState(0);
  const [price, setPrice] = useState(0);

  const models = {
    'gpt-4o-mini': { inputPrice: 0.15, outputPrice: 0.60 },
    'gpt-4o': { inputPrice: 2.50, outputPrice: 10 },
   
  };

  const handleCalculateTokens = async () => {
    try {
    const { encoding_for_model } = await import('tiktoken');

      const encoding = encoding_for_model(selectedModel);
      const tokens = encoding.encode(text);
      const count = tokens.length;
      setTokenCount(count);

      const modelPrices = models[selectedModel];
      const calculatedPrice = (count / 1000000) * modelPrices.inputPrice;
      setPrice(calculatedPrice.toFixed(4));
    } catch (error) {
      console.error('Error calculating tokens:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 md:p-8 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          LLM Token Counter & Price Calculator
        </h1>

        {/* Input Section */}
        <textarea
          className="w-full bg-white/10 border border-blue-400/30 rounded-lg px-4 py-2 text-blue-100 placeholder-blue-300 focus:outline-none focus:border-blue-400 mb-4"
          rows={6}
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Model Selection */}
        <select
          className="w-full bg-white/10 border border-blue-400/30 rounded-lg px-4 py-2 text-blue-100 focus:outline-none focus:border-blue-400 mb-4"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          {Object.keys(models).map((model) => (
            <option key={model} value={model} className="bg-[#1E293B]">
              {model}
            </option>
          ))}
        </select>

        {/* Action Buttons */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
          onClick={handleCalculateTokens}
        >
          Calculate Tokens and Price
        </button>

        {/* Output Section */}
        <div className="mt-6 bg-white/10 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-200 mb-2">Results</h2>
          <p className="text-blue-300">Tokens: {tokenCount}</p>
          <p className="text-blue-300">Price (Input): ${price}</p>
        </div>
      </div>
    </div>
  );
}
