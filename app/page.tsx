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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SplitSection />
      <FleetSection />
      <HowItWorksSection />
      <CoverageSection />
      <TestimonialsSection />
      <SeoContentSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
