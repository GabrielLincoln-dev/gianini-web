import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const dict = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      why: "Por que nós",
      local: "Arujá",
      contact: "Contato",
      privacy: "Privacidade",
    },
      hero: {
        eyebrow: "Gianini Web · Agência de sites em Arujá desde 2024",
        title: "Criação de sites e identidade digital em Arujá",
      sub: "Somos uma agência de desenvolvimento web em Arujá, especializada em sites institucionais, blogs, landing pages e web apps sob medida para empresas, comércios, escolas, clínicas e profissionais autônomos da cidade e de toda a região. Unimos design exclusivo, performance real e SEO técnico focado no público local, para fortalecer a visibilidade do seu negócio no Google quando alguém buscar seus serviços em Arujá, Santa Isabel, Itaquaquecetuba, Guarulhos e Mogi das Cruzes.",
      ctaPrimary: "Fale com um especialista em Arujá",
      ctaSecondary: "Ver projetos realizados",
    },
    ceo: {
      kicker: "Quem está por trás",
      title: "Conheça Gabriel Gianini, fundador da Gianini Web em Arujá",
      body: "Gabriel Gianini é desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas pela Universidade Eniac e nasceu e vive em Arujá, SP. Em 2024 fundou a Gianini Web com um propósito claro: aproximar as empresas da região do que há de mais atual em desenvolvimento web, sem depender de agências grandes de fora e sem abrir mão de qualidade técnica. Cada projeto é pensado do zero, com código próprio, foco em performance, SEO e experiência do usuário, do primeiro rascunho até o lançamento, o cliente conversa diretamente com quem coloca a mão no código. Essa proximidade é o que permite entregar sites e sistemas que traduzem a identidade do negócio e consolidam sua presença digital.",
    },
    projects: {
      kicker: "Projetos realizados",
      title: "Marcas de Arujá e região que já confiaram na Gianini Web",
      sub: "Selecionamos alguns dos sites, portais institucionais e páginas que desenvolvemos para empresas, instituições e projetos culturais da cidade e do entorno. Clique em qualquer projeto para visitá-lo.",
    },
    why: {
      kicker: "Por que Gianini Web",
      title: "Mais que um site. Uma estratégia digital feita para Arujá.",
      sub: "Cada projeto é pensado para construir autoridade local, fortalecer a identidade digital da sua marca e ser encontrado com mais facilidade pelo público da sua cidade. Trabalhamos com foco em SEO local, tempo de carregamento, acessibilidade e uma identidade visual que diferencie sua marca em Arujá e região.",
      items: [
        { t: "Design sob medida", d: "Identidade visual única, criada do zero para o seu negócio em Arujá — sem templates prontos, sem cara de site genérico." },
        { t: "SEO local e técnico", d: "Estrutura semântica, dados estruturados, metadados e conteúdo otimizados para buscas do tipo 'em minha cidade', 'perto de mim' e Google Meu Negócio." },
        { t: "Autoridade digital", d: "Conteúdo e arquitetura que reforçam a credibilidade da sua marca no seu setor dentro do Alto Tietê." },
        { t: "Performance real", d: "Core Web Vitals no verde, carregamento rápido no 4G do celular e experiência fluida em qualquer dispositivo." },
        { t: "Presença consolidada", d: "Site, blog, WhatsApp, Instagram e Google Meu Negócio conectados em uma única narrativa de marca." },
        { t: "Suporte próximo em Arujá", d: "Atendimento direto com quem desenvolve, presencial na região ou por WhatsApp. Sem burocracia, sem intermediários." },
      ],
    },
    local: {
      kicker: "Atendimento em Arujá e região",
      title: "Desenvolvimento de sites em Arujá, SP",
      p1: "A Gianini Web nasceu em Arujá com a missão de oferecer, para as empresas locais, o mesmo padrão de qualidade técnica encontrado nas melhores agências da capital. Atendemos clientes em toda a cidade: Centro e demais bairros, além dos municípios vizinhos: Santa Isabel, Itaquaquecetuba, Guarulhos, Mogi das Cruzes, Suzano e Poá.",
      p2: "Se você tem um comércio, clínica, escritório, imobiliária, indústria ou presta serviços autônomos em Arujá, um site profissional é o primeiro passo para transmitir credibilidade, ser encontrado com mais facilidade no Google e consolidar sua presença digital. Cuidamos de tudo: registro de domínio, hospedagem, e-mails profissionais, integração com WhatsApp, Instagram, Google Meu Negócio e criação de conteúdo focado nas buscas da sua cidade.",
      servicesTitle: "O que fazemos",
      services: [
        "Criação de sites institucionais\n\n",
        "Landing pages para campanhas (Google Ads e Meta Ads)",
        "Desenvolvimento de blogs otimizados para SEO",
        "Web apps e sistemas sob medida",
        "Redesign e migração de sites antigos",
        "Otimização de performance e Core Web Vitals",
        "SEO local",
        "Integração com WhatsApp, Instagram e Google Meu Negócio",
      ],
      areasTitle: "Áreas atendidas",
      areas: [
        "Arujá (todos os bairros)",
        "Santa Isabel",
        "Itaquaquecetuba",
        "Guarulhos",
        "Mogi das Cruzes",
        "Suzano",
        "Poá",
        "Grande São Paulo (remoto)",
      ],
    },
    form: {
      kicker: "Vamos conversar",
      title: "Conte sua dor. Vamos desenhar uma solução digital sob medida.",
      sub: "Preencha o formulário abaixo com detalhes do seu projeto e recebemos sua mensagem direto no WhatsApp. Respondemos em horário comercial, de Arujá para todo o Brasil, geralmente em poucas horas.",
      name: "Seu nome",
      company: "Nome da empresa",
      email: "E-mail",
      phone: "WhatsApp (com DDD)",
      message: "Descreva sua necessidade",
      messagePh: "Conte o que você precisa: site novo, redesign, blog, landing page, web app, SEO local em Arujá...",
      consent: "Li e concordo com a Política de Privacidade da Gianini Web (LGPD).",
      submit: "Enviar pelo WhatsApp",
      success: "Abrindo o WhatsApp...",
      required: "Campo obrigatório",
      invalidEmail: "E-mail inválido",
      invalidPhone: "Telefone inválido",
      mustAccept: "É necessário aceitar a política de privacidade",
    },
    footer: {
      tagline: "Agência de desenvolvimento web em Arujá, SP. Sites institucionais, blogs, landing pages e web apps sob medida para empresas do Alto Tietê e de todo o Brasil.",
      address: "Rua Jacarandás, 645 — Arujá, SP, Brasil",
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
    },
    privacy: {
      title: "Política de Privacidade",
      updated: "Última atualização: 23 de junho de 2026",
      back: "Voltar ao início",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      why: "Why us",
      local: "Arujá",
      contact: "Contact",
      privacy: "Privacy",
    },
    hero: {
      eyebrow: "Gianini Web · Web agency in Arujá, Brazil since 2024",
      title: "Web design and digital identity in Arujá",
      sub: "We are a web development agency based in Arujá — SP, Brazil, specialized in custom institutional websites, blogs, landing pages and web apps for local businesses, shops, schools, clinics and independent professionals. We combine unique design, real performance and technical SEO focused on the local audience to strengthen your business's visibility on Google when people search for your services in Arujá, Santa Isabel, Itaquaquecetuba, Guarulhos and Mogi das Cruzes.",
      ctaPrimary: "Talk to a specialist in Arujá",
      ctaSecondary: "See selected work",
    },
    ceo: {
      kicker: "Who's behind it",
      title: "Meet Gabriel Gianini, founder of Gianini Web in Arujá",
      body: "Gabriel Gianini is a software developer with a degree in Systems Analysis and Development from Universidade Eniac. Born and raised in Arujá, SP, he founded Gianini Web in 2024 with one clear purpose: to bring the region's businesses the most current standards in web development, without depending on large out-of-town agencies and without compromising on technical quality. Every project is designed from scratch, with custom code and a strong focus on performance, SEO and user experience — from the first draft to launch, the client talks directly to the developer. That closeness is what allows us to ship websites and systems that reflect the brand and consolidate its digital presence.",
    },
    projects: {
      kicker: "Selected work",
      title: "Brands from Arujá and the region that trusted Gianini Web",
      sub: "A selection of websites, institutional portals and pages we've built for businesses, institutions and cultural projects in Arujá and nearby cities. Click any project to visit it.",
    },
    why: {
      kicker: "Why Gianini Web",
      title: "More than a website. A digital strategy built for Arujá.",
      sub: "Every project is engineered to build local authority, strengthen your brand's digital identity and make it easier for the right local audience to find you — with strong local SEO, fast load times, accessibility and a visual identity that stands out from the competition in Arujá and the wider Alto Tietê area.",
      items: [
        { t: "Custom design", d: "A unique visual identity, crafted from scratch for your Arujá-based business — never generic templates." },
        { t: "Local & technical SEO", d: "Semantic structure, structured data, metadata and content optimized for 'in Arujá', 'near me' searches and Google Business Profile." },
        { t: "Digital authority", d: "Content and architecture that reinforce your brand's credibility in your industry across Alto Tietê." },
        { t: "Real performance", d: "Green Core Web Vitals, fast loading over mobile 4G and smooth UX on any device." },
        { t: "Consolidated presence", d: "Website, blog, WhatsApp, Instagram and Google Business Profile connected under one brand narrative." },
        { t: "Close local support", d: "Talk directly to the developer, in person in the Arujá region or over WhatsApp. No bureaucracy, no middlemen." },
      ],
    },
    local: {
      kicker: "Serving Arujá and the region",
      title: "Web development in Arujá, SP — Brazil",
      p1: "Gianini Web was born in Arujá with a clear mission: bring local businesses the same technical quality found in the best São Paulo capital agencies. We serve clients across the whole city — Centro, Jardim Rincão, Arujamérica, Arujazinho, Vila Flórida, Jordanópolis, Chácaras Arujá and all other neighborhoods — as well as neighboring cities: Santa Isabel, Itaquaquecetuba, Guarulhos, Mogi das Cruzes, Suzano and Poá.",
      p2: "If you run a shop, clinic, office, school, restaurant, real estate, industry or offer independent services in Arujá, a professional website is your first step to build credibility, become easier to find on Google and consolidate your digital presence. We handle everything: domain registration, hosting, professional email, WhatsApp / Instagram / Google Business Profile integration and content creation tuned to the searches happening in your city.",
      servicesTitle: "What we do",
      services: [
        "Institutional website design in Arujá",
        "Landing pages for local campaigns (Google Ads, Meta Ads)",
        "SEO-optimized blogs",
        "Custom web apps and internal systems",
        "Redesigns and migrations of legacy websites",
        "Performance and Core Web Vitals tuning",
        "Local SEO — Arujá, Alto Tietê and Greater São Paulo",
        "WhatsApp, Instagram and Google Business Profile integration",
      ],
      areasTitle: "Service areas",
      areas: [
        "Arujá (every neighborhood)",
        "Santa Isabel",
        "Itaquaquecetuba",
        "Guarulhos",
        "Mogi das Cruzes",
        "Suzano",
        "Poá",
        "Greater São Paulo (remote)",
      ],
    },
    form: {
      kicker: "Let's talk",
      title: "Tell us the pain. We'll design a tailored digital solution.",
      sub: "Fill out the form below with details about your project and your message goes straight to our WhatsApp. We reply during business hours, from Arujá to the whole country, usually within a few hours.",
      name: "Your name",
      company: "Company name",
      email: "Email",
      phone: "WhatsApp (with country/area code)",
      message: "Describe your need",
      messagePh: "Tell us what you need: new site, redesign, blog, landing page, web app, local SEO in Arujá...",
      consent: "I have read and accept Gianini Web's Privacy Policy (LGPD).",
      submit: "Send via WhatsApp",
      success: "Opening WhatsApp...",
      required: "Required field",
      invalidEmail: "Invalid email",
      invalidPhone: "Invalid phone",
      mustAccept: "You must accept the privacy policy",
    },
    footer: {
      tagline: "Web development agency based in Arujá, SP — Brazil. Custom institutional websites, blogs, landing pages and web apps for businesses across Alto Tietê and beyond.",
      address: "Rua Jacarandás, 645 — Arujá, SP, Brazil",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: June 23, 2026",
      back: "Back to home",
    },
  },
};

type Dict = typeof dict.pt;

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "pt",
  setLang: () => {},
  t: dict.pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    // Sempre começa em português; mudanças do usuário só valem para a sessão atual.
    setLangState("pt");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
  };

  return <I18nContext.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
