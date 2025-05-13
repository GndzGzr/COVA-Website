'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Navigation from "./components/Navigation";
import Introduction from "./sections/Introduction";
import Methodology from "./sections/Methodology";
import Modules from "./sections/Modules";
import Results from "./sections/Results";
import Analysis from "./sections/Analysis";
import Conclusion from "./sections/Conclusion";
import References from "./sections/References";

export default function Home() {
  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set active state
            entry.target.setAttribute('data-state', 'active');
          } else {
            // Reset state when section is not in view
            entry.target.setAttribute('data-state', 'inactive');
          }
        });
      },
      {
        threshold: 0.5, // Increased threshold for better transition timing
        rootMargin: '0px',
      }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Add smooth scroll behavior
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const direction = delta > 0 ? 'down' : 'up';
      const sections = Array.from(document.querySelectorAll('section'));
      const currentSectionIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });

      if (currentSectionIndex !== -1) {
        const nextIndex = direction === 'down'
          ? Math.min(currentSectionIndex + 1, sections.length - 1)
          : Math.max(currentSectionIndex - 1, 0);

        if (nextIndex !== currentSectionIndex) {
          // Set direction attribute for animation
          sections[nextIndex].setAttribute('data-direction', direction);
          
          // Scroll to next section
          sections[nextIndex].scrollIntoView({ behavior: 'smooth' });

          // Reset direction attribute after animation
          setTimeout(() => {
            sections[nextIndex].removeAttribute('data-direction');
          }, 1000);
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/background_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header Navigation */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 h-screen w-full flex items-center justify-center snap-start" data-state="active">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2">
            {/* Hacettepe Logo */}
            <div className="w-96 h-96 relative">
              <Image
                src="/images/hacettepe-logo.png"
                alt="Hacettepe University Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Project Logo */}
            <div className="w-96 h-96 relative">
              <Image
                src="/images/project-name.png"
                alt="Project Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Inspiring Message */}
          <div className="mt-8 text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text animate-gradient italic drop-shadow-lg">
              Vision Beyond Sight
            </h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <Introduction />
      <Methodology />
      <Modules />
      <Results />
      <Analysis />
      <Conclusion />
      <References />
    </main>
  );
}
