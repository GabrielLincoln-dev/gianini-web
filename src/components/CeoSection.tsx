import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import ceoImg from "@/assets/gabriel-gianini.asset.json";

export function CeoSection() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-50" style={{ background: "var(--gw-gradient)" }} />
          <div className="relative rounded-3xl p-[2px]" style={{ background: "var(--gw-gradient)" }}>
            <img
              src={ceoImg.url}
              alt="Gabriel Gianini, fundador da Gianini Web"
              width={768}
              height={960}
              loading="lazy"
              className="rounded-[calc(1.5rem-2px)] w-full object-cover aspect-[4/5]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary/90">{t.ceo.kicker}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            {t.ceo.title}
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">{t.ceo.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
