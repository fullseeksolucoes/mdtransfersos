import type { Metadata } from "next";
import { playfair, inter } from "./fonts";
import "./globals.css";
import { site } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const SITE_URL = "https://www.mdtransfersos.com.br";

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Com quanta antecedência preciso agendar um transfer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recomendamos o agendamento com pelo menos 2 horas de antecedência para transfers executivos. Para o Aeroporto de Navegantes ou horários de pico, sugerimos 24h. Aceitamos solicitações de última hora conforme disponibilidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa o serviço de transfer executivo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O valor varia conforme distância, veículo e horário. Trabalhamos com preço fechado sem surpresas — sem taxímetro. Solicite um orçamento gratuito pelo WhatsApp e receba o valor exato antes de confirmar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo o SOS leva para chegar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nosso tempo médio de resposta é inferior a 20 minutos na região metropolitana de Joinville. Unidades de atendimento ficam estrategicamente posicionadas em pontos estratégicos da cidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais serviços o SOS Automotivo inclui?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos troca de pneus, remendo e enchimento de pneu furado, recarga de bateria (chupeta), assistência em travamento e entrega de combustível. Não realizamos reboque ou guincho.',
      },
    },
    {
      '@type': 'Question',
      name: 'Atendem fora de Joinville?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Fazemos transfers para toda a região metropolitana de Joinville, incluindo Araquari, São Francisco do Sul, Itapoá, Jaraguá do Sul, Guaramirim e o Aeroporto de Navegantes.',
      },
    },
    {
      '@type': 'Question',
      name: 'O SOS atende 24 horas, inclusive feriados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Nossa central de emergência opera 24 horas por dia, 7 dias por semana, incluindo feriados.',
      },
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.tagline,
  url: SITE_URL,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Joinville',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  areaServed: [
    'Joinville',
    'Araquari',
    'São Francisco do Sul',
    'Itapoá',
    'Jaraguá do Sul',
    'Guaramirim',
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$$$',
  image: `${SITE_URL}/hero-car.jpg`,
  sameAs: [site.whatsappLink],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Transfer Executivo',
        description:
          'Veículos premium com motoristas certificados para compromissos corporativos e pessoais.',
      },
      {
        '@type': 'Service',
        name: 'SOS Automotivo',
        description:
          'Assistência rodoviária com resposta rápida para emergências.',
      },
    ],
  },
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.initials}`,
  },
  description: site.description,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: SITE_URL,
    siteName: site.name,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-body text-charcoal-800 selection:bg-navy-800/15 selection:text-charcoal-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-charcoal-900 focus:rounded-lg focus:shadow-lg focus:outline-2 focus:outline-navy-600"
        >
          Pular para o conteúdo principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
