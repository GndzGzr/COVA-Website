import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import "./introduction.css";

const IntroductionPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Beyond Vision: AI-Powered Assistance for Visual Impairment
          </h1>

          {/* Overview Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-200">
                  Assistive technology has witnessed significant evolution in recent decades, particularly with the advancement of artificial intelligence and multimodal machine learning. Among these, Vision-Language Models (VLMs) have emerged as promising tools that combine visual and linguistic understanding to facilitate human-computer interaction.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
                  With over <span className="text-purple-400 font-semibold">285 million</span> visually impaired people globally—<span className="text-purple-400 font-semibold">39 million</span> of whom are blind—according to the{" "}
                  <Link href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-2 decoration-purple-500/30 hover:decoration-purple-500">
                    World Health Organization
                  </Link>
                  , there is a pressing need for inclusive solutions that enable equitable participation in society.
                </p>
              </div>
              <div className="relative h-[400px] w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"></div>
                <Image
                  src="/images/cogvlm-architecture.png"
                  alt="CogVLM Architecture Diagram"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-sm text-gray-400 text-center mt-4 italic">Figure 1: Architecture of CogVLM and Vision-Language Models</p>
              </div>
            </div>
          </section>

          {/* Problem Definition Section */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Problem Definition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Campus Navigation Difficulties
                </h3>
                <ul className="list-none space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Dynamic obstacle avoidance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Real-time spatial orientation and contextual awareness</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Recognition of landmarks and destination identification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Navigational assistance through crowded environments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  ATM Accessibility Limitations
                </h3>
                <ul className="list-none space-y-4 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Inability to interpret on-screen content without external help</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Difficulty locating and identifying ATM buttons</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Lack of secure, private, and independent transaction mechanisms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-pink-400">•</span>
                    <span>Absence of real-time feedback for finger position</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Literature Review Section */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Literature Review
            </h2>
            <div className="space-y-8">
              {/* VLMs Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Vision-Language Models (VLMs) in Assistive Applications
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    VLMs have demonstrated potential in enhancing accessibility by enabling machines to interpret visual input and respond in natural language. Liu et al. <a href="https://arxiv.org/abs/2301.12597" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[2]</a> introduced BLIP-2, a pre-trained vision-language model that enables efficient multimodal understanding by combining frozen vision encoders with large language models (LLMs).
                  </p>
                  <p>
                    CogVLM <a href="https://arxiv.org/abs/2311.03079" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[3]</a>, an advanced model incorporating trainable visual experts and enhanced attention mechanisms, improved contextual alignment between visual features and language generation.
                  </p>
                </div>
              </div>

              {/* Navigation Systems Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Navigation Assistance Systems
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Research on assistive navigation has largely focused on GPS-based and computer vision-driven systems. Zhang et al. <a href="https://ieeexplore.ieee.org/document/9956561" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[4]</a> proposed a smartphone-based solution utilizing camera input for obstacle detection.
                  </p>
                  <p>
                    Kumar et al. <a href="https://doi.org/10.1109/ICACCS.2020.9074834" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[5]</a> introduced a hybrid system combining ultrasonic sensors with computer vision.
                  </p>
                </div>
              </div>

              {/* ATM Technologies Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  ATM Accessibility Technologies
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Traditional ATM accessibility features include audio instructions and tactile indicators. Johnson et al. <a href="https://doi.org/10.1145/3373625.3416989" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[6]</a> employed computer vision to locate ATM buttons.
                  </p>
                  <p>
                    Park et al. <a href="https://doi.org/10.1109/ICCE.2019.8661995" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[7]</a> combined Optical Character Recognition (OCR) with visual mapping to interpret screen contents.
                  </p>
                </div>
              </div>

              {/* YOLO Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Object Detection with YOLOv8
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    The YOLO (You Only Look Once) framework, particularly its latest iteration YOLOv8, has become a cornerstone of real-time object detection. Studies <a href="https://arxiv.org/abs/2305.09972" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500">[8]</a> confirm YOLOv8's high performance in speed and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hypothesis and Research Questions Section */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Hypothesis and Research Questions
            </h2>
            <div className="space-y-8">
              {/* Hypothesis */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Research Hypothesis
                </h3>
                <div className="text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    This project is guided by the hypothesis that a hybrid system combining task-specific computer vision models (YOLOv8, EasyOCR) with general-purpose Vision-Language Models (CogVLM, BLIP-2) can outperform standalone approaches in providing real-time, context-aware assistance for visually impaired individuals.
                  </p>
                </div>
              </div>

              {/* Research Questions */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Research Questions
                </h3>
                <div className="space-y-6 text-gray-300">
                  <div className="p-6 border border-purple-400/20 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-400/5">
                    <h4 className="text-xl font-medium mb-4 text-purple-300">Real-time VLM Deployment</h4>
                    <p className="text-lg">Can VLMs be effectively deployed in real-time systems for assistive purposes without compromising reliability?</p>
                  </div>

                  <div className="p-6 border border-purple-400/20 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-400/5">
                    <h4 className="text-xl font-medium mb-4 text-purple-300">Architectural Balance</h4>
                    <p className="text-lg">What is the optimal architectural balance between general-purpose VLMs and specialized object detection models in assistive scenarios?</p>
                  </div>

                  <div className="p-6 border border-purple-400/20 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-400/5">
                    <h4 className="text-xl font-medium mb-4 text-purple-300">Modular Design</h4>
                    <p className="text-lg">How can such systems be modularly designed to adapt to multiple tasks (e.g., navigation, ATM usage) without performance degradation?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Proposed Solution Section */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Proposed Solution
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Beyond Vision is a modular, multi-modal system that integrates real-time computer vision, OCR, and VLMs to assist visually impaired individuals with campus navigation and ATM usage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-purple-400/5 rounded-lg">
                  <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Core Components</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Custom-trained YOLOv8 Models</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>EasyOCR for text extraction</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Intuitive Voice Interface</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Visual Question Answering (VQA)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Cloud-Based Architecture</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-purple-400/5 rounded-lg">
                  <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Key Features</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Real-time obstacle detection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Spatial awareness and navigation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>ATM interaction assistance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Natural language processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-pink-400">•</span>
                      <span>Modular and scalable design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* References Section */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              References
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
              <ol className="list-decimal list-inside space-y-4 text-gray-300">
                {[
                  { href: "https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment", text: "World Health Organization - Blindness and Visual Impairment" },
                  { href: "https://arxiv.org/abs/2301.12597", text: "BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models" },
                  { href: "https://arxiv.org/abs/2311.03079", text: "CogVLM: Visual Expert for Large Language Models" },
                  { href: "https://ieeexplore.ieee.org/document/9956561", text: "Smartphone-based Navigation Assistance for Visually Impaired People" },
                  { href: "https://doi.org/10.1109/ICACCS.2020.9074834", text: "Hybrid Navigation System for Visually Impaired Using Computer Vision" },
                  { href: "https://doi.org/10.1145/3373625.3416989", text: "Vision-based ATM Button Detection for Assistive Technology" },
                  { href: "https://doi.org/10.1109/ICCE.2019.8661995", text: "OCR-based Screen Content Interpretation for ATM Accessibility" },
                  { href: "https://arxiv.org/abs/2305.09972", text: "YOLOv8: A Comprehensive Analysis" }
                ].map((ref, index) => (
                  <li key={index} className="hover:bg-purple-400/5 p-3 rounded-lg transition-colors">
                    <a
                      href={ref.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-400 transition-colors underline decoration-2 decoration-pink-500/30 hover:decoration-pink-500"
                    >
                      {ref.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
