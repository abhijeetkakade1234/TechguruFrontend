"use client";

import { useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutStats from "@/components/AboutStats";
import EventTracks from "@/components/EventTracks";
import PastEvents from "@/components/PastEvents";
import EventGallery from "@/components/EventGallery";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Observer
    const observerOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroSection />
        <AboutStats />
        <EventTracks />
        <PastEvents />
        <EventGallery />
      </main>
      <Footer />
    </>
  );
}
