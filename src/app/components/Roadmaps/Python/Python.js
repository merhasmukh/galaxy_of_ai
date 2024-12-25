"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Brain,
  Cpu,
} from 'lucide-react';

export default function PythonAIRoadmap() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pythonAIProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('pythonAIProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Python Core Fundamentals",
      icon: Code,
      level: "Foundation",
      items: [
        {
          id: "data_types",
          text: "Advanced Data Types",
          description: "Lists, tuples, sets, dictionaries, custom collections",
          libraries: ["collections", "array", "dataclasses"]
        },
        {
          id: "functions",
          text: "Functional Programming",
          description: "Decorators, generators, iterators, lambda functions",
          libraries: ["functools", "itertools"]
        },
        {
          id: "oop",
          text: "Object-Oriented Programming",
          description: "Classes, inheritance, polymorphism, magic methods",
          libraries: ["abc", "typing"]
        },
        {
          id: "async",
          text: "Asynchronous Programming",
          description: "Async/await, coroutines, event loops",
          libraries: ["asyncio", "aiohttp"]
        }
      ]
    },
    {
      title: "Scientific Computing",
      icon: Brain,
      level: "Essential",
      items: [
        {
          id: "numpy",
          text: "NumPy Mastery",
          description: "Arrays, broadcasting, vectorization, linear algebra",
          libraries: ["numpy", "scipy"]
        },
        {
          id: "pandas",
          text: "Data Manipulation",
          description: "DataFrame operations, data cleaning, transformation",
          libraries: ["pandas", "polars"]
        },
        {
          id: "visualization",
          text: "Data Visualization",
          description: "Static and interactive plotting",
          libraries: ["matplotlib", "seaborn", "plotly"]
        },
        {
          id: "optimization",
          text: "Numerical Computing",
          description: "Mathematical optimization, statistical computing",
          libraries: ["scipy.optimize", "sympy"]
        }
      ]
    },
    {
      title: "Machine Learning Tools",
      icon: Brain,
      level: "Advanced",
      items: [
        {
          id: "sklearn",
          text: "Scikit-learn Ecosystem",
          description: "ML algorithms, preprocessing, model selection",
          libraries: ["scikit-learn", "sklearn.pipeline"]
        },
        {
          id: "deep_learning",
          text: "Deep Learning Frameworks",
          description: "Neural networks, GPU acceleration",
          libraries: ["pytorch", "tensorflow", "keras"]
        },
        {
          id: "nlp_tools",
          text: "NLP Libraries",
          description: "Text processing, tokenization, embeddings",
          libraries: ["nltk", "spacy", "transformers"]
        },
        {
          id: "cv_tools",
          text: "Computer Vision",
          description: "Image processing and analysis",
          libraries: ["opencv", "pillow", "torchvision"]
        }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      level: "Essential",
      items: [
        {
          id: "data_processing",
          text: "Big Data Processing",
          description: "Parallel computing, data streaming",
          libraries: ["dask", "pyspark", "ray"]
        },
        {
          id: "databases",
          text: "Database Integration",
          description: "SQL, NoSQL, vector databases",
          libraries: ["sqlalchemy", "pymongo", "chromadb"]
        },
        {
          id: "data_pipelines",
          text: "Data Pipeline Tools",
          description: "ETL processes, workflow management",
          libraries: ["airflow", "prefect", "luigi"]
        },
        {
          id: "serialization",
          text: "Data Serialization",
          description: "File formats, compression, streaming",
          libraries: ["pickle", "json", "protobuf"]
        }
      ]
    },
    {
      title: "MLOps & Deployment",
      icon: Cpu,
      level: "Advanced",
      items: [
        {
          id: "experiment_tracking",
          text: "Experiment Management",
          description: "Tracking, versioning, parameter management",
          libraries: ["mlflow", "wandb", "tensorboard"]
        },
        {
          id: "model_serving",
          text: "Model Deployment",
          description: "API development, model serving",
          libraries: ["fastapi", "flask", "bentoml"]
        },
        {
          id: "testing",
          text: "Testing & Monitoring",
          description: "Unit testing, integration testing, monitoring",
          libraries: ["pytest", "great_expectations", "evidently"]
        },
        {
          id: "docker",
          text: "Containerization",
          description: "Container management, orchestration",
          libraries: ["docker-py", "kubernetes-python"]
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

  const getLevelColor = (level) => {
    switch(level) {
      case "Foundation": return "text-green-400";
      case "Essential": return "text-blue-400";
      case "Advanced": return "text-purple-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]-950 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Python for AI/ML Development
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Master Python skills essential for AI, ML, and LLM development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roadmapSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-blue-400/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="text-blue-400" size={24} />
                <h2 className="text-xl font-semibold text-blue-200">{section.title}</h2>
              </div>
              <span className={`text-sm ${getLevelColor(section.level)} mb-4 inline-block`}>
                {section.level}
              </span>

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
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.libraries.map((lib, libIndex) => (
                          <span
                            key={libIndex}
                            className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"
                          >
                            {lib}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-blue-200 text-sm">
          <p>Track your progress through essential Python skills for AI development</p>
          <p>Focus on mastering the libraries and tools most relevant to your projects</p>
        </div>
      </motion.div>
    </div>
  );
}