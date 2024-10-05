import { defineConfig, devices } from '@playwright/test';

export const config = {
    user: 'experimental',
    password: 'TNDVxw3Iguzj',
    server: 'apex-experimental-sql.database.windows.net',
    port: 1433,
    database: 'pmo-dashboard-dev',
    options: {
      trustServerCertificate: false,
      encrypt: true,
}};

export default defineConfig({
  
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://pmo-dashboard-itg.azurewebsites.net/',
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
    headless: true,
  },
  

  /* Configure projects for major browsers */
  projects: [
    { name: 'all-test',testMatch: ['**/*.{spec,fixture,setup}.ts']},
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
      
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});


