export default function SplitSection() {
  return (
    <section className="relative bg-background">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[520px] overflow-hidden">
          <img
            src="/interior.jpg"
            alt="Interior de carro de luxo à noite"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
            <span className="eyebrow text-gold">Transfer</span>
            <h3 className="mt-3 max-w-md text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-tight text-foreground">
              Um banco traseiro que funciona como seu escritório.
            </h3>
          </div>
        </div>

        <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[520px] overflow-hidden md:border-l border-hairline">
          <img
            src="/sos-hands.jpg"
            alt="Técnico de assistência rodoviária trabalhando à noite"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
            <span className="eyebrow text-sos">SOS</span>
            <h3 className="mt-3 max-w-md text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-tight text-foreground">
              Quando a noite decide diferente — a gente se move.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
