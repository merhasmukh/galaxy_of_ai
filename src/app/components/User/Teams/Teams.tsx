"use client"
import React from 'react';
import { 
  PlusCircle, 
  Briefcase,
  ClipboardList,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
} from 'lucide-react';


function Teams() {

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

    

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4">
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
  );
}

export default Teams;