import { test as setup, expect } from '@playwright/test';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page, context}) => {
  // Perform authentication steps. Replace these actions with your own.
  const popupPromise = page.waitForEvent('popup');
  await page.goto('https://lively-sky-0d0a5c510.3.azurestaticapps.net/clients');
  await page.getByText('Please Log In').click()
  const popup = await popupPromise;
  await popup.waitForLoadState();
  // await newPage.waitForLoadState();
  await popup.getByText('Sign in').click();
  await popup.locator('#i0116').fill('amacias@apexsystems.com');
  await popup.locator('input[data-report-value="Submit"]').click();


  await popup.locator('input[id="input28"]').press('Shift+A')
  await popup.locator('input[id="input28"]').fill('amacias');
  await popup.locator('input[id="input36"]').fill('Ap3xSystems8!');
  await popup.locator('input[type="submit"]').click();

  await popup.locator('div[data-se="okta_verify-push"] > a').click();
  
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  try {
    await popup.locator('input[id="idSIButton9"]').click();
    await popup.waitForTimeout(60000); // Waits for 60 seconds
} catch (error) {
    console.log('Wait condition not met within 60 seconds, but continuing test...');
}
  // await page.waitForURL('https://lively-sky-0d0a5c510.3.azurestaticapps.net');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  
  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});