import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: { default: 'npx nx serve product-feedback-app' },
      ciWebServerCommand: 'nx run product-feedback-app:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
