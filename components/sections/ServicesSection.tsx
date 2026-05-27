'use client';

import { Car, Plane, Building2, Wrench, Zap, AlertTriangle } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { transferServices, sosServices } from '@/lib/data';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Car, Plane, Building2, Wrench, Zap, AlertTriangle,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-surface-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-alert-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="O que oferecemos"
          title="Dois serviços."
          subtitle="Um padrão de excelência."
          accent="ocean"
          delay={0}
        />

        <Reveal delay={200}>
          <p className="text-ink-500 text-lg max-w-xl mb-20">
            Do transfer executivo ao suporte de emergência — somos o parceiro de
            mobilidade que você pode confiar.
          </p>
        </Reveal>

        <div className="mb-16">
          <Reveal delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-bold text-sm tracking-[0.2em] text-ocean-600 uppercase">
                Transfer Premium
              </span>
              <div className="flex-1 h-px bg-ocean-500/20" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {transferServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={iconMap[service.icon]}
                title={service.title}
                description={service.description}
                tag={service.tag}
                variant="ocean"
                delay={i}
              />
            ))}
          </div>
        </div>

        <hr className="divider-sos my-16" />

        <div>
          <Reveal delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-bold text-sm tracking-[0.2em] text-alert-600 uppercase">
                SOS Automotivo 24h
              </span>
              <div className="flex-1 h-px bg-alert-500/20" />
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 rounded-full bg-alert-500 sos-pulse" />
                <div className="w-2 h-2 rounded-full bg-alert-500" />
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {sosServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={iconMap[service.icon]}
                title={service.title}
                description={service.description}
                tag={service.tag}
                variant="alert"
                delay={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
