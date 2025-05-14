'use client';

import React from 'react';
import Navigation from '../components/Navigation';

export default function Abstraction() {
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
      <section className="relative z-10 min-h-screen w-full flex items-center justify-center py-16 sm:py-20 px-2 sm:px-4 md:px-6 lg:px-8 snap-start" data-state="active">
        <div className="max-w-4xl w-full">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text animate-gradient">
              Beyond Vision: Empowering Visually Impaired Students
            </h1>
            
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed max-w-prose mx-auto">
              <p className="text-gray-200">
                This project focuses on increasing visually impaired students&apos; quality of life in two aspects: helping them navigate their campus safely and independently, and helping them complete their ATM operations without outside help. The field of assistive technology is developing rapidly however due to poor real-world performance and reliability concerns systems and projects integrating Visual-Language Models (VLMs) are limited. This project addresses these concerns and aim to prove that a system which is using VLMs to detect the worlds around users and give them reliable feedback.
              </p>

              <p className="text-gray-200">
                In this study, we present a system designed to assist visually impaired individuals by responding to their needs through voice interaction and enabling seamless switching between two main modules: the ATM module and the Campus Navigation module. Additionally, the system allows users to utilize a Vision-Language Model (VLM) in a manner similar to a Large Language Model (LLM), enabling them to ask questions and receive informative responses.
              </p>

              <div className="bg-amber-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 my-6 sm:my-8 border border-amber-500/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-amber-300 mb-3 sm:mb-4">
                  ATM Module
                </h2>
                <p className="text-amber-100">
                  Within the ATM module, users can interact with the ATM interface by moving their finger across the screen while receiving feedback from a trained model that detects finger position. We employed the YOLOv8 model both to detect the user&apos;s finger and to identify buttons on the ATM screen. Text on the screen is detected using EasyOCR. This setup provides an environment where users can independently complete ATM transactions without external assistance.
                </p>
              </div>

              <div className="bg-orange-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 my-6 sm:my-8 border border-orange-500/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-3 sm:mb-4">
                  Campus Navigation Module
                </h2>
                <p className="text-orange-100">
                  In the Campus Navigation module, we again utilized the YOLOv8 model, training it with data collected from our campus to classify various obstacles. A dataset of 4,202 images was used to improve the model&apos;s accuracy. Furthermore, we developed a mechanism to alert users in real time based on the location and proximity of potential hazards in the environment.
                </p>
              </div>

              <div className="bg-rose-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 my-6 sm:my-8 border border-rose-500/30">
                <h2 className="text-xl sm:text-2xl font-semibold text-rose-300 mb-3 sm:mb-4">
                  Vision-Language Model (VLM) Module
                </h2>
                <p className="text-rose-100">
                  In the Vision-Language Model (VLM) module, users can ask context-aware questions about their surroundings, such as &quot;What is in front of me?&quot; or &quot;Describe this scene,&quot; using voice commands. The module processes the visual input alongside the spoken query to generate informative, natural language responses. This functionality was evaluated using several state-of-the-art VLMs, including CogVLM and BLIP-2, both known for their visual reasoning capabilities. Additionally, we tested LLaVA (Large Language and Vision Assistant) for its fine-grained scene understanding and ChatGPT with vision support for its general-purpose reasoning and accessibility features. These models were assessed based on their response relevance, coherence, and latency, ensuring that the module can assist users effectively in dynamic environments through multimodal interaction.
                </p>
              </div>

              <p className="text-gray-200">
                To enhance usability, the system supports voice commands and provides audio feedback, allowing users to interact with the system comfortably and intuitively. Our approach demonstrates that it is possible to develop VLM-based systems with sufficient performance for visually impaired individuals. This project serves as a proof of concept, indicating that while the use of real-time systems poses certain challenges, significant advancements can be achieved in the future through adequate research and investment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 