import { expect, Page } from "@playwright/test";
const clientName = 'label[for="customerId"]'
const editProjectName = "input[id='name']"
const editProjectManager = "input[id='manager']"
const editProjectEngagementManager = "input[id='engagementManager']"
const editProjectaccountExecutive = "input[id='accountExecutive']"
const editProjectDescription = "textarea[id='description']"
const editProjectType = "select[id='projectType']"
const editProjectTeamSize = "input[id='teamSize']"
const editProjectEndDate = "input[id='endDate']"
const editProjectTechStack = "input[id='technologies']"

export class EditClientPage {

    constructor(public page:Page){}

    public async validateInputFieldsValues(project:any){
        await expect(this.page.locator(clientName).locator('../label')).toContainText('Client');
        await expect(this.page.locator(editProjectName).locator('../label')).toContainText('Project Name');
        await expect(this.page.locator(editProjectManager).locator('../label')).toContainText('Point of Contact');
        await expect(this.page.locator(editProjectEngagementManager).locator('../label')).toContainText('Engagement Manager');
        await expect(this.page.locator(editProjectaccountExecutive).locator('../label')).toContainText('Account Executive');

        await expect(this.page.locator(editProjectName)).toHaveValue(project.Name);
        await expect(this.page.locator(editProjectName)).toHaveValue(project.Name);
        await expect(this.page.locator(editProjectManager)).toHaveValue(project.ProjectManager);
        await expect(this.page.locator(editProjectEngagementManager)).toHaveValue(project.EngagementManager);
        await expect(this.page.locator(editProjectaccountExecutive)).toHaveValue(project.AccountExecutive);
    }

    public async clickOnSaveButton() {
        await this.page.locator('button:has-text(" Save ")').click();
        await this.page.waitForTimeout(2000); // Wait for the next page to load
    }

    public async validateInputFieldsValues2(project:any) {
        
        await expect(this.page.locator(editProjectName).locator('../label >> nth=1')).toContainText('Project Name');
        await expect(this.page.locator(editProjectDescription).locator('../label')).toContainText('Description');
        await expect(this.page.locator(editProjectType).locator('../label')).toContainText('Project Type');
        await expect(this.page.locator(editProjectTeamSize).locator('../label')).toContainText('Team Size');
        await expect(this.page.locator(editProjectEndDate).locator('../../label')).toContainText('Project End Date');
        await expect(this.page.locator(editProjectTechStack).locator('../label')).toContainText('Tech Stack');

        await expect(this.page.locator(editProjectName).nth(0)).toHaveValue(project.Name);
        await expect(this.page.locator(editProjectDescription)).toHaveValue(project.Description);
        await expect(this.page.locator(`${editProjectType} >> option:checked`)).toHaveText(project.ProjectType);
        await expect(this.page.locator(editProjectTeamSize)).toHaveValue(project.TeamSize);
        await expect(this.page.locator(editProjectEndDate)).toHaveValue(project.EndDate);
        await expect(this.page.locator(editProjectTechStack)).toHaveValue(project.TechStack);

    }

    public async clickOnNextButton() {
        await this.page.locator('button:has-text(" Next ")').click();
        await this.page.waitForTimeout(2000); // Wait for the next page to load
    }

    async validateSuccessMessage(expectedMessage: string) {
        const successMessageLocator = this.page.locator('div[role="alert"]');
        await successMessageLocator.waitFor({ state: 'visible' });
        const actualMessage = await successMessageLocator.textContent();
        if (actualMessage?.trim() !== expectedMessage) {
            throw new Error(`Expected success message "${expectedMessage}", but got "${actualMessage}"`);
        }
    }

}
