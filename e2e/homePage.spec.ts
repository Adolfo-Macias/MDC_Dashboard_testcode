import { test } from '@playwright/test';
import { chromium } from 'playwright';
import { utils } from '../Pages/common.ts'


test('test', async () => {
  
  // carga el archivo del contexto en una variable
  const fs = require('fs');
  const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
  // Inicia un nuevo navegador
  const browser = await chromium.launch();
  // Crea un nuevo contexto usando el archivo del contexto
  const context = await browser.newContext({ storageState });
 // Abre una nueva página en el contexto cargado
  const page = await context.newPage();
 
  await page.goto('https://pmo-dashboard-itg.azurewebsites.net/dashboards/projects');
  await page.getByText('Please Log In').click()
  await utils.waitForSeconds(page, 10);
  await page.click('span:has-text("Clients")');
  await utils.waitForSeconds(page, 10);


});

