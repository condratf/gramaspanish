import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://gramaspanish.com',
  output: 'server',
  integrations: [react(), db()],
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "ru"],
    fallback: {
      ru: "en",
      es: "en"
    }
  },
  vite: {
    resolve: {
      alias: {
        'src': '/src'
      }
    }
  }
});