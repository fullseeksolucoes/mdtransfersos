"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Executivo de Negócios",
    content:
      "O serviço de transfer executivo superou minhas expectativas. Pontual, profissional e o veículo estava impecável. Uso para todos os meus transfers de aeroporto agora.",
    rating: 5,
    service: "Transfer Executivo",
  },
  {
    id: 2,
    name: "Ana Santos",
    role: "Diretora de Marketing",
    content:
      "Tive um pneu furado às 23h na rodovia. Liguei para o SOS e chegaram em menos de 20 minutos. Salvaram minha noite! O técnico foi simpático e eficiente.",
    rating: 5,
    service: "Assistência de Pneus",
  },
  {
    id: 3,
    name: "Roberto Costa",
    role: "Dono de Restaurante",
    content:
      "Usamos o transporte corporativo para eventos da equipe. Sempre confiáveis, sempre pontuais. Os motoristas conhecem a cidade como ninguém.",
    rating: 5,
    service: "Transporte Corporativo",
  },
  {
    id: 4,
    name: "Juliana Pereira",
    role: "Profissional de Saúde",
    content:
      "Minha bateria morreu no estacionamento do hospital após um plantão noturno. Uma ligação e me colocaram de volta na estrada rapidamente. Serviço essencial.",
    rating: 5,
    service: "Assistência de Bateria",
  },
  {
    id: 5,
    name: "Fernando Lima",
    role: "Empreendedor Tech",
    content:
      "Serviço profissional do início ao fim. O agendamento via WhatsApp foi super fácil, e o motorista estava me esperando quando meu voo chegou antes do previsto.",
    rating: 5,
    service: "Transfer Aeroporto",
  },
  {
    id: 6,
    name: "Mariana Oliveira",
    role: "Consultora",
    content:
      "Quebrei no caminho para uma reunião importante. A resposta de emergência foi incrível. Até arranjaram um veículo de transfer enquanto meu carro era consertado.",
    rating: 5,
    service: "SOS Emergência",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  const canGoNext = activeIndex + 3 < testimonials.length;
  const canGoPrev = activeIndex > 0;

  return (
    <section
      id="testimonials"
      className="relative bg-white py-32 overflow-hidden"
    >
      {/* Background lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-ink-300" />
            <span className="text-xs font-medium tracking-[0.3em] text-ink-500 uppercase">
              Depoimentos
            </span>
            <div className="w-6 h-px bg-ink-300" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-ink-800 tracking-tight mb-4">
            O que nossos clientes dizem.
            <br />
            <span className="text-ink-400">Histórias reais.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-ink-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Service Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {testimonial.service}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-ink-600 font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-ink-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-ink-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 3))}
            disabled={!canGoPrev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink-600 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i * 3)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(activeIndex / 3) === i
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setActiveIndex(Math.min(testimonials.length - 3, activeIndex + 3))
            }
            disabled={!canGoNext}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink-600 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
