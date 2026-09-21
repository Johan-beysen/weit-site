// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Vereist voor @astrojs/sitemap (absolute URL's) en voor canonical/OG-URL's.
  site: 'https://weit.be',
  build: {
    inlineStylesheets: 'never',
  },
  // Voorkomt dat de adapter een Cloudflare KV SESSION binding aanmaakt die we niet gebruiken
  // (auth loopt via Supabase SSR cookies, niet via Astro.session)
  session: {
    driver: 'cookie',
  },
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  adapter: cloudflare(),
  integrations: [
    sitemap({
      // Klantportaal is niet publiek/indexeerbaar - hoort niet in de sitemap.
      // Privacyverklaring/algemene voorwaarden staan nog op "concept" (zie
      // PUBLICATIECHECKLIST.md) - uitsluiten tot de placeholders zijn ingevuld
      // en de status naar "actief" gaat, dan deze twee regels verwijderen.
      filter: (page) =>
        !page.includes('/portal/') &&
        !page.includes('/privacyverklaring') &&
        !page.includes('/algemene-voorwaarden'),
      i18n: {
        defaultLocale: 'nl',
        locales: {
          nl: 'nl-BE',
          en: 'en',
        },
      },
    }),
  ],
});