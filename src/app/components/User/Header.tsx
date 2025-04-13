"use client";
import { ChevronLeft, ChevronRight, Bell } from "lucide-react";
import React, { useEffect, useState } from "react";

type HeaderProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  title: string;
};

export default function Header({ sidebarOpen, toggleSidebar, title }: HeaderProps) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    avatar: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser({
          name: parsed.name || "",
          email: parsed.email || "",
          phone: parsed.phone || "",
          dob: parsed.dob || "",
          avatar: parsed.avatar || "/galaxy-of-ai-logo.png",
        });
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
      }
    }
  }, []);

  return (
    <header className="bg-gray-800 border-b border-gray-700 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-md"
            >
              {sidebarOpen ? (
                <ChevronLeft className="w-6 h-6" />
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </button>
            <h2 className="text-xl font-semibold text-white ml-4">{title}</h2>
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
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
              <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-gray-700">
                <img
                  src={user.avatar || "/galaxy-of-ai-logo.png"}
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
