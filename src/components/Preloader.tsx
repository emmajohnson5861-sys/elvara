import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Elegant, fast preloader display (1.2 seconds)
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      onComplete(); // Triggers the header drop-down and hero entrance animations
      setTimeout(() => {
        setIsHidden(true);
      }, 700); // Smooth 700ms fade-out timing
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#FAF7F2] text-[#18181B] flex flex-col items-center justify-center select-none transition-all duration-800 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] ${
        isFadingOut ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className={`flex flex-col items-center space-y-6 transition-all duration-700 ease-in-out ${
        isFadingOut ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        {/* Minimalist Animated Loading Circle */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#E2DACF]" />
          <div className="absolute inset-0 rounded-full border-2 border-[#18181B] border-t-transparent animate-spin" />
        </div>

        {/* Company Name */}
        <div className="flex flex-col items-center text-center space-y-1">
          <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.25em] text-[#18181B] uppercase">
            ELVARA
          </span>
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#8C7355] uppercase font-semibold">
            LIVING
          </span>
        </div>
      </div>
    </div>
  );
};
