import { Navigation, Radio } from 'lucide-react';

interface Location {
  name: string;
  x: string;
  y: string;
  primary: boolean;
}

interface CoverageMapProps {
  locations: Location[];
}

export default function CoverageMap({ locations }: CoverageMapProps) {
  return (
    <div
      className="relative bg-surface-100 border border-ink-200 overflow-hidden rounded-sm"
      style={{ aspectRatio: '4/3' }}
    >
      <div className="absolute inset-0 grid-pattern" />

      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500/30 to-transparent animate-pulse"
        style={{ top: '40%' }}
      />

      <div className="absolute inset-8 border border-ocean-500/10 rounded-full" />
      <div className="absolute inset-16 border border-ocean-500/5 rounded-full" />

      {locations.map((loc) => (
        <div
          key={loc.name}
          className="absolute group"
          style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
        >
          {loc.primary ? (
            <div className="relative">
              <div className="absolute inset-0 -m-4 rounded-full bg-ocean-500/10 animate-pulse-slow" />
              <div className="absolute inset-0 -m-8 rounded-full border border-ocean-500/20 animate-ping-slow" />
              <div className="w-5 h-5 rounded-full bg-ocean-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Navigation size={10} className="text-white" fill="currentColor" />
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs font-semibold text-ocean-600 tracking-wide">
                {loc.name}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-ocean-500 border border-ocean-600 shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all duration-300" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-xs text-ocean-600 tracking-wide">
                {loc.name}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Radio size={12} className="text-ocean-600" />
        <span className="text-xs text-ocean-600 tracking-widest uppercase font-mono">Area de Cobertura</span>
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-ink-300 font-mono">ATIVO 24H</div>
    </div>
  );
}
