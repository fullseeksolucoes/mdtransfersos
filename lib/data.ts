import type {
  SiteConfig,
  NavLink,
  ServiceContent,
  JourneyStep,
  TrustMetric,
  Testimonial,
  CoverageCity,
  CoverageRoute,
} from "./types";

export const site: SiteConfig = {
  name: "MD Transfers & SOS",
  initials: "MD",
  tagline: "Mobilidade Executiva Premium & Assistência Rodoviária",
  description:
    "Além do transporte. Sem limites. A MD Transfers & SOS oferece serviços premium de transfer executivo e assistência rodoviária com resposta rápida em toda a região.",
  phone: "+5547996771229",
  phoneDisplay: "47 99677-1229 (SOS) · 47 99995-9607 (Transfer)",
  email: "",
  whatsapp: "+5547996771229",
  whatsappLink: "https://wa.me/5547996771229",
  whatsappSOS: "+5547996771229",
  whatsappSOSLink: "https://wa.me/5547996771229",
  whatsappTransfer: "+5547999959607",
  whatsappTransferLink: "https://wa.me/5547999959607",
  address: "Joinville e região",
};

export const navLinks: NavLink[] = [
  { label: "Serviços", href: "#services" },
  { label: "Frota", href: "#fleet" },
  { label: "Cobertura", href: "#coverage" },
  { label: "Contato", href: "#book" },
];

export const hero = {
  headline: "Além do Transporte. Sem Limites.",
  subheadline:
    "Transfers executivos premium combinados com assistência rodoviária de resposta rápida. Uma chamada — mobilidade completa garantida.",
  ctaPrimary: "Agendar Transfer Executivo",
  ctaSecondary: "SOS Emergência",
};

export const executiveService: ServiceContent = {
  title: "Transfer Executivo",
  subtitle: "Soluções Premium de Mobilidade",
  tagline: "Cada jornada reflete quem você é.",
  description:
    "Experimente o auge do transporte executivo. De transfers de aeroporto a eventos corporativos, cada viagem é criada para o profissional exigente que demanda mais do que um carro — exige uma declaração.",
  features: [
    {
      title: "Excelência em Chauffeur",
      description:
        "Motoristas profissionais treinados e multilíngues que antecipam cada necessidade com precisão discreta.",
    },
    {
      title: "Monitoramento de Voos em Tempo Real",
      description:
        "Seu voo, nossa prioridade. Rastreamos cada chegada para garantir busca perfeita, independentemente de atrasos.",
    },
    {
      title: "Seleção Premium de Frota",
      description:
        "Veículos executivos selecionados a dedo, mantidos nos mais altos padrões de luxo e desempenho.",
    },
    {
      title: "Discreto & Confidencial",
      description:
        "Discrição absoluta garantida. Sua privacidade é nosso compromisso profissional.",
    },
  ],
  accent: "blue",
};

export const sosService: ServiceContent = {
  title: "SOS Automotivo",
  subtitle: "Resposta Rápida de Emergência",
  tagline: "Em minutos. Não em horas.",
  description:
    "Quando o inesperado acontece na estrada, o MD SOS Automotivo oferece assistência rodoviária imediata e profissional. Nossas unidades de resposta rápida estrategicamente posicionadas garantem que você nunca fique sozinho.",
  features: [
    {
      title: "Resposta em Menos de 15 Minutos",
      description:
        "Unidades de resposta estrategicamente posicionadas garantem tempos de chegada líderes do setor em toda nossa área de cobertura.",
    },
    {
      title: "Suporte Rodoviário Completo",
      description:
        "De troca de pneus a entrega de combustível, de partida auxiliar a assistência em travamento — cuidamos de tudo.",
    },
    {
      title: "Central de Emergência 24/7",
      description:
        "Central de coordenação 24 horas. Uma chamada conecta você a assistência imediata e rastreável.",
    },
    {
      title: "Unidades com Rastreamento GPS",
      description:
        "Rastreamento veicular em tempo real para que você saiba exatamente quando a ajuda chegará.",
    },
  ],
  accent: "red",
};

