import { expect, Page } from "@playwright/test";
const tableHeader = 'thead > tr > th'
const tabIterationRisks = 'div[class =mat-mdc-tab-links] > a'

export class MetricsPage {

    constructor(public page:Page){}


    public async validateTableHeaders(){
        await expect(this.page.locator(tableHeader)).toContainText(['Selection', 'Iteration', 'Days of Iteration Duration', 'Average Velocity', '% of Completion', 'Status']);
    }

    public async validateTabExist(Exist:string, tabText:string){
        if (Exist=='not Exist') {
            await expect(this.page.locator(tabIterationRisks).filter({hasText: tabText})).toHaveCount(0);
        } else {
            await expect(this.page.locator(tabIterationRisks).filter({hasText: tabText})).toBeVisible();
            await expect(this.page.locator(tabIterationRisks).filter({hasText: tabText})).toHaveText(tabText)
        } 
    }

}