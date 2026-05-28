"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import DashboardCircle from "@/components/shared/DashboardCircle";

const WHATSAPP_SOS = site.whatsappSOSLink;
const WHATSAPP_TRANSFER = site.whatsappTransferLink;

interface HeroSectionProps {
  cityName?: string;
  subtext?: string;
}

export default function HeroSection({
  cityName = "Joinville",
  subtext,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <Image
          fill
          src="/hero-car.jpg"
          alt="Sedã executivo preto em rua molhada da cidade à noite"
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="light-trail" style={{ top: "32%" }} />
        <div className="light-trail delay-1" style={{ top: "58%" }} />
        <div className="light-trail delay-2" style={{ top: "74%" }} />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.18 0.01 250) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.18 0.01 250) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-350 flex-col justify-between px-6 pt-48 pb-12 lg:px-10 lg:pt-64">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="rise flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Disponível 24/7/365
              </span>
            </div>

            <h1
              className="rise mt-6 text-balance text-[clamp(2.6rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.02em] text-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              Transfer Executivo &amp;{" "}
              <span className="font-light italic text-gold">SOS Automotivo</span>
              <br />
              em{" "}
              <span className="inline-flex items-baseline gap-3">
                <span className="relative">
                  {cityName}
                  <span className="absolute -right-3 top-1.5 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-sos opacity-75 gps-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sos" />
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="rise mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.25s" }}
            >
              {subtext ||
                "Transfers com motorista para executivos e suporte rodoviário de emergência — operados por uma única equipe discreta. Um número. Zero concessões."}
            </p>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={WHATSAPP_SOS}
                className="group relative inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-[0.85rem] font-medium tracking-wide text-background transition-all hover:bg-gold"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sos opacity-75 gps-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sos" />
                </span>
                Solicitar assistência
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <a
                href={WHATSAPP_TRANSFER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-[0.85rem] font-medium tracking-wide text-foreground/90 transition-colors hover:text-gold"
              >
                Agendar transfer
                <span className="h-px w-8 bg-foreground/60 transition-all group-hover:w-12" />
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <DashboardCircle />
          </div>
        </div>
      </div>
    </section>
  );
}
