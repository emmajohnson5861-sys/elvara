import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/properties';
import { Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E2D9]">
      <div className="bg-[#18181B] text-[#FAF7F2] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Subtle Decorative Pattern */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#9A6A42]/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <Quote className="w-12 h-12 text-[#9A6A42] mx-auto opacity-80" />

          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic font-normal leading-relaxed text-[#FAF7F2]">
            "{current.quote}"
          </p>

          <div className="pt-4 flex flex-col items-center">
            <img
              src={current.avatar}
              alt={current.author}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#C4AD93] mb-3 shadow-md"
            />
            <h4 className="font-serif text-lg font-semibold text-white">
              {current.author}
            </h4>
            <span className="text-xs uppercase tracking-widest text-[#C4AD93] font-mono">
              {current.role} • {current.source}
            </span>
          </div>

          {/* Navigation Dots & Arrows */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#18181B] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'bg-[#9A6A42] w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#18181B] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
