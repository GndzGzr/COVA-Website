'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLoading } from '../context/LoadingContext';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setIsLoading } = useLoading();
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const activeGradientClass = "bg-gradient-to-r from-amber-500 via-orange-400 via-30% via-red-400 via-60% via-rose-300 via-80% to-orange-200 text-transparent bg-clip-text font-medium";
  const inactiveClass = "text-gray-400 hover:text-white";

  useEffect(() => {
    const controlNavbar = () => {
      if (mobileMenuOpen) return;
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
  }, [lastScrollY, mobileMenuOpen]);

  useEffect(() => {
    const handleRouteComplete = () => {
      setIsLoading(false);
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handleRouteComplete);
    return () => {
      window.removeEventListener('popstate', handleRouteComplete);
    };
  }, [setIsLoading]);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, setIsLoading]);

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

  const handleNavigation = async (path: string) => {
    if (path !== pathname) {
      setIsLoading(true);
      setMobileMenuOpen(false);
      await router.push(path);
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto max-w-fit mt-4">
        <nav className={`bg-black/20 backdrop-blur-sm ${isMobile ? 'rounded-lg w-[calc(100vw-2rem)] mx-4' : 'rounded-full'} px-6`}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center justify-between h-12">
              <Link 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/');
                }}
                className={`text-base ${pathname === '/' ? activeGradientClass : inactiveClass}`}
              >
                Project Overview
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex items-center h-12">
              <div className="flex items-center space-x-8">
                <Link 
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/');
                  }}
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
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(`/${item.id}`);
                          }}
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
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(`/${item.id}`);
                          }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/participants');
                  }}
                  className={`text-base ${isActive('participants') ? activeGradientClass : inactiveClass}`}
                >
                  Team Members
                </Link>
              </div>
            </div>
          )}

          {/* Mobile Menu Content */}
          {isMobile && mobileMenuOpen && (
            <div className="py-4 border-t border-white/10">
              {/* Report Section */}
              <div className="mb-4">
                <h3 className={`px-4 py-2 text-base ${isReportActive() ? activeGradientClass : 'text-white'}`}>
                  Report
                </h3>
                <div className="pl-4">
                  {reportItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(`/${item.id}`);
                      }}
                      className={`block px-4 py-2 text-sm ${
                        isActive(item.id) ? activeGradientClass : inactiveClass
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Modules Section */}
              <div className="mb-4">
                <h3 className={`px-4 py-2 text-base ${isToolActive() ? activeGradientClass : 'text-white'}`}>
                  Modules
                </h3>
                <div className="pl-4">
                  {toolItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(`/${item.id}`);
                      }}
                      className={`block px-4 py-2 text-sm ${
                        isActive(item.id) ? activeGradientClass : inactiveClass
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Team Members Link */}
              <Link 
                href="/participants"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/participants');
                }}
                className={`block px-4 py-2 text-base ${isActive('participants') ? activeGradientClass : inactiveClass}`}
              >
                Team Members
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navigation; 