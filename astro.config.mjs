// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0 // Prevent inlining that might break View Transitions
    }
  },

  integrations: [react()],
  
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});