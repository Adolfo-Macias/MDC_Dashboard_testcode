import { Page } from 'playwright';
import { chromium } from 'playwright';



export class utils {
    // Función genérica para esperar 10 segundos
    static async waitForSeconds(page: Page, seconds: number) {
        try {
            await page.waitForTimeout( seconds * 1000); 
        } catch (error) {
            console.log(`Wait for ${seconds} seconds`);
        }
    }

    static async loadContext() {
        const fs = require('fs');
        const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
        const browser = await chromium.launch();
        const context = await browser.newContext({ storageState });
        const page = await context.newPage();
        await page.goto('https://pmo-dashboard-itg.azurewebsites.net/dashboards/projects');
        await page.getByText('Please Log In').click()
        return page;
       }

}