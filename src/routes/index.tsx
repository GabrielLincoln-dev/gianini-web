import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CeoSection } from "@/components/CeoSection";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gianini Web — Sites, blogs e web apps sob medida" },
      { name: "description", content: "Desenvolvimento de sites, blogs, landing pages e web apps com design, performance e SEO. Fundada por Gabriel Gianini em Arujá, SP." },
      { property: "og:title", content: "Gianini Web — Sites que convertem" },
      { property: "og:description", content: "Sites institucionais, blogs, landing pages e web apps sob medida." },
      { property: "og:type", content: "website" },
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
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
