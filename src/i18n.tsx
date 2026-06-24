import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const dict = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      why: "Por que nós",
      contact: "Contato",
      privacy: "Privacidade",
    },
    hero: {
      eyebrow: "Gianini Web · Desde 2024",
      title: "Sites que convertem.",
      titleAccent: "Presença que constrói autoridade.",
      sub: "Desenvolvemos sites institucionais, blogs, landing pages e web apps sob medida — com design, performance e SEO de verdade.",
      ctaPrimary: "Fale conosco",
      ctaSecondary: "Ver projetos",
    },
    ceo: {
      kicker: "Quem está por trás",
      title: "Conheça Gabriel Gianini",
      body: "Fundador da Gianini Web em 2024, Gabriel é desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas pela Universidade Eniac. Une visão técnica, atenção aos detalhes e foco no resultado do cliente para entregar produtos digitais que realmente performam.",
    },
    projects: {
      kicker: "Projetos realizados",
      title: "Marcas que já confiaram em nós",
      sub: "Clique em um projeto para visitá-lo.",
    },
    why: {
      kicker: "Por que Gianini Web",
      title: "Mais que um site. Uma estratégia digital.",
      sub: "Cada projeto é pensado para gerar autoridade, atrair o público certo e converter visitantes em clientes.",
      items: [
        { t: "Design sob medida", d: "Identidade visual única, alinhada à sua marca — sem templates genéricos." },
        { t: "SEO técnico", d: "Estrutura semântica, performance e metadados otimizados para o Google." },
        { t: "Autoridade digital", d: "Conteúdo e arquitetura que posicionam sua marca como referência no setor." },
        { t: "Performance real", d: "Core Web Vitals no verde, carregamento rápido e experiência fluida." },
        { t: "Presença consolidada", d: "Site, blog e canais conectados em uma única narrativa de marca." },
        { t: "Suporte próximo", d: "Atendimento direto com quem desenvolve. Sem burocracia." },
      ],
    },
    form: {
      kicker: "Vamos conversar",
      title: "Conte sua dor. Devolvemos uma solução.",
      sub: "Preencha o formulário e receberemos sua mensagem direto no WhatsApp.",
      name: "Seu nome",
      company: "Nome da empresa",
      email: "E-mail",
      phone: "WhatsApp (com DDD)",
      message: "Descreva sua necessidade",
      messagePh: "Conte o que você precisa: site novo, redesign, blog, landing page, web app...",
      consent: "Li e concordo com a Política de Privacidade da Gianini Web (LGPD).",
      submit: "Enviar pelo WhatsApp",
      success: "Abrindo o WhatsApp...",
      required: "Campo obrigatório",
      invalidEmail: "E-mail inválido",
      invalidPhone: "Telefone inválido",
      mustAccept: "É necessário aceitar a política de privacidade",
    },
    footer: {
      tagline: "Sites, blogs, landing pages e web apps sob medida.",
      address: "Rua Jacarandás, 645 — Arujá, SP",
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
      contact: "Contact",
      privacy: "Privacy",
    },
    hero: {
      eyebrow: "Gianini Web · Since 2024",
      title: "Websites that convert.",
      titleAccent: "Presence that builds authority.",
      sub: "We craft custom websites, blogs, landing pages and web apps — with real design, performance and SEO.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See projects",
    },
    ceo: {
      kicker: "Who's behind it",
      title: "Meet Gabriel Gianini",
      body: "Founder of Gianini Web in 2024, Gabriel is a software developer with a degree in Systems Analysis and Development from Universidade Eniac. He combines technical vision, attention to detail and client-focused execution to ship digital products that actually perform.",
    },
    projects: {
      kicker: "Selected work",
      title: "Brands that already trusted us",
      sub: "Click a project to visit it.",
    },
    why: {
      kicker: "Why Gianini Web",
      title: "More than a website. A digital strategy.",
      sub: "Every project is designed to build authority, attract the right audience and convert visitors into clients.",
      items: [
        { t: "Custom design", d: "Unique visual identity aligned to your brand — never generic templates." },
        { t: "Technical SEO", d: "Semantic structure, performance and optimized metadata for Google." },
        { t: "Digital authority", d: "Content and architecture that position your brand as a reference." },
        { t: "Real performance", d: "Green Core Web Vitals, fast load times and smooth UX." },
        { t: "Consolidated presence", d: "Website, blog and channels connected under one brand narrative." },
        { t: "Close support", d: "Talk directly to the developer. No bureaucracy." },
      ],
    },
    form: {
      kicker: "Let's talk",
      title: "Tell us the pain. We'll bring the solution.",
      sub: "Fill out the form and we'll receive your message straight on WhatsApp.",
      name: "Your name",
      company: "Company name",
      email: "Email",
      phone: "WhatsApp (with country/area code)",
      message: "Describe your need",
      messagePh: "Tell us what you need: new site, redesign, blog, landing page, web app...",
      consent: "I have read and accept Gianini Web's Privacy Policy (LGPD).",
      submit: "Send via WhatsApp",
      success: "Opening WhatsApp...",
      required: "Required field",
      invalidEmail: "Invalid email",
      invalidPhone: "Invalid phone",
      mustAccept: "You must accept the privacy policy",
    },
    footer: {
      tagline: "Custom websites, blogs, landing pages and web apps.",
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
} as const;

type Dict = typeof dict.pt;

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "pt",
  setLang: () => {},
  t: dict.pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("gw-lang") as Lang | null) : null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("gw-lang", l);
  };

  return <I18nContext.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
