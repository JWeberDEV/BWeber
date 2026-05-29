export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

// Maps each language to a locale used for date formatting.
export const localeMap: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-PY",
};

interface ServiceTranslation {
  id: string;
  title: string;
  description: string;
  alt: string;
  points: string[];
}

// Portuguese is the reference shape. `en` and `es` are type-checked against it.
const pt = {
  nav: {
    home: "Home",
    servicos: "Serviços",
    sobre: "Sobre",
    contato: "Contato",
  },
  header: {
    whatsappBtn: "WhatsApp",
    specialistMsg:
      "Olá! Gostaria de falar com um especialista sobre digitalização imobiliária.",
    mobileMsg: "Olá! Quero conversar no mobile.",
    mobileWhatsappBtn: "FALAR NO WHATSAPP",
  },
  floatingWhatsapp: {
    label: "Falar no WhatsApp",
  },
  home: {
    heroTitle: "Digitalizamos negócios para o boom paraguaio.",
    heroSubtitle:
      "Desenvolvemos ecossistemas web de alta performance, automações exclusivas para captação de clientes no WhatsApp e sistemas inteligentes de CRM para empresas em Luque e Asunción.",
    heroWhatsappMsg:
      "Olá! Vi a sua página e gostaria de agendar uma consultoria de digitalização imobiliária para o boom paraguaio.",
    heroWhatsappBtn: "Falar no WhatsApp",
    heroServicesBtn: "Conhecer serviços",
    stat1Value: "4,2%",
    stat1Text:
      "O Paraguai lidera a expansão econômica regional, crescendo a uma taxa constante de 4,2% ao ano com estabilidade monetária de dar inveja à América do Sul.",
    stat1Label: "PIB Regional Forte",
    stat2Value: "+75%",
    stat2Text:
      "Mais de 75% dos habitantes usam internet e redes sociais diariamente para decidir compras.",
    stat2Label: "boom tecnológico",
    stat3Value: "Performance",
    stat3Text:
      "Com a chegada de grandes multinacionais, as empresas locais que não tiverem presença digital perderão contratos para quem investe em performance.",
    stat3Label: "presença digital",
    solutionsEyebrow: "Engenharia de Software de Elite",
    solutionsTitle: "Soluções de Engenharia Digital",
    card1Title: "Sites Profissionais",
    card1Text:
      "Plataformas de alta conversão, portfólios imobiliários exclusivos e landing pages otimizadas para o carregamento instantâneo.",
    card2Title: "Automação de WhatsApp",
    card2Text:
      "Qualificação inteligente de leads, distribuição automática e suporte instantâneo 24/7 integrado diretamente ao CRM da sua equipe.",
    card3Title: "Sistemas Personalizados",
    card3Text:
      "Sistemas idealizados exclusivamente para as necessidades da sua empresa.",
    foundersEyebrow: "A mente por trás da BWeber",
    foundersName: "Josias & Gissely",
    foundersImgAlt: "Josias and Gissely BWeber Founders",
    foundersP1:
      "Combinamos anos de experiência em tecnologia e estratégia de marketing para oferecer a consultoria digital mais exclusiva e orientada a resultados do Paraguai.",
    foundersP2:
      "Entendemos que o prestígio do seu negócio exige precisão técnica impecável, design de alto nível editorial e integridade absoluta na entrega do código.",
    foundersBtn: "Saber mais sobre nós",
    finalTitle: "O Paraguai não vai esperar você se digitalizar.",
    finalText:
      "Seja o líder indiscutível de mercado com ferramentas que realmente geram vendas. Agende hoje mesmo uma análise de presença digital grátis direcionada à sua construtora.",
    finalBtn: "Falar no WhatsApp agora",
    finalWhatsappMsg:
      "Olá! Quero dar o próximo passo e digitalizar minha imobiliária agora.",
  },
  servicos: {
    eyebrow: "Exclusividade & Performance",
    title: "Nossas Soluções Digitais Sob Medida.",
    subtitle:
      "Unimos o rigor da engenharia de software de alta performance, design editorial refinado e automação inteligente para elevar organizações a um patamar absoluto de captação e resultados.",
    selectBtn: "Quero esse serviço",
    services: [
      {
        id: "ecossistema",
        title: "Ecossistema de Conversão",
        description:
          "Não entregamos apenas um site, mas sim um canal ativo de captação corporativa. Desenvolvemos Landing Pages exclusivas para lançamentos, integradas com CRMs internacionais e perfeitamente otimizadas para carregamento em frações de segundo.",
        alt: "Sleek glass high-rise reflecting dramatic golden hour light in Paraguay",
        points: [
          "SEO local focado e otimizado para o mercado paraguaio",
          "Design mobile-first responsivo e ultra-elegante",
          "Integração nativa com Bitrix24, RD Station e Salesforce API",
          "Hospedagem em nuvem ultra-rápida via CDN global segura",
          "Gestão de leads em tempo real com painel exclusivo",
        ],
      },
      {
        id: "branding",
        title: "Branding Digital & Posicionamento",
        description:
          "Transformamos sua marca pessoal em uma grife de prestígio e autoridade inquestionável na América do Sul. Criamos logos sofisticados, paletas corporativas refinadas, cartões NFC sem contato e uma assinatura digital consistente para encantar investidores exigentes de todo o mundo.",
        alt: "Smartphone and elite business cards with luxury minimalist gold letters",
        points: [
          "Manual de identidade visual e logotipo premium",
          "Kits de templates sob medida para LinkedIn e Instagram",
          "Cartão de visita digital NFC de luxo",
          "Bio-link profissional personalizada para bio",
          "Planejamento de marca e consultoria de tom de voz profissional",
          "Direcionamento estético para posicionamento de alto valor",
        ],
      },
      {
        id: "trafego",
        title: "Automação & Tráfego de Performance",
        description:
          "Implementamos e operamos o verdadeiro motor de crescimento do seu negócio. Por meio de campanhas cirurgicamente segmentadas no Facebook Ads, Instagram Ads e Google Search, impactamos o público AAA e garantimos leads qualificados respondidos em menos de 5 minutos pelos nossos bots automatizados.",
        alt: "Tech desk dashboard showing Paraguay charts and high performance data",
        points: [
          "Gestão cirúrgica de anúncios em Meta Ads e Google Ads",
          "Funis avançados de remarketing para visitantes engajados",
          "Chatbots humanizados e inteligentes de pré-qualificação",
          "Configuração de Conversões via API focado na meta",
          "Relatórios mensais detalhados de ROI e custo por lead",
        ],
      },
    ] as ServiceTranslation[],
  },
  sobre: {
    heroEyebrow: "História & Visão",
    heroTitle: "A ponte entre o prestígio e a inovação.",
    heroSubtitle:
      "Nascemos da percepção de um mercado rico em tradições, mas com uma lacuna digital crucial. Oferecemos o elo ideal de tecnologia estética para expandir seu prestígio globalmente.",
    heroImgAlt: "BWeber Founders standing in luxury architectural environment",
    manifestoEyebrow: "Nosso Manifesto",
    manifestoTitle: "De um olhar externo à revolução local.",
    manifestoP1:
      "Ao chegarmos ao Paraguai, fomos cativados pela força do mercado local e pela energia de um país em pleno boom de crescimento. No entanto, algo nos chamou a atenção: o contraste entre o altíssimo padrão dos produtos e serviços paraguaios e os processos comerciais ainda majoritariamente analógicos.",
    manifestoP2:
      "Percebemos que os negócios mais prestigiados do país careciam de uma presença digital à altura do que entregam. Foi ali que vimos nossa missão: digitalizar a excelência sem perder a essência.",
    visionTitle: "Visão",
    visionText:
      "Ser o padrão ouro absoluto em engenhosidade de software e transformação digital para o mercado do Paraguai.",
    missionTitle: "Missão",
    missionText:
      "Digitalizar a excelência paraguaia. Preparar negócios tradicionais para o futuro que já começou.",
    ctaTitle: "Pronto para digitalizar seu legado?",
    ctaText:
      "Seja você uma empresa de destaque ou que está consolidando sua autoridade digital, nós temos o trilho seguro para o seu sucesso comercial.",
    ctaChat: "Vamos Conversar?",
    ctaServices: "Ver Serviços",
  },
  contato: {
    eyebrow: "Agende Sua Análise Digital",
    title: "Vamos digitalizar sua imobiliária?",
    subtitle:
      "Estamos prontos para desenhar, construir e otimizar todo o fluxo comercial digital do seu negócio de prestígio no Paraguai. Selecione seu meio preferencial de contato.",
    responseTime: "Resposta em até 1h",
    specialistTitle: "Fale direto com um especialista",
    specialistText:
      "Clique para abrir nosso widget de chat inteligente integrado. Simule uma conversa em tempo real e receba respostas automáticas instantâneas com Josias e Gissely.",
    startChatBtn: "Iniciar Conversa Agora",
    whatsappDirectMsg:
      "Olá! Vi seu site e gostaria de falar diretamente com um especialista.",
    emailLabel: "Email Direto",
    locationLabel: "Localização",
    locationValue: "Luque, Paraguay",
    formTitle: "Prefere um e-mail?",
    successTitle: "Solicitação Enviada!",
    successText:
      "Sua solicitação premium de digitalização foi registrada com sucesso e integrada ao sistema BWeber.",
    successBtn: "Enviar Nova Mensagem",
    nameLabel: "Nome Completo",
    namePlaceholder: "Como devemos te chamar?",
    whatsappLabel: "WhatsApp com DDD",
    whatsappPlaceholder: "Ex: +595 981 123456",
    serviceLabel: "Serviço de Interesse",
    serviceGeneral: "Consultoria Digital Geral",
    messageLabel: "Sua Mensagem",
    messagePlaceholder:
      "Conte-nos brevemente sobre o seu projeto imobiliário...",
    submitting: "Enviando solicitação...",
    submitBtn: "Enviar Solicitação",
    sendError:
      "Não foi possível enviar sua solicitação agora. Tente novamente ou fale conosco pelo WhatsApp.",
    // {service} is replaced with the selected service name at runtime.
    preselectMsg:
      'Olá! Gostaria de receber uma proposta comercial e cronograma detalhado para o serviço de "{service}".',
    leadHistoryTitle: "Histórico de Interesses Registrados (Demo LOCAL)",
    leadHistorySubtitle: "Dados armazenados com segurança no navegador",
    thCliente: "Cliente",
    thWhatsapp: "WhatsApp",
    thServico: "Serviço Solicitado",
    thData: "Data/Hora",
    thStatus: "Status CRM",
    thAcoes: "Ações",
    statusPending: "Pendente",
    statusReviewed: "Analisado",
    removeRecord: "Remover Registro",
  },
  footer: {
    brandDesc:
      "Transformando o mercado paraguaio através da excelência digital, design editorial de prestígio e engenharia de software de ponta.",
    navTitle: "Navegação",
    home: "Home",
    servicos: "Serviços",
    sobreNos: "Sobre Nós",
    contato: "Contato",
    legalTitle: "Legal",
    privacy: "Privacidade",
    terms: "Termos de Uso",
    socialTitle: "Social",
    copyrightSuffix: "BWeber Digital. Todos os direitos reservados.",
    securityBadge: "Selo de Segurança de Dados",
    docsLicensing: "Documentos e Licenciamento",
    displayLanguage: "Idioma de Exibição",
    modalUnderstood: "Entendido",
    privacyTitle: "Política de Privacidade",
    privacyContent: `A BWeber Digital valoriza a privacidade dos seus usuários. Esta política de privacidade lida com as informações de identificação pessoal que podem ser coletadas por nós em nossa plataforma de demonstração.

1. Coleta de Informações: Ao preencher o formulário de contato, coletamos seu Nome, número de WhatsApp e Mensagem.
2. Uso dos Dados: Usamos os seus dados estritamente para simular o atendimento ao cliente e responder às dúvidas feitas ao nosso bot ou equipe.
3. Sem Compartilhamento: Seus dados permanecem seguros em seu histórico de navegação local (localStorage) e não são vendidos ou fornecidos a terceiros.
4. Consentimento: Ao submeter o formulário, você consente com o armazenamento de simulação desses dados.`,
    termsTitle: "Termos de Uso e Serviço",
    termsContent: `Bem-vindo à plataforma BWeber Digital. Ao acessar nosso site de demonstração de serviços, você concorda com os seguintes termos:

1. Natureza do Serviço: Este site é uma página corporativa de alta performance que demonstra soluções de desenvolvimento web, automações de CRM (Bitrix24, RD Station) e robôs de WhatsApp.
2. Uso Aceitável: Você se compromete a usar nossos canais e simuladores de forma legítima, abstendo-se de inserir termos ofensivos nos inputs.
3. Propriedade Intelectual: Todo o design premium, layouts editoriais e códigos são de titularidade de BWeber Digital e parceiros de engenharia.
4. Suporte de Simulação: O chat flutuante de WhatsApp e formulário de email são integrados a um simulador inteligente para garantir interações em tempo real sem a necessidade de redirecionar para links externos bloqueados pelo ambiente Sandbox.`,
  },
};

