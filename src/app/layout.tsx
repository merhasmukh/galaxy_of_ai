
"use client"
import "./globals.css";

import Script from "next/script";
import Header from "./components/Header"
import Footer from "./components/Footer.js"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1479377630872521"/>

          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-84FYVM6X8L"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-84FYVM6X8L');
            `}
          </Script>
         
     
      <body>
        <Header />
          
          {children}
        <Footer />
       
      </body>
    </html>
  );
}
