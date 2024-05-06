import { Page } from 'playwright';




export class utils {
    // Función genérica para esperar 10 segundos
    static async waitForSeconds(page: Page, seconds: number) {
        try {
            await page.waitForTimeout( seconds * 1000); 
        } catch (error) {
            console.log(`Wait for ${seconds} seconds`);
        }
    }
}