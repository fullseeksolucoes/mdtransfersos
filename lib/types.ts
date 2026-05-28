export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceContent {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: ServiceFeature[];
  accent: 'blue' | 'red';
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface CityContent {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  paragraphs: string[];
}

export interface SiteConfig {
  name: string;
  initials: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  whatsappLink: string;
  whatsappSOS: string;
  whatsappSOSLink: string;
  whatsappTransfer: string;
  whatsappTransferLink: string;
  address: string;
}
