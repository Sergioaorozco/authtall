// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import auth from 'auth-astro';
import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [auth(), db()],
  adapter: netlify()
});