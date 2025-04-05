"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/app/components/User/Sidebar";
import Header from "@/app/components/User/Header";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const authPages = [
    "/user/login",
    "/user/register",
    "/user/reset-password",
  ];

  // ✅ If current route is in authPages → return only children (no layout)
  if (authPages.includes(pathname)) {
    return <>{children}</>;
  }

  const user = {
    name: "Alex Johnson",
    role: "Senior Developer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          title="Developer Panel"
          user={user}
        />
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
