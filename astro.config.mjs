// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Výchozí hodnoty jsou pro finální web klientky (doména ivglowstudio.cz).
// Náhled na GitHub Pages je přepisuje přes proměnné prostředí v .github/workflows/deploy.yml.
const site = process.env.SITE_URL || 'https://ivglowstudio.cz';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
  build: {
    // generuje /index.html místo /index/ – nejbezpečnější pro klasický webhosting
    format: 'file',
  },
});
