'use client';

import { useEffect, useRef } from 'react';
import { Car, Plane, Building2, Wrench, Zap, AlertTriangle } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

const TRANSFER_SERVICES = [
  {
    icon: Car,
    title: 'Transfer Executivo',
    description:
      'Veículos premium com motoristas certificados para seus compromissos corporativos e pessoais de alto nível.',
    tag: 'Executive',
  },
  {
    icon: Plane,
    title: 'Transfer Aeroporto',
    description:
      'Pontualidade absoluta para chegadas e partidas. Monitoramos seu voo em tempo real.',
    tag: 'Airport',
  },
  {
    icon: Building2,
    title: 'Transporte Corporativo',
    description:
      'Soluções completas de mobilidade para empresas: eventos, convenções e deslocamentos de equipes.',
    tag: 'Corporate',
  },
];

const SOS_SERVICES = [
  {
    icon: Wrench,
    title: 'Troca de Pneu',
    description:
      'Equipe especializada a qualquer hora do dia ou da noite. Pneu furado nunca mais vira um problema.',
    tag: 'Pneu',
  },
  {
    icon: Zap,
    title: 'Recarga de Bateria',
    description:
      'Bateria descarregada? Chegamos em minutos com equipamento profissional de alta potência.',
    tag: 'Bateria',
  },
  {
    icon: AlertTriangle,
    title: 'SOS de Emergência',
    description:
      'Assistência completa em situações críticas: pane seca, quebra mecânica, acidente e guincho 24h.',
    tag: 'SOS',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-surface-100 overflow-hidden"
    >
      {/* Subtle background detail */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-alert-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-ocean-500/60" />
          <span className="text-xs font-medium tracking-[0.3em] text-ocean-600 uppercase">
            O que oferecemos
          </span>
        </div>

        <h2 className="reveal reveal-delay-1 font-display font-extrabold text-4xl md:text-6xl text-ink-800 tracking-tight mb-4">
          Dois serviços.
          <br />
          <span className="text-ink-400">Um padrão de excelência.</span>
        </h2>

        <p className="reveal reveal-delay-2 text-ink-500 text-lg max-w-xl mb-20">
          Do transfer executivo ao suporte de emergência — somos o parceiro de
          mobilidade que você pode confiar.
        </p>

        {/* Transfer services */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-ocean-600 uppercase">
              Transfer Premium
            </span>
            <div className="flex-1 h-px bg-ocean-500/20" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TRANSFER_SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tag={service.tag}
                variant="ocean"
                delay={i}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="divider-sos my-16" />

        {/* SOS services */}
        <div>
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-alert-600 uppercase">
              SOS Automotivo 24h
            </span>
            <div className="flex-1 h-px bg-alert-500/20" />
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-alert-500 sos-pulse" />
              <div className="w-2 h-2 rounded-full bg-alert-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SOS_SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
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
