"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Brain,
  Code,
  Network,
  Cpu,
  Server
} from 'lucide-react';

export default function RoadmapHub() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const roadmaps = [
    // {
    //   id: "freelance",
    //   title: "Freelance Developer",
    //   icon: Briefcase,
    //   color: "from-blue-500 to-purple-500",
    //   description: "Complete roadmap to becoming a successful freelance developer",
    //   topics: ["Portfolio Building", "Client Management", "Business Development", "Technical Skills"],
    //   path: "/roadmaps/freelance"
    // },
    {
      id: "python",
      title: "Python Development",
      icon: Code,
      color: "from-yellow-500 to-red-500",
      description: "Advanced Python programming and best practices",
      topics: ["Data Structures", "Algorithms", "System Design", "Testing"],
      path: "/roadmaps/python-developer"
    },
    {
      id: "genai",
      title: "Generative AI & LLMs",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Master Generative AI and Large Language Models",
      topics: ["Transformers", "LLM Fine-tuning", "RAG Systems", "Prompt Engineering"],
      path: "/roadmaps/genai-llm-developer"
    },
    {
      id: "mlai",
      title: "Machine Learning",
      icon: Cpu,
      color: "from-green-500 to-blue-500",
      description: "Comprehensive machine learning development path",
      topics: ["Deep Learning", "Neural Networks", "Computer Vision", "Model Deployment"],
      path: "/roadmaps/ai-ml-developer"
    },
    
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      color: "from-blue-500 to-green-500",
      description: "Backend development and API design",
      topics: ["API Development", "Databases", "System Architecture", "Security"],
      path: "/roadmaps/backend-developer"
    },
    {
      id: "mlops",
      title: "MLOps",
      icon: Network,
      color: "from-red-500 to-purple-500",
      description: "Machine Learning Operations and deployment",
      topics: ["CI/CD for ML", "Model Monitoring", "Scale ML Systems", "DevOps"],
      path: "/roadmaps/mlops"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]-950 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Development Roadmaps
        </h1>
        <p className="text-blue-200 text-center mb-12">
          Choose a roadmap to start your learning journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={roadmap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(roadmap.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => router.push(roadmap.path)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-blue-400/30 cursor-pointer overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${roadmap.color} bg-opacity-20`}>
                      <roadmap.icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-blue-200">
                      {roadmap.title}
                    </h2>
                  </div>

                  <p className="text-blue-300 mb-4">
                    {roadmap.description}
                  </p>

                  <div className="space-y-2">
                    {roadmap.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-sm text-blue-200">{topic}</span>
                      </div>
                    ))}
                  </div>

                  {hoveredCard === roadmap.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute bottom-4 right-4 text-blue-200 text-sm"
                    >
                      Click to view roadmap →
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-blue-200 text-sm">
          <p>Each roadmap includes detailed steps, resources, and progress tracking</p>
          <p>Choose the path that aligns with your goals and start learning!</p>
        </div>
      </motion.div>
    </div>
  );
}