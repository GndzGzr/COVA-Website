import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa';

const ParticipantsPage = () => {
  const participants = [
    {
      name: "Ömer Faruk Horat",
      role: "Team Member",
      studentId: "2200356086",
      title1: "The Manager",
      title2: "Stylish Moral",
      image: "/images/participants/omer.JPEG",
      thoughts: "[Your thoughts and perspective about the project, its challenges, and achievements will go here. This section should reflect your personal experience and insights gained throughout the development process.]",
      linkedin: "https://www.linkedin.com/in/omerfarukhrt",
    },
    {
      name: "Ecem Altınkeser",
      role: "Team Member",
      studentId: "2210356019",
      title1: "PDF Miner",
      title2: "Label Goblin",
      image: "/images/participants/ecem.jpg",
      thoughts: "I believe that our project demonstrates how the challenges faced by our visually impaired friends in daily life can be addressed. Throughout this project, I learned how challenging it can be to work with artificial intelligence models, how we often need to try many different approaches before reaching the desired outcome, and how training a model to achieve accurate results is a demanding task. Because of all these, I truly believe that this project has taught me a great deal.",
      linkedin: "https://www.linkedin.com/in/ecemaltinkeser/",
    },
    {
      name: "Buğrahan Çıldır",
      role: "Team Member",
      studentId: "2200356017",
      title1: "The AI Alchemist",
      title2: "The Assistive Tech Hero",
      image: "/images/participants/bugra.jpg",
      thoughts: "This graduation project was developed to support visually impaired individuals in leading a safer and more independent campus life. Throughout the project, I had the opportunity to experience firsthand the potential of artificial intelligence and image processing technologies to create social impact. During the development phase, conducting a one-on-one interview with a visually impaired person and listening to their challenges played a crucial role in shaping the direction of the project and focusing on real needs. While developing a system capable of real-time analysis and providing audio guidance to the user, I significantly improved both my technical knowledge and problem-solving skills. Working to address a social issue transformed this project from an academic task into a meaningful and motivating journey for me.",
      linkedin: "https://www.linkedin.com/in/buğrahan-çıldır-172b17219/",
    },
    {
      name: "Doğukan Aytekin",
      role: "Team Member",
      studentId: "2200356003",
      title1: "Cloud and Yolo Maestro",
      title2: "dockerKAN",
      image: "/images/participants/doukan.jpg",
      thoughts: "This graduation project is a socially-driven engineering effort aimed at addressing real-life challenges faced by visually impaired individuals. For the first time, I applied the technical knowledge I gained throughout my university education to directly solve a real-world need, which allowed me to experience not just a theoretical but also a long-term, responsibility-driven project. By observing the challenges in a campus environment and developing user-centered solutions, I was able to contribute to solving a human-centered problem—an experience that significantly shaped my perspective on the engineering profession.",
      linkedin: "https://www.linkedin.com/in/doğukan-aytekin-13ab60279/",
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


        {/* Advisor Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border-2 border-amber-500/30">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 relative rounded-xl overflow-hidden">
                <Image
                  src="/images/participants/hacer.jpeg"
                  alt="Assoc. Prof. Hacer Yalım Keleş"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white mb-2">
                  Assoc. Prof. Hacer Yalım Keleş
                </h2>
                <p className="text-amber-500 font-medium mb-4">Project Supervisor</p>
                <Link
                  href="https://www.linkedin.com/in/haceryalimkeles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="w-full h-[80vh] flex">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="relative flex-1 h-full group transition-all duration-500 ease-in-out hover:flex-[2.5] overflow-hidden"
              style={{
                clipPath: `polygon(
                  ${index === 0 ? '0% 0%, 99% 0%, 95% 100%, 0% 100%' : 
                   index === participants.length - 1 ? '5% 0%, 100% 0%, 100% 100%, 1% 100%' : 
                   '5% 0%, 99% 0%, 95% 100%, 1% 100%'}
                )`,
                transition: 'clip-path 500ms ease-in-out, flex-grow 500ms ease-in-out'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-500 ease-in-out">
                <Image
                  src={participant.image}
                  alt={participant.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 ease-in-out"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="relative h-full flex flex-col justify-end">
                  <div className="relative px-12 pb-10 pt-8 overflow-y-auto max-h-[85%] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-amber-500 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-amber-600">
                    <div className={`max-w-2xl space-y-6 transition-all duration-500 ease-in-out ${
                      index <= 1 ? 'ml-0 text-left' : 'ml-auto text-right'
                    }`}>
                      <h2 className="text-3xl font-bold text-white">
                        {participant.name}
                      </h2>
                      <p className="text-amber-500 font-medium text-lg">
                        {participant.role}
                      </p>
                      <div className="space-y-3">
                        <p className="text-gray-200 italic">{participant.title1}</p>
                        <p className="text-gray-200 italic">{participant.title2}</p>
                      </div>
                      <div className={`bg-black/30 rounded-lg px-4 backdrop-blur-sm w-[34rem] ${
                        index <= 1 ? 'ml-0' : 'ml-auto'
                      }`}>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                          {participant.thoughts}
                        </p>
                      </div>
                      <div className={`pt-4 ${
                        index <= 1 ? 'text-left' : 'text-right'
                      }`}>
                        <Link
                          href={participant.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-amber-500 hover:text-amber-400 transition-colors"
                        >
                          <FaLinkedin size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name Overlay (visible when not hovered) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out pointer-events-none">
                <h2 className="text-4xl font-bold text-white transform -rotate-12 drop-shadow-lg">
                  {participant.name.split(' ')[0]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </main>
  );
};

export default ParticipantsPage;