export const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Solicitar",
    description:
      "Agende via WhatsApp, telefone ou nossa central. Especifique suas necessidades em segundos.",
    icon: "phone",
  },
  {
    step: "02",
    title: "Confirmar",
    description:
      "Receba confirmação instantânea com detalhes do veículo, informações do motorista e previsão de chegada.",
    icon: "check-circle",
  },
  {
    step: "03",
    title: "Acompanhar",
    description:
      "Acompanhe sua corrida em tempo real. Saiba exatamente quando seu veículo chegará.",
    icon: "navigation",
  },
  {
    step: "04",
    title: "Chegar",
    description:
      "Experimente mobilidade premium da coleta ao destino — com segurança e pontualidade.",
    icon: "flag",
  },
];

export const trustMetrics: TrustMetric[] = [
  { value: "24 / 7", label: "Suporte 24 Horas" },
  { value: "< 15 min", label: "Tempo Médio SOS" },
  { value: "500+", label: "Clientes Corporativos" },
  { value: "100%", label: "Padrão Frota Profissional" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rafael Monteiro",
    role: "CEO — Monteiro Holdings",
    content:
      "A MD Transfers redefiniu o que espero do transporte executivo. O S-Class que enviaram para minha reunião do conselho estava impecável, o motorista antecipava cada curva. É assim que a mobilidade deveria ser.",
    rating: 5,
    highlight: "O S-Class estava impecável.",
  },
  {
    name: "Carla Mendes",
    role: "VP Operations — Innova Group",
    content:
      "Quando meu carro quebrou na rodovia à meia-noite, o MD SOS chegou em 11 minutos. Onze minutos. O profissionalismo e a velocidade foram extraordinários. Nunca me senti tão segura na estrada.",
    rating: 5,
    highlight: "MD SOS chegou em 11 minutos.",
  },
  {
    name: "Dr. Fernando Alves",
    role: "Diretor Médico — Hospital São Lucas",
    content:
      "Confiámos à MD Transfers os transfers dos nossos pacientes VIP. A confiabilidade, discrição e padrões de higiene dos veículos superam nossas expectativas todas as vezes.",
    rating: 5,
    highlight: "Confiabilidade e discrição superam expectativas.",
  },
];

export const coverageCities: CoverageCity[] = [
  { city: "Joinville", region: "Região Metropolitana" },
  { city: "Araquari", region: "Norte Catarinense" },
  { city: "São Francisco do Sul", region: "Litoral Norte" },
  { city: "Itapoá", region: "Litoral Norte" },
  { city: "Jaraguá do Sul", region: "Vale do Itapocu" },
  { city: "Guaramirim", region: "Vale do Itapocu" },
];

export const coverageRoutes: CoverageRoute[] = [
  { from: "Aeroporto de Joinville", to: "Centro de Joinville" },
  { from: "Aeroporto de Joinville", to: "Distritos Comerciais" },
  { from: "Aeroporto de Navegantes", to: "Joinville" },
  { from: "Joinville", to: "São Francisco do Sul" },
  { from: "Joinville", to: "Porto de Itapoá" },
];

export const seoContent = {
  title: "Transfer Executivo Premium e Assistência Rodoviária em Joinville",
  paragraphs: [
    "A MD Transfers & SOS é líder em transfer executivo e assistência rodoviária em Joinville e região. Somos a melhor opção para quem busca motorista particular de confiança, carro com motorista profissional e suporte automotivo de emergência — tudo com um padrão premium de atendimento.",
    "Nosso serviço de transfer executivo cobre toda a região metropolitana de Joinville, incluindo o Aeroporto Lauro Carneiro de Loyola, o Aeroporto de Navegantes (Minister Victor Konder), distritos comerciais e áreas residenciais nobres. Fazemos transfers para toda Santa Catarina com frota de veículos executivos selecionados para conforto, estilo e apresentação profissional.",
    "Para motoristas e frotistas, nossa divisão SOS Automotivo oferece a rede de assistência rodoviária mais ágil da região. Com unidades de resposta rápida estrategicamente localizadas, despacho com rastreamento GPS e coordenação 24/7, entregamos tranquilidade mensurável em minutos, não em horas. Serviços de troca de pneus, recarga de bateria e reparo de pneu furado estão disponíveis a qualquer hora.",
    "Se você precisa de transporte executivo para uma reunião importante, van executiva para grupo, transfer para o aeroporto de Navegantes ou suporte rodoviário de emergência, a MD Transfers & SOS oferece um padrão único de serviço: excepcional, imediato e profissional.",
  ],
};

