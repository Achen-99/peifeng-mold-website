// Peifeng Precision Mold — Company constants and configuration

import type { HomepageVideo, NavItem, Testimonial } from '@/types';

// ============================================================
// Company Information
// ============================================================
export const COMPANY = {
  name: 'Peifeng Precision',
  fullName: 'Shenzhen Peifeng Precision Hardware Mold Co., Ltd.',
  shortName: 'Peifeng Mold',
  tagline: 'Precision Molds, Engineered in Shenzhen',
  description:
    'We provide mold engineering, manufacturing management, and export services. Our in-house engineers handle DFM and QC. Our audited factory partners handle manufacturing. You get one accountable contact with factory-level pricing.',
  email: 'info@peifengmold.com',
  phone: '+86 (to-be-updated)',
  whatsapp: '+86 (to-be-updated)',
  address: 'Shenzhen, Guangdong, China',
  foundedYear: 2015,
} as const;

// ============================================================
// Homepage Video
// ============================================================
// Set url to empty string to show placeholder.
// For YouTube: { url: "VIDEO_ID", platform: "youtube" }
// For direct file: { url: "/your-video.mp4", platform: "direct", poster: "/poster.jpg" }
export const HOMEPAGE_VIDEO: HomepageVideo = {
  url: '',
  platform: 'youtube',
};

// ============================================================
// Navigation
// ============================================================
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Injection Molds', href: '/services/injection-molds' },
      { label: 'Die-Casting Molds', href: '/services/die-casting-molds' },
      { label: 'Blow Molds', href: '/services/blow-molds' },
      { label: 'Rapid Prototyping', href: '/services/rapid-prototyping' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

// ============================================================
// Stats — shown on homepage hero
// ============================================================
export const STATS = [
  { value: '10+', label: 'Years in Mold Industry' },
  { value: '500+', label: 'Molds Delivered' },
  { value: '20+', label: 'Factory Partners Audited' },
  { value: '15+', label: 'Countries Exported To' },
] as const;

// ============================================================
// Mold Types
// ============================================================
export const MOLD_TYPES = [
  {
    slug: 'injection-molds',
    title: 'Injection Molds',
    shortDescription:
      'Precision injection molds for thermoplastics — from single cavity to high-volume multi-cavity systems.',
    icon: '🔧',
  },
  {
    slug: 'die-casting-molds',
    title: 'Die-Casting Molds',
    shortDescription:
      'High-pressure die-casting molds for aluminum, zinc, and magnesium alloys.',
    icon: '⚡',
  },
  {
    slug: 'blow-molds',
    title: 'Blow Molds',
    shortDescription:
      'Extrusion and injection blow molds for bottles, containers, and hollow parts.',
    icon: '🫗',
  },
  {
    slug: 'rapid-prototyping',
    title: 'Rapid Tooling',
    shortDescription:
      'Fast-turnaround prototype molds for design validation and low-volume production.',
    icon: '🚀',
  },
] as const;

// ============================================================
// How It Works — 4-step process
// ============================================================
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Send Your Design',
    description:
      'Share your CAD file or part drawing. Our engineers review it and provide free DFM feedback within 24 hours.',
    icon: '📤',
  },
  {
    step: 2,
    title: 'We Engineer & Match',
    description:
      'Our team selects the right factory partner for your specific mold type, material, and volume. We handle mold design review and steel selection.',
    icon: '🔍',
  },
  {
    step: 3,
    title: 'We QC & You Approve',
    description:
      'We inspect at every stage. Before shipping, you receive sample parts, CMM reports, photos, and video of your finished mold for approval.',
    icon: '✅',
  },
  {
    step: 4,
    title: 'Export & Delivery',
    description:
      'We handle rust protection, export crating, customs documentation, and freight. Your mold arrives at your door, ready to run.',
    icon: '🚢',
  },
] as const;

