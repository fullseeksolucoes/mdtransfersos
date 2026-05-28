"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site, navLinks } from "@/lib/data";
import Container from "@/components/shared/Container";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className={cn(
              "relative z-10 text-xl md:text-2xl font-medium tracking-tight transition-colors duration-500",
              isScrolled ? "text-charcoal-900" : "text-white",
            )}
          >
            {site.initials}
            <span
              className={cn(
                "transition-colors duration-500",
                isScrolled ? "text-navy-700" : "text-white/70",
              )}
            >
              .
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 tracking-wide font-body",
                  isScrolled
                    ? "text-charcoal-600 hover:text-charcoal-900"
                    : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsappTransferLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                isScrolled
                  ? "text-navy-700 hover:text-navy-800"
                  : "text-white/80 hover:text-white",
              )}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "relative z-10 md:hidden p-2 -mr-2 transition-colors duration-500",
              isScrolled ? "text-charcoal-700" : "text-white",
            )}
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              id="mobile-menu"
              className="bg-white/95 backdrop-blur-md border-t border-ink-200 shadow-lg"
            >
              <Container>
                <nav className="flex flex-col gap-1 pb-6 pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="px-4 py-3 rounded-lg text-sm font-medium tracking-wide text-charcoal-600 hover:bg-charcoal-100 hover:text-charcoal-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="pb-6">
                  <a
                    href={site.whatsappTransferLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-navy-700 text-white px-5 py-3 text-sm font-medium transition-colors hover:bg-navy-800"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Fale Conosco
                  </a>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
