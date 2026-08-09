import React, { useState } from 'react';
import { Property } from '../types';
import { X, Layers, Check, Compass, Download, Calendar } from 'lucide-react';

interface FloorPlanModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({
  property,
  onClose,
  onOpenBooking,
}) => {
  if (!property) return null;

  const [activeLevelIndex, setActiveLevelIndex] = useState(0);
  const currentPlan = property.floorPlans[activeLevelIndex] || property.floorPlans[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] rounded-none max-w-4xl w-full overflow-hidden border border-[#E8E2D9] relative flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#18181B] text-[#FAF7F2] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C4AD93] uppercase tracking-widest mb-1">
              <Layers className="w-4 h-4" />
              <span>Architectural Blueprint</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              {property.name} — Spatial Layout
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level Switcher Tabs */}
        {property.floorPlans.length > 1 && (
          <div className="bg-[#E8E2D9] px-6 py-3 flex gap-3 border-b border-[#C4AD93]/40 overflow-x-auto">
            {property.floorPlans.map((fp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLevelIndex(idx)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLevelIndex === idx
                    ? 'bg-[#18181B] text-white shadow-xs'
                    : 'bg-white/60 text-[#666055] hover:text-[#18181B]'
                }`}
              >
                {fp.level} ({fp.area})
              </button>
            ))}
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Floor Plan Render */}
            <div className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E8E2D9] border border-[#C4AD93]/40 shadow-inner">
              <img
                src={currentPlan?.image || property.heroImage}
                alt={currentPlan?.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 luxury-glass px-4 py-1.5 rounded-full text-xs font-semibold uppercase text-[#18181B]">
                {currentPlan?.level} — {currentPlan?.area}
              </div>
            </div>

            {/* Spatial Details */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9A6A42] font-semibold block mb-1">
                  LEVEL HIGHLIGHTS
                </span>
                <h4 className="font-serif text-2xl font-semibold text-[#18181B]">
                  {currentPlan?.title}
                </h4>
              </div>

              <div className="space-y-3">
                {currentPlan?.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#F3EFE6] border border-[#E8E2D9]">
                    <Check className="w-4 h-4 text-[#9A6A42] shrink-0" />
                    <span className="text-xs text-[#18181B] font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="flex-1 py-3.5 px-8 rounded-none bg-[#18181B] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#333] transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C4AD93]" />
                  <span>Request Full Blueprint</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
