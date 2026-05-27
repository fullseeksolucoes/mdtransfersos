import type {
  SiteConfig,
  NavLink,
  ServiceContent,
  Vehicle,
  JourneyStep,
  TrustMetric,
  Testimonial,
  CoverageCity,
  CoverageRoute,
} from './types';

export const site: SiteConfig = {
  name: 'MD Transfers & SOS',
  initials: 'MD',
  tagline: 'Mobilidade Executiva Premium & Assistência Rodoviária',
  description:
    'Além do transporte. Sem limites. A MD Transfers & SOS oferece serviços premium de transfer executivo e assistência rodoviária com resposta rápida em toda a região.',
  phone: '+551234567890',
  phoneDisplay: '+55 (12) 3456-7890',
  email: 'contact@mdtransfersos.com',
  whatsapp: '+551234567890',
  whatsappLink: 'https://wa.me/551234567890',
  address: 'Av. Paulista, 1000 — São Paulo, SP',
};

export const navLinks: NavLink[] = [
  { label: 'Serviços', href: '#services' },
  { label: 'Frota', href: '#fleet' },
  { label: 'Cobertura', href: '#coverage' },
  { label: 'Contato', href: '#contact' },
];

export const hero = {
  headline: 'Além do Transporte. Sem Limites.',
  subheadline:
    'Transfers executivos premium combinados com assistência rodoviária de resposta rápida. Uma chamada — mobilidade completa garantida.',
  ctaPrimary: 'Agendar Transfer Executivo',
  ctaSecondary: 'SOS Emergência',
};

export const executiveService: ServiceContent = {
  title: 'Transfer Executivo',
  subtitle: 'Soluções Premium de Mobilidade',
  tagline: 'Cada jornada reflete quem você é.',
  description:
    'Experimente o auge do transporte executivo. De transfers de aeroporto a eventos corporativos, cada viagem é criada para o profissional exigente que demanda mais do que um carro — exige uma declaração.',
  features: [
    {
      title: 'Excelência em Chauffeur',
      description:
        'Motoristas profissionais treinados e multilíngues que antecipam cada necessidade com precisão discreta.',
    },
    {
      title: 'Monitoramento de Voos em Tempo Real',
      description:
        'Seu voo, nossa prioridade. Rastreamos cada chegada para garantir busca perfeita, independentemente de atrasos.',
    },
    {
      title: 'Seleção Premium de Frota',
      description:
        'Veículos executivos selecionados a dedo, mantidos nos mais altos padrões de luxo e desempenho.',
    },
    {
      title: 'Discreto & Confidencial',
      description:
        'Discrição absoluta garantida. Sua privacidade é nosso compromisso profissional.',
    },
  ],
  accent: 'blue',
};

export const sosService: ServiceContent = {
  title: 'SOS Automotivo',
  subtitle: 'Resposta Rápida de Emergência',
  tagline: 'Em minutos. Não em horas.',
  description:
    'Quando o inesperado acontece na estrada, o MD SOS Automotivo oferece assistência rodoviária imediata e profissional. Nossas unidades de resposta rápida estrategicamente posicionadas garantem que você nunca fique sozinho.',
  features: [
    {
      title: 'Resposta em Menos de 15 Minutos',
      description:
        'Unidades de resposta estrategicamente posicionadas garantem tempos de chegada líderes do setor em toda nossa área de cobertura.',
    },
    {
      title: 'Suporte Rodoviário Completo',
      description:
        'De troca de pneus a entrega de combustível, de partida auxiliar a assistência em travamento — cuidamos de tudo.',
    },
    {
      title: 'Central de Emergência 24/7',
      description:
        'Central de coordenação 24 horas. Uma chamada conecta você a assistência imediata e rastreável.',
    },
    {
      title: 'Unidades com Rastreamento GPS',
      description:
        'Rastreamento veicular em tempo real para que você saiba exatamente quando a ajuda chegará.',
    },
  ],
  accent: 'red',
};

export const fleet: Vehicle[] = [
  {
    name: 'Mercedes-Benz S-Class',
    category: 'Sedã Executivo',
    tagline: 'O padrão da mobilidade executiva.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d0e95c5?w=800&q=80',
    specs: [
      { label: 'Capacidade', value: '4 Passageiros' },
      { label: 'Classe', value: 'Luxo Completo' },
    ],
    accent: 'blue',
  },
  {
    name: 'BMW 7 Series',
    category: 'Sedã Executivo',
    tagline: 'Conduzindo a excelência adiante.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    specs: [
      { label: 'Capacidade', value: '4 Passageiros' },
      { label: 'Classe', value: 'Luxo Completo' },
    ],
    accent: 'blue',
  },
  {
    name: 'Cadillac Escalade ESV',
    category: 'SUV Premium',
    tagline: 'Presença de comando. Conforto sem concessões.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    specs: [
      { label: 'Capacidade', value: '6 Passageiros' },
      { label: 'Classe', value: 'SUV Luxo Completo' },
    ],
    accent: 'blue',
  },
  {
    name: 'Mercedes-Benz V-Class',
    category: 'Van de Luxo',
    tagline: 'Viagem em grupo, luxo individual.',
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78fcee63?w=800&q=80',
    specs: [
      { label: 'Capacidade', value: '8 Passageiros' },
      { label: 'Classe', value: 'Transporte Premium' },
    ],
    accent: 'blue',
  },
];

