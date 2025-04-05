"use client";
import React, { useState } from "react";
import { PlusCircle, Clock } from "lucide-react";

type Entry = {
  id: number;
  description: string;
  time: string;
};

const HourTracker: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    if (!input.trim()) return;
    const newEntry: Entry = {
      id: Date.now(),
      description: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setEntries([newEntry, ...entries]);
    setInput("");
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-500 mb-6 flex items-center">
          <Clock className="w-6 h-6 mr-2 text-blue-500" /> Track My Hour
        </h1>

        <div className="flex items-center space-x-4 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What did you work on this hour?"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow text-white"
          >
            <PlusCircle className="w-5 h-5 mr-2" /> Add
          </button>
        </div>

        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <p className="text-white text-sm">{entry.description}</p>
                <p className="text-xs text-gray-400">{entry.time}</p>
              </div>
            </div>
          ))}

          {entries.length === 0 && (
            <p className="text-gray-500 text-sm text-center mt-10">
              No entries yet. Start tracking your work hourly!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HourTracker;
