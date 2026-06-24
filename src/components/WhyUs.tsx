import { motion } from "framer-motion";
import { Palette, Search, Trophy, Zap, Globe, Headphones } from "lucide-react";
import { useI18n } from "@/i18n";

const icons = [Palette, Search, Trophy, Zap, Globe, Headphones];

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section id="why" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary/90">{t.why.kicker}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">{t.why.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.why.sub}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-surface/60 p-6 hover:border-primary/40 transition-colors"
              >
                <div
                  className="size-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--gw-gradient)" }}
                >
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
