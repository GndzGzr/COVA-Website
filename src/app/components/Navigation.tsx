'use client';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('overview');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    { id: 'pages/abstraction', label: 'Abstract' },
    { id: 'pages/introduction', label: 'Introduction' },
    { id: 'pages/methodology', label: 'Methodology' },
    { id: 'pages/results', label: 'Results' },
    { id: 'pages/related-work', label: 'Related Work' },
    { id: 'pages/conclusion', label: 'Conclusion' },
    { id: 'future-work', label: 'Future Work' },
  ];

  const toolItems = [
    { id: 'attention-tool', label: 'Attention' },
    { id: 'apply-tool', label: 'Apply' },
    { id: 'comunication-tool', label: 'Communication' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto max-w-fit mt-4">
        <nav className="bg-black/20 backdrop-blur-sm rounded-full px-6">
          <div className="flex items-center h-12">
            <div className="flex items-center space-x-8">
              <a 
                href="/" 
                onClick={() => setCurrentPage('overview')}
                className={`text-base ${
                  currentPage === 'overview' 
                  ? activeGradientClass
                  : inactiveClass
                }`}
              >
                Project Overview
              </a>

              {/* Report Dropdown */}
              <div className="relative group">
                <button
                  className={`text-base flex items-center space-x-1 ${
                    reportItems.some(item => currentPage === item.id)
                    ? activeGradientClass
                    : inactiveClass
                  }`}
                >
                  <span>Report</span>
                  <svg
                    className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                      reportItems.some(item => currentPage === item.id)
                      ? 'stroke-red-500'
                      : 'stroke-current'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/20 backdrop-blur-sm min-w-[180px] border border-white/10">
                    {reportItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setCurrentPage(item.id)}
                        className={`block px-4 py-2 text-base transition-colors ${
                          currentPage === item.id
                          ? activeGradientClass
                          : inactiveClass
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modules Dropdown */}
              <div className="relative group">
                <button
                  className={`text-base flex items-center space-x-1 ${
                    toolItems.some(item => currentPage === item.id)
                    ? activeGradientClass
                    : inactiveClass
                  }`}
                >
                  <span>Modules</span>
                  <svg
                    className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                      toolItems.some(item => currentPage === item.id)
                      ? 'stroke-red-500'
                      : 'stroke-current'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/20 backdrop-blur-sm min-w-[180px] border border-white/10">
                    {toolItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setCurrentPage(item.id)}
                        className={`block px-4 py-2 text-base transition-colors ${
                          currentPage === item.id
                          ? activeGradientClass
                          : inactiveClass
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                onClick={() => setCurrentPage('participants')}
                className={`text-base ${
                  currentPage === 'participants' 
                  ? activeGradientClass
                  : inactiveClass
                }`}
              >
                Participants
              </a>
              
              <a 
                href="#" 
                onClick={() => setCurrentPage('contact')}
                className={`text-base ${
                  currentPage === 'contact' 
                  ? activeGradientClass
                  : inactiveClass
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation; 