export type Translation = typeof pt;

const en: Translation = {
  nav: {
    home: "Home",
    servicos: "Services",
    sobre: "About",
    contato: "Contact",
  },
  header: {
    whatsappBtn: "WhatsApp",
    specialistMsg:
      "Hi! I'd like to talk to a specialist about real estate digitalization.",
    mobileMsg: "Hi! I'd like to chat from mobile.",
    mobileWhatsappBtn: "CHAT ON WHATSAPP",
  },
  floatingWhatsapp: {
    label: "Chat on WhatsApp",
  },
  home: {
    heroTitle: "We digitalize businesses for the Paraguayan boom.",
    heroSubtitle:
      "We build high-performance web ecosystems, exclusive WhatsApp automations for client acquisition, and intelligent CRM systems for companies in Luque and Asunción.",
    heroWhatsappMsg:
      "Hi! I saw your page and would like to schedule a real estate digitalization consultation for the Paraguayan boom.",
    heroWhatsappBtn: "Chat on WhatsApp",
    heroServicesBtn: "Explore services",
    stat1Value: "4.2%",
    stat1Text:
      "Paraguay leads regional economic expansion, growing at a steady 4.2% per year with monetary stability that is the envy of South America.",
    stat1Label: "Strong Regional GDP",
    stat2Value: "+75%",
    stat2Text:
      "More than 75% of inhabitants use the internet and social media daily to make purchasing decisions.",
    stat2Label: "tech boom",
    stat3Value: "Performance",
    stat3Text:
      "With the arrival of large multinationals, local companies without a digital presence will lose contracts to those who invest in performance.",
    stat3Label: "digital presence",
    solutionsEyebrow: "Elite Software Engineering",
    solutionsTitle: "Digital Engineering Solutions",
    card1Title: "Professional Websites",
    card1Text:
      "High-conversion platforms, exclusive real estate portfolios, and landing pages optimized for instant loading.",
    card2Title: "WhatsApp Automation",
    card2Text:
      "Smart lead qualification, automatic distribution, and instant 24/7 support integrated directly into your team's CRM.",
    card3Title: "Custom Systems",
    card3Text:
      "Systems designed exclusively for your company's needs.",
    foundersEyebrow: "The mind behind BWeber",
    foundersName: "Josias & Gissely",
    foundersImgAlt: "Josias and Gissely BWeber Founders",
    foundersP1:
      "We combine years of experience in technology and marketing strategy to deliver the most exclusive, results-driven digital consultancy in Paraguay.",
    foundersP2:
      "We understand that your business's prestige demands flawless technical precision, editorial-grade design, and absolute integrity in code delivery.",
    foundersBtn: "Learn more about us",
    finalTitle: "Paraguay won't wait for you to go digital.",
    finalText:
      "Become the undisputed market leader with tools that truly generate sales. Schedule a free digital presence analysis tailored to your firm today.",
    finalBtn: "Chat on WhatsApp now",
    finalWhatsappMsg:
      "Hi! I want to take the next step and digitalize my real estate business now.",
  },
  servicos: {
    eyebrow: "Exclusivity & Performance",
    title: "Our Tailor-Made Digital Solutions.",
    subtitle:
      "We combine the rigor of high-performance software engineering, refined editorial design, and intelligent automation to elevate organizations to an absolute standard of acquisition and results.",
    selectBtn: "I want this service",
    services: [
      {
        id: "ecossistema",
        title: "Conversion Ecosystem",
        description:
          "We don't just deliver a website, but an active channel for corporate acquisition. We build exclusive Landing Pages for launches, integrated with international CRMs and perfectly optimized to load in fractions of a second.",
        alt: "Sleek glass high-rise reflecting dramatic golden hour light in Paraguay",
        points: [
          "Local SEO focused and optimized for the Paraguayan market",
          "Responsive, ultra-elegant mobile-first design",
          "Native integration with Bitrix24, RD Station, and Salesforce API",
          "Ultra-fast cloud hosting via secure global CDN",
          "Real-time lead management with an exclusive dashboard",
        ],
      },
      {
        id: "branding",
        title: "Digital Branding & Positioning",
        description:
          "We transform your personal brand into a label of prestige and unquestionable authority across South America. We create sophisticated logos, refined corporate palettes, contactless NFC cards, and a consistent digital signature to impress demanding investors worldwide.",
        alt: "Smartphone and elite business cards with luxury minimalist gold letters",
        points: [
          "Premium visual identity manual and logo",
          "Tailor-made template kits for LinkedIn and Instagram",
          "Luxury NFC digital business card",
          "Personalized professional bio-link",
          "Brand planning and professional tone-of-voice consulting",
          "Aesthetic direction for high-value positioning",
        ],
      },
      {
        id: "trafego",
        title: "Automation & Performance Traffic",
        description:
          "We implement and operate the true growth engine of your business. Through surgically segmented campaigns on Facebook Ads, Instagram Ads, and Google Search, we reach the AAA audience and guarantee qualified leads answered in under 5 minutes by our automated bots.",
        alt: "Tech desk dashboard showing Paraguay charts and high performance data",
        points: [
          "Surgical ad management on Meta Ads and Google Ads",
          "Advanced remarketing funnels for engaged visitors",
          "Humanized, intelligent pre-qualification chatbots",
          "Goal-focused Conversions API setup",
          "Detailed monthly reports on ROI and cost per lead",
        ],
      },
    ] as ServiceTranslation[],
  },
  sobre: {
    heroEyebrow: "History & Vision",
    heroTitle: "The bridge between prestige and innovation.",
    heroSubtitle:
      "We were born from the realization of a market rich in tradition but with a crucial digital gap. We offer the ideal link of aesthetic technology to expand your prestige globally.",
    heroImgAlt: "BWeber Founders standing in luxury architectural environment",
    manifestoEyebrow: "Our Manifesto",
    manifestoTitle: "From an outside view to a local revolution.",
    manifestoP1:
      "When we arrived in Paraguay, we were captivated by the strength of the local market and the energy of a country in full growth boom. However, something caught our attention: the contrast between the extremely high standard of Paraguayan products and services and business processes that were still largely analog.",
    manifestoP2:
      "We realized that the country's most prestigious businesses lacked a digital presence worthy of what they deliver. That's where we saw our mission: to digitalize excellence without losing its essence.",
    visionTitle: "Vision",
    visionText:
      "To be the absolute gold standard in software ingenuity and digital transformation for the Paraguayan market.",
    missionTitle: "Mission",
    missionText:
      "To digitalize Paraguayan excellence. To prepare traditional businesses for the future that has already begun.",
    ctaTitle: "Ready to digitalize your legacy?",
    ctaText:
      "Whether you are a standout company or consolidating your digital authority, we have the safe track for your commercial success.",
    ctaChat: "Let's Talk?",
    ctaServices: "View Services",
  },
  contato: {
    eyebrow: "Schedule Your Digital Analysis",
    title: "Shall we digitalize your real estate business?",
    subtitle:
      "We are ready to design, build, and optimize the entire digital commercial flow of your prestigious business in Paraguay. Select your preferred contact method.",
    responseTime: "Reply within 1h",
    specialistTitle: "Talk directly to a specialist",
    specialistText:
      "Click to open our integrated smart chat widget. Simulate a real-time conversation and receive instant automated replies from Josias and Gissely.",
    startChatBtn: "Start a Conversation Now",
    whatsappDirectMsg:
      "Hi! I saw your site and would like to speak directly with a specialist.",
    emailLabel: "Direct Email",
    locationLabel: "Location",
    locationValue: "Luque, Paraguay",
    formTitle: "Prefer an email?",
    successTitle: "Request Sent!",
    successText:
      "Your premium digitalization request was successfully recorded and integrated into the BWeber system.",
    successBtn: "Send New Message",
    nameLabel: "Full Name",
    namePlaceholder: "What should we call you?",
    whatsappLabel: "WhatsApp with area code",
    whatsappPlaceholder: "e.g. +595 981 123456",
    serviceLabel: "Service of Interest",
    serviceGeneral: "General Digital Consulting",
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us briefly about your real estate project...",
    submitting: "Sending request...",
    submitBtn: "Send Request",
    sendError:
      "We couldn't send your request right now. Please try again or reach us on WhatsApp.",
    preselectMsg:
      'Hi! I would like to receive a commercial proposal and detailed timeline for the "{service}" service.',
    leadHistoryTitle: "Registered Interest History (LOCAL Demo)",
    leadHistorySubtitle: "Data securely stored in your browser",
    thCliente: "Client",
    thWhatsapp: "WhatsApp",
    thServico: "Requested Service",
    thData: "Date/Time",
    thStatus: "CRM Status",
    thAcoes: "Actions",
    statusPending: "Pending",
    statusReviewed: "Reviewed",
    removeRecord: "Remove Record",
  },
  footer: {
    brandDesc:
      "Transforming the Paraguayan market through digital excellence, prestigious editorial design, and cutting-edge software engineering.",
    navTitle: "Navigation",
    home: "Home",
    servicos: "Services",
    sobreNos: "About Us",
    contato: "Contact",
    legalTitle: "Legal",
    privacy: "Privacy",
    terms: "Terms of Use",
    socialTitle: "Social",
    copyrightSuffix: "BWeber Digital. All rights reserved.",
    securityBadge: "Data Security Seal",
    docsLicensing: "Documents and Licensing",
    displayLanguage: "Display Language",
    modalUnderstood: "Understood",
    privacyTitle: "Privacy Policy",
    privacyContent: `BWeber Digital values the privacy of its users. This privacy policy deals with the personally identifiable information that may be collected by us on our demonstration platform.

1. Information Collection: When filling out the contact form, we collect your Name, WhatsApp number, and Message.
2. Use of Data: We use your data strictly to simulate customer service and answer questions asked of our bot or team.
3. No Sharing: Your data remains secure in your local browsing history (localStorage) and is not sold or provided to third parties.
4. Consent: By submitting the form, you consent to the simulated storage of this data.`,
    termsTitle: "Terms of Use and Service",
    termsContent: `Welcome to the BWeber Digital platform. By accessing our service demonstration site, you agree to the following terms:

1. Nature of the Service: This site is a high-performance corporate page that demonstrates web development solutions, CRM automations (Bitrix24, RD Station), and WhatsApp bots.
2. Acceptable Use: You agree to use our channels and simulators legitimately, refraining from entering offensive terms in the inputs.
3. Intellectual Property: All premium design, editorial layouts, and code are owned by BWeber Digital and its engineering partners.
4. Simulation Support: The floating WhatsApp chat and email form are integrated with an intelligent simulator to ensure real-time interactions without the need to redirect to external links blocked by the Sandbox environment.`,
  },
};

