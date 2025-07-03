// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navigation from "@/components/Navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Professional Counseling Services",
//   description: "Compassionate guidance for life's challenges",
// };

// const CONTACT_BAR_HEIGHT = 40; // px
// const NAVBAR_HEIGHT = 20;      // px

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
//         />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {/* Contact Bar */}
//         <div
//           className="w-full bg-red-50 text-gray-700 text-sm flex flex-col md:flex-row justify-between items-center px-4"
//           style={{ height: `${CONTACT_BAR_HEIGHT}px`, minHeight: `${CONTACT_BAR_HEIGHT}px` }}
//         >
//           <div className="flex items-center gap-1">
//             <span className="material-symbols-outlined text-base">call</span>
//             <span>(757) 474-5262</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <span className="material-symbols-outlined text-base">location_on</span>
//             <span>4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230</span>
//           </div>
//         </div>

//         {/* Fixed Navbar, offset below contact bar */}
//         <Navigation />

//         {/* Main Content, padded for both bars */}
//         <main style={{ paddingTop: `${CONTACT_BAR_HEIGHT + NAVBAR_HEIGHT}px` }}>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Address/Contact Bar (scrolls away) */}
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
        {/* Sticky Navbar (render Navigation only once here) */}
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
