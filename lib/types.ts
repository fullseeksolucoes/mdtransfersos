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

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface Vehicle {
  name: string;
  category: string;
  tagline: string;
  image: string;
  specs: VehicleSpec[];
  accent: 'blue' | 'red';
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrustMetric {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface CoverageCity {
  city: string;
  region: string;
}

export interface CoverageRoute {
  from: string;
  to: string;
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
  address: string;
}
