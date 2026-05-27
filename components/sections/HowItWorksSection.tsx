import SectionHeader from '@/components/ui/SectionHeader';
import { howItWorksSteps } from '@/lib/data';

export default function HowItWorksSection() {
  return (
    <section className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Como funciona"
          title="Três passos."
          subtitle="Uma jornada completa."
          accent="emergency"
          dark
        />

        <div className="relative mt-20">
          <svg
            aria-hidden
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="absolute left-0 top-12 hidden h-20 w-full md:block"
          >
            <path
              d="M0 40 C 200 10, 400 70, 600 40 S 1000 10, 1200 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-route text-executive/40"
              pathLength={1}
            />
            {[0.04, 0.5, 0.96].map((p, i) => (
              <circle
                key={i}
                cx={1200 * p}
                cy={40}
                r="5"
                className={i === 2 ? 'fill-emergency' : 'fill-executive'}
              />
            ))}
          </svg>

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {howItWorksSteps.map((s) => (
              <li key={s.n} className="md:pt-28">
                <div className="text-sm italic text-muted-foreground">
                  Passo {s.n}
                </div>
                <div className="mt-1 eyebrow text-foreground/70">
                  {s.label}
                </div>
                <h3 className="mt-4 text-2xl font-medium leading-snug text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {s.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
