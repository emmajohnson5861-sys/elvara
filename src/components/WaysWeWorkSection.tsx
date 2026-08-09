import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  // Column 1
  {
    id: 'col1-1',
    title: 'Custom Oak Cabinetry & Kitchen',
    category: 'New Construction',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col1-2',
    title: 'Minimalist Monolithic Dining Nook',
    category: 'Full Home Remodel',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col1-3',
    title: 'Luxe Travertine Bathroom & Tub',
    category: 'Furniture & Styling',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col1-4',
    title: 'Serene Upholstered Bedroom Suite',
    category: 'New Construction',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=85',
  },

  // Column 2
  {
    id: 'col2-1',
    title: 'Minimal Entryway & Slat Wood Wall',
    category: 'Full Home Remodel',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col2-2',
    title: 'Cream Curved Velvet Sofa Lounge',
    category: 'Furniture & Styling',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col2-3',
    title: 'Travertine Marble Console & Arch',
    category: 'New Construction',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col2-4',
    title: 'Fluted Wood Kitchen Island Detail',
    category: 'Full Home Remodel',
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1000&q=85',
  },

  // Column 3
  {
    id: 'col3-1',
    title: 'Architectural Arch Interior Corridor',
    category: 'Furniture & Styling',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col3-2',
    title: 'Linen Armchair & Sunlit Reading Nook',
    category: 'New Construction',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col3-3',
    title: 'High Ceiling Vaulted Great Room',
    category: 'Full Home Remodel',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'col3-4',
    title: 'Terracotta Tile Modern Powder Room',
    category: 'Furniture & Styling',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
  },
];

const COLUMN_1 = GALLERY_IMAGES.slice(0, 4);
const COLUMN_2 = GALLERY_IMAGES.slice(4, 8);
const COLUMN_3 = GALLERY_IMAGES.slice(8, 12);

export const WaysWeWorkSection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (imgItem: GalleryItem) => {
    const idx = GALLERY_IMAGES.findIndex((g) => g.id === imgItem.id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev ?? 0) + 1) % GALLERY_IMAGES.length);
    }
  }, [activeLightboxIndex]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        (prev ?? 0) === 0 ? GALLERY_IMAGES.length - 1 : (prev ?? 0) - 1
      );
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  return (
    <section id="ways-we-work" className="w-full bg-[#ECE7DF] py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Services & Brand Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between py-0">
            <div>
              <AnimatedHeading
                text={"Ways We Can\nWork Together"}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#18181B] font-medium leading-[1.12] tracking-tight mb-8"
              />

              {/* Service Links List with equal spacing above and below, and equal item padding */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="my-8 border-t border-[#D5CDBD]">
                  {[
                    'NEW CONSTRUCTION',
                    'FULL HOME REMODELS',
                    'FULL FURNITURE & STYLING',
                  ].map((service) => (
                    <div
                      key={service}
                      className="group flex items-center justify-between py-4 sm:py-5 border-b border-[#D5CDBD] cursor-pointer transition-colors hover:border-[#18181B]"
                    >
                      <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#18181B] uppercase group-hover:translate-x-1 transition-transform duration-300">
                        {service}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#18181B] group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Paragraph Description & Button with equal top spacing matching above list */}
            <div className="space-y-6 pt-2">
              <AnimatedBodyText
                text="Elvara Living offers personalized interior design services that bring your vision to life with ease and purpose. From concept to execution, we create experiences and environments that feel as good as they look and are designed to reflect your unique story."
                className="text-xs sm:text-sm text-[#524E48] font-light leading-relaxed"
              />

              {/* View Services Button */}
              <ScrollReveal direction="up" delay={0.4}>
                <div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-none border border-[#18181B] text-[#18181B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#18181B] hover:text-[#FAF7F2] transition-colors duration-300 cursor-pointer"
                  >
                    <span>VIEW SERVICES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Right Column: 3 Vertical Infinite Moving Image Slides */}
          <div className="lg:col-span-7 relative">
            <div className="h-[520px] sm:h-[600px] lg:h-[650px] overflow-hidden rounded-none relative">
              
              {/* Subtle Gradient Overlays at Top & Bottom for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#ECE7DF] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#ECE7DF] to-transparent z-10 pointer-events-none" />

              <div className="grid grid-cols-3 gap-3 sm:gap-4 h-full">
                
                {/* Column 1: Top to Bottom continuous move */}
                <div className="overflow-hidden relative h-full">
                  <div className="animate-scroll-down flex flex-col gap-3 sm:gap-4">
                    {[...COLUMN_1, ...COLUMN_1].map((item, index) => (
                      <div
                        key={`col1-${item.id}-${index}`}
                        onClick={() => handleOpenLightbox(item)}
                        className="group relative aspect-[3/4] overflow-hidden bg-[#DDD6C9] cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-white/90 drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Bottom to Top continuous move */}
                <div className="overflow-hidden relative h-full">
                  <div className="animate-scroll-up flex flex-col gap-3 sm:gap-4">
                    {[...COLUMN_2, ...COLUMN_2].map((item, index) => (
                      <div
                        key={`col2-${item.id}-${index}`}
                        onClick={() => handleOpenLightbox(item)}
                        className="group relative aspect-[3/4] overflow-hidden bg-[#DDD6C9] cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-white/90 drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Top to Bottom continuous move */}
                <div className="overflow-hidden relative h-full">
                  <div className="animate-scroll-down flex flex-col gap-3 sm:gap-4">
                    {[...COLUMN_3, ...COLUMN_3].map((item, index) => (
                      <div
                        key={`col3-${item.id}-${index}`}
                        onClick={() => handleOpenLightbox(item)}
                        className="group relative aspect-[3/4] overflow-hidden bg-[#DDD6C9] cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize2 className="w-5 h-5 text-white/90 drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Popup Modal with Smooth GSAP/Motion Transitions & Mouse/Touch Swipe */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/90 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Modal Container */}
            <div className="relative w-full max-w-5xl h-full max-h-[88vh] flex flex-col justify-between items-center">
              
              {/* Header Bar */}
              <div className="w-full flex items-center justify-between text-[#FAF7F2] py-2 px-4 z-20">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C4AD93]">
                    {GALLERY_IMAGES[activeLightboxIndex].category}
                  </span>
                  <span className="text-sm font-serif font-medium tracking-tight">
                    {GALLERY_IMAGES[activeLightboxIndex].title}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-[#DDD6C9]">
                    {String(activeLightboxIndex + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setActiveLightboxIndex(null)}
                    type="button"
                    className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Main Swipable Image Box */}
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLightboxIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) {
                        handleNext();
                      } else if (info.offset.x > 60) {
                        handlePrev();
                      }
                    }}
                    className="relative max-w-full max-h-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs cursor-grab active:cursor-grabbing shadow-2xl"
                  >
                    <img
                      src={GALLERY_IMAGES[activeLightboxIndex].image}
                      alt={GALLERY_IMAGES[activeLightboxIndex].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain select-none"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all duration-200 cursor-pointer z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all duration-200 cursor-pointer z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer hint */}
              <p className="text-[11px] font-mono text-[#A0988A] tracking-wider uppercase z-20">
                SWIPE OR USE ARROW KEYS TO NAVIGATE
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
