"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import { site, navLinks, cityPages } from "@/lib/data";
import Container from "@/components/shared/Container";
import Link from "next/link";

const footerCities = cityPages
  .filter((c) =>
    [
      "joinville",
      "navegantes",
      "sao-francisco-do-sul",
      "jaragua-do-sul",
      "araquari",
      "itapoa",
    ].includes(c.slug),
  )
  .slice(0, 6);

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 text-white/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-2xl font-medium tracking-tight text-white"
            >
              {site.initials}
              <span className="text-navy-500">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40 font-body max-w-sm">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
              Serviços
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
              Cidades
            </h3>
            <ul className="space-y-3">
              {footerCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cidade/${city.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-body"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
              Contato
            </h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <span className="flex items-center gap-3 text-sm text-white/50 font-body">
                    <Phone className="w-4 h-4 text-navy-500 shrink-0" />
                    <span>
                      <a href={`tel:${site.whatsappSOS}`} className="hover:text-white transition-colors duration-300">47 99677-1229</a> (SOS)
                      <br />
                      <a href={`tel:${site.whatsappTransfer}`} className="hover:text-white transition-colors duration-300">47 99995-9607</a> (Transfer)
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-sm text-white/50 font-body">
                    <MapPin className="w-4 h-4 text-navy-500 shrink-0" />
                    {site.address}
                  </span>
                </li>
                <li>
                  <a
                    href={site.whatsappSOSLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 font-body"
                  >
                    <MessageCircle className="w-4 h-4 text-navy-500" />
                    SOS — 47 99677-1229
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsappTransferLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 font-body"
                  >
                    <MessageCircle className="w-4 h-4 text-navy-500" />
                    Transfer — 47 99995-9607
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-body">
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>

          <span className="text-xs text-white/30 font-body">
            Desenvolvido por{" "}
            <a
              href="https://www.fullseek.com.br/"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
            >
              FullSeek
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
