"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";

export default function PastEvents() {
  const pastEventsRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pastEventsRef.current || !scrollWrapperRef.current) return;
      
      const rect = pastEventsRef.current.getBoundingClientRect();
      // Calculate how far we've scrolled past the TOP of the container
      const distance = -rect.top;
      const containerHeight = pastEventsRef.current.offsetHeight;
      const wrapperWidth = scrollWrapperRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const viewHeight = window.innerHeight;

      // The horizontal scroll should happen while the section is sticky at the top
      // This occurs when 0 <= distance <= (containerHeight - viewHeight)
      const scrollableDistance = containerHeight - viewHeight;

      if (distance >= 0 && distance <= scrollableDistance) {
        const progress = distance / scrollableDistance;
        const maxScroll = wrapperWidth - windowWidth;
        const translateX = progress * maxScroll;
        scrollWrapperRef.current.style.transform = `translateX(-${translateX}px)`;
      } else if (distance < 0) {
        scrollWrapperRef.current.style.transform = "translateX(0px)";
      } else if (distance > scrollableDistance) {
        const maxScroll = wrapperWidth - windowWidth;
        scrollWrapperRef.current.style.transform = `translateX(-${maxScroll}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={pastEventsRef} className="sticky-container reveal" id="past-events">
      <div className="sticky-content border-y border-gray-100 dark:border-zinc-800">
        <div ref={scrollWrapperRef} className="horizontal-scroll" id="scroll-wrapper">
          <div className="min-w-[320px] md:min-w-[400px] flex flex-col justify-center px-6 md:px-10">
            <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white uppercase leading-tight">
              Reliving the<br />
              <span className="text-primary">Legacy</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xs text-base md:text-lg">
              {content.pastEvents.description}
            </p>
          </div>
          {content.pastEvents.events.map((event, idx) => (
            <div key={idx} className="bento-card bg-slate-100 w-[300px] md:w-[400px] h-[400px] md:h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={event.title || `Past Event ${idx}`} className="w-full h-full object-cover" src={event.image} />
              {event.year && (
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-bold opacity-70">{event.year}</p>
                  <h4 className="text-xl md:text-2xl font-bold">{event.title}</h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
