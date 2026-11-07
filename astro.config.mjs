// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Existing production domain; the apex redirects to www.
  site: 'https://www.diogoabregu.tech',
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0 // Prevent inlining that might break View Transitions
    }
  },

  integrations: [react(), sitemap()],
  
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
