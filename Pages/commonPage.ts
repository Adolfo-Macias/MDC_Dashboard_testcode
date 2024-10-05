import { chromium } from 'playwright';

export class CommonElements {

    static async loadContext(baseURL) {
        const fs = require('fs');
        const storageState = JSON.parse(fs.readFileSync('.auth/user.json', 'utf8'));
        const browser = await chromium.launch();
        const context = await browser.newContext({ storageState });
        const page = await context.newPage();
        await page.goto(`${baseURL}dashboards/projects`)
        await page.getByText('Please Log In').click()
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(5000)
        return page;
    }
}