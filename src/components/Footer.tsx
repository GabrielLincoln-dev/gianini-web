import { Link } from "@tanstack/react-router";
import { MessageCircle, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
import { useI18n } from "@/i18n";
import gwLogo from "@/assets/gw-logo.asset.json";

const WHATSAPP = "5511965636396";
const INSTAGRAM = "https://www.instagram.com/gianini_web";

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={gwLogo.url} alt="" width={40} height={40} className="rounded-lg" />
            <span className="font-display font-bold text-lg">
              Gianini<span className="text-gradient">Web</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t.footer.tagline}</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="size-4 mt-0.5 shrink-0" />
            <span>{t.footer.address}</span>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-10 rounded-full border border-border hover:border-primary/60 hover:text-primary flex items-center justify-center transition-colors"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="size-10 rounded-full border border-border hover:border-primary/60 hover:text-primary flex items-center justify-center transition-colors"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <Link to={lang === "pt" ? "/privacidade" : "/privacy"} className="text-muted-foreground hover:text-foreground">
            {t.footer.privacy}
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Gianini Web. {t.footer.rights}</span>
          <span>CNPJ • Arujá, SP — Brasil</span>
        </div>
      </div>
    </footer>
  );
}