// ============================================================
// Why Choose Us
// ============================================================
export const ADVANTAGES = [
  {
    title: 'In-House Engineering Team',
    description:
      'Our engineers review every design for manufacturability before steel is cut. Free DFM feedback with every quote. We catch issues that save you time and money.',
    icon: '👨‍🔧',
  },
  {
    title: 'Independent Quality Control',
    description:
      'We inspect — the factory does not inspect itself. Every mold goes through our QC checklist: steel verification, in-process checks, mold trial, and final pre-shipment inspection.',
    icon: '🔬',
  },
  {
    title: 'Factory-Level Pricing',
    description:
      'We match your project to the right specialized factory and negotiate pricing in Chinese with deep local market knowledge. You get competitive pricing without the language barrier.',
    icon: '💰',
  },
  {
    title: 'One Accountable Partner',
    description:
      'English-speaking project manager. Weekly progress updates with photos. One contact from quote to delivery. No communication gaps, no timezone frustration.',
    icon: '🌐',
  },
] as const;

// ============================================================
// Testimonials
// ============================================================
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Michael R.',
    title: 'Engineering Director',
    company: 'Precision Plastics Inc.',
    country: 'USA',
    quote:
      'Working with Peifeng saved us 40% compared to our local mold maker. Their DFM review caught issues we missed, and the mold has been running flawlessly for over 100,000 shots. Same quality, much better price.',
  },
  {
    name: 'Thomas K.',
    title: 'CEO',
    company: 'TechParts GmbH',
    country: 'Germany',
    quote:
      'Their DFM report found three issues in our design that our own engineers missed. They built to HASCO standard and delivered ahead of schedule. Having an English-speaking engineer on the project made all the difference.',
  },
  {
    name: 'James L.',
    title: 'Production Manager',
    company: 'Aussie Molders Pty Ltd',
    country: 'Australia',
    quote:
      'We have been importing molds from China for 10 years. Peifeng is the first partner that consistently delivers on time with thorough QC documentation. They have become our go-to for all new mold projects.',
  },
];

// ============================================================
// Manufacturing Capabilities (for About page)
// ============================================================
export const CAPABILITIES = [
  { name: 'CNC Machining', detail: 'Up to 2,000 × 1,500 mm work envelope' },
  { name: 'EDM (Sinker & Wire)', detail: 'Precision to ±0.002 mm' },
  { name: 'Surface Grinding', detail: 'Up to 800 × 400 mm' },
  { name: 'CMM Inspection', detail: 'Accuracy to 0.0015 mm' },
  { name: 'Mold Trial', detail: 'Injection machines 90T to 320T' },
  { name: 'Mold Base Standards', detail: 'HASCO, DME, LKM, MISUMI' },
] as const;

// ============================================================
// Countries for RFQ form dropdown
// ============================================================
export const COUNTRIES = [
  'United States',
  'Germany',
  'United Kingdom',
  'Australia',
  'Canada',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Poland',
  'Japan',
  'South Korea',
  'Brazil',
  'Mexico',
  'India',
  'Other',
] as const;

// ============================================================
// Mold steel types reference
// ============================================================
export const STEEL_TYPES = [
  { grade: 'P20', hardness: '28-32 HRC', applications: 'General purpose, low-volume production' },
  { grade: '718H', hardness: '33-37 HRC', applications: 'Medium production, good polishability' },
  { grade: 'NAK80', hardness: '38-42 HRC', applications: 'High polish, optical parts, lenses' },
  { grade: 'S136', hardness: '48-52 HRC', applications: 'Corrosion resistant, medical, food-grade' },
  { grade: 'H13', hardness: '46-50 HRC', applications: 'High-temp, die-casting, engineering resins' },
  { grade: 'M333', hardness: '50-54 HRC', applications: 'High-wear, glass-filled materials' },
] as const;

// ============================================================
// Mold base standards
// ============================================================
export const MOLD_BASE_STANDARDS = [
  { standard: 'HASCO', region: 'Europe', notes: 'Most common in EU market. Metric dimensions.' },
  { standard: 'DME', region: 'North America', notes: 'US standard. Inch dimensions available.' },
  { standard: 'LKM', region: 'Asia / Global', notes: 'Cost-effective, widely used in China.' },
  { standard: 'MISUMI', region: 'Japan / Global', notes: 'High precision, extensive catalog.' },
] as const;

// ============================================================
// Trust signals
// ============================================================
export const TRUST_SIGNALS = [
  { label: 'DFM Expertise', description: 'Free Design for Manufacturability Review' },
  { label: 'DIN Standard', description: 'German Engineering Specifications' },
  { label: 'JIS Standard', description: 'Japanese Industrial Standards' },
  { label: 'SPI Standard', description: 'US Mold Finish Classifications' },
] as const;
