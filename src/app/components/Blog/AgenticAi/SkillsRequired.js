"use client";
import { motion } from "framer-motion";

export default function AIAgentLLMSkillsPost() {
  const postData = {
    title: "Skills Required for AI Agent and LLM Engineer",
    description: `Explore the essential skills you need to thrive as an AI Agent and LLM Engineer. These roles demand expertise in cutting-edge AI technologies, engineering principles, and problem-solving abilities.`,
    skills: [
      "AI Agents Development and Implementation",
      "LLM (Large Language Models) Engineering",
      "Data Analysis and Machine Learning",
      "Python Programming",
      "Natural Language Processing (NLP) Technologies",
      "Full-Stack Development (front end and back end is a plus)",
      "Independent and Remote Work Skills",
      "Strong Problem-Solving Capabilities",
      "Proficiency with AI Tools like GitHub Copilot, Claude/GPT/Gemini, Cursor, etc.",
    ],
    updatedDate: new Date().toLocaleDateString(),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {postData.title}
        </h1>
        <p className="text-blue-300 text-center italic mb-4">{postData.description}</p>
        <p className="text-sm text-blue-400 text-center mb-8">Last updated: {postData.updatedDate}</p>

        <div className="bg-gradient-to-tr from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
          <ul className="space-y-2">
            {postData.skills.map((skill, index) => (
              <li key={index} className="text-white/80">
                - {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center text-blue-200 text-sm">
          <p>
            Develop these skills to excel in AI Agent and LLM engineering roles. Stay curious, keep learning, and innovate for the future!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
