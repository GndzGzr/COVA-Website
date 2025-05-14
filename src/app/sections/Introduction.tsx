import SectionContainer from "../components/SectionContainer";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <SectionContainer className="h-screen flex items-center">
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
          Introduction
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Text Content */}
          <div className="bg-white/[0.03] rounded-lg p-3 sm:p-4 md:p-6 order-2 lg:order-1">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-prose">
              Today, over 285 million people worldwide live with visual impairments—39 million of them are completely blind <Link href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" className="text-pink-500 hover:text-white transition-colors">World Health Organization</Link>.

              <span className="block mt-2 sm:mt-3">While assistive technology has come a long way, traditional tools often fall short in adapting to real-world environments. That&apos;s where AI and Vision-Language Models (VLMs) step in—offering the ability to understand both images and language for smarter, more responsive assistance.</span>

              <span className="block mt-2 sm:mt-3">At <span className="text-purple-500">Beyond Vision</span>, we&apos;re building modular, AI-powered systems that help visually impaired individuals navigate safely, interact independently, and access information in real time—bringing us closer to a more inclusive and accessible world.</span>
            </p>
          </div>

          {/* Animated Logo */}
          <div className="flex items-center justify-center h-full order-1 lg:order-2">
            <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-sm aspect-square">
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 animate-pulse-ring rounded-full"></div>
              </div>
              <div className="absolute inset-0">
                <Image
                  src="/images/eyesvgexpand.svg"
                  alt="Beyond Vision Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 384px, 448px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction; 