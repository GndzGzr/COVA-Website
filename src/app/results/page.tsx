import Image from "next/image";
import Navigation from "@/app/components/Navigation";

const ResultsPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Project Results & Achievements
          </h1>

          {/* Key Metrics Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Object Detection */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Object Detection</h3>
                <p className="text-4xl font-bold text-white mb-2">91.3%</p>
                <p className="text-gray-400">mAP@0.5 accuracy in campus navigation</p>
              </div>

              {/* ATM Interface */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">ATM Interface</h3>
                <p className="text-4xl font-bold text-white mb-2">89.4%</p>
                <p className="text-gray-400">mAP@0.5 in button detection</p>
              </div>

              {/* OCR Performance */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">OCR Accuracy</h3>
                <p className="text-4xl font-bold text-white mb-2">94.8%</p>
                <p className="text-gray-400">Text recognition accuracy</p>
              </div>

              {/* VQA Performance */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-rose-500/10 hover:border-rose-500/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-rose-400">VQA Score</h3>
                <p className="text-4xl font-bold text-white mb-2">4.3/5</p>
                <p className="text-gray-400">Human relevance rating</p>
              </div>
            </div>
          </section>

          {/* Training Details */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              System Training & Validation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  YOLOv8 Training Metrics
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>50 epochs training duration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Early stopping for optimal convergence</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>mAP@0.5 and mAP@0.5:0.95 metrics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Custom dataset of 4,202 images</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  VLM Performance
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>CogVLM outperformed BLIP-2 in context</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Inference-only mode deployment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>High relevance in free-form queries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>Real-time response capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparative Analysis */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Comparison with State-of-the-Art
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-purple-400/20 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-400">Our System</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 91.3% obstacle detection</li>
                    <li>• 89.4% ATM interface accuracy</li>
                    <li>• VQA integration</li>
                    <li>• Real-time processing</li>
                  </ul>
                </div>

                <div className="p-6 border border-purple-400/20 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-400">Zhang et al.</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 85% obstacle accuracy</li>
                    <li>• No VQA capabilities</li>
                    <li>• Limited context awareness</li>
                    <li>• Smartphone-only</li>
                  </ul>
                </div>

                <div className="p-6 border border-purple-400/20 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-400">Johnson et al.</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 90% button accuracy</li>
                    <li>• Limited robustness</li>
                    <li>• No contextual understanding</li>
                    <li>• Fixed lighting conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              Key Takeaways & Future Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-pink-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-pink-400">Achievements</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>State-of-the-art detection accuracy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>Successful VLM integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>Reliable OCR performance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>Modular system architecture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-rose-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-rose-400">Future Directions</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>Dynamic lighting adaptation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>Enhanced offline capabilities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>Indoor location mapping</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-rose-400">•</span>
                    <span>User customization options</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
