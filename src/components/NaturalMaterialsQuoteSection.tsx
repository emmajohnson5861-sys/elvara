import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { AnimatedHeading } from './AnimatedHeading';
import { ScrollReveal } from './ScrollReveal';

interface MaterialSwatch {
  name: string;
  color: string;
  description: string;
  image: string;
}

const MATERIALS: MaterialSwatch[] = [
  {
    name: 'LIMESTONE',
    color: '#E3D7C7',
    description: 'Soft textured natural pale stone interior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'TRAVERTINE',
    color: '#C9B598',
    description: 'Porous warm beige stone interior',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'OAK',
    color: '#A07246',
    description: 'Warm honey-toned oak dining interior',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'WALNUT',
    color: '#3D281B',
    description: 'Rich dark espresso walnut living interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=75',
  },
  {
    name: 'LINEN',
    color: '#D9CCC0',
    description: 'Organic unbleached linen upholstered interior',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=75',
  },
];

export const NaturalMaterialsQuoteSection: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<number>(2); // Default Oak selected
  const [prevMaterial, setPrevMaterial] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const currentMat = MATERIALS[activeMaterial];

  const handleSelectMaterial = (idx: number) => {
    if (idx === activeMaterial) return;
    setPrevMaterial(activeMaterial);
    setActiveMaterial(idx);
  };

  // GSAP scale-down animation on material change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.18, opacity: 0 },
        { scale: 1.0, opacity: 1, duration: 0.85, ease: 'power2.out' }
      );
    }
  }, [activeMaterial]);

  return (
    <section id="materials-quote" className="w-full bg-[#ECE7DF] py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch min-h-[460px]">
          
          {/* Left Column: Leonardo da Vinci Quote */}
          <div className="py-10 sm:py-14 pr-4 sm:pr-8 md:pr-10 lg:pr-12 flex flex-col justify-center space-y-6">
            <div className="font-serif text-5xl sm:text-6xl text-[#18181B]/30 leading-none select-none font-bold">
              “
            </div>
            <AnimatedHeading
              text="Simplicity is the ultimate form of sophistication."
              as="h2"
              className="font-serif text-2xl sm:text-3xl lg:text-3xl text-[#18181B] font-normal leading-[1.28] tracking-tight"
            />
            <p className="text-xs sm:text-sm font-mono text-[#736C61] tracking-wider uppercase">
              — Leonardo da Vinci
            </p>
          </div>

          {/* Center Column: GSAP Scale-Down Material Image with Stacked Bottom Layer */}
          <div className="relative h-full min-h-[380px] md:min-h-0 overflow-hidden flex items-stretch">
            {/* Bottom Image (Previous material sitting on bottom layer already) */}
            {prevMaterial !== null && MATERIALS[prevMaterial] && (
              <img
                src={MATERIALS[prevMaterial].image}
                alt="Previous material"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-100"
              />
            )}

            {/* Top Image (New active material image scaling down into view) */}
            <img
              ref={imageRef}
              key={`material-img-${activeMaterial}`}
              src={currentMat.image}
              alt={`${currentMat.name} Natural Interior`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center z-10 will-change-transform"
            />

            {/* Minimal material badge overlay on top left of image */}
            <div className="absolute top-4 left-4 z-20 bg-[#18181B]/80 text-[#FAF7F2] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 backdrop-blur-xs">
              {currentMat.name}
            </div>
          </div>

          {/* Right Column: Natural Materials Palette */}
          <div className="py-10 sm:py-14 pl-4 sm:pl-8 md:pl-10 lg:pl-12 flex flex-col justify-center space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-1">
                <h3 className="text-[11px] font-semibold tracking-[0.25em] text-[#524E48] uppercase">
                  NATURAL MATERIALS
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {MATERIALS.map((mat, idx) => {
                const isSelected = idx === activeMaterial;
                return (
                  <ScrollReveal
                    key={mat.name}
                    direction="up"
                    delay={0.15 + idx * 0.08}
                  >
                    <button
                      onClick={() => handleSelectMaterial(idx)}
                      className="w-full flex items-center justify-between group cursor-pointer text-left py-1"
                    >
                      <div className="flex items-center gap-3">
                        {/* Color Circle Swatch */}
                        <span
                          className={`w-9 h-9 rounded-full border transition-all duration-300 shrink-0 ${
                            isSelected
                              ? 'ring-2 ring-offset-2 ring-[#18181B] scale-105 border-[#18181B] shadow-md'
                              : 'border-[#524E48]/30 group-hover:scale-105 shadow-xs'
                          }`}
                          style={{ backgroundColor: mat.color }}
                        />
                        <div className="flex flex-col">
                          <span
                            className={`text-sm font-semibold tracking-[0.18em] transition-colors duration-300 ${
                              isSelected
                                ? 'text-[#18181B]'
                                : 'text-[#524E48] group-hover:text-[#18181B]'
                            }`}
                          >
                            {mat.name}
                          </span>
                          <span className="text-xs text-[#666055] font-light leading-snug">
                            {mat.description}
                          </span>
                        </div>
                      </div>

                      {/* Active State Indicator Dot */}
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#18181B] shrink-0 ml-2" />
                      )}
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
