"use client";
import { motion } from "framer-motion";
import {  Code, Brain } from "lucide-react";

export default function AgenticAiComparison() {
  const comparisonData = [
    {
      title: "Agentic AI Developer",
      icon: Code,
      color: "from-blue-400 to-purple-500",
      description:
        "Focused on building, testing, and deploying AI agents and systems with a strong emphasis on programming and implementation.",
      skills: [
        "Python Programming",
        "Reinforcement Learning Basics",
        "Agent System Prototyping",
        "Debugging and Testing",
        "Prompt Engineering for Agents",
      ],
      responsibilities: [
        "Implement AI agent behaviors.",
        "Prototype multi-agent systems.",
        "Write clean, maintainable code.",
        "Collaborate with engineers for deployment.",
        "Optimize agent performance.",
      ],
    },
    {
      title: "Agentic AI Engineer",
      icon: Brain,
      color: "from-blue-800 to-gray-500",
      description:
        "Specializes in designing scalable, efficient, and robust AI agent systems, including infrastructure and deployment strategies.",
      skills: [
        "System Architecture Design",
        "Optimization Techniques",
        "Distributed Systems",
        "CI/CD for Agent Systems",
        "Scalability and Fault Tolerance",
      ],
      responsibilities: [
        "Design and scale AI agent frameworks.",
        "Integrate agents with cloud systems.",
        "Monitor and optimize performance.",
        "Ensure fault tolerance in deployments.",
        "Lead cross-functional AI projects.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Agentic AI Developer vs Agentic AI Engineer
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Understand the distinct roles, skills, and responsibilities of Agentic AI Developers and Agentic AI Engineers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisonData.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gradient-to-tr ${role.color} p-6 rounded-lg shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <role.icon className="text-white" size={32} />
                <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
              </div>
              <p className="text-white/90 mb-4">{role.description}</p>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-2">Key Skills</h3>
                <ul className="space-y-1">
                  {role.skills.map((skill, i) => (
                    <li key={i} className="text-white/80">
                      - {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Responsibilities</h3>
                <ul className="space-y-1">
                  {role.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-white/80">
                      - {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-blue-200 text-sm">
          <p>
            Both roles are integral to building and scaling intelligent, autonomous systems. Choose based on your
            skills and career goals.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
