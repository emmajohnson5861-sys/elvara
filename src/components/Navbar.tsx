import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Auto update active nav section based on scroll position
      const sections = ['hero', 'about', 'shop-by-room', 'philosophy', 'ways-we-work', 'journal', 'inquire'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'shop-by-room', label: 'Shop By Room' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'ways-we-work', label: 'Services' },
    { id: 'journal', label: 'Journal' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 shadow-xs'
          : 'bg-[#FAF7F2] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo - Exact match to uploaded header emblem and typography */}
        <button
          onClick={() => handleNavClick('hero')}
          id="nav-logo-btn"
          className="flex items-center gap-2 text-left cursor-pointer focus:outline-hidden"
        >
          <div className="w-7 h-7 rounded-full bg-[#18181B] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-bold shadow-xs">
            <MapPin className="w-4 h-4 text-[#C4AD93] transform fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#18181B] leading-none">
              ELVARA
            </span>
            <span className="text-[8px] tracking-[0.35em] text-[#8C7355] uppercase font-semibold mt-0.5">
              LIVING
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs tracking-wider font-medium transition-colors duration-200 relative py-1 cursor-pointer ${
                activeSection === item.id ? 'text-[#18181B] font-semibold' : 'text-[#524E48] hover:text-[#18181B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Black Pill 'Inquire Us' */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('inquire')}
            id="nav-inquire-us-btn"
            className="px-6 py-3 rounded-none bg-[#18181B] text-[#FAF7F2] text-xs font-semibold tracking-wider hover:bg-[#333333] transition-all duration-300 shadow-xs cursor-pointer flex items-center gap-2"
          >
            <span>Inquire Us</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-[#18181B] hover:text-[#9A6A42] transition-colors focus:outline-hidden cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E2D9] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-serif tracking-wide py-2 border-b border-[#E8E2D9]/50 ${
                  activeSection === item.id ? 'text-[#9A6A42] font-semibold' : 'text-[#18181B]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  handleNavClick('inquire');
                }}
                className="w-full py-3 rounded-none bg-[#18181B] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <span>Inquire Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

