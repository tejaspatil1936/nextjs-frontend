import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Professional Counseling Services",
  description: "Compassionate guidance for life's challenges",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Contact Bar */}
        <div className="w-full bg-red-50 text-gray-700 text-sm flex flex-col md:flex-row justify-between items-center px-4 h-10 min-h-10">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">call</span>
            <span>(323) 555-0192</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">location_on</span>
            <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
          </div>
        </div>
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-white">
          <Navigation />
        </div>
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
