import Image from "next/image";
import Navigation from "@/app/components/Navigation";

const CommunicatePage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 bg-clip-text text-transparent animate-gradient">
            Communicate Module: Visual Understanding & Response
          </h1>

          {/* Process Flow Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 gap-12">
              {/* Flow Diagram */}
              <div className="relative h-[400px] w-full group mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl"></div>
                <Image
                  src="/images/communicate-module.png"
                  alt="Communicate Module Process Flow"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Camera Input */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/10 hover:border-green-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-400">Camera Input</h3>
                  <p className="text-gray-300">Real-time visual data capture through smart glasses or mobile device camera for continuous environmental monitoring.</p>
                </div>

                {/* Processing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-teal-500/10 hover:border-teal-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-teal-400">Visual Processing</h3>
                  <p className="text-gray-300">Advanced image analysis using Visual Language Models (VLM) to understand scene context, objects, and text within the environment.</p>
                </div>

                {/* Response */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/10 hover:border-green-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-400">Voice Response</h3>
                  <p className="text-gray-300">Natural language responses converted to speech, providing clear and contextual information about the environment to the user.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Key Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Environmental Understanding
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Scene description and analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Object recognition and location</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Text recognition and interpretation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Spatial relationship understanding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-teal-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Interactive Features
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Natural language queries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Context-aware responses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Real-time feedback</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Customizable voice settings</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Technical Implementation
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">Core Technologies</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Visual Language Models (VLM)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Real-time Image Processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Text-to-Speech Synthesis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">Performance Metrics</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Low latency response time</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>High accuracy in scene understanding</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Efficient resource utilization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-teal-400">•</span>
                      <span>Robust error handling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CommunicatePage;
