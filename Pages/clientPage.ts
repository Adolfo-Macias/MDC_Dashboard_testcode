import { expect, Page } from "@playwright/test";

export class clientPage {
    static async validateButtonExist(page: Page, text: string, selector:string) {
        await page.waitForSelector(selector);
        
        const isVisible = await page.isVisible(selector);
        expect(isVisible).toBe(true);

        const textContent = await page.textContent(selector)
        expect(textContent).toBe(text)
    }

    static async func2() {

    }
}