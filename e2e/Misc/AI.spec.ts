import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('zerostep example', async ({ page }) => {
//   await page.goto('https://zerostep.com/')
  await page.goto('https://google.com/')
  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
//   const headerText = await ai('Get the header text', aiArgs)
  
  await ai(`Click on Acceder button`, aiArgs)
  await ai('Press enter', aiArgs)
})