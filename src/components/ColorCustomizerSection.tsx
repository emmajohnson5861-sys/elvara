import React, { useState } from 'react';
import { Palette, Check, Sun } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';
import { RevealImage } from './RevealImage';

interface PaletteOption {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  primaryHex: string;
  secondaryHex: string;
  accentHex: string;
  bgHex: string;
  roomImage: string;
  materials: string[];
  lightingMood: 'Warm Daylight' | 'Golden Sunset' | 'Dim Ambient Night';
}

const PALETTES: PaletteOption[] = [
  {
    id: 'warm-chestnut',
    name: 'Tuscan Chestnut & Travertine',
    subtitle: 'Signature Elvara Warm Earth Palette',
    description: 'Earthy cognac leathers, honed Italian travertine stone, and warm ambient LED strips behind custom smoked oak joinery.',
    primaryHex: '#9A6A42',
    secondaryHex: '#C4AD93',
    accentHex: '#FAF7F2',
    bgHex: '#18181B',
    roomImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    materials: ['Brushed Saddle Leather', 'Tuscan Travertine', 'Carbonized Oak', 'Satin Brass'],
    lightingMood: 'Golden Sunset',
  },
  {
    id: 'nordic-cream',
    name: 'Cream Silk & Bleached Ash',
    subtitle: 'Minimalist Light Sanctuary',
    description: 'High-luminosity lime wash plaster walls paired with bleached Scandinavian ash flooring and natural unbleached linen upholstery.',
    primaryHex: '#FAF7F2',
    secondaryHex: '#E8E2D9',
    accentHex: '#9A6A42',
    bgHex: '#4A463D',
    roomImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    materials: ['Lime-Wash Plaster', 'Bleached Alpine Ash', 'Raw Silk', 'Frosted Quartz'],
    lightingMood: 'Warm Daylight',
  },
  {
    id: 'obsidian-charcoal',
    name: 'Obsidian & Smoked Metal',
    subtitle: 'Monolithic Architectural Atmosphere',
    description: 'Deep carbonized timber walls, dark flamed basalt stone slabs, and warm copper light accents for dramatic evening hosting.',
    primaryHex: '#18181B',
    secondaryHex: '#3F3F46',
    accentHex: '#C5A059',
    bgHex: '#121212',
    roomImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    materials: ['Flamed Basalt Stone', 'Carbonized Oak', 'Gunmetal Steel', 'Cognac Mohair'],
    lightingMood: 'Dim Ambient Night',
  },
  {
    id: 'sage-limestone',
    name: 'Alpine Sage & Chalk Stone',
    subtitle: 'Biophilic Botanical Sanctuary',
    description: 'Subtle muted sage velvet furniture against raw pale limestone wall slabs and brushed bronze fixtures.',
    primaryHex: '#607264',
    secondaryHex: '#A3B19B',
    accentHex: '#FAF7F2',
    bgHex: '#222823',
    roomImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    materials: ['Alpine Sage Velvet', 'Chalk Limestone', 'Brushed Bronze', 'Olive Ash Timber'],
    lightingMood: 'Warm Daylight',
  },
];

export const ColorCustomizerSection: React.FC = () => {
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>('warm-chestnut');

  const selectedPalette =
    PALETTES.find((p) => p.id === selectedPaletteId) || PALETTES[0];

  return (
    <section id="customizer" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#9A6A42] font-semibold mb-3 block">
          MATERIAL PALETTE STUDIO
        </span>
        <AnimatedHeading
          text="Tailor Your Living Atmosphere"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181B] tracking-tight mb-4"
        />
        <AnimatedBodyText
          text="Explore signature interior color palettes and material combinations crafted by our master architects to suit your sensory aesthetic."
          className="text-[#666055] text-base leading-relaxed"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F3EFE6] rounded-3xl p-6 sm:p-10 border border-[#E8E2D9] shadow-md">
        {/* Left Column: Palette Controls */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#18181B] mb-2">
              Select Room Mood
            </h3>
            <p className="text-sm text-[#666055]">
              Switch between curated materials to observe light reflection and tactile depth.
            </p>
          </div>

          {/* Palette Selector List */}
          <div className="space-y-3">
            {PALETTES.map((p) => {
              const isActive = p.id === selectedPaletteId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPaletteId(p.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-[#FAF7F2] border-[#9A6A42] shadow-md scale-[1.01]'
                      : 'bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] border-[#E8E2D9]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Swatch Trio Preview */}
                    <div className="flex items-center -space-x-2">
                      <span
                        className="w-5 h-5 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: p.primaryHex }}
                      />
                      <span
                        className="w-5 h-5 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: p.secondaryHex }}
                      />
                      <span
                        className="w-5 h-5 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: p.accentHex }}
                      />
                    </div>
                    <div>
                      <span className="font-serif font-semibold text-sm text-[#18181B] block">
                        {p.name}
                      </span>
                      <span className="text-[11px] text-[#8C7355] block">
                        {p.subtitle}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <div className="w-6 h-6 rounded-full bg-[#18181B] text-[#FAF7F2] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Material Swatches List */}
          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-widest text-[#9A6A42] font-semibold mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#9A6A42]" />
              <span>Composition Materials</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {selectedPalette.materials.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] px-3.5 py-2 rounded-xl text-xs text-[#18181B] border border-[#E8E2D9] font-medium"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Room Preview Frame */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D9]">
            {/* Smooth Fading Image */}
            <RevealImage
              key={selectedPalette.id}
              src={selectedPalette.roomImage}
              alt={selectedPalette.name}
              direction="right"
              className="w-full h-full object-cover object-center"
            />

            {/* Floating Lighting Badge */}
            <div className="absolute top-5 right-5 luxury-glass-dark text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg z-10">
              <Sun className="w-3.5 h-3.5 text-[#C4AD93]" />
              <span>{selectedPalette.lightingMood}</span>
            </div>

            {/* Bottom Palette Description Card */}
            <div className="absolute bottom-6 left-6 right-6 luxury-glass-dark p-6 rounded-2xl text-white backdrop-blur-xl border border-white/10 z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#C4AD93] font-mono block mb-1">
                PALETTE PROFILE • {selectedPalette.name}
              </span>
              <p className="text-xs text-[#E8E2D9] leading-relaxed">
                {selectedPalette.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
