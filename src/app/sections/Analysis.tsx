import SectionContainer from "../components/SectionContainer";

const Analysis = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Analysis
      </h2>
      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
        <div className="space-y-6">
          {/* Performance */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Performance</h3>
            <p className="text-gray-300">
              YOLOv8 achieved high FPS and reliable detection, though accuracy decreased in low-light conditions.
            </p>
          </div>

          {/* Usability */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Usability</h3>
            <p className="text-gray-300">
              The single-tap interaction model (tap-to-speak) was found intuitive, especially when paired with voice feedback.
            </p>
          </div>

          {/* Limitations */}
          <div>
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">Limitations</h3>
            <p className="text-gray-300">
              The app depends on camera visibility and sufficient internet connectivity. Indoor localization was not implemented, 
              limiting full navigation support.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Analysis; 