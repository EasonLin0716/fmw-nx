import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [svelte()],
  server: {
    port: 4200,
    host: 'localhost',
  },
  build: {
    outDir: '../../dist/apps/dictionary-web-app',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
