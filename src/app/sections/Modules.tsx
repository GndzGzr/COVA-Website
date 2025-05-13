import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SectionContainer from "../components/SectionContainer";
import { useState } from 'react';

const Modules = () => {
  const router = useRouter();
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const modules = [
    {
      id: 'attention',
      title: 'Attention',
      gradientClass: 'bg-gradient-to-r from-red-500 to-pink-500',
      question: 'Warn me if any obstacle is front of me.',
      answer: 'Stop! There is a person in front of you in one and half meter, you can turn right or left',
      image: '/images/IMG_1106.JPEG'
    },
    {
      id: 'apply',
      title: 'Apply',
      gradientClass: 'bg-gradient-to-r from-blue-500 to-purple-500',
      question: "What's written on this sign?",
      answer: 'Kredi kartından nakit avans çekme',
      image: '/images/atm-module.png'
    },
    {
      id: 'communicate',
      title: 'Communicate',
      gradientClass: 'bg-gradient-to-r from-green-500 to-teal-500',
      question: 'Describe the environment',
      answer: "The image features a small stone trash can, located on a sidewalk. The trash can is red in color, placed next to a tree. There are several cigarettes scattered around the trash can, and a couple of them are also near the tree. Additionally, there is a fire hydrant in the scene, located further away from the trash can.",
      image: '/images/IMG_1680.JPEG'
    }
  ];

  const handleModuleClick = (moduleId: string) => {
    router.push(`/modules/${moduleId.toLowerCase()}`);
  };

  const handleModuleHover = (moduleId: string) => {
    if (moduleId !== activeModule) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveModule(moduleId);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 150);
      }, 150);
    }
  };

  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-2 text-center">
        Core Modules
      </h2>

      <div className="max-w-7xl mx-auto px-8 min-h-[500px] flex items-center">
        <div className="flex gap-12 w-full">
          {/* Left side - Module titles */}
          <div className="w-1/5 flex flex-col gap-8 justify-center">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`cursor-pointer transition-all duration-300 transform group ${
                  activeModule === module.id ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => handleModuleHover(module.id)}
                onClick={() => handleModuleClick(module.id)}
              >
                <h3 className={`text-4xl font-bold ${module.gradientClass} bg-clip-text text-transparent relative`}>
                  {module.title}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100" />
                </h3>
              </div>
            ))}
          </div>

          {/* Vertical Line */}
          <div className="w-[2px] bg-gradient-to-b from-gray-500 via-white to-gray-500 self-stretch mx-4 opacity-20" />

          {/* Right side - Content */}
          <div className="flex-1 flex items-center">
            {activeModule && (
              <div className={`w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {modules.map((module) => (
                  module.id === activeModule && (
                    <div key={module.id} className="flex items-center pr-4">
                      <div className="flex-1 space-y-8 mr-12">
                        <p className="text-2xl font-semibold text-white leading-relaxed">
                          Q: {module.question}
                        </p>
                        
                        <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                          "{module.answer}"
                        </p>
                      </div>

                      <div className="w-[450px] h-[400px] relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={module.image}
                          alt={`${module.title} example`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 450px) 100vw, 450px"
                        />
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
            
            {!activeModule && (
              <div className="w-full text-center text-gray-400">
                Hover over a module to see its details
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Modules; 