import { test as setup, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

const authFile = '.auth/user.json';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
setup('authenticate', async ({ page, context}) => {
  // Perform authentication steps. Replace these actions with your own.
  const popupPromise = page.waitForEvent('popup');
  await page.goto('https://pmo-dashboard-itg.azurewebsites.net/dashboards/projects');
  await page.getByText('Please Log In').click()
  const popup = await popupPromise;
  await popup.waitForLoadState();
  // await newPage.waitForLoadState();
  await popup.getByText('Sign in').click();
  await popup.locator('#i0116').fill('amacias@apexsystems.com');
  await popup.locator('input[data-report-value="Submit"]').click();
  await popup.locator('a[class="link js-cancel"]').click();


  await popup.locator('input[type="password"]').click()
   await popup.locator("input[id='input54']").fill('amacias');
  await popup.locator('input[type="password"]').fill('pwd');
  await popup.locator('input[class="button button-primary"]').click();

  await popup.locator('div[data-se="okta_verify-push"] > a').click();
  
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
//   try {
//     await popup.locator('data-se="okta_verify-push').click();

    
    
// } catch (error) {
//     console.log('Wait condition not met within 60 seconds, but continuing test...');
// }
  // await delay(30000);
  // await page.waitForURL('https://pmo-dashboard-itg.azurewebsites.net/dashboards/projects');
  await popup.locator('input[id="idSIButton9"]').click()
  await page.waitForURL('https://pmo-dashboard-itg.azurewebsites.net/login');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  
  // End of authentication steps.
  // await page.waitForTimeout(60000)
  await page.context().storageState({ path: authFile });
});