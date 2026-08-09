import React from 'react';
import { Compass, ShieldCheck, Feather, Sparkles } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { AnimatedBodyText } from './AnimatedBodyText';
import { RevealImage } from './RevealImage';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Acoustic & Tactile Quietude',
      description: 'We construct sanctuaries engineered with sound dampening wool, concealed joinery, and ambient indirect illumination.',
    },
    {
      icon: ShieldCheck,
      title: 'Crafted Permanence',
      description: 'Every stone slab, travertine basin, and smoked timber panel is sourced with generational durability and organic aging in mind.',
    },
    {
      icon: Compass,
      title: 'Biophilic Integration',
      description: 'Harmonizing architecture with natural wind currents, sun arcs, and living foliage for restorative residential well-being.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E2D9]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Editorial Image Grid */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D9]">
            <RevealImage
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
              alt="Elvara Architectural Detail"
              direction="left"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 right-8 luxury-glass-dark p-6 rounded-2xl text-white z-10">
              <span className="font-serif text-2xl italic font-normal block mb-2 text-[#E8E2D9]">
                "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C4AD93] font-mono block">
                ELVARA DESIGN MANIFESTO • VOLUME I
              </span>
            </div>
          </div>

          {/* Secondary Floating Accent Card */}
          <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 luxury-glass p-5 rounded-2xl shadow-xl border border-white/60 text-[#18181B]">
            <Sparkles className="w-5 h-5 text-[#9A6A42] mb-2" />
            <span className="font-serif text-lg font-semibold block leading-tight">
              100% Bespoke Customization
            </span>
            <span className="text-xs text-[#666055] mt-1 block">
              Tailored by in-house architects & master artisans.
            </span>
          </div>
        </div>

        {/* Right Column Content */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#9A6A42] font-semibold mb-3 block">
              THE ELVARA ETHOS
            </span>
            <AnimatedHeading
              text="Crafting Spaces of Quiet Magnificence"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181B] tracking-tight leading-tight mb-6"
            />
            <AnimatedBodyText
              text="At Elvara Living, we reject loud trends in favor of understated architectural elegance. We believe true luxury is found in the weight of a hand-forged brass handle, the soft texture of hand-troweled lime wash, and the silent rhythm of natural sunlight moving across travertine stone."
              className="text-base text-[#666055] leading-relaxed"
            />
          </div>

          {/* Pillars List */}
          <div className="space-y-6 pt-2">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F3EFE6] border border-[#E8E2D9]">
                  <div className="w-10 h-10 rounded-full bg-[#18181B] text-[#C4AD93] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#18181B] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#666055] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
