import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealImage } from './RevealImage';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';

export const LivedInDesignSection: React.FC = () => {
  return (
    <section id="philosophy" className="w-full bg-[#FAF7F2] py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Tall Architectural Entryway Image (Fade in Left) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="w-full max-w-lg lg:max-w-none aspect-[3/4] overflow-hidden">
              <RevealImage
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=75"
                alt="Architectural Home Interior Entryway with Wooden Door and Vaulted Ceiling"
                direction="left"
              />
            </div>
          </div>

          {/* Right Column: Inset Image Top Right + Heading + Description + Button */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Top Right Inset Detail Image (Fade in Right) */}
            <div className="flex justify-end w-full mb-8 lg:mb-12">
              <div className="w-44 sm:w-56 lg:w-64 aspect-[4/3] overflow-hidden">
                <RevealImage
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=75"
                  alt="Curated Bathroom Vanity Interior Detail"
                  direction="right"
                />
              </div>
            </div>

            {/* Content: Main Statement Heading & Body Text */}
            <div className="space-y-6 max-w-xl">
              <AnimatedHeading
                text="At Elvara Living, we believe great design is more than beautiful—it's meant to be lived in."
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-medium leading-[1.18] tracking-tight"
              />

              <AnimatedBodyText
                text="With a seamless, stress-free process and a collaborative approach, we transform spaces into homes that feel intentional, inviting, and undeniably yours. Every project blends timeless sophistication with fresh, modern touches, creating interiors that are elevated yet approachable."
                className="text-sm sm:text-base text-[#524E48] font-light leading-relaxed"
              />

              {/* Minimalist Button */}
              <ScrollReveal direction="up" delay={0.35}>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-none border border-[#18181B] text-[#18181B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#18181B] hover:text-[#FAF7F2] transition-colors duration-300 cursor-pointer"
                  >
                    <span>ABOUT US</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
