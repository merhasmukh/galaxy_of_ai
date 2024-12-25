"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Shield,
  Cloud,
  Gauge,
} from 'lucide-react';

export default function BackendRoadmap() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('backendProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('backendProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "API Development",
      icon: Server,
      level: "Foundation",
      items: [
        {
          id: "rest_api",
          text: "RESTful APIs",
          description: "Design principles, HTTP methods, status codes, endpoints",
          libraries: ["FastAPI", "Flask", "Django REST"]
        },
        {
          id: "graphql",
          text: "GraphQL APIs",
          description: "Schema design, resolvers, queries, mutations",
          libraries: ["Graphene", "Strawberry", "Ariadne"]
        },
        {
          id: "api_security",
          text: "API Security",
          description: "Authentication, authorization, JWT, OAuth",
          libraries: ["PyJWT", "python-jose", "authlib"]
        },
        {
          id: "api_testing",
          text: "API Testing",
          description: "Unit tests, integration tests, API documentation",
          libraries: ["pytest", "requests", "swagger"]
        }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      level: "Essential",
      items: [
        {
          id: "sql_databases",
          text: "SQL Databases",
          description: "Schema design, queries, optimization, migrations",
          libraries: ["SQLAlchemy", "Alembic", "psycopg2"]
        },
        {
          id: "nosql_databases",
          text: "NoSQL Databases",
          description: "Document stores, key-value stores, graph databases",
          libraries: ["MongoDB", "Redis", "Neo4j"]
        },
        {
          id: "vector_databases",
          text: "Vector Databases",
          description: "Embedding storage, similarity search, indexing",
          libraries: ["ChromaDB", "Pinecone", "Milvus"]
        },
        {
          id: "data_modeling",
          text: "Data Modeling",
          description: "Database design patterns, relationships, optimization",
          libraries: ["Pydantic", "marshmallow", "dataclasses"]
        }
      ]
    },
    {
      title: "Infrastructure & Deployment",
      icon: Cloud,
      level: "Advanced",
      items: [
        {
          id: "containerization",
          text: "Containerization",
          description: "Docker containers, orchestration, scaling",
          libraries: ["docker-compose", "kubernetes-client", "podman"]
        },
        {
          id: "cloud_services",
          text: "Cloud Services",
          description: "AWS, GCP, Azure integration and deployment",
          libraries: ["boto3", "google-cloud", "azure-sdk"]
        },
        {
          id: "ci_cd",
          text: "CI/CD Pipelines",
          description: "Continuous integration, deployment automation",
          libraries: ["GitHub Actions", "Jenkins", "CircleCI"]
        },
        {
          id: "monitoring",
          text: "Monitoring & Logging",
          description: "Application monitoring, logging, alerting",
          libraries: ["Prometheus", "Grafana", "ELK Stack"]
        }
      ]
    },
    {
      title: "Performance & Scaling",
      icon: Gauge,
      level: "Advanced",
      items: [
        {
          id: "caching",
          text: "Caching Strategies",
          description: "In-memory caching, distributed caching, CDN",
          libraries: ["Redis", "Memcached", "Varnish"]
        },
        {
          id: "async_processing",
          text: "Asynchronous Processing",
          description: "Message queues, task queues, webhooks",
          libraries: ["Celery", "RabbitMQ", "Apache Kafka"]
        },
        {
          id: "load_balancing",
          text: "Load Balancing",
          description: "Traffic distribution, high availability, failover",
          libraries: ["Nginx", "HAProxy", "Traefik"]
        },
        {
          id: "optimization",
          text: "Performance Optimization",
          description: "Query optimization, profiling, bottleneck analysis",
          libraries: ["cProfile", "line_profiler", "memory_profiler"]
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      level: "Essential",
      items: [
        {
          id: "security_practices",
          text: "Security Best Practices",
          description: "OWASP guidelines, secure coding, vulnerability scanning",
          libraries: ["Bandit", "Safety", "PyGoat"]
        },
        {
          id: "encryption",
          text: "Encryption & Hashing",
          description: "Data encryption, password hashing, secure storage",
          libraries: ["cryptography", "bcrypt", "passlib"]
        },
        {
          id: "rate_limiting",
          text: "Rate Limiting",
          description: "API throttling, DDoS protection, request validation",
          libraries: ["Flask-Limiter", "Django-ratelimit", "FastAPI limits"]
        },
        {
          id: "compliance",
          text: "Compliance & Auditing",
          description: "GDPR, HIPAA, audit logging, data protection",
          libraries: ["python-audit", "gdpr-compliance", "audit-log"]
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
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Backend Development Roadmap
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Master backend development skills for AI/ML applications
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
          <p>Track your progress through essential backend development skills</p>
          <p>Focus on building scalable and secure systems for AI applications</p>
        </div>
      </motion.div>
    </div>
  );
}