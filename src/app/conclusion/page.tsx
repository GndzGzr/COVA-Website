import Navigation from "@/app/components/Navigation";

const ConclusionPage = () => {
  const sections = [
    {
      title: "Project Evolution",
      content: [
        "Initial unified approach with single AI model strategy",
        "Strategic pivot to multi-component specialized architecture",
        "Enhanced accuracy through focused implementations",
        "Development of component-specific solutions for ATM and navigation"
      ]
    },
    {
      title: "Key Achievements",
      content: [
        "Successful integration of VLMs in real-time assistive systems",
        "Development of specialized computer vision models for specific tasks",
        "Creation of a comprehensive campus-specific dataset with 4,202 images",
        "Implementation of voice-interactive interface for seamless module switching"
      ]
    },
    {
      title: "Technical Milestones",
      metrics: [
        {
          label: "ATM Button Detection",
          value: "89.4%",
          description: "Accuracy in button recognition"
        },
        {
          label: "Processing Speed",
          value: "75",
          description: "Images processed in ~14 seconds"
        },
        {
          label: "Dataset Size",
          value: "4,202",
          description: "Campus-specific training images"
        },
        {
          label: "Module Integration",
          value: "100%",
          description: "Core components integrated"
        }
      ]
    },
    {
      title: "Core Components",
      features: [
        {
          name: "ATM Assistant Module",
          details: [
            "Finger position tracking and feedback",
            "YOLOv8-based button detection",
            "EasyOCR for screen text recognition",
            "Voice-guided interface"
          ]
        },
        {
          name: "Campus Navigation Module",
          details: [
            "Custom-trained YOLOv8 model",
            "Real-time hazard proximity alerts",
            "Campus-specific dataset utilization",
            "Voice-based interaction system"
          ]
        }
      ]
    },
    {
      title: "Future Impact",
      content: [
        "Enhanced independence for visually impaired students",
        "Improved accessibility in educational institutions",
        "Potential for adaptation in other environments",
        "Contribution to assistive technology research"
      ]
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
            Project Conclusion
          </h1>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                  {section.title}
                </h2>

                {section.content && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-purple-400 mt-1">•</span>
                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {section.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3 sm:p-4 md:p-6 text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                          {metric.value}
                        </div>
                        <div className="text-base sm:text-lg font-medium text-white mb-1">
                          {metric.label}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.features && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {section.features.map((feature, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-4 sm:p-5 md:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                          {feature.name}
                        </h3>
                        <ul className="space-y-2">
                          {feature.details.map((detail, j) => (
                            <li key={j} className="flex items-start space-x-3">
                              <span className="text-purple-400 mt-1">•</span>
                              <span className="text-sm sm:text-base text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConclusionPage;
