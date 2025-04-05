"use client"
import React, { useState } from 'react';
import { 
  Bell, 
  PlusCircle, 
  BarChart, 
  Briefcase,
  ClipboardList,
  LogOut,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const recentActivity = [
    { id: 1, type: 'completed', task: 'API Integration', time: '2 hours ago' },
    { id: 2, type: 'pending', task: 'Database Migration', time: '5 hours ago' },
    { id: 3, type: 'completed', task: 'UI Design Review', time: '1 day ago' },
  ];

  const upcomingDeadlines = [
    { id: 1, project: 'E-commerce Platform', deadline: '2024-03-25', progress: 75 },
    { id: 2, project: 'Mobile App Development', deadline: '2024-04-01', progress: 45 },
    { id: 3, project: 'Cloud Migration', deadline: '2024-04-15', progress: 30 },
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:relative z-50 h-full
          bg-gray-800 text-white w-64
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
          border-r border-gray-700
        `}
      >
        {/* Logo and Toggle */}
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-500" strokeWidth={2} />
            <h1 className="text-xl font-bold tracking-wider">Dev CRM</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white md:hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4">
          <div className="space-y-1">
            <a 
              href="/dashboard" 
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-gray-700 text-white group"
            >
              <BarChart className="w-5 h-5 mr-3 text-blue-500" />
              Dashboard
            </a>
            {[
              { icon: Briefcase, label: 'Projects', href: '/projects' },
              { icon: ClipboardList, label: 'Tasks', href: '/tasks' },
              { icon: Calendar, label: 'Calendar', href: '/calendar' },
              { icon: Users, label: 'Team', href: '/team' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors group"
              >
                <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <a
            href="/logout"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors group"
          >
            <LogOut className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-500 transition-colors" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left section */}
              <div className="flex items-center">
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-md"
                >
                  {sidebarOpen ? (
                    <ChevronLeft className="w-6 h-6" />
                  ) : (
                    <ChevronRight className="w-6 h-6" />
                  )}
                </button>
                <h2 className="text-xl font-semibold text-white ml-4">Developer Dashboard</h2>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-6">
                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                  <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  <Bell className="w-6 h-6" />
                </button>

                {/* User menu */}
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex md:flex-col md:items-end">
                    <p className="text-sm font-medium text-white">Alex Johnson</p>
                    <p className="text-xs text-gray-400">Senior Developer</p>
                  </div>
                  <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-400 text-sm font-medium">Total Projects</h3>
                <Briefcase className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">12</p>
              <p className="text-sm text-green-500 mt-2">↑ 8% from last month</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-400 text-sm font-medium">Active Tasks</h3>
                <ClipboardList className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">24</p>
              <p className="text-sm text-red-500 mt-2">↓ 3% from last week</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-400 text-sm font-medium">Team Members</h3>
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">8</p>
              <p className="text-sm text-gray-400 mt-2">Active members</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-400 text-sm font-medium">Completion Rate</h3>
                <TrendingUp className="w-5 h-5 text-indigo-500" />
              </div>
              <p className="text-2xl font-bold text-white mt-2">92%</p>
              <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  New Project
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
                  <ClipboardList className="w-5 h-5 mr-2" />
                  Create Task
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Meeting
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    {activity.type === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-white">{activity.task}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Upcoming Deadlines</h3>
              <div className="space-y-4">
                {upcomingDeadlines.map(deadline => (
                  <div key={deadline.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-white">{deadline.project}</p>
                      <p className="text-xs text-gray-400">{deadline.deadline}</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${deadline.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;