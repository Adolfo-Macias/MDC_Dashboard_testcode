import { expect, Page } from "@playwright/test";
const clientName = 'label[for="customerId"]'
const editProjectName = "input[id='name']"
const editProjectManager = "input[id='manager']"
const editProjectEngagementManager = "input[id='engagementManager']"
const editProjectaccountExecutive = "input[id='accountExecutive']"


export class EditClientPage {

    constructor(public page:Page){}

    public async validateInputFieldsValues(project:any){
        await expect(this.page.locator(clientName).locator('../label')).toContainText('Client');
        await expect(this.page.locator(editProjectName).locator('../label')).toContainText('Project Name');
        await expect(this.page.locator(editProjectManager).locator('../label')).toContainText('Project Manager');
        await expect(this.page.locator(editProjectEngagementManager).locator('../label')).toContainText('Engagement Manager');
        await expect(this.page.locator(editProjectaccountExecutive).locator('../label')).toContainText('Account Executive');

        await expect(this.page.locator(editProjectName)).toContainText(project.Name);
        // await expect(this.page.locator(editProjectName)).toContainText(project.Name);
        // await expect(this.page.locator(editProjectManager)).toContainText(project.ProjectManager);
        // await expect(this.page.locator(editProjectEngagementManager)).toContainText(project.EngagementManager);
        // await expect(this.page.locator(editProjectaccountExecutive)).toContainText(project.AccountExecutive);
    }

}
