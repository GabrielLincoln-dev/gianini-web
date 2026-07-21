import { useEffect, useRef, useState } from "react";
import { Accessibility, X, Type, Minus, Plus, Palette, BookOpen, Link2, Underline, MousePointer2, PauseCircle, RotateCcw } from "lucide-react";
import { useI18n } from "@/i18n";

type Filter = "none" | "protanopia" | "deuteranopia" | "tritanopia" | "grayscale" | "high-contrast";

type A11yState = {
  fontScale: number;
  filter: Filter;
  readingMask: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
  pauseAnim: boolean;
  dyslexia: boolean;
  letterSpacing: boolean;
};

const DEFAULT: A11yState = {
  fontScale: 1,
  filter: "none",
  readingMask: false,
  underlineLinks: false,
  bigCursor: false,
  pauseAnim: false,
  dyslexia: false,
  letterSpacing: false,
};

const STORAGE_KEY = "gw-a11y";

export function AccessibilityWidget() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULT);
  const [maskY, setMaskY] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const L = lang === "pt"
    ? {
        title: "Inclusão digital",
        subtitle: "Ajustes de acessibilidade",
        openLabel: "Abrir opções de acessibilidade",
        closeLabel: "Fechar",
        fontSize: "Tamanho da fonte",
        decrease: "Diminuir",
        increase: "Aumentar",
        colors: "Cores e contraste",
        default: "Padrão",
        protanopia: "Protanopia",
        deuteranopia: "Deuteranopia",
        tritanopia: "Tritanopia",
        grayscale: "Escala de cinza",
        highContrast: "Alto contraste",
        tools: "Ferramentas de leitura",
        readingMask: "Máscara de leitura",
        underline: "Sublinhar links",
        bigCursor: "Cursor grande",
        pause: "Pausar animações",
        dyslexia: "Fonte legível",
        spacing: "Espaçamento maior",
        reset: "Restaurar padrões",
      }
    : {
        title: "Digital inclusion",
        subtitle: "Accessibility settings",
        openLabel: "Open accessibility options",
        closeLabel: "Close",
        fontSize: "Font size",
        decrease: "Decrease",
        increase: "Increase",
        colors: "Color & contrast",
        default: "Default",
        protanopia: "Protanopia",
        deuteranopia: "Deuteranopia",
        tritanopia: "Tritanopia",
        grayscale: "Grayscale",
        highContrast: "High contrast",
        tools: "Reading tools",
        readingMask: "Reading mask",
        underline: "Underline links",
        bigCursor: "Big cursor",
        pause: "Pause animations",
        dyslexia: "Readable font",
        spacing: "Larger spacing",
        reset: "Reset defaults",
      };

  // Load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...DEFAULT, ...JSON.parse(raw) });
    } catch {}
  }, []);

  // Apply
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--a11y-font-scale", String(state.fontScale));
    root.dataset.a11yFilter = state.filter;
    root.classList.toggle("a11y-underline", state.underlineLinks);
    root.classList.toggle("a11y-big-cursor", state.bigCursor);
    root.classList.toggle("a11y-pause", state.pauseAnim);
    root.classList.toggle("a11y-dyslexia", state.dyslexia);
    root.classList.toggle("a11y-spacing", state.letterSpacing);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  // Reading mask mouse tracking
  useEffect(() => {
    if (!state.readingMask) return;
    const handler = (e: MouseEvent) => setMaskY(e.clientY);
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [state.readingMask]);

  // Close on outside click / escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const update = <K extends keyof A11yState>(k: K, v: A11yState[K]) =>
    setState((s) => ({ ...s, [k]: v }));

  const filters: { id: Filter; label: string }[] = [
    { id: "none", label: L.default },
    { id: "protanopia", label: L.protanopia },
    { id: "deuteranopia", label: L.deuteranopia },
    { id: "tritanopia", label: L.tritanopia },
    { id: "grayscale", label: L.grayscale },
    { id: "high-contrast", label: L.highContrast },
  ];

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={L.openLabel}
        aria-expanded={open}
        className="fixed bottom-5 left-5 z-[60] inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        <Accessibility className="size-6" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={L.title}
          className="fixed bottom-20 left-5 z-[60] w-[320px] max-h-[75vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl p-5"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground">{L.title}</h2>
              <p className="text-xs text-muted-foreground">{L.subtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={L.closeLabel}
              className="p-1 rounded-md hover:bg-surface-2 text-muted-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Font size */}
          <section className="mb-5">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
              <Type className="size-4" /> {L.fontSize}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => update("fontScale", Math.max(0.85, +(state.fontScale - 0.1).toFixed(2)))}
                aria-label={L.decrease}
                className="size-9 rounded-lg border border-border hover:border-primary flex items-center justify-center text-foreground"
              >
                <Minus className="size-4" />
              </button>
              <div className="flex-1 text-center text-sm font-medium text-foreground tabular-nums">
                {Math.round(state.fontScale * 100)}%
              </div>
              <button
                onClick={() => update("fontScale", Math.min(1.6, +(state.fontScale + 0.1).toFixed(2)))}
                aria-label={L.increase}
                className="size-9 rounded-lg border border-border hover:border-primary flex items-center justify-center text-foreground"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </section>

          {/* Colors */}
          <section className="mb-5">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
              <Palette className="size-4" /> {L.colors}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => update("filter", f.id)}
                  className={`text-xs px-2 py-2 rounded-lg border transition-colors ${
                    state.filter === f.id
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section>
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
              <BookOpen className="size-4" /> {L.tools}
            </div>
            <div className="space-y-1.5">
              <Toggle icon={<BookOpen className="size-4" />} label={L.readingMask} checked={state.readingMask} onChange={(v) => update("readingMask", v)} />
              <Toggle icon={<Link2 className="size-4" />} label={L.underline} checked={state.underlineLinks} onChange={(v) => update("underlineLinks", v)} />
              <Toggle icon={<MousePointer2 className="size-4" />} label={L.bigCursor} checked={state.bigCursor} onChange={(v) => update("bigCursor", v)} />
              <Toggle icon={<PauseCircle className="size-4" />} label={L.pause} checked={state.pauseAnim} onChange={(v) => update("pauseAnim", v)} />
              <Toggle icon={<Type className="size-4" />} label={L.dyslexia} checked={state.dyslexia} onChange={(v) => update("dyslexia", v)} />
              <Toggle icon={<Underline className="size-4" />} label={L.spacing} checked={state.letterSpacing} onChange={(v) => update("letterSpacing", v)} />
            </div>
          </section>

          <button
            onClick={() => setState(DEFAULT)}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 text-xs px-3 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary"
          >
            <RotateCcw className="size-3.5" />
            {L.reset}
          </button>
        </div>
      )}

      {state.readingMask && (
        <>
          <div
            aria-hidden
            className="fixed inset-x-0 top-0 bg-black/70 pointer-events-none z-[55]"
            style={{ height: Math.max(0, maskY - 60) }}
          />
          <div
            aria-hidden
            className="fixed inset-x-0 bottom-0 bg-black/70 pointer-events-none z-[55]"
            style={{ top: maskY + 60 }}
          />
        </>
      )}
    </>
  );
}

function Toggle({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-border hover:border-primary/60 transition-colors text-left"
    >
      <span className="flex items-center gap-2 text-sm text-foreground">
        {icon}
        {label}
      </span>
      <span
        className={`relative w-9 h-5 rounded-full transition-colors ${checked ? "bg-primary" : "bg-surface-2"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : ""}`}
        />
      </span>
    </button>
  );
}
