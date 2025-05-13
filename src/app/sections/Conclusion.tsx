import SectionContainer from "../components/SectionContainer";

const Conclusion = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Conclusion
      </h2>
      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
        <p className="text-gray-300 leading-relaxed">
          This project demonstrates a feasible and effective approach to delivering real-time 
          visual assistance to blind individuals using affordable, off-the-shelf mobile technologies. 
          The integration of computer vision, language models, and voice interaction can 
          significantly improve autonomy and confidence in unfamiliar environments such as 
          university campuses. Future iterations will explore adding navigation capabilities, 
          offline support, and wearable device integration.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Conclusion; 