export const ctaContent = {
  headline: "Pronto para Experimentar Mobilidade Premium?",
  subheadline:
    "Uma chamada conecta você à rede mais confiável de transporte executivo e emergência rodoviária de Joinville e região.",
  whatsappMessage: "Olá! Gostaria de solicitar um serviço.",
};

/* ── Section data ── */

export interface TransferService {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export const transferServices: TransferService[] = [
  {
    icon: "Car",
    title: "Transfer Executivo",
    description:
      "Veículos premium com motoristas certificados para seus compromissos corporativos e pessoais de alto nível.",
    tag: "Executive",
  },
  {
    icon: "Plane",
    title: "Transfer Aeroporto",
    description:
      "Pontualidade absoluta para chegadas e partidas. Monitoramos seu voo em tempo real.",
    tag: "Airport",
  },
  {
    icon: "Building2",
    title: "Transporte Corporativo",
    description:
      "Soluções completas de mobilidade para empresas: eventos, convenções e deslocamentos de equipes.",
    tag: "Corporate",
  },
];

export const sosServices: TransferService[] = [
  {
    icon: "Wrench",
    title: "Troca de Pneu",
    description:
      "Equipe especializada a qualquer hora do dia ou da noite. Pneu furado nunca mais vira um problema.",
    tag: "Pneu",
  },
  {
    icon: "Zap",
    title: "Recarga Bateria (chupeta)",
    description:
      "Bateria descarregada? Chegamos em minutos com equipamento profissional para dar a partida. Serviço rápido e seguro, conhecido como chupeta.",
    tag: "Bateria",
  },
  {
    icon: "CircleDot",
    title: "Remendar Pneu Furado",
    description:
      "Pneu furado ou murcho? Fazemos o reparo rápido na hora, sem precisar trocar. Enchemos seu pneu para você seguir viagem com segurança.",
    tag: "Pneu",
  },
];

export interface FleetVehicle {
  id: string;
  name: string;
  title: string;
  image: string;
  role: string;
  specs: [string, string][];
  whatsappLink: string;
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "virtus-exclusive",
    name: "Volkswagen Virtus Exclusive 250 TSI",
    title: "Elegância Executiva",
    image: "/virtus.webp",
    role: "Categoria Premium",
    specs: [
      ["Capacidade", "4 passageiros"],
      ["Bagagem", "3 malas grandes"],
      ["Motor", "1.4 250 TSI Turbo Flex"],
      ["Potência", "150 cv"],
    ],
    whatsappLink: "https://wa.me/5547999959607",
  },
  {
    id: "onix-turbo",
    name: "Chevrolet Onix 1.0 Turbo 2024",
    title: "Eficiência Inteligente",
    image: "/onix.webp",
    role: "Categoria Comfort",
    specs: [
      ["Capacidade", "4 passageiros"],
      ["Bagagem", "2 malas grandes"],
      ["Motor", "1.0 Turbo Flex"],
      ["Potência", "116 cv"],
    ],
    whatsappLink: "https://wa.me/5547996771229",
  },
];

export interface HowItWorksStep {
  n: string;
  label: string;
  title: string;
  copy: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    n: "01",
    label: "Solicitar",
    title: "Uma única mensagem.",
    copy: "WhatsApp, telefone ou nosso portal seguro. Compartilhe local de coleta, destino e horário.",
  },
  {
    n: "02",
    label: "Despachar",
    title: "Direcionamos a unidade mais próxima.",
    copy: "Nossa central combina o veículo e operador certos em segundos. A previsão de chegada é compartilhada no momento em que nos movemos.",
  },
  {
    n: "03",
    label: "Chegar",
    title: "Calmo, no horário, sempre.",
    copy: "Da porta da sua residência até a pista de pouso, ou de um acostamento de volta ao movimento.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'transfer' | 'sos';
}

