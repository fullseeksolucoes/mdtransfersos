"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SeoContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-muted/30">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <SectionHeader
              eyebrow="Sobre nós"
              title="Transporte premium."
              subtitle="Assistência completa."
              align="center"
              accent="primary"
              animated={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <article>
                <h3 className="text-xl font-semibold text-ink-800 mb-4">
                  Serviços de Transfer Executivo
                </h3>
                <p className="text-ink-500 leading-relaxed mb-4">
                  Nosso serviço de transfer executivo oferece soluções de
                  transporte premium para profissionais de negócios e viajantes
                  exigentes. Com uma frota de veículos de luxo bem mantidos e
                  motoristas profissionais, garantimos transporte pontual,
                  confortável e discreto para todas as suas necessidades.
                </p>
                <p className="text-ink-500 leading-relaxed">
                  Seja para transfers de aeroporto, transporte corporativo ou
                  eventos especiais, nossa equipe entrega excelência
                  consistente. Monitoramos horários de voos para pickups no
                  aeroporto, garantindo coordenação perfeita mesmo com atrasos.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-ink-800 mb-4">
                  Transporte de Aeroporto
                </h3>
                <p className="text-ink-500 leading-relaxed">
                  Serviços de transfer de aeroporto confiáveis disponíveis 24
                  horas por dia. Rastreamos seu voo em tempo real e ajustamos os
                  horários de busca conforme necessário. Nossos motoristas te
                  encontram no desembarque com placa de nome, ajudam com a
                  bagagem e garantem que você chegue ao seu destino
                  confortavelmente.
                </p>
              </article>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <article>
                <h3 className="text-xl font-semibold text-ink-800 mb-4">
                  Assistência Rodoviária 24/7
                </h3>
                <p className="text-ink-500 leading-relaxed mb-4">
                  Nosso serviço de SOS automotivo oferece resposta rápida para
                  emergências rodoviárias. De troca de pneus furados e partida
                   auxiliar de bateria, assistência de emergência e entrega de
                  combustível, nossos técnicos treinados estão equipados para
                  resolver diversos problemas automotivos no local.
                </p>
                <p className="text-ink-500 leading-relaxed">
                  Operando 24 horas, entendemos que panes não seguem horário.
                  Nosso tempo médio de resposta dentro da área de cobertura é
                  inferior a 20 minutos, garantindo que você nunca fique parado
                  por muito tempo.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-semibold text-ink-800 mb-4">
                  Garantia de Serviço Profissional
                </h3>
                <p className="text-ink-500 leading-relaxed">
                  Todos os nossos serviços são totalmente segurados e realizados
                  por profissionais licenciados. Mantemos rigorosos padrões de
                  segurança e programas de treinamento contínuo para garantir
                  que cada interação atenda ao nosso compromisso de serviço
                  premium. Sua segurança e satisfação são nossas principais
                  prioridades.
                </p>
              </article>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Transfer Executivo",
                "Transporte Aeroporto",
                "Transporte Corporativo",
                "Assistência Rodoviária",
                "Troca de Pneus",
                "Serviço de Bateria",
                "Suporte 24/7",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-ink-500 bg-card rounded-xl border border-border shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
