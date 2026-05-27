import { site } from '@/lib/data';

export default function CTASection() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-ink py-32 text-pearl lg:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, oklch(0.32 0.12 265 / 0.7), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.42 0.18 25 / 0.4), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-pearl/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-pearl/70">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/70" />
            <span className="relative inline-flex size-2 rounded-full bg-whatsapp" />
          </span>
          Central ativa · 24h
        </div>

        <h2 className="mt-8 font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance lg:text-7xl text-pearl">
          Pronto para a{' '}
          <span className="italic text-pearl/80">próxima fase</span> da sua
          jornada?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-pearl/65 text-pretty">
          Uma mensagem de distância. Reserve um motorista para amanhã de manhã, ou solicite
            uma unidade SOS para suas coordenadas exatas agora mesmo.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.whatsappTransferLink}
            className="group inline-flex min-w-[260px] items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-sm font-medium text-pearl shadow-[0_20px_60px_-20px_oklch(0.62_0.16_145/0.6)] ring-1 ring-whatsapp transition-transform hover:scale-[1.02]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
            >
              <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02M12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.23 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81s-.39-.12-.56.13c-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.22 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28" />
            </svg>
            Linha prioritária WhatsApp
          </a>
          <a
            href="tel:+000000000"
            className="inline-flex min-w-[260px] items-center justify-center gap-3 rounded-full border border-pearl/20 bg-pearl/5 px-8 py-4 text-sm font-medium text-pearl backdrop-blur transition-colors hover:bg-pearl/10"
          >
            Ligar para central
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-pearl/40">
          <span>Totalmente segurado</span>
          <span className="h-px w-6 bg-pearl/20" />
          <span>Certificado Classe A</span>
          <span className="h-px w-6 bg-pearl/20" />
          <span>Discrição garantida</span>
        </div>
      </div>
    </section>
  );
}
