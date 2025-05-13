import SectionContainer from "../components/SectionContainer";
import Image from "next/image";
import { useState } from 'react';

const Results = () => {
  const [activeResult, setActiveResult] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Key Results & Achievements
      </h2>

      <div className="max-w-7xl mx-auto px-8 min-h-[500px] flex items-center">
        <div className="flex gap-12 w-full">
          {/* Left side - Result titles */}
          <div className="w-1/3 flex flex-col gap-8 justify-center">
            {results.map((result) => (
              <div
                key={result.id}
                className={`cursor-pointer transition-all duration-300 transform group ${
                  activeResult === result.id ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => handleResultHover(result.id)}
              >
                <h3 className={`text-3xl font-bold ${result.gradientClass} bg-clip-text text-transparent relative`}>
                  {result.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100" />
                </h3>
              </div>
            ))}
          </div>

          {/* Vertical Line */}
          <div className="w-[2px] bg-gradient-to-b from-gray-500 via-white to-gray-500 self-stretch mx-4 opacity-20" />

          {/* Right side - Content */}
          <div className="flex-1 flex items-center">
            <div className={`w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {results.map((result) => (
                result.id === activeResult && (
                  <div key={result.id} className="flex items-center pr-4">
                    <div className="flex-1 space-y-8 mr-12">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        {result.description}
                      </p>
                    </div>

                    <div className="w-[400px] h-[400px] relative rounded-lg overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
                      <Image
                        src={result.imagePath}
                        alt={result.imageAlt}
                        fill
                        className="object-contain p-8"
                        sizes="(max-width: 400px) 100vw, 400px"
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