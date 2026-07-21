// @lovable.dev/vite-tanstack-config already includes: tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, componentTagger (dev-only), VITE_* env injection, aliases, dedupe,
// error loggers, and sandbox detection.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // src/server.ts wraps the SSR entry with our error page
    server: { entry: "server" },
  },
  // Deploy target: Netlify (SSR via Netlify Functions).
  // Override the sandbox default (cloudflare-module) so `vite build` emits a
  // Netlify-ready output under `.netlify/`.
  nitro: {
    preset: "netlify",
  },
});
