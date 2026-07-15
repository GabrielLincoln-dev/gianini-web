import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n";
import cs from "@/assets/cs-innovation.asset.json";
import orquestra from "@/assets/orquestra.asset.json";
import hipercubo from "@/assets/hipercubo.asset.json";
import raioSol from "@/assets/ong-raio-sol.asset.json";

const projects = [
  { name: "CS Innovation", url: "https://cs-innovation-six.vercel.app", logo: cs.url, bg: "bg-[#5b1a7a]" },
  { name: "Orquestra Sinfônica de Arujá", url: "https://orquestrasinfonicaaruja.netlify.app/", logo: orquestra.url, bg: "bg-white" },
  { name: "Colégio Hipercubo", url: "https://colegiohipercubo.com.br", logo: hipercubo.url, bg: "bg-white" },
  { name: "ONG Raio de Sol", url: "https://institutionalongrsaruja.netlify.app/", logo: raioSol.url, bg: "bg-white" },
];

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary/90">{t.projects.kicker}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">{t.projects.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.projects.sub}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative block rounded-2xl border border-border bg-surface overflow-hidden hover:-translate-y-1 hover:border-primary/60 transition-all"
            >
              <div className={`aspect-square ${p.bg} flex items-center justify-center p-8`}>
                <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <div className="p-4 flex items-center justify-between gap-2 border-t border-border">
                <span className="font-medium text-sm">{p.name}</span>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
