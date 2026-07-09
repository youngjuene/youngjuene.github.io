// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User/organization GitHub Pages site — served from the domain root,
// so `base` stays at the default "/".
export default defineConfig({
  site: 'https://youngjuene.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
