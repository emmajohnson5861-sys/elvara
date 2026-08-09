import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedBodyTextProps {
  text: string;
  className?: string;
  as?: 'p' | 'div' | 'span';
  delay?: number;
  stagger?: number;
  scrollTrigger?: boolean;
}

export const AnimatedBodyText: React.FC<AnimatedBodyTextProps> = ({
  text,
  className = '',
  as: Component = 'p',
  delay = 0,
  stagger = 0.008,
  scrollTrigger = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const letterEls = containerRef.current.querySelectorAll('.body-letter');

      const config: gsap.TweenVars = {
        x: 0,
        opacity: 1,
        duration: 0.45,
        delay: delay,
        stagger: stagger,
        ease: 'power2.out',
      };

      if (scrollTrigger) {
        config.scrollTrigger = {
          trigger: containerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        };
      }

      gsap.fromTo(
        letterEls,
        { x: 20, opacity: 0 },
        config
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, stagger, scrollTrigger]);

  const words = text.split(' ');

  return (
    <Component ref={containerRef as any} className={className}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="body-letter inline-block will-change-transform opacity-0"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
};
