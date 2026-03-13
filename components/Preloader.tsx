"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min(elapsed / duration, 1);
      
      const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      setProgress(easeInOutQuart(progressValue));

      if (progressValue < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsExiting(true), 400);
        setTimeout(() => setIsRemoved(true), 1200);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isExiting ? "preloader-exit pointer-events-none" : ""
      }`}
    >
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Huge Bold Counter */}
        <div className="flex items-baseline gap-2">
          <span className="text-white text-[12rem] md:text-[20rem] font-black italic tracking-tighter leading-none tabular-nums animate-pulse">
            {Math.floor(progress * 100).toString().padStart(2, "0")}
          </span>
          <span className="text-primary text-4xl md:text-6xl font-black italic">
            %
          </span>
        </div>

        {/* Minimalist Secondary Text */}
        <div className="mt-4 overflow-hidden">
          <p className="text-white/40 text-xs md:text-sm font-bold tracking-[0.6em] uppercase animate-title-reveal opacity-0">
            Initialising TechGuru 2026
          </p>
        </div>
      </div>

      {/* Modern Gradient Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-primary/10 to-transparent"></div>
    </div>
  );
}
