import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { useI18n } from "@/i18n";

export function LocalSeo() {
  const { t } = useI18n();
  return (
    <section id="local" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/90">
            <MapPin className="size-3.5" /> {t.local.kicker}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">{t.local.title}</h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">{t.local.p1}</p>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{t.local.p2}</p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8"
          >
            <h3 className="font-display font-semibold text-xl">{t.local.servicesTitle}</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {t.local.services.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <Check className="size-4 mt-0.5 text-primary shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(30,144,255,0.08), rgba(0,191,255,0.02))" }}
          >
            <h3 className="font-display font-semibold text-xl">{t.local.areasTitle}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {t.local.areas.map((a) => (
                <li
                  key={a}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-foreground/90"
                >
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
