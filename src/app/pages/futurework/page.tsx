'use client';

import React from 'react';
import Navigation from '../../components/Navigation';

export default function FutureWork() {
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

      {/* Content Section */}
      <section className="relative z-10 min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 snap-start" data-state="active">
        <div className="max-w-4xl w-full">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text animate-gradient">
              Future Work & Vision
            </h1>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <h2 className="text-2xl font-semibold text-purple-300 mb-4">
                  Current Impact
                </h2>
                <p className="text-gray-200">
                  What we developed in this project could actually change how visually impaired individuals interact with the world around them, especially in two specific and often challenging areas: using ATMs and navigating complex environments like campuses. Instead of needing outside help for basic but critical tasks like withdrawing money or walking across campus safely, our system gives them a real chance at doing it all by themselves. That's a pretty big deal.
                </p>
              </div>

              <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  ATM Module Achievements
                </h2>
                <p className="text-gray-200">
                  The ATM module lets users place their finger on the screen and receive spoken feedback based on where their finger is located on the screen. Helping them navigate through ATM monitor with ease. Behind the scenes, this is powered by YOLOv8 for finger and button detection, and EasyOCR helps read the screen text.
                </p>
              </div>

              <div className="bg-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
                <h2 className="text-2xl font-semibold text-emerald-300 mb-4">
                  Navigation Module Progress
                </h2>
                <p className="text-gray-200">
                  The navigation module works similarly. We collected thousands of images from our campus and trained YOLOv8 to recognize common obstacles such as signs, poles, benches, and so on. The system can alert users with warnings if something dangerous is nearby. So that, they can avoid accidents and navigate with more confidence.
                </p>
              </div>

              <div className="bg-amber-900/30 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
                <h2 className="text-2xl font-semibold text-amber-300 mb-4">
                  Technical Opportunities
                </h2>
                <p className="text-gray-200">
                  Looking ahead, there's a lot more that can be done. More data would make the models more accurate, especially in new or changing environments. And using faster, more lightweight AI models would make this easier to run on smaller devices, like smartphones or even smart glasses. That's a big opportunity.
                </p>
              </div>

              <div className="bg-rose-900/30 backdrop-blur-sm rounded-xl p-6 border border-rose-500/30">
                <h2 className="text-2xl font-semibold text-rose-300 mb-4">
                  User-Centered Development
                </h2>
                <p className="text-gray-200">
                  There's also the human side. If we had more feedback from visually impaired users themselves, we could make the system even more user-friendly. Maybe even test it in real-world places like a bank or a school and see how well it holds up.
                </p>
              </div>

              <div className="mt-8 p-6 border-t border-white/20">
                <p className="text-gray-200 italic text-center">
                  In short, while this is just a concept for now, it shows real promise. With more time and support, we believe this could grow into something powerful, something that genuinely improves people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 