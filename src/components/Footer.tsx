import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#FAF7F2] text-[#18181B] pt-12 pb-16 border-t border-[#E2DACF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Top Subscribe Bar (Matching Reference Layout) */}
        <ScrollReveal direction="up" delay={0.1} start="top 90%">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-[#E2DACF]">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-medium tracking-tight">
                Subscribe
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6456] font-light leading-relaxed">
                Enter your email to receive relevant interior design stories, project reveals, and journal updates.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="px-5 py-3 rounded-xs bg-[#EAE4DC] text-xs text-[#18181B] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C8275]" />
                  <span>Thank you for subscribing to Elvara Living updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-[480px]">
                  <input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white border border-[#D5CDBD] text-xs text-[#18181B] placeholder-[#9CA3AF] focus:outline-none focus:border-[#18181B] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-none bg-[#18181B] text-[#FAF7F2] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#3A3834] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Main Navigation Grid (Matching Reference Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pt-4">
          
          {/* Brand & Copyright Column */}
          <ScrollReveal direction="up" delay={0.15} start="top 90%" className="col-span-2 md:col-span-1 space-y-4">
            <div className="font-serif text-3xl font-medium tracking-tight text-[#18181B] lowercase">
              elvara
            </div>
            
            <div className="space-y-1 text-xs text-[#8C8275] font-light">
              <p>Copyright © 2026</p>
              <p>Elvara Living Corp.</p>
            </div>

            <p className="text-[11px] text-[#A0988A] pt-2 font-light">
              Crafted for Refined Interior Architecture.
            </p>
          </ScrollReveal>

          {/* Column 1: SERVICES / PRODUCT */}
          <ScrollReveal direction="up" delay={0.25} start="top 90%" className="space-y-3">
            <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase font-semibold text-[#18181B]">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#524E48]">
              <li><a href="#ways-we-work" className="hover:text-[#18181B] transition-colors">New Construction</a></li>
              <li><a href="#ways-we-work" className="hover:text-[#18181B] transition-colors">Full Home Remodels</a></li>
              <li><a href="#ways-we-work" className="hover:text-[#18181B] transition-colors">Furniture & Styling</a></li>
              <li><a href="#lived-in-design" className="hover:text-[#18181B] transition-colors">Material Selection</a></li>
              <li><a href="#lived-in-design" className="hover:text-[#18181B] transition-colors">Architectural Advisory</a></li>
            </ul>
          </ScrollReveal>

          {/* Column 2: COMPANY */}
          <ScrollReveal direction="up" delay={0.35} start="top 90%" className="space-y-3">
            <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase font-semibold text-[#18181B]">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-[#524E48]">
              <li><a href="#lived-in-design" className="hover:text-[#18181B] transition-colors">About Us</a></li>
              <li><a href="#journal" className="hover:text-[#18181B] transition-colors">Journal & News</a></li>
              <li><a href="#lived-in-design" className="hover:text-[#18181B] transition-colors">Our Approach</a></li>
              <li><a href="#journal" className="hover:text-[#18181B] transition-colors">Careers</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </ScrollReveal>

          {/* Column 3: HELP & PROCESS */}
          <ScrollReveal direction="up" delay={0.45} start="top 90%" className="space-y-3">
            <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase font-semibold text-[#18181B]">
              HELP
            </h4>
            <ul className="space-y-2.5 text-xs text-[#524E48]">
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Book Consultation
                </button>
              </li>
              <li><a href="#ways-we-work" className="hover:text-[#18181B] transition-colors">Project Workflow</a></li>
              <li><a href="#journal" className="hover:text-[#18181B] transition-colors">Client Portal</a></li>
              <li><a href="#lived-in-design" className="hover:text-[#18181B] transition-colors">Studio Locations</a></li>
              <li><a href="#journal" className="hover:text-[#18181B] transition-colors">FAQ & Inquiries</a></li>
            </ul>
          </ScrollReveal>

          {/* Column 4: SOCIAL */}
          <ScrollReveal direction="up" delay={0.55} start="top 90%" className="space-y-3">
            <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase font-semibold text-[#18181B]">
              SOCIAL
            </h4>
            <ul className="space-y-2.5 text-xs text-[#524E48]">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition-colors">Instagram</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition-colors">Pinterest</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition-colors">LinkedIn</a></li>
              <li><a href="https://houzz.com" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition-colors">Houzz Atelier</a></li>
            </ul>
          </ScrollReveal>

        </div>

      </div>
    </footer>
  );
};
