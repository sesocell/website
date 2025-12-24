import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({ extensions: [".svelte"] })],
  // To deploy to GitHub Pages, configure 'site' and 'base':
   site: 'https://sesocell.github.io',
   base: '/website',
});
