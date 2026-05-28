'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { faqData } from '@/lib/data';
import { cn } from '@/lib/utils';

const tabs = [
  { key: 'transfer', label: 'Transfer Executivo' },
  { key: 'sos', label: 'SOS Automotivo' },
];

const tabStyles: Record<string, { active: string; idle: string }> = {
  transfer: {
    active: 'bg-ocean-600 text-white shadow-md',
    idle: 'bg-white text-ink-600 border border-ink-200 hover:border-ocean-500/30 hover:text-ocean-600',
  },
  sos: {
    active: 'bg-alert-600 text-white shadow-md',
    idle: 'bg-white text-ink-600 border border-ink-200 hover:border-alert-500/30 hover:text-alert-600',
  },
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<'transfer' | 'sos'>('transfer');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqData.filter((item) => item.category === activeTab);

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-surface-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-alert-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Dúvidas frequentes."
          subtitle="Tudo que você precisa saber."
          align="center"
          accent="ocean"
        />

        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key as 'transfer' | 'sos');
                  setOpenIndex(null);
                }}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeTab === tab.key
                    ? tabStyles[tab.key].active
                    : tabStyles[tab.key].idle,
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-3">
          {filtered.map((item, i) => {
            const idx = faqData.indexOf(item);
            const isOpen = openIndex === idx;

            return (
              <Reveal key={idx} delay={300 + i * 50}>
                <div
                  className={cn(
                    'rounded-2xl border transition-all duration-300',
                    isOpen
                      ? 'border-navy-500/30 bg-white shadow-md'
                      : 'border-ink-200 bg-white hover:border-ink-300',
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-ink-800 font-medium pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-ink-400 shrink-0 transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                    )}
                  >
                    <p className="px-6 pb-5 text-ink-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
