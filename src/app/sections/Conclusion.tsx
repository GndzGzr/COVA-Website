import SectionContainer from "../components/SectionContainer";
import { 
  LightBulbIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Conclusion = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        Conclusion
      </h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {/* Impact & Innovation */}
        <div className="group relative">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-colors h-full">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Impact & Innovation</h3>
            <p className="text-gray-300 leading-relaxed">
              Our project represents a transformative approach to how visually impaired individuals interact with their environment, 
              particularly focusing on two critical areas: ATM usage and campus navigation. By enabling independent access to these 
              essential services, we're taking significant steps toward greater autonomy.
            </p>
            <LightBulbIcon className="w-6 h-6 text-blue-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </div>

        {/* Key Features */}
        <div className="group relative">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-colors h-full">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Key Features</h3>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-green-500/50">
                <h4 className="text-xl text-white mb-2">ATM Module</h4>
                <p className="text-gray-300 leading-relaxed">
                  Features finger-tracking technology with real-time spoken feedback, powered by YOLOv8 for precise 
                  finger and button detection, complemented by EasyOCR for accurate text recognition.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-green-500/50">
                <h4 className="text-xl text-white mb-2">Navigation Module</h4>
                <p className="text-gray-300 leading-relaxed">
                  Utilizes a custom-trained YOLOv8 model on thousands of campus images to identify obstacles and 
                  provide timely safety alerts, enhancing independent mobility.
                </p>
              </div>
            </div>
            <ComputerDesktopIcon className="w-6 h-6 text-green-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </div>

        {/* Future Directions */}
        <div className="group relative md:col-span-2">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Future Directions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Enhanced model accuracy through expanded dataset collection</li>
                  <li>Implementation of lightweight AI models for mobile devices and smart glasses</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Integration of user feedback for improved accessibility</li>
                  <li>Real-world testing in banking and educational environments</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed italic">
                While currently in its conceptual phase, this project demonstrates significant potential for real-world impact. 
                With continued development and support, it could evolve into a powerful tool that meaningfully enhances the 
                independence and quality of life for visually impaired individuals.
              </p>
            </div>
            <RocketLaunchIcon className="w-6 h-6 text-purple-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Conclusion; 