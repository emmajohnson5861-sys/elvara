import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedHeading } from './AnimatedHeading';

interface RoomCategory {
  id: string;
  title: string;
  image: string;
}

const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'living-room',
    title: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'dining-room',
    title: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85',
  },
];

export const ShopByRoomSection: React.FC = () => {
  return (
    <section id="shop-by-room" className="py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Eyebrow + Headline + View All Rooms button */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2">
              <span className="text-[#9A6A42] text-xs transform rotate-45 font-bold">❖</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#524E48] uppercase">
                SHOP BY ROOM
              </span>
            </div>
          </ScrollReveal>

          <AnimatedHeading
            text={"Find inspiration\nfor every room"}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-medium leading-[1.18] tracking-tight"
          />

          <ScrollReveal direction="up" delay={0.3}>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#18181B] border-b-2 border-[#18181B] pb-1 cursor-pointer">
                <span>View All Rooms</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#18181B]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: 3 Room Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {ROOM_CATEGORIES.map((room, idx) => (
            <ScrollReveal
              key={room.id}
              direction="up"
              delay={0.15 * (idx + 1)}
              className="relative aspect-[3/4] rounded-none overflow-hidden group cursor-pointer"
            >
              <img
                src={room.image}
                alt={room.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

              {/* Card Label and Arrow Button */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-20">
                <span className="text-white text-base sm:text-lg font-medium tracking-wide">
                  {room.title}
                </span>

                <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
