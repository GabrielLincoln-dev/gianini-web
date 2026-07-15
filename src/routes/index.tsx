import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CeoSection } from "@/components/CeoSection";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { LocalSeo } from "@/components/LocalSeo";
import { LeadForm } from "@/components/LeadForm";

const TITLE =
  "Gianini Web — Criação de sites em Arujá, SP | Agência de desenvolvimento web";
const DESCRIPTION =
  "Agência de criação de sites em Arujá, SP. Desenvolvimento de sites institucionais, blogs, landing pages e web apps sob medida para empresas de Arujá e região do Alto Tietê. Design exclusivo, SEO local e performance de verdade. Fundada por Gabriel Gianini.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gianini Web",
  description: DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Gabriel Gianini",
    jobTitle: "Desenvolvedor de Software",
  },
  foundingDate: "2024",
  telephone: "+55 11 96563-6396",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Jacarandás, 645",
    addressLocality: "Arujá",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Arujá" },
    { "@type": "City", name: "Santa Isabel" },
    { "@type": "City", name: "Itaquaquecetuba" },
    { "@type": "City", name: "Guarulhos" },
    { "@type": "City", name: "Mogi das Cruzes" },
    { "@type": "City", name: "Suzano" },
    { "@type": "City", name: "Poá" },
    { "@type": "AdministrativeArea", name: "Alto Tietê" },
    { "@type": "AdministrativeArea", name: "Grande São Paulo" },
  ],
  sameAs: ["https://www.instagram.com/gianini_web"],
  serviceType: [
    "Criação de sites",
    "Desenvolvimento de landing pages",
    "Desenvolvimento de blogs",
    "Desenvolvimento de web apps",
    "SEO local",
    "Redesign de sites",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "criação de sites Arujá, desenvolvimento de sites Arujá, agência de sites Arujá, sites em Arujá SP, landing page Arujá, web app Arujá, SEO Arujá, criação de sites Alto Tietê, agência web Guarulhos, sites Santa Isabel, sites Itaquaquecetuba, sites Mogi das Cruzes",
      },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Arujá" },
      { name: "geo.position", content: "-23.3966;-46.3211" },
      { name: "ICBM", content: "-23.3966, -46.3211" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Gianini Web" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CeoSection />
        <Projects />
        <WhyUs />
        <LocalSeo />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
