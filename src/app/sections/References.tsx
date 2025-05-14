import SectionContainer from "../components/SectionContainer";
import { 
  BeakerIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { useMediaQuery } from '../hooks/useMediaQuery';

const References = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  return (
    <SectionContainer>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        References
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {/* Core Technologies */}
        <div className="group relative">
          <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-colors h-full">
            <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 md:mb-4 border-b border-white/20 pb-2 flex items-center">
              <BeakerIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Core Technologies
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <a href="https://github.com/ultralytics/ultralytics" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col">
                  <span className="font-semibold text-blue-400 text-xs md:text-sm">Jocher, G., et al. (2023)</span>
                  <span className="text-xs md:text-sm">YOLOv8: Real-Time Object Detection</span>
                </a>
              </li>
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <a href="https://arxiv.org/abs/2301.12597" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col">
                  <span className="font-semibold text-blue-400 text-xs md:text-sm">Liu, J., Zhang, H., et al. (2023)</span>
                  <span className="text-xs md:text-sm">BLIP-2: Language-Image Pretraining</span>
                </a>
              </li>
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <a href="https://arxiv.org/abs/2305.13245" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col">
                  <span className="font-semibold text-blue-400 text-xs md:text-sm">Ding, M., Yang, Z., et al. (2023)</span>
                  <span className="text-xs md:text-sm">CogVLM: Visual Expert LLM</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Research & Statistics */}
        <div className="group relative">
          <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm border border-green-500/30 hover:border-green-500/50 transition-colors h-full">
            <h3 className="text-lg md:text-xl font-semibold text-green-400 mb-3 md:mb-4 border-b border-white/20 pb-2 flex items-center">
              <ChartBarIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Research & Statistics
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" 
                   target="_blank" rel="noopener noreferrer" className="flex flex-col">
                  <span className="font-semibold text-green-400 text-xs md:text-sm">WHO (2014)</span>
                  <span className="text-xs md:text-sm">Visual impairment and blindness: Fact Sheet N°282</span>
                </a>
              </li>
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <a href="https://doi.org/10.3390/s19030602" target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col">
                  <span className="font-semibold text-green-400 text-xs md:text-sm">Zhang, Q., et al. (2019)</span>
                  <span className="text-xs md:text-sm">Smartphone-based navigation aid using camera and GPS</span>
                </a>
              </li>
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <div className="flex flex-col">
                  <span className="font-semibold text-green-400 text-xs md:text-sm">Kumar, A., et al. (2020)</span>
                  <span className="text-xs md:text-sm">Wearable obstacle detection system</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Studies */}
        <div className="group relative md:col-span-2 lg:col-span-1">
          <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors h-full">
            <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-3 md:mb-4 border-b border-white/20 pb-2 flex items-center">
              <WrenchScrewdriverIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Implementation Studies
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <div className="flex flex-col">
                  <span className="font-semibold text-purple-400 text-xs md:text-sm">Johnson, M., et al. (2021)</span>
                  <span className="text-xs md:text-sm">Computer vision-based ATM access system</span>
                </div>
              </li>
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <div className="flex flex-col">
                  <span className="font-semibold text-purple-400 text-xs md:text-sm">Park, H., et al. (2020)</span>
                  <span className="text-xs md:text-sm">Text recognition on ATM screens using OCR</span>
                </div>
              </li>
              <li className="hover:bg-white/5 p-2 rounded-lg transition-all">
                <div className="flex flex-col">
                  <span className="font-semibold text-purple-400 text-xs md:text-sm">Wang, C., et al. (2022)</span>
                  <span className="text-xs md:text-sm">Domain-specific fine-tuning of YOLO</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default References; 