'use client';

import { useEffect, useRef } from 'react';
import { Navigation, Radio } from 'lucide-react';

const LOCATIONS = [
  { name: 'Centro', x: '48%', y: '45%', primary: true },
  { name: 'Zona Norte', x: '52%', y: '22%', primary: false },
  { name: 'Zona Sul', x: '45%', y: '72%', primary: false },
  { name: 'Aeroporto', x: '75%', y: '30%', primary: false },
  { name: 'Zona Oeste', x: '22%', y: '50%', primary: false },
  { name: 'Zona Leste', x: '78%', y: '62%', primary: false },
];

export default function CoverageSection() {
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
      id="coverage"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-surface-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: map visual */}
          <div className="reveal order-2 lg:order-1">
            <div
              className="relative bg-surface-100 border border-ink-200 overflow-hidden rounded-sm"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 grid-pattern" />

              {/* Horizontal scan line */}
              <div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500/30 to-transparent animate-pulse"
                style={{ top: '40%' }}
              />

              {/* Outer rings */}
              <div className="absolute inset-8 border border-ocean-500/10 rounded-full" />
              <div className="absolute inset-16 border border-ocean-500/5 rounded-full" />

              {/* Location markers */}
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="absolute group"
                  style={{
                    left: loc.x,
                    top: loc.y,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {loc.primary ? (
                    <div className="relative">
                      <div className="absolute inset-0 -m-4 rounded-full bg-ocean-500/10 animate-pulse-slow" />
                      <div className="absolute inset-0 -m-8 rounded-full border border-ocean-500/20 animate-ping-slow" />
                      <div className="w-5 h-5 rounded-full bg-ocean-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                        <Navigation
                          size={10}
                          className="text-white"
                          fill="currentColor"
                        />
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs font-semibold text-ocean-600 tracking-wide">
                        {loc.name}
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-ink-300 border border-ink-400 group-hover:bg-ocean-500 group-hover:border-ocean-600 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all duration-300" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-xs text-ink-400 group-hover:text-ink-600 transition-colors duration-300 tracking-wide">
                        {loc.name}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Corner labels */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Radio size={12} className="text-ocean-600" />
                <span className="text-xs text-ocean-600 tracking-widest uppercase font-mono">
                  Area de Cobertura
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-ink-300 font-mono">
                ATIVO 24H
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-ocean-500/60" />
              <span className="text-xs font-medium tracking-[0.3em] text-ocean-600 uppercase">
                Cobertura
              </span>
            </div>

            <h2 className="reveal reveal-delay-1 font-display font-extrabold text-4xl md:text-6xl text-ink-800 tracking-tight mb-4">
              Onde você estiver.
              <br />
              <span className="text-ink-400">Chegamos até lá.</span>
            </h2>

            <p className="reveal reveal-delay-2 text-ink-500 text-base leading-relaxed mb-10">
              Com frota própria estrategicamente distribuída pela cidade e
              região metropolitana, garantimos tempo de resposta rápido em
              qualquer ponto.
            </p>

            <div className="reveal reveal-delay-3 space-y-4 mb-10">
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

            <div className="reveal reveal-delay-4 flex items-center gap-6 p-6 border border-ink-200 bg-surface-100">
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
          </div>
        </div>
      </div>
    </section>
  );
}
