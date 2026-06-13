// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never',
  },
  // Voorkomt dat de adapter een Cloudflare KV SESSION binding aanmaakt die we niet gebruiken
  // (auth loopt via Supabase SSR cookies, niet via Astro.session)
  session: {
    driver: 'cookie',
  },
  adapter: cloudflare(),
});