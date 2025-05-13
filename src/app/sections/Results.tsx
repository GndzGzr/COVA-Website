import SectionContainer from "../components/SectionContainer";

const Results = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Results
      </h2>
      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
        <p className="text-gray-300 mb-4">
          The application was tested in simulated campus environments and real indoor spaces. It successfully:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            Detected and alerted users to objects with an average latency less than 300ms
          </li>
          <li>
            Provided accurate scene captions for over 85% of test images
          </li>
          <li>
            Handled voice interactions with GPT-based chat for custom queries like "Where is the nearest restroom?"
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Results; 