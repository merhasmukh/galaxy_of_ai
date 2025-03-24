"use client"
import React, { useState } from 'react';
import { 
  Bell, 
  PlusCircle, 
  BarChart, 
  Briefcase,
  ClipboardList,
  LogOut,
  Menu
} from 'lucide-react';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 md:relative`}>
        <div className="p-6">
          <h1 className="text-xl font-bold">🚀 Dev CRM</h1>
        </div>
        <nav className="mt-6">
          <a href="/dashboard" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
            <BarChart className="w-6 h-6 mr-2" />
            Dashboard
          </a>
          <a href="/projects" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
            <Briefcase className="w-6 h-6 mr-2" />
            Projects
          </a>
          <a href="/tasks" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
            <ClipboardList className="w-6 h-6 mr-2" />
            Tasks
          </a>
          <a href="/logout" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
            <LogOut className="w-6 h-6 mr-2" />
            Logout
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-gray-600 focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>

          <h2 className="text-xl font-semibold text-gray-700">Developer Dashboard</h2>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              className="w-10 h-10 rounded-full" 
              alt="User Avatar" 
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add New Project
              </button>
            </div>

            {/* Developer Progress */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Progress Overview</h3>
              <p className="text-gray-600">Projects completed: <span className="font-bold">5</span></p>
              <p className="text-gray-600">Tasks pending: <span className="font-bold">12</span></p>
            </div>

            {/* Resources */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recommended Resources</h3>
              <ul className="text-gray-600">
                <li>🔥 <a href="/roadmaps" className="text-blue-600 hover:underline">AI/ML Roadmap</a></li>
                <li>📜 <a href="/tools" className="text-blue-600 hover:underline">Developer Tools</a></li>
                <li>📝 <a href="/blog" className="text-blue-600 hover:underline">Latest Blog Posts</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;