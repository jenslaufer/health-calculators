import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'npm run dev',
    port: 5179,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:5179',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
})
