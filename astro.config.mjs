import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sergiocampbell.github.io",
  root: ".",
  integrations: [react()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"]
  },
  routing: {
    prefixDefaultLocale: false
  }
});