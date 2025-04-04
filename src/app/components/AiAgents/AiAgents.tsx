"use client"

import Link from "next/link"

const aiList = [
  {
    name: "Karkirdi Margdarshan AI",
    description: "Career guidance chatbot in Gujarati & English",
    path: "/ai/karkirdi",
    image: "/ai/karkirdi.png", // Place this image in public/ai folder
  }
]

export default function AiAgents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-4 sm:px-8 py-10">
      <h1 className="text-4xl font-bold mb-10 text-orange-400 text-center">Choose Your AI Assistant</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {aiList.map((ai, index) => (
          <Link key={index} href={ai.path} passHref>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all hover:scale-[1.02]">
              <div className="relative aspect-square">
                <img
                  src={ai.image}
                  alt={ai.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-orange-300 mb-2">{ai.name}</h2>
                <p className="text-gray-300">{ai.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
