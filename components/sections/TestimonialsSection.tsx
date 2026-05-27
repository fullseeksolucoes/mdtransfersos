"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { testimonialsData } from "@/lib/data";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const visible = testimonialsData.slice(activeIndex, activeIndex + 3);
  const canGoNext = activeIndex + 3 < testimonialsData.length;
  const canGoPrev = activeIndex > 0;
  const totalPages = Math.ceil(testimonialsData.length / 3);
  const currentPage = Math.floor(activeIndex / 3);

  return (
    <section id="testimonials" className="relative bg-white py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionHeader
            eyebrow="Depoimentos"
            title="O que nossos clientes dizem."
            subtitle="Histórias reais."
            align="center"
            accent="ink"
            animated={false}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visible.map((t, i) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              role={t.role}
              content={t.content}
              rating={t.rating}
              service={t.service}
              index={i}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 3))}
            disabled={!canGoPrev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink-600 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i * 3)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === i ? "bg-primary w-6" : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex(Math.min(testimonialsData.length - 3, activeIndex + 3))}
            disabled={!canGoNext}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink-600 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
