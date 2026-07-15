import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/i18n";
import gwLogo from "@/assets/gw-logo.asset.json";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#why", label: t.nav.why },
    { href: "#local", label: t.nav.local },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Gianini Web">
          <img src={gwLogo.url} alt="" width={36} height={36} className="rounded-lg" />
          <span className="font-display font-bold tracking-tight text-lg">
            Gianini<span className="text-gradient">Web</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Link to={lang === "pt" ? "/privacidade" : "/privacy"} className="text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.privacy}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="size-3.5" />
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-muted-foreground">
                {l.label}
              </a>
            ))}
            <Link to={lang === "pt" ? "/privacidade" : "/privacy"} onClick={() => setOpen(false)} className="py-1 text-muted-foreground">
              {t.nav.privacy}
            </Link>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="self-start mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border"
            >
              <Globe className="size-3.5" />
              {lang === "pt" ? "Switch to EN" : "Mudar para PT"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