export const faqData: FAQItem[] = [
  {
    question: "Com quanta antecedência preciso agendar um transfer?",
    answer: "Recomendamos o agendamento com pelo menos 2 horas de antecedência para transfers executivos. Para o Aeroporto de Navegantes ou horários de pico, sugerimos 24h. Aceitamos solicitações de última hora conforme disponibilidade — consulte pelo WhatsApp.",
    category: "transfer",
  },
  {
    question: "Quanto custa o serviço de transfer executivo?",
    answer: "O valor varia conforme distância, veículo e horário. Trabalhamos com preço fechado sem surpresas — sem taxímetro. Solicite um orçamento gratuito pelo WhatsApp e receba o valor exato antes de confirmar.",
    category: "transfer",
  },
  {
    question: "Como funciona o monitoramento de voos?",
    answer: "Acompanhamos seu voo em tempo real pelo código de reserva. Se houver atraso ou antecipação, ajustamos automaticamente o horário do motorista. Você não paga nada a mais por atrasos — o motorista espera o tempo que for necessário.",
    category: "transfer",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos dinheiro, cartão de crédito/débito (na hora ou faturado), PIX e transferência bancária. Para clientes corporativos, oferecemos faturamento mensal com nota fiscal.",
    category: "transfer",
  },
  {
    question: "Atendem fora de Joinville?",
    answer: "Sim. Fazemos transfers para toda a região metropolitana de Joinville, incluindo Araquari, São Francisco do Sul, Itapoá, Jaraguá do Sul, Guaramirim e principalmente o Aeroporto de Navegantes. Consulte-nos para destinos em Santa Catarina.",
    category: "transfer",
  },
  {
    question: "Quanto tempo o SOS leva para chegar?",
    answer: "Nosso tempo médio de resposta é inferior a 20 minutos na região metropolitana de Joinville. Unidades de atendimento ficam estrategicamente posicionadas em pontos estratégicos da cidade para garantir o menor tempo de chegada possível.",
    category: "sos",
  },
  {
    question: "Quais serviços o SOS Automotivo inclui?",
    answer: "Oferecemos troca de pneus, remendo e enchimento de pneu furado, recarga de bateria (chupeta), assistência em travamento e entrega de combustível. Não realizamos reboque ou guincho. Cada serviço é realizado por técnicos treinados com equipamento profissional.",
    category: "sos",
  },
  {
    question: "Como solicitar o SOS Automotivo?",
    answer: "Ligue ou envie WhatsApp para (47) 99677-1229. Informe sua localização e o problema. Nossa central despacha a unidade mais próxima em segundos, e você recebe a previsão de chegada em tempo real com rastreamento GPS.",
    category: "sos",
  },
  {
    question: "O SOS atende 24 horas, inclusive feriados?",
    answer: "Sim. Nossa central de emergência opera 24 horas por dia, 7 dias por semana, incluindo feriados. Panes não seguem horário comercial — e nós também não.",
    category: "sos",
  },
  {
    question: "Vocês atendem na estrada ou só em áreas urbanas?",
    answer: "Atendemos tanto em áreas urbanas quanto em rodovias de acesso da região metropolitana de Joinville. Se você está em uma via de acesso dentro da nossa área de cobertura, podemos ajudar.",
    category: "sos",
  },
];

export interface CoverageLocation {
  name: string;
  x: string;
  y: string;
  primary: boolean;
}

export const coverageLocations: CoverageLocation[] = [
  { name: "Centro", x: "48%", y: "45%", primary: true },
  { name: "Zona Norte", x: "52%", y: "22%", primary: false },
  { name: "Zona Sul", x: "45%", y: "72%", primary: false },
  { name: "Aeroporto", x: "75%", y: "30%", primary: false },
  { name: "Zona Oeste", x: "22%", y: "50%", primary: false },
  { name: "Zona Leste", x: "78%", y: "62%", primary: false },
];

export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
}

export const testimonialsData: TestimonialData[] = [
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
