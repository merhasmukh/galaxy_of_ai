"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench, Cloud, Gauge, ShieldCheck,
} from 'lucide-react';

export default function MLOpsRoadmap() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mlopsProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('mlopsProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Model Development",
      icon: Wrench,
      level: "Foundation",
      items: [
        {
          id: "data_preparation",
          text: "Data Preparation",
          description: "Data cleaning, transformation, feature engineering",
          libraries: ["Pandas", "Scikit-learn", "Dask"]
        },
        {
          id: "model_training",
          text: "Model Training",
          description: "Training pipelines, hyperparameter tuning",
          libraries: ["TensorFlow", "PyTorch", "Optuna"]
        },
        {
          id: "model_evaluation",
          text: "Model Evaluation",
          description: "Metrics, validation techniques, performance comparison",
          libraries: ["Scikit-learn", "SHAP", "LIME"]
        }
      ]
    },
    {
      title: "Infrastructure Management",
      icon: Cloud,
      level: "Essential",
      items: [
        {
          id: "containerization",
          text: "Containerization",
          description: "Docker, orchestration, containerized workflows",
          libraries: ["Docker", "Kubernetes", "Podman"]
        },
        {
          id: "cloud_services",
          text: "Cloud Platforms",
          description: "Deploying and managing ML workflows on cloud",
          libraries: ["AWS SageMaker", "Google Vertex AI", "Azure ML"]
        },
        {
          id: "resource_scaling",
          text: "Resource Scaling",
          description: "Autoscaling, distributed training, infrastructure monitoring",
          libraries: ["Ray", "Horovod", "Cloud Monitoring"]
        }
      ]
    },
    {
      title: "Continuous Integration & Deployment",
      icon: Gauge,
      level: "Advanced",
      items: [
        {
          id: "ci_cd_pipelines",
          text: "CI/CD Pipelines",
          description: "Automating testing, deployment, and monitoring",
          libraries: ["GitHub Actions", "Jenkins", "CircleCI"]
        },
        {
          id: "model_versioning",
          text: "Model Versioning",
          description: "Tracking model changes and reproducibility",
          libraries: ["MLflow", "DVC", "Weights & Biases"]
        },
        {
          id: "deployment_strategies",
          text: "Deployment Strategies",
          description: "Batch, online, and edge deployments",
          libraries: ["FastAPI", "TensorFlow Serving", "TorchServe"]
        }
      ]
    },
    {
      title: "Monitoring & Optimization",
      icon: ShieldCheck,
      level: "Advanced",
      items: [
        {
          id: "model_drift",
          text: "Model Drift Detection",
          description: "Monitoring changes in data and model performance",
          libraries: ["Evidently", "Alibi Detect", "WhyLogs"]
        },
        {
          id: "system_monitoring",
          text: "System Monitoring",
          description: "Tracking infrastructure and application health",
          libraries: ["Prometheus", "Grafana", "New Relic"]
        },
        {
          id: "cost_optimization",
          text: "Cost Optimization",
          description: "Efficient resource usage, cost analysis",
          libraries: ["Kubecost", "AWS Cost Explorer", "GCP Billing"]
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
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          MLOps Development Roadmap
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Build expertise in managing and deploying machine learning workflows
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
          <p>Track your progress in MLOps skills and best practices</p>
          <p>Master the art of deploying and maintaining ML systems</p>
        </div>
      </motion.div>
    </div>
  );
}
