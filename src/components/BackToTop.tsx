import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past ~400px (approx 1 section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Back to top"
          id="back-to-top-btn"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#18181B] text-[#FAF7F2] border border-[#3A3834] rounded-none flex items-center justify-center shadow-lg hover:bg-[#333333] hover:border-[#C4AD93] transition-all duration-300 cursor-pointer group"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
