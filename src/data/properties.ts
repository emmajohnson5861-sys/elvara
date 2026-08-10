import { Property, InteriorConcept, Testimonial } from '../types';

export const SIGNATURE_PROPERTIES: Property[] = [
  {
    id: 'obsidian-residence',
    name: 'The Obsidian Residence',
    headline: 'Sculpted Architectural Sanctuaries',
    subheadline: 'Where tailored craftsmanship meets quiet modern luxury.',
    description: 'Designed as a timeless refuge, The Obsidian combines soft ambient architectural light strips, custom Italian sectional furniture, and dark smoked-oak joinery. Seamless indoor-outdoor flow creates an atmosphere of profound serenity.',
    location: 'Kyoto Highlands, Japan',
    priceDisplay: '¥ 530,000,000',
    priceRaw: 530000000,
    currency: 'JPY',
    category: 'Villas',
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 6200,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=75',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=75'
    ],
    swatches: [
      { name: 'Warm Cream Silk', hex: '#FAF7F2', material: 'Hand-troweled Lime Plaster' },
      { name: 'Tuscan Terracotta', hex: '#9A6A42', material: 'Brushed Saddle Leather' },
      { name: 'Muted Sand', hex: '#C4AD93', material: 'Travertine Stone' },
      { name: 'Obsidian Smoked Oak', hex: '#1C1B1A', material: 'Carbonized Oak Joinery' }
    ],
    keyFeatures: [
      'Custom linear LED recessed perimeter lighting',
      'Minotti L-shaped modular seating suite',
      'Integrated gaggenau chef kitchen in graphite matte',
      'Floor-to-ceiling double acoustic glazing',
      'Radiant heated micro-cement flooring',
      'Private meditation zen garden & reflection pool'
    ],
    completionYear: 2025,
    architect: 'Kengo Kuma & Associates',
    floorPlans: [
      {
        level: 'Ground Level',
        title: 'Grand Living & Culinary Atelier',
        area: '3,400 sq ft',
        features: ['Open-plan lounge', 'Custom island kitchen', 'Sunken conversation pit', 'Guest powder room'],
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=75'
      },
      {
        level: 'Upper Floor',
        title: 'Primary Sanctuary Suite & Observatory',
        area: '2,800 sq ft',
        features: ['Dual walk-in dressing rooms', 'Freestanding Japanese cedar soaking tub', 'Private sunset terrace'],
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=75'
      }
    ]
  },
  {
    id: 'aurelia-sky-penthouse',
    name: 'Aurelia Sky Penthouse',
    headline: 'Floating Above the Horizon',
    subheadline: 'Unrivalled panoramic glass pavilion floating above the metropolitan skyline.',
    description: 'Crown atop the city, Aurelia features double-height 22ft ceiling spans, bookmatched Calacatta marble wall slabs, and bespoke motorized acoustic louver systems that respond dynamically to sun angles.',
    location: 'Metropolitan Tower, New York',
    priceDisplay: '$ 12,800,000',
    priceRaw: 12800000,
    currency: 'USD',
    category: 'Penthouses',
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 8400,
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=75',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=75'
    ],
    swatches: [
      { name: 'Calacatta White', hex: '#F0ECE1', material: 'Italian Marble Slabs' },
      { name: 'Champagne Brass', hex: '#C5A059', material: 'Satin Anodized Brass' },
      { name: 'Smoked Charcoal', hex: '#262626', material: 'Brushed Aluminum Accents' },
      { name: 'Cognac Velvet', hex: '#8C522B', material: 'Custom Mohair Upholstery' }
    ],
    keyFeatures: [
      '22-foot double height glass atrium',
      'Private key-coded high-speed elevator',
      'Heated cantilevered outdoor infinity plunge spa',
      'Soundproof home cinema & wine tasting lounge',
      'Full Lutron Homeworks lighting automation'
    ],
    completionYear: 2026,
    architect: 'Foster + Partners',
    floorPlans: [
      {
        level: 'Lower Penthouse',
        title: 'Atrium & Social Lounge',
        area: '4,500 sq ft',
        features: ['Grand foyer', 'Glass wine cellar', 'Professional catering pantry'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75'
      }
    ]
  },
  {
    id: 'solstice-coastal-estate',
    name: 'The Solstice Coastal Villa',
    headline: 'Harmonious Clifftop Living',
    subheadline: 'Perched along pristine sea cliffs, where natural stone meets organic modernism.',
    description: 'Engineered into raw limestone cliffs, Solstice blends raw brushed limestone, floor-to-ceiling pivot glass doors, and zero-edge reflection pools that blend directly with the horizon line.',
    location: 'Lake Como / Amalfi Coast, Italy',
    priceDisplay: '€ 8,900,000',
    priceRaw: 8900000,
    currency: 'EUR',
    category: 'Estates',
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 9800,
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=75',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=75'
    ],
    swatches: [
      { name: 'Limestone Chalk', hex: '#EAE5D9', material: 'Roman Travertine' },
      { name: 'Warm Walnut', hex: '#634832', material: 'European Walnut' },
      { name: 'Mediterranean Sage', hex: '#879182', material: 'Natural Clay Wash' },
      { name: 'Deep Sea Basalt', hex: '#212B2E', material: 'Flamed Basalt Stone' }
    ],
    keyFeatures: [
      'Private funicular access to private cove beach',
      'Olfactory climate control & ionized indoor air purification',
      'Olive grove terrace with subterranean wine cellar',
      'Solar kinetic roof system with zero net footprint'
    ],
    completionYear: 2025,
    architect: 'Studio Studio Studio',
    floorPlans: [
      {
        level: 'Cliff Level',
        title: 'Panoramic Living & Infinity Deck',
        area: '5,000 sq ft',
        features: ['Infinity pool deck', 'Outdoor summer kitchen', 'Master wing'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75'
      }
    ]
  },
  {
    id: 'verdant-eco-sanctuary',
    name: 'Verdant Eco-Sanctuary',
    headline: 'Biophilic Architectural Excellence',
    subheadline: 'An immersive natural retreat carved inside a lush pine forest.',
    description: 'Blending organic timber beams, living moss walls, and thermal geothermal HVAC systems. Verdant represents the absolute pinnacle of sustainable, health-focused luxury architecture.',
    location: 'Zermatt, Switzerland',
    priceDisplay: 'CHF 9,400,000',
    priceRaw: 9400000,
    currency: 'CHF',
    category: 'Urban Sanctuaries',
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 5800,
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=75',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=75'
    ],
    swatches: [
      { name: 'Nordic Pine', hex: '#D8C3A5', material: 'Reclaimed Swiss Pine' },
      { name: 'Alpine Granite', hex: '#7E8287', material: 'Chiseled Granite' },
      { name: 'Forest Moss', hex: '#4A5D4E', material: 'Organic Biophilic Wall' },
      { name: 'Warm Pewter', hex: '#3B3C36', material: 'Brushed Dark Pewter' }
    ],
    keyFeatures: [
      'Passivhaus certified low energy consumption',
      'Private geothermal sauna & cold plunge sanctuary',
      'Automated acoustic fireplace in blackened steel',
      'HEPA filtered air exchange system'
    ],
    completionYear: 2026,
    architect: 'Peter Zumthor Studio',
    floorPlans: [
      {
        level: 'Main Chalet',
        title: 'Chalet Living & Thermal Spa',
        area: '3,200 sq ft',
        features: ['Thermal spa suite', 'Double-sided fireplace', 'Ski valet room'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75'
      }
    ]
  }
];

