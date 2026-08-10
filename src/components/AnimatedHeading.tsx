import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  scrollTrigger?: boolean;
  start?: string;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  as: Component = 'h2',
  delay = 0,
  stagger = 0.04,
  scrollTrigger = true,
  start = 'top 70%',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const wordEls = containerRef.current.querySelectorAll('.heading-word-inner');

      const config: gsap.TweenVars = {
        y: '0%',
        opacity: 1,
        duration: 0.85,
        delay: delay,
        stagger: stagger,
        ease: 'power3.out',
      };

      if (scrollTrigger) {
        config.scrollTrigger = {
          trigger: containerRef.current,
          start: start,
          toggleActions: 'play none none none',
        };
      }

      gsap.fromTo(
        wordEls,
        { y: '110%', opacity: 0 },
        config
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, stagger, scrollTrigger, start]);

  const lines = text.split('\n');

  return (
    <Component ref={containerRef as any} className={className}>
      {lines.map((line, lineIdx) => (
        <React.Fragment key={lineIdx}>
          {line.split(' ').map((word, wordIdx) => (
            <span
              key={wordIdx}
              className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0 py-0.5"
            >
              <span className="heading-word-inner inline-block will-change-transform opacity-0">
                {word}
              </span>
            </span>
          ))}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Component>
  );
};
