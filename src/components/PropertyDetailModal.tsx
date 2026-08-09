import React, { useState } from 'react';
import { Property } from '../types';
import { X, MapPin, Bed, Bath, Maximize, Calendar, CheckCircle2, ChevronLeft, ChevronRight, UserCheck, ShieldCheck } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onOpenBooking,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const allImages = [property.heroImage, ...property.galleryImages];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] rounded-none max-w-4xl w-full overflow-hidden border border-[#E8E2D9] relative flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Hero Viewer */}
        <div className="relative aspect-[16/9] w-full bg-[#18181B] overflow-hidden">
          <img
            src={allImages[activeImageIndex]}
            alt={`${property.name} slide ${activeImageIndex + 1}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Arrows for Gallery */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full luxury-glass-dark text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % allImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full luxury-glass-dark text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom Title Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#C4AD93] uppercase tracking-widest font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#C4AD93]" />
                <span>{property.location}</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white">
                {property.name}
              </h2>
            </div>

            <div className="luxury-glass-dark px-5 py-2.5 rounded-none text-right">
              <span className="text-[10px] text-[#C4AD93] font-mono block">ASKING PRICE</span>
              <span className="font-serif text-xl font-bold text-white">
                {property.priceDisplay}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Bar */}
        {allImages.length > 1 && (
          <div className="bg-[#18181B] px-6 py-3 flex gap-3 border-t border-white/10 overflow-x-auto">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-12 rounded-none overflow-hidden shrink-0 transition-all cursor-pointer border-2 ${
                  activeImageIndex === idx ? 'border-[#C4AD93] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Body Specifications & Details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#F3EFE6] rounded-none border border-[#E8E2D9] text-center">
            <div>
              <span className="text-[10px] uppercase text-[#8C7355] font-semibold tracking-wider block">
                Bedrooms
              </span>
              <span className="font-serif text-lg font-bold text-[#18181B] flex items-center justify-center gap-1 mt-1">
                <Bed className="w-4 h-4 text-[#9A6A42]" /> {property.bedrooms} Beds
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#8C7355] font-semibold tracking-wider block">
                Bathrooms
              </span>
              <span className="font-serif text-lg font-bold text-[#18181B] flex items-center justify-center gap-1 mt-1">
                <Bath className="w-4 h-4 text-[#9A6A42]" /> {property.bathrooms} Baths
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#8C7355] font-semibold tracking-wider block">
                Living Footprint
              </span>
              <span className="font-serif text-lg font-bold text-[#18181B] flex items-center justify-center gap-1 mt-1">
                <Maximize className="w-4 h-4 text-[#9A6A42]" /> {property.areaSqFt.toLocaleString()} sqft
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#8C7355] font-semibold tracking-wider block">
                Lead Architect
              </span>
              <span className="font-serif text-sm font-bold text-[#18181B] flex items-center justify-center gap-1 mt-1">
                <UserCheck className="w-4 h-4 text-[#9A6A42]" /> {property.architect}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#18181B] mb-3">
              Architectural Overview
            </h3>
            <p className="text-base text-[#666055] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Architectural Features Checklist */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-[#18181B] tracking-widest mb-4">
              Signature Architectural Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D9]">
                  <CheckCircle2 className="w-4 h-4 text-[#9A6A42] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#18181B] font-medium leading-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Material Swatches List */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-[#18181B] tracking-widest mb-3">
              Custom Material & Finish Swatches:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {property.swatches.map((swatch, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9] flex items-center gap-3"
                >
                  <span
                    className="w-6 h-6 rounded-full border border-black/10 shrink-0 shadow-xs"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div>
                    <span className="text-xs font-semibold text-[#18181B] block leading-tight">
                      {swatch.name}
                    </span>
                    <span className="text-[10px] text-[#8C7355] block">
                      {swatch.material}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Call */}
          <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-xs text-[#8C7355] uppercase tracking-wider block font-semibold">
                Interested in Private Viewing?
              </span>
              <span className="text-sm font-serif font-medium text-[#18181B]">
                Exclusive 1-on-1 walkthroughs with our senior design partners.
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-none bg-[#18181B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#333] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#C4AD93]" />
              <span>Schedule Private Walkthrough</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
