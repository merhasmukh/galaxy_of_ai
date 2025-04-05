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

// Separate component for authentication check
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession(); // status: "loading" | "authenticated" | "unauthenticated"
  const [hasJwt, setHasJwt] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if JWT accessToken exists in cookies
    setHasJwt(document.cookie.includes("accessToken="));
    setLoading(false);
  }, []);

  const isLoggedIn = session || hasJwt; // User is logged in if NextAuth or JWT is present

  return (
    <html lang="en">
      <head>
        {/* Google Ads & Analytics Scripts */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1479377630872521"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-84FYVM6X8L" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-84FYVM6X8L');
          `}
        </Script>
      </head>

      <body>
        {/* Show loading state until authentication is checked */}
        {(loading || status === "loading") ? (
          <div>Loading...</div>
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
