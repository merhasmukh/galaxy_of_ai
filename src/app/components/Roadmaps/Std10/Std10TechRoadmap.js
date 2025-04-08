"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  Code2,
  Globe,
  FileCode2,
  BookCheck,
  Lightbulb
} from 'lucide-react';

export default function Std10TechRoadmap() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('std10TechProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('std10TechProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Computer Basics & Digital Tools",
      icon: Globe,
      level: "Foundation",
      items: [
        {
          id: "digital_skills",
          text: "Digital Skills",
          description: "Typing, file systems, folders, Google tools",
          libraries: ["Google Docs", "Sheets", "Canva"]
        },
        {
          id: "internet_usage",
          text: "Internet & Online Learning",
          description: "Safe browsing, YouTube learning, finding resources",
          libraries: ["YouTube", "Google", "Quora"]
        }
      ]
    },
    {
      title: "Start with Python Programming",
      icon: Code2,
      level: "Foundation",
      items: [
        {
          id: "python_fundamentals",
          text: "Python Fundamentals",
          description: "Variables, loops, functions, lists, dictionaries",
          libraries: ["Apna College", "W3Schools", "Programiz"]
        },
        {
          id: "basic_programs",
          text: "Logic Building Programs",
          description: "Patterns, prime numbers, palindrome, etc.",
          libraries: ["Hackerrank", "Coding Ninjas"]
        }
      ]
    },
    {
      title: "Web Development Basics",
      icon: FileCode2,
      level: "Essential",
      items: [
        {
          id: "html_css_js",
          text: "HTML, CSS, JavaScript",
          description: "Create your own websites and frontend projects",
          libraries: ["FreeCodeCamp", "MDN", "W3Schools"]
        },
        {
          id: "web_projects",
          text: "Mini Projects",
          description: "Build portfolio, to-do app, calculator",
          libraries: ["VS Code", "GitHub"]
        }
      ]
    },
    {
      title: "Git & Project Upload",
      icon: Laptop,
      level: "Essential",
      items: [
        {
          id: "version_control",
          text: "Git & GitHub",
          description: "Create repos, push code, collaborate",
          libraries: ["Git", "GitHub"]
        },
        {
          id: "public_projects",
          text: "Showcase Projects",
          description: "Upload projects to share with the world",
          libraries: ["Markdown", "Git Pages"]
        }
      ]
    },
    {
      title: "English + Communication Skills",
      icon: BookCheck,
      level: "Foundation",
      items: [
        {
          id: "english_learning",
          text: "Improve English",
          description: "Spoken, written, and listening practice",
          libraries: ["BBC Learning", "Duolingo", "YouTube"]
        },
        {
          id: "tech_blogs",
          text: "Start Writing Blogs",
          description: "Share what you learn in simple language",
          libraries: ["Hashnode", "Medium", "Notion"]
        }
      ]
    },
    {
      title: "Career Awareness + Freelancing",
      icon: Lightbulb,
      level: "Essential",
      items: [
        {
          id: "career_research",
          text: "Explore Tech Careers",
          description: "Understand Software, Web, AI, Cyber paths",
          libraries: ["YouTube", "LinkedIn", "ChatGPT"]
        },
        {
          id: "freelancing_intro",
          text: "Freelancing Start",
          description: "Create small gigs for websites/scripts",
          libraries: ["Fiverr", "Upwork", "Canva"]
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
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Tech Roadmap for Std. 10th Students
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Start your journey in tech after 10th class – from basics to real-world skills
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
                <section.icon className="text-green-300" size={24} />
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
          <p>Track your journey from 10th to tech pro!</p>
          <p>Practice daily, build projects, and learn real-world skills</p>
        </div>
      </motion.div>
    </div>
  );
}
