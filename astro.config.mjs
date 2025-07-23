import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    tailwind(),
  ],
  site: "https://ojoanalogo.github.io",
  base: "/terminus-astro-template",
  compressHTML: true,
});
