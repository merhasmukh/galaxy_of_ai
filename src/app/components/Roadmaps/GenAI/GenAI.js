"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Cpu,
  Book,
  Server,
} from 'lucide-react';

export default function GenAIRoadmap() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('genaiProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('genaiProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Foundation Knowledge",
      icon: Book,
      items: [
        {
          id: "transformers",
          text: "Transformer Architecture",
          description: "Understand attention mechanisms, self-attention, and multi-head attention",
          difficulty: "Required"
        },
        {
          id: "nlp_basics",
          text: "NLP Fundamentals",
          description: "Tokenization, embeddings, language modeling basics",
          difficulty: "Required"
        },
        {
          id: "dl_concepts",
          text: "Deep Learning Concepts",
          description: "Neural networks, optimization, loss functions",
          difficulty: "Required"
        },
        {
          id: "prob_stats",
          text: "Probability & Statistics",
          description: "Statistical modeling, probability distributions, sampling",
          difficulty: "Required"
        }
      ]
    },
    {
      title: "LLM Implementation",
      icon: Brain,
      items: [
        {
          id: "huggingface",
          text: "Hugging Face Ecosystem",
          description: "Transformers, datasets, tokenizers libraries",
          difficulty: "Required"
        },
        {
          id: "prompt_engineering",
          text: "Prompt Engineering",
          description: "Advanced prompting techniques, chain-of-thought, few-shot learning",
          difficulty: "Required"
        },
        {
          id: "fine_tuning",
          text: "Model Fine-tuning",
          description: "PEFT, LoRA, QLoRA, instruction fine-tuning",
          difficulty: "Advanced"
        },
        {
          id: "evaluation",
          text: "Model Evaluation",
          description: "Metrics, benchmarks, evaluation frameworks",
          difficulty: "Advanced"
        }
      ]
    },
    {
      title: "GenAI Development",
      icon: Code,
      items: [
        {
          id: "langchain",
          text: "LangChain & LlamaIndex",
          description: "Building complex LLM applications and chains",
          difficulty: "Required"
        },
        {
          id: "openai_api",
          text: "OpenAI API Integration",
          description: "API usage, best practices, token optimization",
          difficulty: "Required"
        },
        {
          id: "rag",
          text: "Retrieval Augmented Generation",
          description: "Vector databases, embedding, semantic search",
          difficulty: "Advanced"
        },
        {
          id: "agents",
          text: "AI Agents Development",
          description: "Autonomous agents, tools, planning systems",
          difficulty: "Expert"
        }
      ]
    },
    {
      title: "Production & Deployment",
      icon: Server,
      items: [
        {
          id: "optimization",
          text: "Model Optimization",
          description: "Quantization, pruning, distillation",
          difficulty: "Advanced"
        },
        {
          id: "deployment",
          text: "Deployment Strategies",
          description: "Model serving, API development, scaling",
          difficulty: "Required"
        },
        {
          id: "monitoring",
          text: "Monitoring & Logging",
          description: "Performance tracking, drift detection",
          difficulty: "Required"
        },
        {
          id: "security",
          text: "Security & Safety",
          description: "Prompt injection, output filtering, safety measures",
          difficulty: "Advanced"
        }
      ]
    },
    {
      title: "Advanced Topics",
      icon: Cpu,
      items: [
        {
          id: "multimodal",
          text: "Multimodal Models",
          description: "Text-to-image, vision-language models",
          difficulty: "Expert"
        },
        {
          id: "training",
          text: "Model Training",
          description: "Pre-training, distributed training, optimization",
          difficulty: "Expert"
        },
        {
          id: "research",
          text: "Research Papers",
          description: "Keep up with latest papers and implementations",
          difficulty: "Advanced"
        },
        {
          id: "custom_arch",
          text: "Custom Architectures",
          description: "Building specialized model architectures",
          difficulty: "Expert"
        }
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
          Generative AI & LLM Development Roadmap
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Your path to mastering Generative AI and Large Language Models
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

              <div className="space-y-4">
                {section.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="mt-1">
                      {progress[item.id] ? (
                        <div className="h-4 w-4 rounded-full bg-green-400"></div>
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-gray-400"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-blue-100 font-medium">{item.text}</p>
                      <p className="text-sm text-blue-300/80 mt-1">{item.description}</p>
                      <span className={`text-xs ${getDifficultyColor(item.difficulty)} mt-2 inline-block`}>
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
          <p>Start with Required items and progress through Advanced to Expert topics</p>
        </div>
      </motion.div>
    </div>
  );
}