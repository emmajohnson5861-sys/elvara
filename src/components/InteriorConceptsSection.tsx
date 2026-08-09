import React, { useState } from 'react';
import { INTERIOR_CONCEPTS } from '../data/properties';
import { InteriorConcept } from '../types';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';
import { RevealImage } from './RevealImage';

export const InteriorConceptsSection: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<InteriorConcept | null>(null);

  return (
    <section id="interiors" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E2D9]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#9A6A42] font-semibold mb-3 block">
            CUSTOM INTERIOR ARTISTRY
          </span>
          <AnimatedHeading
            text="Interior Design Concepts"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181B] tracking-tight"
          />
        </div>
        <AnimatedBodyText
          text="Every space engineered by Elvara Living is an exercise in tactile warmth, acoustic quietude, and refined bespoke joinery."
          className="text-[#666055] text-sm sm:text-base max-w-md leading-relaxed"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INTERIOR_CONCEPTS.map((concept, idx) => (
          <div
            key={concept.id}
            onClick={() => setSelectedConcept(concept)}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#18181B] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 border border-[#E8E2D9]"
          >
            {/* Background Image with Directional Fade */}
            <RevealImage
              src={concept.image}
              alt={concept.title}
              direction="up"
              delay={0.1 * idx}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Category Tag Top Left */}
            <div className="absolute top-5 left-5 z-10">
              <span className="luxury-glass-dark text-white px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border border-white/20">
                {concept.category}
              </span>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 text-white space-y-2">
              <h3 className="font-serif text-xl font-medium leading-tight group-hover:text-[#C4AD93] transition-colors">
                {concept.title}
              </h3>
              <p className="text-xs text-[#E8E2D9]/80 line-clamp-2">
                {concept.subtitle}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-[#C4AD93] font-medium uppercase tracking-wider">
                <span>Explore Suite</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interior Concept Detail Modal */}
      {selectedConcept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E8E2D9] relative flex flex-col max-h-[90vh]">
            <button
              onClick={() => setSelectedConcept(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedConcept.image}
                alt={selectedConcept.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 luxury-glass-dark text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
                {selectedConcept.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-[#18181B] mb-2">
                  {selectedConcept.title}
                </h3>
                <p className="text-sm font-medium text-[#9A6A42] uppercase tracking-widest">
                  {selectedConcept.subtitle}
                </p>
              </div>

              <p className="text-base text-[#666055] leading-relaxed">
                {selectedConcept.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#18181B] font-semibold mb-3">
                  Signature Materials & Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedConcept.materials.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#666055]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9A6A42]" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
