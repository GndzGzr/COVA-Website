import SectionContainer from "../components/SectionContainer";
import Image from "next/image";
import Link from "next/link";
const Introduction = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Introduction
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed">
            Today, over 285 million people worldwide live with visual impairments—39 million of them are completely blind <Link href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" className="text-pink-500 hover:text-white transition-colors pt-4">World Health Organization</Link>. In busy, complex spaces like university campuses, visually impaired students often struggle with navigation, spatial awareness, and using everyday services like ATMs.

            While assistive technology has come a long way, traditional tools often fall short in adapting to real-world environments. That's where AI and Vision-Language Models (VLMs) step in—offering the ability to understand both images and language for smarter, more responsive assistance.

            At <span className="text-purple-500">Beyond Vision</span>, we're building modular, AI-powered systems that help visually impaired individuals navigate safely, interact independently, and access information in real time—bringing us closer to a more inclusive and accessible world.
          
          
          </p>

          
          
        </div>

        {/* Animated Logo */}
        <div className="p-8 rounded-lg  flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 z-10">
              <div className="absolute inset-0 animate-pulse-ring rounded-full"></div>
            </div>
            <div className="absolute inset-0">
              <Image
                src="/images/logo-png.png"
                alt="Beyond Vision Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction; 