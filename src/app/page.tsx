'use client';

import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Navigation from "./components/Navigation";
import Introduction from "./sections/Introduction";
import Methodology from "./sections/Methodology";
import Modules from "./sections/Modules";
import Results from "./sections/Results";
import Analysis from "./sections/Analysis";
import Conclusion from "./sections/Conclusion";
import References from "./sections/References";
import { useMediaQuery } from './hooks/useMediaQuery';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const isScrolling = useRef(false);
  const sections = useRef<HTMLElement[]>([]);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    // Get all sections
    sections.current = Array.from(document.querySelectorAll('section'));

    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            section.setAttribute('data-state', 'active');
            if (isDesktop) {
              setActiveSection(sections.current.indexOf(section));
            }
          } else {
            section.setAttribute('data-state', 'inactive');
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for better mobile experience
      }
    );

    // Observe sections on both mobile and desktop
    sections.current.forEach(section => observer.observe(section));

    // Scroll handling - only for desktop
    const handleScroll = (e: WheelEvent) => {
      if (!isDesktop) return;
      e.preventDefault();

      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.min(Math.max(activeSection + direction, 0), sections.current.length - 1);

      if (nextSection !== activeSection) {
        isScrolling.current = true;

        const targetSection = sections.current[nextSection];
        const offset = targetSection.offsetTop;

        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });

        // Reset scroll lock after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    // Handle keyboard navigation - only for desktop
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDesktop) return;
      if (isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const nextSection = Math.min(Math.max(activeSection + direction, 0), sections.current.length - 1);

        if (nextSection !== activeSection) {
          isScrolling.current = true;

          const targetSection = sections.current[nextSection];
          const offset = targetSection.offsetTop;

          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });

          // Reset scroll lock after animation
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      }
    };

    // Add event listeners only for desktop
    if (isDesktop) {
      window.addEventListener('wheel', handleScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    }

    // Cleanup
    return () => {
      observer.disconnect();
      if (isDesktop) {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [activeSection, isDesktop]);

  return (
    <main className={`relative min-h-screen w-full ${isDesktop ? 'snap-y snap-mandatory overflow-y-scroll' : ''} scroll-smooth`}>
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
      <section className={`relative z-10 h-screen w-full flex items-center justify-center ${isDesktop ? 'snap-start' : ''}`} data-state="active">
        <div className="flex flex-col items-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            {/* Hacettepe Logo */}
            <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 relative">
              <Image
                src="/images/hacettepe-logo.png"
                alt="Hacettepe University Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>

            {/* Project Logo */}
            <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 relative">
              <Image
                src="/images/project-name.png"
                alt="Project Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Inspiring Message */}
          <div className="mt-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text animate-gradient italic drop-shadow-lg">
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
