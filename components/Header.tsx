"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import content from "@/data/content.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header pill — inset-x-4 gives side breathing room on mobile */}
      <header className="fixed top-4 inset-x-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-7xl z-[100] px-4 md:px-6 py-3 flex justify-between items-center glass-effect rounded-full reveal active">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">TG</span>
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tighter text-white">
            TechGuru <span className="text-primary">2026</span>
          </span>
        </div>

        {/* Desktop Nav — centered */}
        <Navbar links={content.navLinks} />

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden cursor-pointer p-1 text-white shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu — auto height, scrollable if needed */}
      <div
        className={`fixed inset-x-4 top-[72px] z-[99] glass-menu md:hidden rounded-3xl transition-all duration-300 overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto max-h-[80vh]"
            : "opacity-0 -translate-y-4 pointer-events-none max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-0 py-6 px-6 w-full">
          {content.navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xl font-black tracking-tighter text-white hover:text-primary transition-colors text-center w-full py-4 ${
                i < content.navLinks.length - 1 ? "border-b border-white/5" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[98] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
