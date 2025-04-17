"use client";
import React from "react";
import {
  BarChart,
  Brain,
  LogOut,
  ChevronLeft,
  Settings,
  // Wallet
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Logout } from '../../utils/auth'

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navItems = [
    { icon: BarChart, label: "Dashboard", href: "/user/dashboard" },
    { icon: Brain, label: "AI Research", href: "/user/ai" },
    { icon: Brain, label: "Resouces", href: "/user/resources" },

    // { icon: Wallet, label: "Money Management", href: "/user/money-management" },
    // { icon: ClipboardList, label: "Tasks", href: "/user/tasks" },
    // { icon: Calendar, label: "Hour Tracking", href: "/user/hour-track" },
    // { icon: Users, label: "Team", href: "/user/teams" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:relative z-50 h-full
          bg-gray-800 text-white w-64
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          flex flex-col
          border-r border-gray-700
        `}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold tracking-wider">Galaxy Of AI</h1>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white md:hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 mr-3 transition-colors ${
                      isActive
                        ? "text-blue-500"
                        : "text-gray-400 group-hover:text-blue-500"
                    }`}
                  />
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700 space-y-2">
         {/* User Settings */}
          <a
            href="/user/settings"
            className={`w-full flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors group ${
              pathname === "/user/settings" ? "bg-gray-700 text-white" : ""
            }`}
          >
          <Settings className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
          
            Settings
          </a>

          {/* Logout */}
          <button
            onClick={Logout}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors group"
          >
            <LogOut className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-500 transition-colors" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
