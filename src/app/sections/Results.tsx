import SectionContainer from "../components/SectionContainer";
import Image from "next/image";
import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Results = () => {
  const [activeResult, setActiveResult] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  const results = [
    {
      id: 0,
      title: "Object Detection Excellence",
      description: "Our system achieved remarkable accuracy with 91.3% in campus obstacle detection and 89.4% for ATM interface elements, setting new standards in assistive technology.",
      imagePath: "/images/logo-svg.svg",
      imageAlt: "Object detection visualization",
      gradientClass: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      id: 1,
      title: "Real-time Processing Power",
      description: "Leveraging cloud GPU infrastructure, our system delivers instant auditory feedback and navigation guidance with minimal latency, ensuring a smooth user experience.",
      imagePath: "/images/logo-svg.svg",
      imageAlt: "Real-time processing visualization",
      gradientClass: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      id: 2,
      title: "Advanced Text Recognition",
      description: "With a 94.8% accuracy rate in text recognition across various conditions, our OCR system excels at making written information accessible to visually impaired users.",
      imagePath: "/images/logo-svg.svg",
      imageAlt: "Text recognition demonstration",
      gradientClass: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Intelligent Visual Understanding",
      description: "Our VQA system achieved a remarkable 4.3/5 human relevance score, enabling natural and context-aware interactions with the environment.",
      imagePath: "/images/logo-svg.svg",
      imageAlt: "Visual QA system interface",
      gradientClass: "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
  ];

  const handleResultHover = (resultId: number) => {
    if (resultId !== activeResult) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveResult(resultId);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 150);
      }, 150);
    }
  };

  const handleResultClick = (resultId: number) => {
    if (isMobile || isTablet) {
      handleResultHover(resultId);
    }
  };

  return (
    <SectionContainer>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
        Key Results & Achievements
      </h2>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 min-h-[500px] flex items-center">
        <div className={`w-full flex ${isMobile ? 'flex-col gap-6' : isTablet ? 'flex-col gap-8' : 'flex-row gap-12'}`}>
          {/* Left side - Result titles */}
          <div className={`${isMobile || isTablet ? 'w-full' : 'w-1/3'} flex flex-col gap-4 md:gap-6 justify-center`}>
            {results.map((result) => (
              <div
                key={result.id}
                className={`cursor-pointer transition-all duration-300 transform group ${
                  activeResult === result.id ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => !isMobile && !isTablet && handleResultHover(result.id)}
                onClick={() => handleResultClick(result.id)}
              >
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${result.gradientClass} bg-clip-text text-transparent relative`}>
                  {result.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100" />
                </h3>
              </div>
            ))}
          </div>

          {/* Vertical Line - Only show on desktop */}
          {!isMobile && !isTablet && (
            <div className="w-[2px] bg-gradient-to-b from-gray-500 via-white to-gray-500 self-stretch mx-4 opacity-20" />
          )}

          {/* Horizontal Line - Only show on mobile and tablet */}
          {(isMobile || isTablet) && activeResult !== null && (
            <div className="w-full h-[2px] bg-gradient-to-r from-gray-500 via-white to-gray-500 opacity-20 my-2 sm:my-3" />
          )}

          {/* Right side - Content */}
          <div className={`${isMobile || isTablet ? 'w-full' : 'flex-1'} flex items-center`}>
            <div className={`w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {results.map((result) => (
                result.id === activeResult && (
                  <div key={result.id} className={`flex ${isMobile ? 'flex-col gap-6' : isTablet ? 'flex-col gap-8' : 'flex-row items-center'} pr-0 md:pr-4`}>
                    <div className={`${isMobile || isTablet ? 'w-full' : 'flex-1'} space-y-4 md:space-y-6 ${!isMobile && !isTablet ? 'mr-12' : ''}`}>
                      <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-prose">
                        {result.description}
                      </p>
                    </div>

                    <div className={`${isMobile ? 'w-full h-[250px]' : isTablet ? 'w-full h-[300px]' : 'w-[400px] h-[400px]'} relative rounded-lg overflow-hidden flex-shrink-0 bg-white/5 border border-white/10`}>
                      <Image
                        src={result.imagePath}
                        alt={result.imageAlt}
                        fill
                        className="object-contain p-4 md:p-6 lg:p-8"
                        sizes={isMobile ? '100vw' : isTablet ? '(min-width: 768px) 80vw' : '(min-width: 1024px) 400px'}
                      />
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Results; 