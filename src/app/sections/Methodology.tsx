import SectionContainer from "../components/SectionContainer";

const Methodology = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Methodology
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Computer Vision */}
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-colors">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Computer Vision</h3>
          <p className="text-gray-300">
            Utilizing advanced object detection and scene understanding algorithms to process real-time video feed. 
            Implements YOLOv8 for object detection and segmentation, enabling accurate identification of obstacles, 
            pathways, and important landmarks.
          </p>
        </div>

        {/* Voice Interaction */}
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Voice Interaction</h3>
          <p className="text-gray-300">
            Natural language processing system provides intuitive voice commands and feedback. 
            Implements real-time speech-to-text and text-to-speech conversion for seamless communication, 
            with context-aware responses and customizable voice settings.
          </p>
        </div>

        {/* Navigation System */}
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/50 transition-colors">
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">Navigation System</h3>
          <p className="text-gray-300">
            Combines GPS data with visual landmarks for precise indoor and outdoor navigation. 
            Features dynamic path planning, obstacle avoidance, and real-time route adjustments 
            based on environmental changes and user preferences.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Methodology; 