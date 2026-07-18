import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import gwLogo from "@/assets/gw-logo.asset.json";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/90 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            {t.hero.title}
            <br />
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-primary-foreground shadow-[0_10px_40px_-10px_rgba(30,144,255,0.6)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gw-gradient)" }}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium border border-border hover:border-primary/60 hover:text-primary transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-10 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(30,144,255,0.45), transparent 70%)" }}
            />
            <motion.img
              src={gwLogo.url}
              alt="Gianini Web"
              width={420}
              height={420}
              className="relative rounded-3xl border border-border shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
