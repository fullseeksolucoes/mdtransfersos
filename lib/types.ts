export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface CityContent {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  paragraphs: string[];
}

export interface SiteConfig {
  name: string;
  initials: string;
  url: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  whatsappSOS: string;
  whatsappSOSLink: string;
  whatsappTransfer: string;
  whatsappTransferLink: string;
  address: string;
}
