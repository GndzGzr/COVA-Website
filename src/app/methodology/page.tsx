import React from 'react';
import Navigation from "@/app/components/Navigation";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import "./methodology.css";

const MethodologyPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 px-2 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-gradient">
            Our Methodology
          </h1>

          {/* Dataset Section */}
          <section id="dataset" className="mb-20 px-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Dataset
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-green-500/10 hover:border-green-500/20 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-8 px-2">1. Data Acquisition and Preprocessing</h3>
              
              <div className="space-y-8">
                <div className="p-5 sm:p-6 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-300 hover:bg-green-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-green-300">1.1 Campus Navigation Dataset</h4>
                  <p className="text-gray-300 mb-4 px-2 text-justify">
                    For the campus navigation module, a custom dataset was developed to reflect the unique environmental 
                    challenges of university campuses. The data collection involved video recordings across multiple 
                    campus locations at Hacettepe University.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Video Format: 1080p, 30fps</li>
                    <li>Frame Extraction: Extracted at 2fps using FFmpeg, resulting in ~14,000 frames</li>
                    <li>Final Dataset Size: 4,202 manually labeled images after filtering</li>
                  </ul>
                </div>

                <div className="p-5 sm:p-6 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-300 hover:bg-green-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-green-300">1.2 ATM Interaction Dataset</h4>
                  <p className="text-gray-300 mb-2 px-2 text-justify">The ATM dataset consists of:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Annotated images of ATM interfaces under real-world lighting</li>
                    <li>Finger and button positions labeled using Roboflow</li>
                    <li>Synthetic augmentations (rotation, blur, noise, occlusion) to increase robustness</li>
                  </ul>
                </div>

                <div className="p-5 sm:p-6 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-300 hover:bg-green-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-green-300">1.3 Preprocessing Pipeline</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Resizing: Images resized to 640×640 pixels</li>
                    <li>Normalization: Pixel values scaled to [0, 1]</li>
                    <li>Augmentation: Random flip, rotation, Gaussian noise, contrast adjustment</li>
                    <li>Annotation Format: YOLO format (class x_center y_center width height)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* YOLO Detection Section */}
          <section id="yolo-detection" className="mb-20 px-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              YOLO Detection
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-yellow-500/10 hover:border-yellow-500/20 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-8 px-2">2. Computational Models and Algorithms</h3>
              
              <div className="p-5 sm:p-6 border border-yellow-400/20 rounded-lg hover:border-yellow-400/40 transition-all duration-300 hover:bg-yellow-400/5">
                <h4 className="text-xl font-medium mb-4 px-2 text-yellow-300">2.1 YOLOv8 for Object Detection</h4>
                <p className="text-gray-300 mb-4 px-2 text-justify">
                  YOLOv8 was used for real-time object detection tasks. It optimizes the following loss function:
                </p>
                <div className="mb-4 bg-black/30 p-4 rounded text-yellow-200 text-center">
                  <BlockMath>
                    {`\\mathcal{L} = \\lambda_{box} \\cdot \\mathcal{L}_{CIoU} + \\lambda_{cls} \\cdot \\mathcal{L}_{cls} + \\lambda_{obj} \\cdot \\mathcal{L}_{obj}`}
                  </BlockMath>
                </div>
                <p className="mb-4 text-gray-300 px-2">Training Parameters:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                  <li>Epochs: 50</li>
                  <li>Batch size: 16</li>
                  <li>Optimizer: SGD with momentum 0.937</li>
                  <li>Learning rate: 0.01 with cosine decay</li>
                  <li>Evaluation Metric: mAP@0.5 and mAP@0.5:0.95</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Algorithms Section */}
          <section id="algorithms" className="mb-20 px-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Advanced Algorithms
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-blue-500/10 hover:border-blue-500/20 transition-colors">
              <div className="space-y-8">
                <div className="p-5 sm:p-6 border border-blue-400/20 rounded-lg hover:border-blue-400/40 transition-all duration-300 hover:bg-blue-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-blue-300">2.2 Visual Question Answering (VQA) with VLMs</h4>
                  <p className="text-gray-300 mb-4 px-2 text-justify">Two VLMs were explored:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>CogVLM: Visual expert module, multimodal alignment</li>
                    <li>BLIP-2: Frozen image encoders + LLM</li>
                  </ul>
                </div>

                <div className="p-5 sm:p-6 border border-blue-400/20 rounded-lg hover:border-blue-400/40 transition-all duration-300 hover:bg-blue-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-blue-300">2.3 OCR with EasyOCR</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Text Detection: CRAFT algorithm</li>
                    <li>Text Recognition: CRNN-based decoder</li>
                    <li>Post-Processing: Confidence threshold filtering and normalization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Application Section */}
          <section id="mobile-app" className="mb-20 px-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
              Mobile Application
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-8 px-2">3. System Architecture</h3>
              
              <div className="space-y-8">
                <div className="p-5 sm:p-6 border border-purple-400/20 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-purple-300">3.1 Modular Pipeline Overview</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Input Layer: Smart glasses or mobile camera</li>
                    <li>Processing Layer: YOLOv8 + VLMs on cloud (Paperspace)</li>
                    <li>Interaction Layer: Mobile app with voice input/output</li>
                  </ul>
                </div>

                <div className="p-5 sm:p-6 border border-purple-400/20 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-purple-300">3.2 Module Flow</h4>
                  <p className="mb-4 font-mono bg-black/30 p-4 rounded text-center text-purple-200">
                    Camera Input → YOLOv8 → Task Decision → ATM/Navigation/VQA → OCR/Text Detection → Voice Output
                  </p>
                </div>

                <div className="p-5 sm:p-6 border border-purple-400/20 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-purple-300">3.3 Optimization Techniques</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Multithreading for parallel module execution</li>
                    <li>FIFO queues for processing decoupling</li>
                    <li>Trigger mode to reduce processing load</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Vision-Language Models Section */}
          <section id="vlm" className="mb-20 px-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              Vision-Language Models
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-pink-500/10 hover:border-pink-500/20 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-8 px-2">4. Training and Testing</h3>
              
              <div className="space-y-8">
                <div className="p-5 sm:p-6 border border-pink-400/20 rounded-lg hover:border-pink-400/40 transition-all duration-300 hover:bg-pink-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-pink-300">4.1 Training</h4>
                  <p className="text-gray-300 mb-4 px-2 text-justify">Training using Ultralytics YOLOv8 CLI with custom datasets.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Campus dataset: 70% train / 15% val / 15% test</li>
                    <li>ATM dataset: 60% train / 20% val / 20% test</li>
                  </ul>
                </div>

                <div className="p-5 sm:p-6 border border-pink-400/20 rounded-lg hover:border-pink-400/40 transition-all duration-300 hover:bg-pink-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-pink-300">4.2 Testing and Validation</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 px-2">
                    <li>Frame processing latency</li>
                    <li>mAP on held-out test sets</li>
                    <li>OCR accuracy (edit distance)</li>
                    <li>VQA answer relevance (BLEU, human scoring)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cloud Infrastructure Section */}
          <section id="cloud" className="mb-20 px-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 px-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Cloud Infrastructure
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-orange-500/10 hover:border-orange-500/20 transition-colors">
              <h3 className="text-2xl font-medium text-white mb-8 px-2">5. Evaluation Methodology</h3>
              
              <div className="space-y-8">
                <div className="p-5 sm:p-6 border border-orange-400/20 rounded-lg hover:border-orange-400/40 transition-all duration-300 hover:bg-orange-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-orange-300">5.1 Detection Accuracy</h4>
                  <p className="text-gray-300 mb-4 px-2 text-justify">Mean Average Precision (mAP) used:</p>
                  <p className="mb-4 font-mono bg-black/30 p-4 rounded text-orange-200">
                    mAP@0.5 = (1/|C|) ∑ (precision per class × recall)
                  </p>
                </div>

                <div className="p-5 sm:p-6 border border-orange-400/20 rounded-lg hover:border-orange-400/40 transition-all duration-300 hover:bg-orange-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-orange-300">5.2 VQA Evaluation</h4>
                  <p className="text-gray-300">BLEU, METEOR, Human Grading</p>
                </div>

                <div className="p-5 sm:p-6 border border-orange-400/20 rounded-lg hover:border-orange-400/40 transition-all duration-300 hover:bg-orange-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-orange-300">5.3 OCR Evaluation</h4>
                  <p className="text-gray-300 mb-2 px-2 text-justify">Character Error Rate (CER):</p>
                  <p className="font-mono bg-black/30 p-4 rounded text-orange-200">
                    CER = (S + D + I) / N
                  </p>
                </div>

                <div className="p-5 sm:p-6 border border-orange-400/20 rounded-lg hover:border-orange-400/40 transition-all duration-300 hover:bg-orange-400/5">
                  <h4 className="text-xl font-medium mb-4 px-2 text-orange-300">5.4 Latency</h4>
                  <p className="text-gray-300">
                    Measured per-frame processing time for detection, OCR, VQA, and TTS. 
                    Threshold: &lt;500ms/task
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className="mb-12 px-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-green-500/10 hover:border-green-500/20 transition-colors">
              <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-6 px-2">Summary</h2>
              <p className="text-gray-300 leading-relaxed px-2 text-justify">
                The Beyond Vision system was developed through multi-phase methodology emphasizing real-world performance. 
                By combining YOLOv8, VLMs, OCR, and modular design, we created a scalable and adaptive assistive solution 
                for visually impaired users in academic environments.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MethodologyPage;
