import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { useI18n } from "@/i18n";
import { useState } from "react";

const WHATSAPP = "5511965636396";

export function LeadForm() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, t.form.required).max(100),
    company: z.string().trim().min(1, t.form.required).max(120),
    email: z.string().trim().email(t.form.invalidEmail).max(200),
    phone: z.string().trim().min(8, t.form.invalidPhone).max(30),
    message: z.string().trim().min(10, t.form.required).max(2000),
    consent: z.literal(true, { errorMap: () => ({ message: t.form.mustAccept }) }),
  });

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const lines = [
      `*Novo lead — Gianini Web*`,
      ``,
      `*Nome:* ${data.name}`,
      `*Empresa:* ${data.company}`,
      `*E-mail:* ${data.email}`,
      `*WhatsApp:* ${data.phone}`,
      ``,
      `*Necessidade:*`,
      data.message,
    ];
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60";

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary/90">{t.form.kicker}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">{t.form.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.form.sub}</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 rounded-3xl border border-border bg-surface/60 p-6 md:p-10 grid gap-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="name">{t.form.name}</label>
              <input id="name" {...register("name")} className={`mt-2 ${inputCls}`} autoComplete="name" />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="company">{t.form.company}</label>
              <input id="company" {...register("company")} className={`mt-2 ${inputCls}`} autoComplete="organization" />
              {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="email">{t.form.email}</label>
              <input id="email" type="email" {...register("email")} className={`mt-2 ${inputCls}`} autoComplete="email" />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="phone">{t.form.phone}</label>
              <input id="phone" type="tel" {...register("phone")} className={`mt-2 ${inputCls}`} autoComplete="tel" placeholder="+55 11 99999-9999" />
              {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="message">{t.form.message}</label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder={t.form.messagePh}
              className={`mt-2 ${inputCls} resize-none`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
          </div>

          <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" {...register("consent")} className="mt-1 size-4 accent-[color:var(--primary)]" />
            <span>
              {t.form.consent.split("Política de Privacidade")[0]}
              <Link to={lang === "pt" ? "/privacidade" : "/privacy"} className="text-primary hover:underline">
                {lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
              </Link>
              {t.form.consent.includes("(LGPD)") ? " (LGPD)." : "."}
            </span>
          </label>
          {errors.consent && <p className="-mt-3 text-xs text-red-400">{errors.consent.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-primary-foreground shadow-[0_10px_40px_-10px_rgba(30,144,255,0.6)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "var(--gw-gradient)" }}
          >
            <Send className="size-4" />
            {sent ? t.form.success : t.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
