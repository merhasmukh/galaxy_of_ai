"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {

  MapPinned,
  BookOpen,
  Clock,
  Brain,
} from "lucide-react";

function Dashboard() {
  const router = useRouter();

  const actions = [
    {
      label: "AI Assistant",
      icon: <Brain className="w-5 h-5 mr-2" />,
      color: "bg-green-600",
      route: "/user/ai",
    },
    {
      label: "Project Roadmap",
      icon: <MapPinned className="w-5 h-5 mr-2" />,
      color: "bg-blue-600",
      route: "/user/projects",
    },
    {
      label: "Work Log",
      icon: <Clock className="w-5 h-5 mr-2" />,
      color: "bg-green-600",
      route: "/user/worklogs",
    },
    {
      label: "Resource Manager",
      icon: <BookOpen className="w-5 h-5 mr-2" />,
      color: "bg-purple-600",
      route: "/user/resources",
    },

  ];

  return (
    <div className="flex h-full min-h-screen bg-gray-900 p-4">
      <main className="flex-1 overflow-y-auto bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center justify-center px-4 py-2 text-white rounded-lg shadow hover:brightness-110 transition ${action.color}`}
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
