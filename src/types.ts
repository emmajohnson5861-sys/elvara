export interface ColorSwatch {
  name: string;
  hex: string;
  material: string;
}

export interface FloorPlanLevel {
  level: string;
  title: string;
  area: string;
  features: string[];
  image: string;
}

export interface Property {
  id: string;
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  location: string;
  priceDisplay: string;
  priceRaw: number;
  currency: string;
  category: 'Villas' | 'Penthouses' | 'Estates' | 'Urban Sanctuaries';
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  heroImage: string;
  galleryImages: string[];
  swatches: ColorSwatch[];
  keyFeatures: string[];
  floorPlans: FloorPlanLevel[];
  completionYear: number;
  architect: string;
}

export interface InteriorConcept {
  id: string;
  title: string;
  subtitle: string;
  category: 'Living Room' | 'Minimalist Kitchen' | 'Master Suite' | 'Outdoor Terrace' | 'Wellness Spa';
  description: string;
  image: string;
  materials: string[];
  accentColor: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredPropertyId: string;
  preferredDate: string;
  preferredTime: string;
  guestsCount: number;
  message: string;
  newsletterOptIn: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  source: string;
  avatar: string;
}
