// components/ChatbotBubble.tsx
"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setChatHistory([...chatHistory, message]);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 h-[400px] bg-gray-800 shadow-xl border border-gray-700 rounded-xl flex flex-col mb-4 overflow-hidden">
          <div className="flex items-center justify-between bg-gray-700 p-3">
            <h2 className="text-white text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-300 hover:text-white" />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm text-white space-y-2">
            {chatHistory.map((chat, idx) => (
              <div key={idx} className="bg-gray-600 p-2 rounded-md">
                {chat}
              </div>
            ))}
          </div>
          <form className="flex border-t border-gray-700" onSubmit={handleSend}>
            <input
              type="text"
              className="w-full bg-gray-900 text-white px-3 py-2 outline-none"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 px-4 py-2 text-white">
              Send
            </button>
          </form>
        </div>
      )}
      <button
        className="bg-blue-600 p-4 rounded-full shadow-lg text-white hover:bg-blue-700 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatbotBubble;
