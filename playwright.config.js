import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:5179/health-calculators/',
  },
  webServer: {
    command: 'npx vite --port 5179',
    url: 'http://localhost:5179/health-calculators/',
    reuseExistingServer: false,
  },
})
