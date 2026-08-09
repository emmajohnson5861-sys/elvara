import React from 'react';
import { RevealImage } from './RevealImage';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';

interface AboutUsSectionProps {
  onLearnMore?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Architectural Interior Image */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#E8E2D9] overflow-hidden border border-[#E8E2D9]">
            <RevealImage
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
              alt="Elvara Living Crafting Spaces"
              direction="left"
            />
          </div>
        </div>

        {/* Right Column: Editorial Text Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            {/* Eyebrow Label with Horizontal Line */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#524E48] uppercase">
                ABOUT US
              </span>
              <span className="w-12 h-[1px] bg-[#524E48]/60" />
            </div>
          </ScrollReveal>

          {/* Display Headline with Animated Words Sliding Up */}
          <AnimatedHeading
            text={"Crafting Spaces\nThat Reflect You"}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-medium leading-[1.18] tracking-tight"
          />

          {/* Body Copy with Animated Letters Sliding Right to Left */}
          <AnimatedBodyText
            text="At Elvara Living, we believe every space has the potential to tell a story. Our approach combines thoughtful design, premium materials and meticulous attention to detail."
            className="text-sm sm:text-base text-[#666055] font-normal leading-relaxed max-w-lg"
          />

          <ScrollReveal direction="up" delay={0.4}>
            {/* Black Rectangular Action Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (onLearnMore) onLearnMore();
                  const elem = document.getElementById('philosophy');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                id="about-learn-more-btn"
                className="px-8 py-3.5 rounded-none bg-[#18181B] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase hover:bg-[#333333] transition-colors duration-200 cursor-pointer shadow-xs inline-block"
              >
                LEARN MORE
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
