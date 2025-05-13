import SectionContainer from "../components/SectionContainer";

const References = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        References
      </h2>
      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <p>Redmon et al. (2016). YOLO: Real-Time Object Detection</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <p>Li et al. (2022). BLIP: Bootstrapped Language-Image Pretraining</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <p>OpenAI (2023). ChatGPT for Conversational Assistance</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <p>Al-Razgan et al. (2020). Mobile Assistive Systems for the Blind</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <p>Tapu et al. (2017). A Survey on Vision-Based Assistive Technologies</p>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default References; 