"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    setIsDark(isDarkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/70 dark:bg-black/80 backdrop-blur-xl border border-black/[0.03] dark:border-white/10 mx-auto mt-4 max-w-7xl rounded-full reveal active transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-none">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="text-white font-black text-[10px]">TG</span>
        </div>
        <span className="font-bold text-xl tracking-tighter text-slate-800 dark:text-white">
          TechGuru <span className="text-primary font-black">2026</span>
        </span>
      </div>
      
      <Navbar />

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-md flex items-center justify-center group border border-slate-200 dark:border-slate-700"
          id="theme-toggle"
          aria-label="Toggle Theme"
        >
          {!isDark ? (
            <span className="material-symbols-outlined block text-slate-900 !text-[18px] group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
              dark_mode
            </span>
          ) : (
            <span className="material-symbols-outlined block text-yellow-400 !text-[18px] group-hover:-rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
              light_mode
            </span>
          )}
        </button>

        <div className="md:hidden p-2 cursor-pointer text-dark dark:text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
