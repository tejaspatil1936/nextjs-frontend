// "use client";
// // import Link from "next/link";
// import { useState } from "react";

// const NAVBAR_HEIGHT = 100; // px
// const CONTACT_BAR_HEIGHT = 40; // px

// const navLinks = [
//   { label: "How I Help", href: "#how-i-help" },
//   { label: "About Me", href: "#about" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "Rates & FAQs", href: "#faqs" },
//   { label: "Areas Served", href: "#areas" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navigation() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav
//       className="fixed left-0 w-full bg-white shadow z-50 flex items-center"
//       style={{
//         top: `${CONTACT_BAR_HEIGHT}px`,
//         height: `${NAVBAR_HEIGHT}px`,
//       }}
//     >
//       {/* Logo and Name */}
//       <div className="flex items-center gap-2 pl-4">
//         <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
//         <div>
//           <div className="font-bold text-lg text-teal-800 leading-tight">Ellie<br />Shumaker</div>
//           <div className="text-xs text-teal-600 font-semibold -mt-1">LICENSED CLINICAL<br />SOCIAL WORKER</div>
//         </div>
//       </div>
//       {/* Desktop Links */}
//       <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
//         {navLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             className="text-gray-700 hover:text-teal-700 font-medium transition"
//           >
//             {link.label}
//           </a>
//         ))}
//       </div>
//       {/* Desktop Button */}
//       <div className="hidden md:block pr-4">
//         <a
//           href="#get-started"
//           className="border border-teal-800 text-teal-800 px-5 py-2 rounded transition hover:bg-teal-50 font-semibold flex items-center gap-2"
//         >
//           Get Started
//         </a>
//       </div>
//       {/* Hamburger */}
//       <button
//         className="md:hidden ml-auto mr-4"
//         aria-label="Open menu"
//         onClick={() => setMenuOpen(true)}
//       >
//         <svg className="w-7 h-7 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
//         </svg>
//       </button>
//       {/* Mobile Slide Menu */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black/40"
//           onClick={() => setMenuOpen(false)}
//         >
//           <div
//             className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg"
//             style={{ top: `${CONTACT_BAR_HEIGHT}px` }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-2xl text-gray-500"
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//             >
//               &times;
//             </button>
//             {/* Logo */}
//             <div className="flex items-center gap-2 px-6 pt-8 pb-6 border-b">
//               <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
//               <div>
//                 <div className="font-bold text-xl text-teal-800 leading-tight">
//                   Ellie Shumaker
//                 </div>
//               </div>
//             </div>
//             {/* Links */}
//             <div className="flex flex-col gap-6 mt-8 px-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-teal-900 text-lg font-medium hover:text-teal-700 transition"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState } from "react";

const navLinks = [
  { label: "How I Help", href: "#how-i-help" },
  { label: "About Me", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Rates & FAQs", href: "#faqs" },
  { label: "Areas Served", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow flex items-center h-20 bg-white">
      {/* Logo and Name */}
      <div className="flex items-center gap-2 pl-4">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
        <div>
          <div className="font-bold text-lg text-teal-800 leading-tight">
            Serena
            <br />
            Blake
          </div>
          <div className="text-xs text-teal-600 font-semibold -mt-1">
            PsyD <br />
            Clinical Psychologist
          </div>
        </div>
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-teal-700 font-medium transition"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Desktop Button */}
      <div className="hidden md:block pr-4">
        <a
          href="#get-started"
          className="border border-teal-800 text-teal-800 px-5 py-2 rounded transition hover:bg-teal-50 font-semibold flex items-center gap-2"
        >
          Get Started
        </a>
      </div>
      {/* Hamburger */}
      <button
        className="md:hidden ml-auto mr-4"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <svg
          className="w-7 h-7 text-teal-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {/* Logo */}
            <div className="flex items-center gap-2 px-6 pt-8 pb-6 border-b">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-30 w-30 object-contain"
              />
              <div>
                <div className="font-bold text-xl text-teal-800 leading-tight">
                  Dr. Serena Blake
                </div>
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-col gap-6 mt-8 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-teal-900 text-lg font-medium hover:text-teal-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
