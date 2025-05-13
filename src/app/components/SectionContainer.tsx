interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
  return (
    <section 
      className={`
        relative z-20 
        min-h-screen 
        w-full 
        flex 
        items-center 
        snap-start
        snap-always
        transition-all
        duration-700
        ease-in-out
        opacity-0
        data-[state=active]:opacity-100
        data-[direction=up]:animate-slideDown
        data-[direction=down]:animate-slideUp
        ${className}
      `}
      data-state="inactive"
    >
      <div className="container mx-auto px-4 py-20 transform transition-transform duration-700">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 