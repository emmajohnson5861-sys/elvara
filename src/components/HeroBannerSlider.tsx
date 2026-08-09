import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { Property } from '../types';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';

interface HeroBannerSliderProps {
  properties: Property[];
  onOpenPropertyDetail: (property: Property) => void;
  onOpenBooking: () => void;
}

export const HeroBannerSlider: React.FC<HeroBannerSliderProps> = ({
  properties,
  onOpenPropertyDetail,
  onOpenBooking,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(1);

  // Dragging state for cursor sliding
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);

  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const currentProperty = properties[currentIndex] || properties[0];

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const nextIdx = (currentIndex + 1) % properties.length;
    changeSlide(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (currentIndex - 1 + properties.length) % properties.length;
    changeSlide(prevIdx);
  };

  // GSAP image scale down animation on slide change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.18, opacity: 0 },
        { scale: 1.0, opacity: 1, duration: 0.85, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  // Drag & Touch Cursor Sliding Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // fallback
    }

    const threshold = 40;
    if (dragDeltaX < -threshold) {
      nextSlide();
    } else if (dragDeltaX > threshold) {
      prevSlide();
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragDeltaX(0);
  };

  const handleContainerClick = () => {
    if (Math.abs(dragDeltaX) < 10) {
      onOpenPropertyDetail(currentProperty);
    }
  };

  return (
    <section
      ref={bannerRef}
      id="hero"
      className="relative pt-24 sm:pt-28 pb-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column - Minimalist Elegant Typography */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-10 z-10">
          <div>
            {/* Main Display Headline with Word Slide-Up on every slide change */}
            <AnimatedHeading
              key={`hero-heading-${currentIndex}`}
              text={currentProperty.headline}
              as="h1"
              scrollTrigger={false}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#18181B] leading-[1.12] mb-4"
            />

            {/* Subtitle with Letter Slide Right-to-Left on every slide change */}
            <AnimatedBodyText
              key={`hero-sub-${currentIndex}`}
              text="Find your perfect space."
              scrollTrigger={false}
              delay={0.1}
              className="text-xs sm:text-sm text-[#666055] font-medium tracking-wide mb-8"
            />

            {/* Exact Same Action Buttons as Previously */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPropertyDetail(currentProperty)}
                id="hero-explore-residences-btn"
                className="px-8 py-3.5 rounded-none bg-[#18181B] text-[#FAF7F2] text-xs font-semibold tracking-wider hover:bg-[#333333] transition-all duration-300 shadow-sm cursor-pointer"
              >
                Discover Places
              </button>
              <button
                onClick={onOpenBooking}
                id="hero-inquire-now-btn"
                className="px-8 py-3.5 rounded-none border border-[#18181B] text-[#18181B] text-xs font-semibold tracking-wider hover:bg-[#18181B] hover:text-[#FAF7F2] transition-all duration-300 cursor-pointer"
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Color Swatch Dots - Exact row of circular swatches */}
          <div className="flex items-center gap-3.5 pt-4">
            {currentProperty.swatches.map((swatch, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSwatchIndex(idx)}
                title={`${swatch.name} — ${swatch.material}`}
                className={`relative w-6 h-6 rounded-full transition-all duration-200 cursor-pointer shadow-xs ${
                  selectedSwatchIndex === idx
                    ? 'ring-2 ring-offset-2 ring-[#18181B]'
                    : 'opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: swatch.hex }}
              >
                <span className="sr-only">{swatch.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Featured Image Column - Clean GSAP Wiping Image Banner */}
        <div className="lg:col-span-8 relative">
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onClick={handleContainerClick}
            className={`relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-none overflow-hidden touch-pan-y ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {/* Bottom Image (Previous image sitting on bottom layer already) */}
            {prevIndex !== null && properties[prevIndex] && (
              <img
                src={properties[prevIndex].heroImage}
                alt="Previous slide"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-100"
              />
            )}

            {/* Top Image (New active image scaling down into frame) */}
            <img
              ref={imageRef}
              key={`hero-img-${currentIndex}`}
              src={currentProperty.heroImage}
              alt={currentProperty.name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center z-10 will-change-transform"
            />
          </div>

          {/* Centered Pagination Dots below image */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-1 text-[#8C7355] hover:text-[#18181B] transition-colors cursor-pointer mr-1"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {properties.map((prop, idx) => (
              <button
                key={prop.id}
                onClick={() => changeSlide(idx)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  currentIndex === idx
                    ? 'w-2.5 h-2.5 bg-[#18181B] scale-110'
                    : 'w-1.5 h-1.5 bg-[#C4AD93]/70 hover:bg-[#18181B]'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${prop.name}`}
              />
            ))}

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-1 text-[#8C7355] hover:text-[#18181B] transition-colors cursor-pointer ml-1"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
