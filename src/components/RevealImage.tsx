import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  badge?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
}

export const RevealImage: React.FC<RevealImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover object-center",
  aspectRatioClass = "relative w-full h-full overflow-hidden",
  badge,
  direction = 'up',
  delay = 0,
  duration = 0.85,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current) return;

      let initialVars: gsap.TweenVars = { opacity: 0 };
      let animateVars: gsap.TweenVars = {
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
      };

      switch (direction) {
        case 'up':
          initialVars = { opacity: 0, y: 40 };
          animateVars.y = 0;
          break;
        case 'down':
          initialVars = { opacity: 0, y: -40 };
          animateVars.y = 0;
          break;
        case 'left':
          initialVars = { opacity: 0, x: -50 };
          animateVars.x = 0;
          break;
        case 'right':
          initialVars = { opacity: 0, x: 50 };
          animateVars.x = 0;
          break;
        case 'none':
        default:
          initialVars = { opacity: 0 };
          break;
      }

      if (containerRef.current) {
        animateVars.scrollTrigger = {
          trigger: containerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        };
      }

      gsap.fromTo(imageRef.current, initialVars, animateVars);
    }, containerRef);

    return () => ctx.revert();
  }, [src, direction, delay, duration]);

  return (
    <div ref={containerRef} className={aspectRatioClass}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`${className} will-change-transform opacity-0`}
      />
      {badge && (
        <div className="absolute top-4 left-4 z-30 bg-[#18181B]/80 text-[#FAF7F2] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 backdrop-blur-xs">
          {badge}
        </div>
      )}
    </div>
  );
};
