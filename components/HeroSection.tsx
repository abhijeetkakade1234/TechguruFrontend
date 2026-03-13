"use client";

import { useEffect, useState } from "react";
import content from "@/data/content.json";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
    isLive: false,
  });

  useEffect(() => {
    const targetDate = new Date(content.hero.eventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00", isLive: true });
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        mins: minutes.toString().padStart(2, "0"),
        secs: seconds.toString().padStart(2, "0"),
        isLive: false,
      });
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <section className="mb-20 reveal" data-purpose="hero-container">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Main Title & CTA Cell */}
        <div className="md:col-span-2 md:row-span-2 bg-[#f8f9fa] dark:bg-[#161616] rounded-2rem p-8 md:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left border border-[#f1f5f9] dark:border-[#27272a]">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight text-dark dark:text-white italic tracking-tighter">
            {content.hero.title} <span className="text-primary">{content.hero.year}</span>
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 text-base md:text-lg mb-8 max-w-md">
            {content.hero.tagline}
          </p>
          <button className="bg-primary hover:bg-dark dark:hover:bg-white dark:hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer">
            Register Now
          </button>
        </div>
        {/* Image Cell 1 (Top Right) */}
        <div className="md:col-span-2 md:row-span-1 relative rounded-2rem overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Tech Background"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={content.hero.images.main}
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>
        {/* Subtitle Cell (Bottom Middle) */}
        <div className="md:col-span-1 md:row-span-1 bg-primary text-white rounded-2rem p-8 flex flex-col justify-end">
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80 mb-1">
                Event Starts In
              </p>
              {timeLeft.isLive ? (
                <div className="flex flex-col items-start gap-0">
                  <span className="text-3xl font-black italic tracking-tighter leading-none">LIVE</span>
                  <span className="text-3xl font-black italic tracking-tighter leading-none">NOW</span>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10">
                    <span className="countdown-number text-4xl font-black">{timeLeft.days}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Days Remaining</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col items-center justify-center border border-white/10">
                    <span className="countdown-number text-xl font-black">{timeLeft.hours}</span>
                    <span className="text-[7px] uppercase tracking-tighter opacity-70">Hrs</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col items-center justify-center border border-white/10">
                    <span className="countdown-number text-xl font-black">{timeLeft.mins}</span>
                    <span className="text-[7px] uppercase tracking-tighter opacity-70">Min</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col items-center justify-center border border-white/10">
                    <span className="countdown-number text-xl font-black">{timeLeft.secs}</span>
                    <span className="text-[7px] uppercase tracking-tighter opacity-70">Sec</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 border-t border-white/20 pt-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest opacity-80 mb-1">
                Hosted By
              </p>
              <p className="text-xs font-bold leading-tight">GCOERC, Nashik</p>
            </div>
          </div>
        </div>
        {/* Image Cell 2 (Bottom Right) */}
        <div className="md:col-span-1 md:row-span-1 relative rounded-2rem overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Robotics"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={content.hero.images.side}
          />
        </div>
      </div>
    </section>
  );
}
