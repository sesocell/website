import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({ extensions: [".svelte"] })],
  // To deploy to GitHub Pages, configure 'site' and 'base':
  // site: 'https://YOUR_USERNAME.github.io',
  // base: '/YOUR_REPO_NAME',
});
