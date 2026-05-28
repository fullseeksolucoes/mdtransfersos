'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import CoverageMap from '@/components/shared/CoverageMap';
import { coverageLocations } from '@/lib/data';

interface CoverageSectionProps {
  cityName?: string;
}

export default function CoverageSection({ cityName = "Joinville" }: CoverageSectionProps) {
  return (
    <section id="coverage" className="relative py-24 md:py-36 bg-surface-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <CoverageMap locations={coverageLocations} />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Cobertura"
              title="Onde você estiver."
              subtitle="Chegamos até lá."
              accent="ocean"
            />

            <Reveal delay={200}>
              <p className="text-ink-500 text-base leading-relaxed mb-10">
                Com frota própria estrategicamente distribuída por {cityName.toLowerCase()} e
                região metropolitana, garantimos tempo de resposta rápido em
                qualquer ponto.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-4 mb-10">
                {[
                  'Toda a área central e bairros nobres',
                  'Zona Norte, Sul, Leste e Oeste',
                  'Aeroporto e arredores',
                  'Municípios da região metropolitana',
                  'Rodovias e vias de acesso principais',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ocean-500 shrink-0" />
                    <span className="text-ink-600 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-6 p-6 border border-ink-200 bg-surface-100">
                <div className="text-center">
                  <span className="stat-number text-3xl text-ocean-600 block">
                    &lt;30
                  </span>
                  <span className="text-xs text-ink-400 uppercase tracking-wider">
                    min
                  </span>
                </div>
                <div className="w-px h-12 bg-ink-200" />
                <div>
                  <p className="text-ink-700 text-sm font-medium">
                    Tempo médio de chegada
                  </p>
                  <p className="text-ink-400 text-xs mt-0.5">
                    Na região metropolitana
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
