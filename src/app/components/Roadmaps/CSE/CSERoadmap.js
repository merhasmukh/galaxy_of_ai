"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode2,
  Settings2,
  Lightbulb,
  BookCheck
} from 'lucide-react';

export default function CSERoadmap() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('compEnggProgress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('compEnggProgress', JSON.stringify(progress));
  }, [progress]);

  const roadmapSections = [
    {
      title: "Computer Science Basics",
      icon: Lightbulb,
      level: "Foundation",
      items: [
        {
          id: "cs_basics",
          text: "What is Computer Science?",
          description: "Intro to computers, software, hardware, how code works",
          libraries: ["YouTube: CS50 Hindi", "Khan Academy"]
        },
        {
          id: "linux_basics",
          text: "Basic Computer & Linux Skills",
          description: "Using terminal, file system, OS basics",
          libraries: ["Ubuntu", "CLI", "Vim"]
        }
      ]
    },
    {
      title: "Programming with Python",
      icon: Code2,
      level: "Foundation",
      items: [
        {
          id: "python_basics",
          text: "Python Basics",
          description: "Variables, loops, conditions, functions, lists, dictionaries",
          libraries: ["w3schools", "Apna College", "CodeWithHarry"]
        },
        {
          id: "logic_building",
          text: "Logic Building",
          description: "Patterns, number programs, strings manipulation",
          libraries: ["Hackerrank", "Coding Ninjas"]
        }
      ]
    },
    {
      title: "C Programming & College Prep",
      icon: FileCode2,
      level: "Essential",
      items: [
        {
          id: "c_programming",
          text: "C Programming",
          description: "Data types, loops, arrays, functions – core C skills",
          libraries: ["Neso Academy", "Programiz"]
        },
        {
          id: "college_subjects",
          text: "College Curriculum Prep",
          description: "Understand upcoming subjects: DS, DBMS, OS, CN",
          libraries: ["GeeksforGeeks", "Gate Smashers"]
        }
      ]
    },
    {
      title: "Mini Projects & GitHub",
      icon: Settings2,
      level: "Foundation",
      items: [
        {
          id: "mini_projects",
          text: "Python Mini Projects",
          description: "Build calculator, quiz app, todo list, etc.",
          libraries: ["Tkinter", "GitHub"]
        },
        {
          id: "github_setup",
          text: "Git & GitHub",
          description: "Version control, repository, commits, pushing code",
          libraries: ["Git", "GitHub"]
        }
      ]
    },
    {
      title: "Skill Building & English",
      icon: BookCheck,
      level: "Essential",
      items: [
        {
          id: "daily_coding",
          text: "Daily Coding Practice",
          description: "At least 1 problem per day on easy platforms",
          libraries: ["Leetcode", "Codeforces"]
        },
        {
          id: "english_skills",
          text: "English & Communication",
          description: "Basic spoken & written English for tech interviews",
          libraries: ["YouTube", "BBC Learning"]
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
          Computer Engineering Roadmap
        </h1>
        <p className="text-blue-200 text-center mb-8">
          Start from 12th and become a confident Computer Engineer
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
          <p>Track your progress from 12th science to confident coding</p>
          <p>Focus on logic, mini projects, and subject understanding</p>
        </div>
      </motion.div>
    </div>
  );
}