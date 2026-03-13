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
        secs: seconds.toString().padStart(2, "00"),
        isLive: false,
      });
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <section className="mb-20 reveal overflow-hidden" data-purpose="hero-container">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Main Title & CTA Cell */}
        <div className="md:col-span-2 md:row-span-2 bg-[#0f0f0f] rounded-2rem p-8 md:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left border border-white/5 relative overflow-hidden group">
          {/* Atmospheric Background */}
          <div className="absolute inset-0 bg-tech-grid opacity-[0.03]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(13,185,242,0.06)_0%,_transparent_70%)]"></div>

          <div className="relative z-10 w-full flex flex-col items-center md:items-start">
            {/* Pre-title */}
            {/* <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></span>
              <span className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase">GCOERC Nashik</span>
            </div> */}

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white italic tracking-tighter drop-shadow-sm">
              {content.hero.title} <span className="text-primary">{content.hero.year}</span>
            </h1>
            <p className="text-zinc-500 text-base md:text-lg mb-8 max-w-md">
              {content.hero.tagline}
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-primary/20 cursor-pointer">
              Register Now →
            </button>
          </div>
        </div>

        {/* Image Cell 1 (Top Right) */}
        <div className="hidden md:block md:col-span-2 md:row-span-1 relative rounded-2rem overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Tech Background"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={content.hero.images.main}
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>

        {/* Countdown Cell */}
        <div className="md:col-span-1 md:row-span-1 bg-primary text-white rounded-2rem p-6 md:p-8 flex flex-col justify-end relative overflow-hidden">
          <div className="h-full flex flex-col justify-between relative z-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70 mb-3 text-center md:text-left">
                Event Starts In
              </p>
              {timeLeft.isLive ? (
                <div className="flex flex-col items-center md:items-start gap-0">
                  <span className="text-4xl font-black italic tracking-tighter leading-none">LIVE</span>
                  <span className="text-4xl font-black italic tracking-tighter leading-none">NOW</span>
                </div>
              ) : (
                <div className="flex md:grid md:grid-cols-3 gap-2 justify-center">
                  <div className="flex-1 md:col-span-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center border border-white/10 min-w-[80px]">
                    <span className="countdown-number text-3xl md:text-4xl font-black">{timeLeft.days}</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-80">Days</span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col items-center justify-center border border-white/10 min-w-[50px]">
                    <span className="countdown-number text-lg md:text-xl font-black">{timeLeft.hours}</span>
                    <span className="text-[7px] md:text-[8px] uppercase tracking-tighter opacity-70">Hrs</span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col items-center justify-center border border-white/10 min-w-[50px]">
                    <span className="countdown-number text-lg md:text-xl font-black">{timeLeft.mins}</span>
                    <span className="text-[7px] md:text-[8px] uppercase tracking-tighter opacity-70">Min</span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col items-center justify-center border border-white/10 min-w-[50px] md:hidden lg:flex">
                    <span className="countdown-number text-lg md:text-xl font-black">{timeLeft.secs}</span>
                    <span className="text-[7px] md:text-[8px] uppercase tracking-tighter opacity-70">Sec</span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 border-t border-white/20 pt-3 flex justify-between items-center">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-widest opacity-80 mb-1">Hosted By</p>
                <p className="text-[10px] md:text-xs font-bold leading-tight uppercase">GCOERC, Nashik</p>
              </div>
              <div className="md:hidden">
                <span className="text-[10px] font-black italic opacity-30">TECHGURU v2.6</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        </div>

        {/* Image Cell 2 (Bottom Right) */}
        <div className="md:col-span-1 md:row-span-1 relative rounded-2rem overflow-hidden group h-[200px] md:h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Robotics"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={content.hero.images.side}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
        </div>
      </div>
    </section >
  );
}
