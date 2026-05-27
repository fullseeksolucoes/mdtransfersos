"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data";

const WHATSAPP_URL = site.whatsappLink;

const heroCar = "/hero-car.jpg";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Sedã executivo preto em rua molhada da cidade à noite"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Light trails */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="light-trail" style={{ top: "32%" }} />
        <div className="light-trail delay-1" style={{ top: "58%" }} />
        <div className="light-trail delay-2" style={{ top: "74%" }} />
      </div>

      {/* Subtle grid */}
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

      <div className="relative mx-auto flex min-h-screen max-w-350 flex-col justify-between px-6 pt-32 pb-12 lg:px-10 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="rise flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Est. 2014 · Disponível 24/7/365
              </span>
            </div>

            <h1
              className="rise mt-6 text-balance text-[clamp(2.6rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.02em] text-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              Mobilidade executiva.
              <br />
              <span className="inline-flex items-baseline gap-3">
                <span className="font-light italic text-gold">Automotivo</span>
                <span className="relative">
                  SOS
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
              Transfers com motorista para executivos e suporte rodoviário de
              emergência — operados por uma única equipe discreta. Um número.
              Zero concessões.
            </p>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={WHATSAPP_URL}
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
                href="#services"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-[0.85rem] font-medium tracking-wide text-foreground/90 transition-colors hover:text-gold"
              >
                Agendar transfer
                <span className="h-px w-8 bg-foreground/60 transition-all group-hover:w-12" />
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="relative aspect-square max-w-sm ml-auto"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-hairline">
                <motion.div
                  className="absolute inset-0 rounded-full border border-gold/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Middle Ring with Dash Animation */}
              <div className="absolute inset-8 rounded-full border border-hairline/50">
                <motion.svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="8 12"
                    className="text-gold/30"
                  />
                </motion.svg>
              </div>

              {/* Inner Circle */}
              <div className="absolute inset-16 rounded-full bg-surface/60 backdrop-blur-xl border border-hairline flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-bold text-gold"
                  >
                    24/7
                  </motion.div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Sempre Pronto
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 p-3 bg-surface/80 backdrop-blur border border-hairline rounded-xl"
              >
                <svg
                  className="w-5 h-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-8 left-4 p-3 bg-surface/80 backdrop-blur border border-hairline rounded-xl"
              >
                <svg
                  className="w-5 h-5 text-sos"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/3 -left-4 p-3 bg-surface/80 backdrop-blur border border-hairline rounded-xl"
              >
                <svg
                  className="w-5 h-5 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
