"use client"
import React from 'react';
import { 
  PlusCircle, 
  ClipboardList,
  Calendar,

} from 'lucide-react';


function Dashboard()  {



  return (
    <div className="flex h-screen bg-gray-900">      

    

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4">
      

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

       

          
          </div>
        </main>
   
    </div>
  );
}

export default Dashboard;