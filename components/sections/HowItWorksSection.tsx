const steps = [
  {
    n: '01',
    label: 'Solicitar',
    title: 'Uma única mensagem.',
    copy: 'WhatsApp, telefone ou nosso portal seguro. Compartilhe local de coleta, destino e horário — ou as coordenadas precisas de uma ocorrência rodoviária.',
  },
  {
    n: '02',
    label: 'Despachar',
    title: 'Direcionamos a unidade mais próxima.',
    copy: 'Nossa central combina o veículo e operador certos em segundos. A previsão de chegada é compartilhada no momento em que nos movemos.',
  },
  {
    n: '03',
    label: 'Chegar',
    title: 'Calmo, no horário, sempre.',
    copy: 'Da porta da sua residência até a pista de pouso, ou de um acostamento de volta ao movimento — gerenciado com cuidado documentado.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-emergency/60" />
            <span className="text-xs font-medium tracking-[0.3em] text-emergency uppercase">
              Como funciona
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-foreground tracking-tight mb-4">
            Três passos.
            <br />
            <span className="text-muted-foreground/80">Uma jornada completa.</span>
          </h2>
        </header>

        <div className="relative mt-20">
          {/* Animated route line */}
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
            {steps.map((s) => (
              <li key={s.n} className="md:pt-28">
                <div className="font-display text-sm italic text-muted-foreground">
                  Passo {s.n}
                </div>
                <div className="mt-1 eyebrow text-foreground/70">
                  {s.label}
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-foreground">
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
