import SectionContainer from "../components/SectionContainer";
import Link from "next/link";
import { 
  CircleStackIcon, 
  CameraIcon,
  CalculatorIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const Methodology = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Methodology
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Dataset */}
        <Link href="/methodology/dataset" className="group relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Dataset</h3>
            <p className="text-gray-300">
              Curated comprehensive dataset of urban environments, ATMs, obstacles, and navigation scenarios.
              Includes diverse lighting conditions, weather situations, and real-world scenarios to ensure
              robust model training and validation.
            </p>
            <CircleStackIcon className="w-6 h-6 text-green-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </Link>

        {/* YOLO Detection */}
        <Link href="/methodology/yolo-detection" className="group relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">YOLO Detection</h3>
            <p className="text-gray-300">
              Specialized YOLOv8 models trained for ATM detection and obstacle recognition.
              Features real-time object detection, segmentation, and tracking capabilities
              optimized for low-latency mobile deployment.
            </p>
            <CameraIcon className="w-6 h-6 text-yellow-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </Link>

        {/* Algorithms */}
        <Link href="/methodology/algorithms" className="group relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Advanced Algorithms</h3>
            <p className="text-gray-300">
              Integration of EasyOCR for text recognition, sophisticated distance calculation,
              and danger assessment algorithms. Real-time processing for immediate hazard
              detection and safety alerts.
            </p>
            <CalculatorIcon className="w-6 h-6 text-blue-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </Link>

        {/* Mobile App */}
        <Link href="/methodology/mobile-app" className="group relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Mobile Application</h3>
            <p className="text-gray-300">
              User-friendly mobile interface with advanced voice interaction capabilities.
              Features intuitive navigation controls, real-time feedback, and customizable
              accessibility settings for enhanced user experience.
            </p>
            <DevicePhoneMobileIcon className="w-6 h-6 text-purple-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </Link>

        {/* VLM Integration */}
        <Link href="/methodology/vlm" className="group relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-pink-400 mb-4">Vision-Language Models</h3>
            <p className="text-gray-300">
              Integration of LLaVA and GPT models for advanced scene understanding and
              natural language interaction. Enables detailed scene descriptions and
              contextual assistance for users.
            </p>
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-pink-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </Link>

        {/* Cloud Deployment */}
        <Link href="/methodology/cloud" className="group relative">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-orange-500/30 hover:border-orange-500/50 transition-colors">
            <h3 className="text-2xl font-semibold text-orange-400 mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300">
              Scalable cloud architecture for model deployment and real-time processing.
              Ensures high availability, low latency, and seamless updates while
              maintaining data security and privacy.
            </p>
            <CloudIcon className="w-6 h-6 text-orange-400 absolute bottom-4 right-4 transform transition-transform group-hover:scale-125 group-hover:rotate-12" />
          </div>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Methodology; 