import Image from 'next/image';
import SectionContainer from "../components/SectionContainer";

const Modules = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Core Modules
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Attention Module */}
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-colors">
          <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
            <Image
              src="/images/attention-example.jpg"
              alt="Attention module example"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
            <span className="mr-2">Attention</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </h3>
          <p className="text-gray-300">
            Detects and announces obstacles or objects (like stairs, doors, people) in real-time. 
            Provides immediate awareness of surroundings through continuous environmental scanning 
            and object recognition.
          </p>
        </div>

        {/* Apply Module */}
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors">
          <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
            <Image
              src="/images/apply-example.jpg"
              alt="Apply module example"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
            <span className="mr-2">Apply</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </h3>
          <p className="text-gray-300">
            Understands structured scenes (like signs, devices) and allows the user to ask: 
            "What's on this screen?" Processes and interprets complex visual information, 
            making it accessible through detailed verbal descriptions.
          </p>
        </div>

        {/* Communicate Module */}
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/50 transition-colors">
          <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
            <Image
              src="/images/communicate-example.jpg"
              alt="Communicate module example"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-pink-400 mb-4 flex items-center">
            <span className="mr-2">Communicate</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </h3>
          <p className="text-gray-300">
            Engages in natural voice conversations for tasks, directions, or information. 
            Provides intuitive dialogue interface for users to interact with the system 
            and receive clear, context-aware responses.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Modules; 