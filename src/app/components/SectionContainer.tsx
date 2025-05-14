import { useMediaQuery } from '../hooks/useMediaQuery';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section 
      className={`
        relative z-20 
        min-h-screen 
        w-full 
        flex 
        items-center 
        ${isDesktop ? 'snap-start snap-always' : ''}
        opacity-0
        data-[state=active]:opacity-100
        transition-opacity
        duration-500
        ease-in-out
        py-12 md:py-16 lg:py-20
        ${className}
      `}
      data-state="inactive"
      style={{
        willChange: 'opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="backdrop-blur-[8px] bg-white/[0.02] rounded-xl md:rounded-2xl border border-white/[0.05] shadow-2xl p-4 md:p-6 lg:p-8 h-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer; 