export const journeySteps: JourneyStep[] = [
  {
    step: '01',
    title: 'Solicitar',
    description: 'Agende via WhatsApp, telefone ou nossa central. Especifique suas necessidades em segundos.',
    icon: 'phone',
  },
  {
    step: '02',
    title: 'Confirmar',
    description: 'Receba confirmação instantânea com detalhes do veículo, informações do motorista e previsão de chegada.',
    icon: 'check-circle',
  },
  {
    step: '03',
    title: 'Acompanhar',
    description: 'Acompanhe sua corrida em tempo real. Saiba exatamente quando seu veículo chegará.',
    icon: 'navigation',
  },
  {
    step: '04',
    title: 'Chegar',
    description: 'Experimente mobilidade premium da coleta ao destino — com segurança e pontualidade.',
    icon: 'flag',
  },
];

export const trustMetrics: TrustMetric[] = [
  { value: '24 / 7', label: 'Suporte 24 Horas' },
  { value: '< 15 min', label: 'Tempo Médio SOS' },
  { value: '500+', label: 'Clientes Corporativos' },
  { value: '100%', label: 'Padrão Frota Profissional' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Rafael Monteiro',
    role: 'CEO — Monteiro Holdings',
    content:
      'MD Transfers redefined what I expect from executive transportation. The S-Class they sent for my board meeting was immaculate, the driver anticipated every turn. This is how mobility should feel.',
    rating: 5,
    highlight: 'The S-Class they sent was immaculate.',
  },
  {
    name: 'Carla Mendes',
    role: 'VP Operations — Innova Group',
    content:
      'When my car broke down on the highway at midnight, MD SOS arrived in 11 minutes. Eleven minutes. The professionalism and speed were extraordinary. I have never felt safer on the road.',
    rating: 5,
    highlight: 'MD SOS arrived in 11 minutes.',
  },
  {
    name: 'Dr. Fernando Alves',
    role: 'Medical Director — Hospital São Lucas',
    content:
      'We trust MD Transfers with our VIP patient transfers. The reliability, discretion, and vehicle hygiene standards exceed our expectations every single time.',
    rating: 5,
    highlight: 'Reliability and discretion exceed expectations.',
  },
];

export const coverageCities: CoverageCity[] = [
  { city: 'São Paulo', region: 'Metropolitan Area' },
  { city: 'Campinas', region: 'Interior' },
  { city: 'Santos', region: 'Coast' },
  { city: 'São José dos Campos', region: 'Valley' },
  { city: 'Sorocaba', region: 'Southwest' },
  { city: 'Ribeirão Preto', region: 'Northeast' },
];

export const coverageRoutes: CoverageRoute[] = [
  { from: 'Aeroporto GRU', to: 'Centro de São Paulo' },
  { from: 'Aeroporto Congonhas', to: 'Distritos Comerciais' },
  { from: 'São Paulo', to: 'Campinas' },
  { from: 'São Paulo', to: 'Porto de Santos' },
];

export const seoContent = {
  title: 'Transfer Executivo Premium e Assistência Rodoviária em São Paulo',
  paragraphs: [
    'A MD Transfers & SOS é a principal provedora de serviços de transfer executivo e emergência automotiva de São Paulo. Unimos as expectativas de mobilidade corporativa com as realidades das estradas — oferecendo desde transfers de aeroporto com motoristas de luxo até resposta imediata a emergências rodoviárias.',
    'Nosso serviço de transfer executivo cobre a Grande São Paulo, incluindo os aeroportos de GRU e Congonhas, distritos comerciais e áreas residenciais nobres. Cada veículo em nossa frota é selecionado para conforto, estilo e apresentação profissional — garantindo que cada jornada reforce sua reputação.',
    'Para motoristas e frotistas, nossa divisão SOS Automotivo oferece a rede de assistência rodoviária mais ágil da região. Com unidades de resposta rápida estrategicamente localizadas, despacho com rastreamento GPS e coordenação 24/7, entregamos tranquilidade mensurável em minutos, não em horas.',
    'Se você precisa de transporte executivo para uma reunião importante ou suporte rodoviário de emergência após uma pane inesperada, a MD Transfers & SOS oferece um padrão único de serviço: excepcional, imediato e profissional.',
  ],
};

export const ctaContent = {
  headline: 'Pronto para Experimentar Mobilidade Premium?',
  subheadline:
    'Uma chamada conecta você à rede mais confiável de transporte executivo e emergência rodoviária de São Paulo.',
  whatsappMessage: 'Olá! Gostaria de solicitar um serviço.',
};
