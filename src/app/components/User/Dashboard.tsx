"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MapPinned, BookOpen, Clock, Brain } from "lucide-react";

function Dashboard() {
  const router = useRouter();

  const actions = [
    {
      label: "AI Assistant",
      icon: <Brain className="w-6 h-6 mr-3" />,
      color: "bg-green-600",
      route: "/user/ai",
    },
    {
      label: "Project Roadmap",
      icon: <MapPinned className="w-6 h-6 mr-3" />,
      color: "bg-blue-600",
      route: "/user/projects",
    },
    {
      label: "Work Log",
      icon: <Clock className="w-6 h-6 mr-3" />,
      color: "bg-teal-600",
      route: "/user/worklogs",
    },
    {
      label: "Resource Manager",
      icon: <BookOpen className="w-6 h-6 mr-3" />,
      color: "bg-purple-600",
      route: "/user/resources",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 p-6">
      <main className="flex-1 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-gray-100 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center px-5 py-3 text-lg font-medium text-white rounded-xl shadow-md hover:scale-105 transform transition duration-200 ${action.color}`}
                  onClick={() => router.push(action.route)}
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
