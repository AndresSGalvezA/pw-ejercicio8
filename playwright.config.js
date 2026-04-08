const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
  webServer: [
    {
      command: 'npm run server',
      url: 'http://localhost:3001/api/health',
      name: 'Backend',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
    {
      command: 'npm run client',
      url: 'http://localhost:3000',
      name: 'Frontend',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
  ],
});