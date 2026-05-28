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
import { cityPages } from '@/lib/data';
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

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
    alternates: {
      canonical: city.slug === 'joinville' ? '/' : `/cidade/${city.slug}`,
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

  return (
    <>
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
