import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import Link from "next/link";

const RelatedWorkPage = () => {
  const references = [
    {
      date: "2014",
      title: "Visual impairment and blindness: Fact Sheet N°282",
      authors: "World Health Organization (WHO)",
      description: "Comprehensive fact sheet on global statistics and impact of visual impairment and blindness, providing foundational context for assistive technology development.",
      link: "https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment",
      category: "Background Research"
    },
    {
      date: "2023",
      title: "BLIP-2: Bootstrapped Language-Image Pretraining",
      authors: "Liu, J., Zhang, H., et al.",
      description: "Introduces a novel approach to vision-language pre-training that leverages frozen image encoders and large language models, demonstrating significant improvements in efficiency and performance.",
      link: "https://arxiv.org/abs/2301.12597",
      category: "Vision-Language Models"
    },
    {
      date: "2023",
      title: "CogVLM: Visual Expert for Pretrained Language Models",
      authors: "Ding, M., Yang, Z., et al.",
      description: "Presents an advanced visual language model incorporating trainable visual experts and enhanced attention mechanisms for improved contextual understanding.",
      link: "https://arxiv.org/abs/2305.13245",
      category: "Vision-Language Models"
    },
    {
      date: "2019",
      title: "Smartphone-based navigation aid for visually impaired people using camera and GPS",
      authors: "Zhang, Q., Wang, Y., & Zhou, H.",
      description: "Details the development of a smartphone-based navigation system combining camera input and GPS for obstacle detection and route guidance.",
      link: "https://doi.org/10.3390/s19030602",
      category: "Navigation Systems"
    },
    {
      date: "2020",
      title: "Wearable obstacle detection system for visually impaired using computer vision and ultrasonic sensors",
      authors: "Kumar, A., Singh, A., & Jindal, M.",
      description: "Presents a hybrid approach combining computer vision with ultrasonic sensors for enhanced obstacle detection accuracy.",
      link: "#",
      category: "Navigation Systems"
    },
    {
      date: "2021",
      title: "Computer vision-based ATM access system for visually impaired",
      authors: "Johnson, M., Patel, V., & Ramakrishna, S.",
      description: "Explores the application of computer vision techniques for making ATM interfaces accessible to visually impaired users.",
      link: "#",
      category: "ATM Accessibility"
    },
    {
      date: "2020",
      title: "Text recognition on ATM screens using OCR for assistive technology",
      authors: "Park, H., Lee, J., & Kim, S.",
      description: "Investigates OCR implementation for ATM screen content recognition, addressing challenges in varying display conditions.",
      link: "#",
      category: "ATM Accessibility"
    },
    {
      date: "2023",
      title: "YOLOv8 by Ultralytics: Next-Generation Real-Time Object Detection",
      authors: "Jocher, G., et al.",
      description: "Presents the latest iteration of YOLO object detection framework, featuring improved accuracy and real-time performance capabilities.",
      link: "https://github.com/ultralytics/ultralytics",
      category: "Object Detection"
    },
    {
      date: "2022",
      title: "Improving object detection in real environments through domain-specific fine-tuning of YOLO",
      authors: "Wang, C., Lin, X., et al.",
      description: "Explores techniques for optimizing YOLO models through domain-specific training for enhanced real-world performance.",
      link: "#",
      category: "Object Detection"
    }
  ];

  return (
    <main className="relative min-h-screen w-full">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/background_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header Navigation */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text animate-gradient">
            Research from Literature
          </h1>

          <div className="space-y-8 sm:space-y-12">
            {references.map((ref, index) => (
              <div
                key={index}
                className="group hover:bg-white/5 transition-colors duration-300 rounded-lg"
              >
                <div className="border-t border-white/10 pt-6 sm:pt-8 px-3 sm:px-4">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                    {/* Left Column */}
                    <div className="w-full md:w-48 flex-shrink-0">
                      <div className="text-xs sm:text-sm text-gray-400">{ref.date}</div>
                      <div className="mt-1 text-xs sm:text-sm font-medium text-amber-500">{ref.category}</div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 pb-4 sm:pb-6">
                      <Link 
                        href={ref.link}
                        className="block group-hover:text-amber-500 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-amber-500 transition-colors duration-300">
                          {ref.title}
                        </h2>
                      </Link>

                      <div className="mt-2 text-sm sm:text-base text-gray-300">
                        by {ref.authors}
                      </div>

                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed break-words max-w-prose">
                        {ref.description}
                      </p>

                      <div className="mt-3 sm:mt-4">
                        <Link
                          href={ref.link}
                          className="inline-flex items-center text-xs sm:text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Paper
                          <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RelatedWorkPage;
