import React, { useState } from 'react';
import { Property } from '../types';
import { Bed, Bath, Maximize, MapPin, ArrowRight, Layout } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { RevealImage } from './RevealImage';

interface PropertyShowcaseProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onOpenFloorPlan: (property: Property) => void;
  onOpenBooking: () => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({
  properties,
  onSelectProperty,
  onOpenFloorPlan,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Villas', 'Penthouses', 'Estates', 'Urban Sanctuaries'];

  const filteredProperties =
    activeCategory === 'All'
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  return (
    <section id="properties" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#9A6A42] font-semibold mb-3 block">
            SIGNATURE PORTFOLIO
          </span>
          <AnimatedHeading
            text="Curated Living Residences"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181B] tracking-tight"
          />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 bg-[#E8E2D9]/60 p-1.5 rounded-full border border-[#E8E2D9]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#18181B] text-[#FAF7F2] shadow-sm'
                  : 'text-[#666055] hover:text-[#18181B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8E2D9] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            {/* Image Banner */}
            <div
              className="relative aspect-[16/10] overflow-hidden cursor-pointer"
              onClick={() => onSelectProperty(property)}
            >
              <RevealImage
                src={property.heroImage}
                alt={property.name}
                direction="up"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

              {/* Tag & Category */}
              <div className="absolute top-5 left-5 luxury-glass px-4 py-1.5 rounded-full text-xs font-semibold text-[#18181B] uppercase tracking-wider z-10">
                {property.category}
              </div>

              {/* Price Tag Badge */}
              <div className="absolute bottom-5 right-5 bg-[#18181B] text-[#FAF7F2] px-4 py-2 rounded-2xl text-right shadow-lg border border-white/10 z-10">
                <span className="text-[10px] text-[#C4AD93] font-mono uppercase tracking-widest block">
                  ASKING PRICE
                </span>
                <span className="font-serif text-lg font-bold text-white block leading-tight">
                  {property.priceDisplay}
                </span>
              </div>
            </div>

            {/* Content Info */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#8C7355] uppercase tracking-widest font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#9A6A42]" />
                  <span>{property.location}</span>
                </div>

                <h3
                  onClick={() => onSelectProperty(property)}
                  className="font-serif text-2xl font-bold text-[#18181B] mb-3 group-hover:text-[#9A6A42] transition-colors cursor-pointer"
                >
                  {property.name}
                </h3>

                <p className="text-xs text-[#666055] leading-relaxed mb-6 line-clamp-2">
                  {property.description}
                </p>

                {/* Micro Key Specs */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#E8E2D9] mb-6 text-xs text-[#18181B]">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#9A6A42]" />
                    <span>{property.specs.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-[#9A6A42]" />
                    <span>{property.specs.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-[#9A6A42]" />
                    <span>{property.specs.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProperty(property)}
                  className="flex-1 py-3 px-4 bg-[#18181B] text-[#FAF7F2] rounded-2xl text-xs font-semibold tracking-wider uppercase hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Residence</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4AD93]" />
                </button>

                <button
                  onClick={() => onOpenFloorPlan(property)}
                  title="View Architectural Floor Plan"
                  className="p-3 bg-[#E8E2D9] text-[#18181B] hover:bg-[#18181B] hover:text-white rounded-2xl transition-colors cursor-pointer"
                >
                  <Layout className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
