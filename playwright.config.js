import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'npx vite --port 5179',
    port: 5179,
    reuseExistingServer: false,
  },
  use: {
    baseURL: 'http://localhost:5179',
  },
})
