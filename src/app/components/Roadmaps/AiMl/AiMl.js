"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  BookOpen,
  Code,
  Brain,
  Users,
  Briefcase,
  Star,
  Trophy,
  GitBranch,
  Database,
  LineChart,
  MessageSquare
} from 'lucide-react';

export default function AiMlRoadmap() {
  // Load progress from localStorage if available
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('roadmapProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Save progress to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('roadmapProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Technical Foundation",
      icon: Code,
      items: [
        { id: "python_core", text: "Master Python Core Concepts", difficulty: "Required" },
        { id: "git", text: "Version Control with Git", difficulty: "Required" },
        { id: "ml_basics", text: "Machine Learning Fundamentals", difficulty: "Required" },
        { id: "deep_learning", text: "Deep Learning Frameworks", difficulty: "Required" },
        { id: "nlp", text: "Natural Language Processing", difficulty: "Advanced" }
      ]
    },
    {
      title: "AI/ML Expertise",
      icon: Brain,
      items: [
        { id: "sklearn", text: "Scikit-learn Projects", difficulty: "Required" },
        { id: "tensorflow", text: "TensorFlow/PyTorch", difficulty: "Required" },
        { id: "llm", text: "LLM Fine-tuning", difficulty: "Advanced" },
        { id: "genai", text: "Generative AI Applications", difficulty: "Advanced" },
        { id: "mlops", text: "MLOps Best Practices", difficulty: "Expert" }
      ]
    },
    {
      title: "Portfolio Building",
      icon: Briefcase,
      items: [
        { id: "github", text: "GitHub Portfolio Setup", difficulty: "Required" },
        { id: "projects", text: "3-5 Showcase Projects", difficulty: "Required" },
        { id: "blog", text: "Technical Blog Posts", difficulty: "Recommended" },
        { id: "contributions", text: "Open Source Contributions", difficulty: "Advanced" },
        // { id: "case_studies", text: "Client Case Studies", difficulty: "Expert" }
      ]
    },
    // {
    //   title: "Business Development",
    //   icon: LineChart,
    //   items: [
    //     { id: "profile", text: "Professional Profiles Setup", difficulty: "Required" },
    //     { id: "proposals", text: "Proposal Writing", difficulty: "Required" },
    //     { id: "networking", text: "Network Building", difficulty: "Required" },
    //     { id: "pricing", text: "Service Pricing Strategy", difficulty: "Required" },
    //     { id: "brand", text: "Personal Brand Development", difficulty: "Advanced" }
    //   ]
    // },
    // {
    //   title: "Client Management",
    //   icon: Users,
    //   items: [
    //     { id: "communication", text: "Professional Communication", difficulty: "Required" },
    //     { id: "expectations", text: "Setting Client Expectations", difficulty: "Required" },
    //     { id: "delivery", text: "Project Delivery Process", difficulty: "Required" },
    //     { id: "feedback", text: "Handling Client Feedback", difficulty: "Required" },
    //     { id: "retention", text: "Client Retention Strategies", difficulty: "Advanced" }
    //   ]
    // }
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
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]-950 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          AI/ML Developer Roadmap
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Track your progress and build your career step by step
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