export const INTERIOR_CONCEPTS: InteriorConcept[] = [
  {
    id: 'living-minimalism',
    title: 'The Organic Lounge Atelier',
    subtitle: 'Tactile Textiles & Soft Ambient Glow',
    category: 'Living Room',
    description: 'Focusing on low-profile modular sofas in bouclé and linen, paired with hand-turned teak coffee tables and warm indirect perimeter light troughs.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=75',
    materials: ['Italian Linen', 'Travertine Stone', 'Smoked Oak', 'Brushed Brass'],
    accentColor: '#9A6A42'
  },
  {
    id: 'culinary-craft',
    title: 'Monolithic Culinary Pavilion',
    subtitle: 'Seamless Stone & Concealed Appliances',
    category: 'Minimalist Kitchen',
    description: 'Featuring an 18-foot seamless Nero Marquina marble kitchen island with integrated induction elements and hand-crafted walnut drawer dividers.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=75',
    materials: ['Nero Marquina Marble', 'Matte Lacquer', 'Gaggenau Steel', 'Custom Walnut'],
    accentColor: '#1A1A1A'
  },
  {
    id: 'master-sanctuary',
    title: 'The Sereno Master Suite',
    subtitle: 'Restorative Silence & Acoustic Calm',
    category: 'Master Suite',
    description: 'Custom upholstered headboard wall extending 16 feet, acoustic wool felt wall panels, and motorized silk blackout drapery.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=75',
    materials: ['Wild Silk', 'Acoustic Wool', 'Japanese Cedar', 'Warm LED Strips'],
    accentColor: '#C4AD93'
  },
  {
    id: 'wellness-bath',
    title: 'Kyoto Bathing Sanctuary',
    subtitle: 'Soaking Tubs & Natural Basalt Stone',
    category: 'Wellness Spa',
    description: 'A deep Hinoki wood soaking tub paired with floor-to-ceiling waterfall showers and natural stone pebble flooring for sensory reflexology.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=75',
    materials: ['Hinoki Wood', 'Volcanic Basalt', 'Rainfall Glass', 'Aromatherapy Misters'],
    accentColor: '#879182'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Elvara Living redefines luxury not through noise, but through immaculate detail, light, and silence. Living in The Obsidian is a daily meditative experience.',
    author: 'Elena & Julian Vance',
    role: 'Private Residence Owners',
    source: 'Kyoto Highlands',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=75'
  },
  {
    id: '2',
    quote: 'The craftsmanship and integration of smart climate and ambient light are unlike anything we have seen in global high-end real estate.',
    author: 'Architectural Digest',
    role: 'Global Architecture Journal',
    source: '2025 Luxury Design Award',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=75'
  },
  {
    id: '3',
    quote: 'From the initial private tour to tailored interior customizations, Elvara Living delivered architectural perfection.',
    author: 'Marcus Sterling',
    role: 'Art Collector & Entrepreneur',
    source: 'Aurelia Penthouse',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=75'
  }
];
