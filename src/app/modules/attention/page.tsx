import Image from "next/image";
import Navigation from "@/app/components/Navigation";

const AttentionPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            Attention Module: Walking Assistance System
          </h1>

          {/* Process Flow Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 gap-12">
              {/* Flow Diagram */}
              <div className="relative h-[400px] w-full group mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl"></div>
                <Image
                  src="/images/attention-module.png"
                  alt="Attention Module Process Flow"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Continuous Monitoring */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/10 hover:border-red-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-400">Continuous Monitoring</h3>
                  <p className="text-gray-300">Real-time environment scanning and obstacle detection using advanced computer vision.</p>
                </div>

                {/* Threat Assessment */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-pink-400">Threat Assessment</h3>
                  <p className="text-gray-300">Intelligent analysis of detected obstacles with distance calculation and risk evaluation.</p>
                </div>

                {/* Alert System */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/10 hover:border-red-500/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-6">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-red-400">Alert System</h3>
                  <p className="text-gray-300">Multi-level warning system with voice alerts and haptic feedback based on threat severity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Key Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Detection System
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Real-time obstacle detection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Distance measurement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Object classification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Path analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-pink-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Warning System
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Voice alerts with distance information</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Vibration feedback for urgency</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Directional guidance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Severity-based notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Technical Implementation
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-400">Core Technologies</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Custom-trained YOLOv8 Model</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Distance Calculation Algorithm</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Real-time Video Processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Multi-modal Feedback System</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-400">System Performance</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Continuous monitoring every x seconds</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Accurate distance measurement</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Low-latency warning system</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Custom dataset of 4,202 images</span>
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

export default AttentionPage;
