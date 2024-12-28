'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, Code, MessagesSquare, Image as ImageIcon, FileCode } from 'lucide-react';
import Image from 'next/image';

const CustomButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-700/50 px-3 py-2 ${className}`}
  >
    {children}
  </button>
);

const CustomCard = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-slate-700 bg-slate-800/50 ${className}`}>
    {children}
  </div>
);

const PromptShowcase = () => {
  const [showcaseItems, setShowcaseItems] = useState([
    {
      title: "Calculator Page In Next Js",
      prompt: `create a modern and futuristic calculator page in next js 
Give me code in next js for simple calculator background is in gray color
The page should be modern and futuristic, with gradient gray background and calcilator is proper visible also make this page to mobile responsive
take your time but generate bug free code for next js page
that i have to use client side`,
      filePath: "/prompts/FirstCode.js",
      screenshot: "/prompts/1.png",
      tags: ["Next.js", "Tailwind CSS", "Layout"],
      code: "Loading...", // Initial state
    },
    // Add more items as needed
  ]);

  const [copiedStates, setCopiedStates] = useState({});

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const updatedItems = await Promise.all(
          showcaseItems.map(async (item) => {
            try {
              const response = await fetch(item.filePath); // Fetch the file
              if (!response.ok) throw new Error(`Failed to fetch ${item.filePath}`);
              const code = await response.text(); // Read the file's content
              return {
                ...item,
                code: code || 'Error loading code',
              };
            } catch (error) {
              console.error('Error fetching code for:', item.title, error);
              return {
                ...item,
                code: 'Error loading code',
              };
            }
          })
        );
        setShowcaseItems(updatedItems);
      } catch (error) {
        console.error('Error fetching showcase items:', error);
      }
    };

    fetchCode();
  }, [showcaseItems]);

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prevState) => ({ ...prevState, [id]: true }));
      setTimeout(() => {
        setCopiedStates((prevState) => ({ ...prevState, [id]: false }));
      }, 2000);
    } catch (error) {
      console.error('Error copying text:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Prompt Engineering Showcase
        </h1>

        <div className="space-y-12">
          {showcaseItems.map((item, index) => (
            <CustomCard key={index}>
              <div className="p-6">
                <div className="flex flex-col gap-6">
                  {/* Title and Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* File Path */}
                  <div className="flex items-center gap-2 text-slate-400">
                    <FileCode className="w-4 h-4" />
                    <span className="text-sm">{item.filePath}</span>
                  </div>

                  {/* Prompt Section */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MessagesSquare className="w-4 h-4" />
                        <h3 className="font-medium">Prompt</h3>
                      </div>
                      <CustomButton
                        onClick={() => handleCopy(item.prompt, `prompt-${index}`)}
                        className="text-slate-300 hover:text-white"
                      >
                        {copiedStates[`prompt-${index}`] ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </CustomButton>
                    </div>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                      {item.prompt}
                    </pre>
                  </div>

                  {/* Generated Code Section */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <h3 className="font-medium">Generated Code</h3>
                      </div>
                      <CustomButton
                        onClick={() => handleCopy(item.code, `code-${index}`)}
                        className="text-slate-300 hover:text-white"
                      >
                        {copiedStates[`code-${index}`] ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </CustomButton>
                    </div>
                    <pre className="text-sm text-slate-300 overflow-x-auto p-4 bg-slate-950/50 rounded-md">
                      {item.code}
                    </pre>
                  </div>

                  {/* Screenshot Preview */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <ImageIcon className="w-4 h-4" />
                      <h3 className="font-medium">Preview</h3>
                    </div>
                    <Image
                      src={item.screenshot}
                      alt={`Preview of ${item.title}`}
                      className="w-full rounded-md border border-slate-700"
                      height={600}
                      width={1500}
                    />
                  </div>
                </div>
              </div>
            </CustomCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptShowcase;
