import Image from "next/image";
import Navigation from "@/app/components/Navigation";

const ApplyPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Apply Module: ATM Assistance System
          </h1>

          {/* Process Flow Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 gap-12">
              {/* Flow Diagram */}
              <div className="relative h-[400px] w-full group mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                <Image
                  src="/images/apply-module.png"
                  alt="Apply Module Process Flow"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Text Recognition */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Screen Text Recognition</h3>
                  <p className="text-gray-300">Advanced OCR technology to read and interpret ATM screen content in real-time.</p>
                </div>

                {/* Button Detection */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Button & Finger Detection</h3>
                  <p className="text-gray-300">Real-time tracking of finger position and button locations using YOLOv8 object detection.</p>
                </div>

                {/* Voice Guidance */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Voice Guidance</h3>
                  <p className="text-gray-300">Clear audio instructions and feedback for safe and independent ATM operation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Key Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  ATM Interaction
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Precise button location mapping</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Real-time finger position tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Screen content interpretation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Transaction step guidance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Safety Features
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Private audio feedback</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Secure transaction validation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Error prevention system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Emergency assistance options</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Implementation
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">Core Technologies</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>YOLOv8 Object Detection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>EasyOCR Text Recognition</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>Real-time Position Tracking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>Text-to-Speech System</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">System Performance</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>75 frames processing in ~14 seconds</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>High-accuracy button detection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>Voice-triggered processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-purple-400">•</span>
                      <span>Optimized response time</span>
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

export default ApplyPage;
