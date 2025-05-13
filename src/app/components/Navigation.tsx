'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const activeGradientClass = "bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text font-medium";
  const inactiveClass = "text-gray-400 hover:text-white";

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const reportItems = [
    { id: 'abstraction', label: 'Abstract' },
    { id: 'introduction', label: 'Introduction' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'results', label: 'Results' },
    { id: 'related-work', label: 'Related Work' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'future-work', label: 'Future Work' },
  ];

  const toolItems = [
    { id: 'modules/attention', label: 'Attention' },
    { id: 'modules/apply', label: 'Apply' },
    { id: 'modules/communicate', label: 'Communication' },
  ];

  const isActive = (path: string) => pathname === `/${path}`;
  const isReportActive = () => reportItems.some(item => isActive(item.id));
  const isToolActive = () => toolItems.some(item => isActive(item.id));

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto max-w-fit mt-4">
        <nav className="bg-black/20 backdrop-blur-sm rounded-full px-6">
          <div className="flex items-center h-12">
            <div className="flex items-center space-x-8">
              <Link 
                href="/"
                className={`text-base ${pathname === '/' ? activeGradientClass : inactiveClass}`}
              >
                Project Overview
              </Link>

              {/* Report Dropdown */}
              <div className="relative group">
                <button
                  className={`text-base flex items-center space-x-1 ${
                    isReportActive() ? activeGradientClass : inactiveClass
                  }`}
                >
                  <span>Report</span>
                  <svg
                    className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                      isReportActive() ? 'stroke-red-500' : 'stroke-current'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/20 backdrop-blur-sm min-w-[180px] border border-white/10 rounded-lg">
                    {reportItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.id}`}
                        className={`block px-4 py-2 text-base transition-colors ${
                          isActive(item.id) ? activeGradientClass : inactiveClass
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modules Dropdown */}
              <div className="relative group">
                <button
                  className={`text-base flex items-center space-x-1 ${
                    isToolActive() ? activeGradientClass : inactiveClass
                  }`}
                >
                  <span>Modules</span>
                  <svg
                    className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                      isToolActive() ? 'stroke-red-500' : 'stroke-current'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/20 backdrop-blur-sm min-w-[180px] border border-white/10 rounded-lg">
                    {toolItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.id}`}
                        className={`block px-4 py-2 text-base transition-colors ${
                          isActive(item.id) ? activeGradientClass : inactiveClass
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="/participants"
                className={`text-base ${isActive('participants') ? activeGradientClass : inactiveClass}`}
              >
                Team Members
              </Link>
              
         
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation; 