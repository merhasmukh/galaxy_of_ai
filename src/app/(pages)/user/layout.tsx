"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/app/components/User/Sidebar";
import Header from "@/app/components/User/Header";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // 👇 Close sidebar by default on smaller screens (only once on mount)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Safe to do conditionals AFTER hooks
  const authPages = ["/user/login", "/user/register", "/user/reset-password"];
  if (authPages.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          title="Dashboard"
        />
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
