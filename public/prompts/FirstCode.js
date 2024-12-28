'use client';

import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="bg-gray-700 w-full max-w-sm rounded-lg shadow-lg p-6 space-y-4">
        <div className="bg-gray-900 text-white text-2xl rounded px-4 py-2 text-right break-words">{input || '0'}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((item) => (
            <button
              key={item}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xl font-medium py-2 rounded-lg hover:from-gray-500 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
