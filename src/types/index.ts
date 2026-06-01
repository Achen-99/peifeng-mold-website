// Shared TypeScript types for Peifeng Mold Website

export interface MoldType {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  applications: string[];
  specs: SpecItem[];
  imageUrl: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  country: string;
  industry: string;
  moldType: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  videoUrl?: string;
  specs: SpecItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: 'Engineering' | 'Sourcing' | 'Quality' | 'Industry';
  tags: string[];
  imageUrl: string;
}

export interface RFQFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone?: string;
  country: string;
  moldTypes: string[];
  partDescription: string;
  annualVolume?: string;
  moldLife?: string;
  timeline?: string;
  additionalNotes?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  country: string;
  quote: string;
  avatarUrl?: string;
}
