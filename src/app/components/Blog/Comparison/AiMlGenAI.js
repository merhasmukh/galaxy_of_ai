"use client";
import { motion } from "framer-motion";

export default function AIAIComparisonPage() {
  const comparisonData = [
    {
      title: "Artificial Intelligence (AI)",
      description:
        "AI refers to the simulation of human intelligence by machines, enabling them to perform tasks like reasoning, problem-solving, and decision-making.",
      scope: "Broad, includes all types of AI systems.",
      examples: [
        "Chatbots",
        "Self-driving cars",
        "Recommendation systems",
        "Image recognition",
      ],
    },
    {
      title: "Machine Learning (ML)",
      description:
        "ML is a subset of AI focused on enabling machines to learn from data and improve over time without being explicitly programmed.",
      examples: [
        "Fraud detection systems",
        "Recommendation engines",
        "Predictive analytics",
      ],
    },
    {
      title: "Generative AI",
      description:
        "Generative AI creates new content, such as images, text, music, or code, using patterns in existing data. It leverages models like GANs or Transformers (e.g., GPT models).",
      keyFeature: "Emphasis on 'creation' rather than just classification or prediction.",
      examples: [
        "ChatGPT (text generation)",
        "DALL·E (image creation)",
        "Codex (code generation)",
      ],
    },
    {
      title: "Agentic AI",
      description:
        "Agentic AI refers to AI systems capable of autonomous action, making decisions, planning, and executing tasks independently in dynamic environments.",
      keyDifference: "Ability to act independently to achieve objectives.",
      scope: "Mostly theoretical or experimental, often discussed in advanced AI contexts.",
      potentialUseCases: [
        "Advanced personal assistants",
        "Autonomous robotics",
        "AI-driven systems for complex problem-solving",
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
        <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          AI, ML, Generative AI, and Agentic AI Comparison
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-tr from-green-400 to-blue-500 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="mb-4 text-white/90">{item.description}</p>

              {item.scope && (
                <p className="text-white/80 mb-2">
                  <strong>Scope:</strong> {item.scope}
                </p>
              )}

              {item.keyFeature && (
                <p className="text-white/80 mb-2">
                  <strong>Key Feature:</strong> {item.keyFeature}
                </p>
              )}

              {item.keyDifference && (
                <p className="text-white/80 mb-2">
                  <strong>Key Difference:</strong> {item.keyDifference}
                </p>
              )}

              {item.examples && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">Examples</h3>
                  <ul className="space-y-1">
                    {item.examples.map((example, i) => (
                      <li key={i} className="text-white/80">
                        - {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.potentialUseCases && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">Potential Use Cases</h3>
                  <ul className="space-y-1">
                    {item.potentialUseCases.map((useCase, i) => (
                      <li key={i} className="text-white/80">
                        - {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-blue-200 text-sm">
          <p>
            Understanding these distinctions is crucial for navigating the evolving landscape of AI technologies and applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
