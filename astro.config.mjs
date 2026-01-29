import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://saimese.github.io',
  base: 'saimese-cybersecurity-network',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  build: {
    assets: '_astro'
  }
});
