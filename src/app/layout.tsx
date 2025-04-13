"use client";
import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <LayoutContent>{children}</LayoutContent>
    </SessionProvider>
  );
}
const ADS_PUB_ID = process.env.NEXT_PUBLIC_ADS_PUB_ID;
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// Separate component for authentication check
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession(); // status: "loading" | "authenticated" | "unauthenticated"
  const [hasJwt, setHasJwt] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if JWT accessToken exists in cookies
    setHasJwt(document.cookie.includes("accessToken="));
    const user=localStorage.getItem("user");


    if  (user !== null) {
      setHasJwt(true);
    }

    setLoading(false);
  }, []);

  const isLoggedIn = session || hasJwt; // User is logged in if NextAuth or JWT is present
  useEffect(() => {
    const userIsOnUserPage = window.location.pathname.startsWith("/user");
  
    if (!loading && isLoggedIn && !userIsOnUserPage) {
      window.location.href = "/user/dashboard";
    }
  }, [loading, isLoggedIn]);
  return (
    <html lang="en">
      <head>
        {/* Google Ads & Analytics Scripts */}
       

        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_PUB_ID}`}
          crossOrigin="anonymous"
        />

        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>

      <body>
        {/* Show loading state until authentication is checked */}
        {(loading || status === "loading") ? (
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            <p className="text-gray-300 font-semibold text-lg animate-pulse">Loading...</p>
          </div>
        </div>
        ) : (
          <>
            {!isLoggedIn && <Header />}
            {children}
            {!isLoggedIn && <Footer />}
          </>
        )}
      </body>
    </html>
  );
}
