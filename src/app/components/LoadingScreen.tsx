'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 300); // Fade out duration
    }, 1000); // Show duration reduced to 1 second

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-48 h-48 animate-pulse">
        <Image
          src="/images/eyesvgexpand.svg"
          alt="Beyond Vision Logo"
          fill
          className="object-contain animate-float"
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 