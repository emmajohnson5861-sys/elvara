import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBannerSlider } from './components/HeroBannerSlider';
import { AboutUsSection } from './components/AboutUsSection';
import { ShopByRoomSection } from './components/ShopByRoomSection';
import { NaturalMaterialsQuoteSection } from './components/NaturalMaterialsQuoteSection';
import { LivedInDesignSection } from './components/LivedInDesignSection';
import { WaysWeWorkSection } from './components/WaysWeWorkSection';
import { BlogJournalSection } from './components/BlogJournalSection';
import { InquireSection } from './components/InquireSection';
import { Footer } from './components/Footer';
import { InquiryBookingModal } from './components/InquiryBookingModal';
import { FloorPlanModal } from './components/FloorPlanModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { BackToTop } from './components/BackToTop';
import { SIGNATURE_PROPERTIES } from './data/properties';
import { Property } from './types';

export default function App() {
  const [activeNavSection, setActiveNavSection] = useState('hero');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [floorPlanProperty, setFloorPlanProperty] = useState<Property | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#18181B] flex flex-col font-sans selection:bg-[#9A6A42] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        activeSection={activeNavSection}
        setActiveSection={setActiveNavSection}
      />

      {/* Main Content Sections with exact 100px gap between sections */}
      <main className="flex-1 flex flex-col gap-[100px] mb-[100px]">
        {/* Hero Banner Slider matching uploaded design with GSAP Parallax */}
        <HeroBannerSlider
          properties={SIGNATURE_PROPERTIES}
          onOpenPropertyDetail={(prop) => setSelectedProperty(prop)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* About Us Section */}
        <AboutUsSection onLearnMore={() => setIsBookingOpen(true)} />

        {/* Shop By Room Inspiration Section */}
        <ShopByRoomSection />

        {/* Natural Materials & Philosophy Quote Section */}
        <NaturalMaterialsQuoteSection />

        {/* Lived-In Design Brand Philosophy Section */}
        <LivedInDesignSection />

        {/* Ways We Can Work Together - Infinite Vertical Moving Marquee Gallery */}
        <WaysWeWorkSection />

        {/* Latest Journal & Articles Section */}
        <BlogJournalSection />

        {/* Full-width Inquiry Form & Architectural Interior Section */}
        <InquireSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Back To Top Floating Action Button */}
      <BackToTop />

      {/* Modals */}
      <InquiryBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        properties={SIGNATURE_PROPERTIES}
        selectedProperty={selectedProperty}
      />

      <FloorPlanModal
        property={floorPlanProperty}
        onClose={() => setFloorPlanProperty(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}