const es: Translation = {
  nav: {
    home: "Inicio",
    servicos: "Servicios",
    sobre: "Nosotros",
    contato: "Contacto",
  },
  header: {
    whatsappBtn: "WhatsApp",
    specialistMsg:
      "¡Hola! Me gustaría hablar con un especialista sobre digitalización inmobiliaria.",
    mobileMsg: "¡Hola! Quiero conversar desde el móvil.",
    mobileWhatsappBtn: "HABLAR POR WHATSAPP",
  },
  floatingWhatsapp: {
    label: "Hablar por WhatsApp",
  },
  home: {
    heroTitle: "Digitalizamos negocios para el boom paraguayo.",
    heroSubtitle:
      "Desarrollamos ecosistemas web de alto rendimiento, automatizaciones exclusivas para la captación de clientes por WhatsApp y sistemas inteligentes de CRM para empresas en Luque y Asunción.",
    heroWhatsappMsg:
      "¡Hola! Vi su página y me gustaría agendar una consultoría de digitalización inmobiliaria para el boom paraguayo.",
    heroWhatsappBtn: "Hablar por WhatsApp",
    heroServicesBtn: "Conocer servicios",
    stat1Value: "4,2%",
    stat1Text:
      "Paraguay lidera la expansión económica regional, creciendo a una tasa constante del 4,2% anual con una estabilidad monetaria que envidia toda Sudamérica.",
    stat1Label: "PIB Regional Fuerte",
    stat2Value: "+75%",
    stat2Text:
      "Más del 75% de los habitantes usa internet y redes sociales a diario para decidir sus compras.",
    stat2Label: "boom tecnológico",
    stat3Value: "Rendimiento",
    stat3Text:
      "Con la llegada de grandes multinacionales, las empresas locales que no tengan presencia digital perderán contratos frente a quienes invierten en rendimiento.",
    stat3Label: "presencia digital",
    solutionsEyebrow: "Ingeniería de Software de Élite",
    solutionsTitle: "Soluciones de Ingeniería Digital",
    card1Title: "Sitios Profesionales",
    card1Text:
      "Plataformas de alta conversión, portafolios inmobiliarios exclusivos y landing pages optimizadas para una carga instantánea.",
    card2Title: "Automatización de WhatsApp",
    card2Text:
      "Calificación inteligente de leads, distribución automática y soporte instantáneo 24/7 integrado directamente al CRM de tu equipo.",
    card3Title: "Sistemas Personalizados",
    card3Text:
      "Sistemas diseñados exclusivamente para las necesidades de tu empresa.",
    foundersEyebrow: "La mente detrás de BWeber",
    foundersName: "Josias & Gissely",
    foundersImgAlt: "Josias and Gissely BWeber Founders",
    foundersP1:
      "Combinamos años de experiencia en tecnología y estrategia de marketing para ofrecer la consultoría digital más exclusiva y orientada a resultados de Paraguay.",
    foundersP2:
      "Entendemos que el prestigio de tu negocio exige una precisión técnica impecable, un diseño de alto nivel editorial e integridad absoluta en la entrega del código.",
    foundersBtn: "Saber más sobre nosotros",
    finalTitle: "Paraguay no va a esperar a que te digitalices.",
    finalText:
      "Sé el líder indiscutible del mercado con herramientas que realmente generan ventas. Agenda hoy mismo un análisis de presencia digital gratuito dirigido a tu constructora.",
    finalBtn: "Hablar por WhatsApp ahora",
    finalWhatsappMsg:
      "¡Hola! Quiero dar el siguiente paso y digitalizar mi inmobiliaria ahora.",
  },
  servicos: {
    eyebrow: "Exclusividad & Rendimiento",
    title: "Nuestras Soluciones Digitales a Medida.",
    subtitle:
      "Unimos el rigor de la ingeniería de software de alto rendimiento, el diseño editorial refinado y la automatización inteligente para elevar a las organizaciones a un nivel absoluto de captación y resultados.",
    selectBtn: "Quiero este servicio",
    services: [
      {
        id: "ecossistema",
        title: "Ecosistema de Conversión",
        description:
          "No entregamos solo un sitio web, sino un canal activo de captación corporativa. Desarrollamos Landing Pages exclusivas para lanzamientos, integradas con CRMs internacionales y perfectamente optimizadas para cargar en fracciones de segundo.",
        alt: "Sleek glass high-rise reflecting dramatic golden hour light in Paraguay",
        points: [
          "SEO local enfocado y optimizado para el mercado paraguayo",
          "Diseño mobile-first responsivo y ultraelegante",
          "Integración nativa con Bitrix24, RD Station y Salesforce API",
          "Alojamiento en la nube ultrarrápido vía CDN global segura",
          "Gestión de leads en tiempo real con panel exclusivo",
        ],
      },
      {
        id: "branding",
        title: "Branding Digital & Posicionamiento",
        description:
          "Transformamos tu marca personal en un sello de prestigio y autoridad incuestionable en Sudamérica. Creamos logos sofisticados, paletas corporativas refinadas, tarjetas NFC sin contacto y una firma digital consistente para cautivar a inversores exigentes de todo el mundo.",
        alt: "Smartphone and elite business cards with luxury minimalist gold letters",
        points: [
          "Manual de identidad visual y logotipo premium",
          "Kits de plantillas a medida para LinkedIn e Instagram",
          "Tarjeta de presentación digital NFC de lujo",
          "Bio-link profesional personalizado",
          "Planificación de marca y consultoría de tono de voz profesional",
          "Dirección estética para un posicionamiento de alto valor",
        ],
      },
      {
        id: "trafego",
        title: "Automatización & Tráfico de Rendimiento",
        description:
          "Implementamos y operamos el verdadero motor de crecimiento de tu negocio. Mediante campañas quirúrgicamente segmentadas en Facebook Ads, Instagram Ads y Google Search, impactamos al público AAA y garantizamos leads calificados respondidos en menos de 5 minutos por nuestros bots automatizados.",
        alt: "Tech desk dashboard showing Paraguay charts and high performance data",
        points: [
          "Gestión quirúrgica de anuncios en Meta Ads y Google Ads",
          "Embudos avanzados de remarketing para visitantes comprometidos",
          "Chatbots humanizados e inteligentes de precalificación",
          "Configuración de Conversiones vía API enfocada en el objetivo",
          "Informes mensuales detallados de ROI y costo por lead",
        ],
      },
    ] as ServiceTranslation[],
  },
  sobre: {
    heroEyebrow: "Historia & Visión",
    heroTitle: "El puente entre el prestigio y la innovación.",
    heroSubtitle:
      "Nacimos de la percepción de un mercado rico en tradiciones, pero con una brecha digital crucial. Ofrecemos el enlace ideal de tecnología estética para expandir tu prestigio globalmente.",
    heroImgAlt: "BWeber Founders standing in luxury architectural environment",
    manifestoEyebrow: "Nuestro Manifiesto",
    manifestoTitle: "De una mirada externa a la revolución local.",
    manifestoP1:
      "Al llegar a Paraguay, quedamos cautivados por la fuerza del mercado local y la energía de un país en pleno boom de crecimiento. Sin embargo, algo nos llamó la atención: el contraste entre el altísimo nivel de los productos y servicios paraguayos y unos procesos comerciales todavía mayoritariamente analógicos.",
    manifestoP2:
      "Nos dimos cuenta de que los negocios más prestigiosos del país carecían de una presencia digital a la altura de lo que entregan. Allí fue donde vimos nuestra misión: digitalizar la excelencia sin perder la esencia.",
    visionTitle: "Visión",
    visionText:
      "Ser el estándar de oro absoluto en ingenio de software y transformación digital para el mercado de Paraguay.",
    missionTitle: "Misión",
    missionText:
      "Digitalizar la excelencia paraguaya. Preparar a los negocios tradicionales para el futuro que ya comenzó.",
    ctaTitle: "¿Listo para digitalizar tu legado?",
    ctaText:
      "Ya seas una empresa destacada o estés consolidando tu autoridad digital, tenemos la vía segura para tu éxito comercial.",
    ctaChat: "¿Conversamos?",
    ctaServices: "Ver Servicios",
  },
  contato: {
    eyebrow: "Agenda Tu Análisis Digital",
    title: "¿Digitalizamos tu inmobiliaria?",
    subtitle:
      "Estamos listos para diseñar, construir y optimizar todo el flujo comercial digital de tu negocio de prestigio en Paraguay. Selecciona tu medio de contacto preferido.",
    responseTime: "Respuesta en hasta 1h",
    specialistTitle: "Habla directo con un especialista",
    specialistText:
      "Haz clic para abrir nuestro widget de chat inteligente integrado. Simula una conversación en tiempo real y recibe respuestas automáticas instantáneas de Josias y Gissely.",
    startChatBtn: "Iniciar Conversación Ahora",
    whatsappDirectMsg:
      "¡Hola! Vi su sitio y me gustaría hablar directamente con un especialista.",
    emailLabel: "Email Directo",
    locationLabel: "Ubicación",
    locationValue: "Luque, Paraguay",
    formTitle: "¿Prefieres un email?",
    successTitle: "¡Solicitud Enviada!",
    successText:
      "Tu solicitud premium de digitalización fue registrada con éxito e integrada al sistema BWeber.",
    successBtn: "Enviar Nuevo Mensaje",
    nameLabel: "Nombre Completo",
    namePlaceholder: "¿Cómo debemos llamarte?",
    whatsappLabel: "WhatsApp con código de área",
    whatsappPlaceholder: "Ej: +595 981 123456",
    serviceLabel: "Servicio de Interés",
    serviceGeneral: "Consultoría Digital General",
    messageLabel: "Tu Mensaje",
    messagePlaceholder:
      "Cuéntanos brevemente sobre tu proyecto inmobiliario...",
    submitting: "Enviando solicitud...",
    submitBtn: "Enviar Solicitud",
    sendError:
      "No pudimos enviar tu solicitud en este momento. Inténtalo de nuevo o escríbenos por WhatsApp.",
    preselectMsg:
      '¡Hola! Me gustaría recibir una propuesta comercial y un cronograma detallado para el servicio de "{service}".',
    leadHistoryTitle: "Historial de Intereses Registrados (Demo LOCAL)",
    leadHistorySubtitle: "Datos almacenados de forma segura en el navegador",
    thCliente: "Cliente",
    thWhatsapp: "WhatsApp",
    thServico: "Servicio Solicitado",
    thData: "Fecha/Hora",
    thStatus: "Estado CRM",
    thAcoes: "Acciones",
    statusPending: "Pendiente",
    statusReviewed: "Analizado",
    removeRecord: "Eliminar Registro",
  },
  footer: {
    brandDesc:
      "Transformando el mercado paraguayo a través de la excelencia digital, el diseño editorial de prestigio y la ingeniería de software de punta.",
    navTitle: "Navegación",
    home: "Inicio",
    servicos: "Servicios",
    sobreNos: "Nosotros",
    contato: "Contacto",
    legalTitle: "Legal",
    privacy: "Privacidad",
    terms: "Términos de Uso",
    socialTitle: "Social",
    copyrightSuffix: "BWeber Digital. Todos los derechos reservados.",
    securityBadge: "Sello de Seguridad de Datos",
    docsLicensing: "Documentos y Licenciamiento",
    displayLanguage: "Idioma de Visualización",
    modalUnderstood: "Entendido",
    privacyTitle: "Política de Privacidad",
    privacyContent: `BWeber Digital valora la privacidad de sus usuarios. Esta política de privacidad trata sobre la información de identificación personal que podemos recopilar en nuestra plataforma de demostración.

1. Recopilación de Información: Al completar el formulario de contacto, recopilamos tu Nombre, número de WhatsApp y Mensaje.
2. Uso de los Datos: Usamos tus datos estrictamente para simular la atención al cliente y responder a las consultas hechas a nuestro bot o equipo.
3. Sin Compartir: Tus datos permanecen seguros en tu historial de navegación local (localStorage) y no se venden ni se proporcionan a terceros.
4. Consentimiento: Al enviar el formulario, consientes el almacenamiento de simulación de estos datos.`,
    termsTitle: "Términos de Uso y Servicio",
    termsContent: `Bienvenido a la plataforma BWeber Digital. Al acceder a nuestro sitio de demostración de servicios, aceptas los siguientes términos:

1. Naturaleza del Servicio: Este sitio es una página corporativa de alto rendimiento que demuestra soluciones de desarrollo web, automatizaciones de CRM (Bitrix24, RD Station) y bots de WhatsApp.
2. Uso Aceptable: Te comprometes a usar nuestros canales y simuladores de forma legítima, absteniéndote de introducir términos ofensivos en los campos.
3. Propiedad Intelectual: Todo el diseño premium, los layouts editoriales y el código son propiedad de BWeber Digital y sus socios de ingeniería.
4. Soporte de Simulación: El chat flotante de WhatsApp y el formulario de email están integrados con un simulador inteligente para garantizar interacciones en tiempo real sin necesidad de redirigir a enlaces externos bloqueados por el entorno Sandbox.`,
  },
};

export const translations: Record<Lang, Translation> = { pt, en, es };
