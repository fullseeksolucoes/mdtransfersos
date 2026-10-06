import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SplitSection from '@/components/sections/SplitSection';
import FleetSection from '@/components/sections/FleetSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CoverageSection from '@/components/sections/CoverageSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SeoContentSection from '@/components/sections/SeoContentSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { cityPages, site } from '@/lib/data';
import type { CityContent } from '@/lib/types';

function getCity(slug: string): CityContent | undefined {
  return cityPages.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return cityPages.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) return {};

  const canonical = city.slug === 'joinville' ? '/' : `/cidade/${city.slug}`;

  return {
    title: { absolute: city.metaTitle },
    description: city.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      siteName: site.name,
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: city.name,
        item: `${site.url}/cidade/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection cityName={city.name} subtext={city.heroSubtext} />
      <ServicesSection />
      <SplitSection />
      <FleetSection />
      <HowItWorksSection />
      <CoverageSection cityName={city.name} />
      <TestimonialsSection />
      <SeoContentSection city={city.name} paragraphs={city.paragraphs} />
      <FAQSection />
      <CTASection />
    </>
  );
}
