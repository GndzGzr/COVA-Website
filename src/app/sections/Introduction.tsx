import SectionContainer from "../components/SectionContainer";

const Introduction = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Introduction
      </h2>
      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
        <p className="text-lg text-gray-300 leading-relaxed text-center">
        Today, over 285 million people worldwide live with visual impairments—39 million of them are completely blind (World Health Organization). In busy, complex spaces like university campuses, visually impaired students often struggle with navigation, spatial awareness, and using everyday services like ATMs.

While assistive technology has come a long way, traditional tools often fall short in adapting to real-world environments. That's where AI and Vision-Language Models (VLMs) step in—offering the ability to understand both images and language for smarter, more responsive assistance.

At Beyond Vision, we’re building modular, AI-powered systems that help visually impaired individuals navigate safely, interact independently, and access information in real time—bringing us closer to a more inclusive and accessible world.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Introduction; 