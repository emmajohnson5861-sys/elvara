import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  start?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  y = 35,
  direction = 'up',
  start = 'top 70%',
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!elRef.current) return;

      let xVal = 0;
      let yVal = 0;
      if (direction === 'up') yVal = y;
      if (direction === 'down') yVal = -y;
      if (direction === 'left') xVal = y;
      if (direction === 'right') xVal = -y;

      gsap.fromTo(
        elRef.current,
        { opacity: 0, x: xVal, y: yVal },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elRef.current,
            start: start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [delay, duration, y, direction, start]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};
