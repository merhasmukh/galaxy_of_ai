"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  Code,
  Brain,
  Briefcase,
  Users,
} from 'lucide-react';

export default function AgenticAiRoadmap() {
  // Load progress from localStorage if available
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('agenticAiRoadmapProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Save progress to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('agenticAiRoadmapProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Foundational Skills",
      icon: Code,
      items: [
        { id: "python_mastery", text: "Master Python Core Concepts", difficulty: "Required" },
        { id: "math_basics", text: "Math for AI (Linear Algebra, Probability, Calculus)", difficulty: "Required" },
        { id: "ml_fundamentals", text: "Machine Learning Fundamentals", difficulty: "Required" },
        { id: "data_prep", text: "Data Engineering & Preprocessing", difficulty: "Required" },
        { id: "git", text: "Version Control with Git", difficulty: "Recommended" },
      ]
    },
    {
      title: "Agentic AI Specialization",
      icon: Brain,
      items: [
        { id: "rl_basics", text: "Reinforcement Learning Basics", difficulty: "Required" },
        { id: "multi_agent_systems", text: "Learn Multi-Agent Systems", difficulty: "Advanced" },
        { id: "decision_making", text: "Autonomous Decision-Making Algorithms", difficulty: "Advanced" },
        { id: "knowledge_representation", text: "Knowledge Representation Techniques", difficulty: "Advanced" },
        { id: "xai", text: "Explainable AI Techniques", difficulty: "Recommended" },
      ]
    },
    {
      title: "Portfolio Building",
      icon: Briefcase,
      items: [
        { id: "github_setup", text: "GitHub Portfolio Setup", difficulty: "Required" },
        { id: "projects", text: "3-5 Showcase Projects", difficulty: "Required" },
        { id: "open_source", text: "Open Source Contributions", difficulty: "Recommended" },
        { id: "case_studies", text: "Write Case Studies for Projects", difficulty: "Advanced" },
        { id: "blog", text: "Technical Blogging", difficulty: "Recommended" },
      ]
    },
    {
      title: "Advanced Topics",
      icon: Users,
      items: [
        { id: "ethical_ai", text: "Learn Ethical AI Practices", difficulty: "Required" },
        { id: "robotics_frameworks", text: "Explore Robotics Frameworks (ROS)", difficulty: "Advanced" },
        { id: "cloud_scaling", text: "Deploy Agents on Cloud Platforms", difficulty: "Advanced" },
        { id: "monitoring", text: "Monitoring and Feedback Systems", difficulty: "Expert" },
        { id: "self_improving_agents", text: "Build Self-Improving Agents", difficulty: "Expert" },
      ]
    }
  ];

  const toggleItem = (id) => {
    setProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Required": return "text-blue-400";
      case "Recommended": return "text-green-400";
      case "Advanced": return "text-yellow-400";
      case "Expert": return "text-purple-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Agentic AI Developer Roadmap
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Track your progress and build your career in autonomous AI step by step
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-blue-400/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="text-blue-400" size={24} />
                <h2 className="text-xl font-semibold text-blue-200">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    {progress[item.id] ? (
                      <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                    ) : (
                      <Circle className="text-gray-400 flex-shrink-0" size={20} />
                    )}
                    <div>
                      <p className="text-blue-100">{item.text}</p>
                      <span className={`text-sm ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-blue-200 text-sm">
          <p>Progress is automatically saved in your browser</p>
          <p>Check items as you complete them to track your journey</p>
        </div>
      </motion.div>
    </div>
  );
}
