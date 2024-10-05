import { expect, Page } from "@playwright/test";
const tableHeader = 'thead > tr > th'
const clientNameRow = 'tr > td > strong'
const projectNameCell = 'tr > td.cdk-column-name'

export class ProjectPage {

    constructor(public page:Page){}


    public async validateTableHeaders(){
        await expect(this.page.locator(tableHeader)).toContainText(['Project Name', 'Project Type', 'Risk Level', 'Project Status','Last Iteration End Date', 'Metrics']);
    }

    public async clickOnExpandCollapseClient(clientName:string){
        await expect(this.page.locator(clientNameRow).filter({hasText: clientName})).toBeVisible();
        await this.page.locator(`//tr/td/strong[contains(text(), '${clientName}')]/../fa-icon`).click()
        await this.page.waitForLoadState('networkidle');
    }

    public async validateProyectName(isVisible:string, projectName:string){
        if (isVisible=='not Visble') {
            await expect(this.page.locator(projectNameCell).filter({hasText: projectName})).not.toBeVisible();
        } else {
            await expect(this.page.locator(projectNameCell).filter({hasText: projectName})).toBeVisible();
        }
    }

    public async validateProyectDetails(isVisible:string, project:any){
        await this.validateTableHeaders();
        if (isVisible=='Visible') {
            await expect(this.page.locator(projectNameCell).filter({hasText: project.Name}).locator("..")).toContainText(project.Name);
            await expect(this.page.locator(projectNameCell).filter({hasText: project.Name}).locator("..")).toContainText(project.ProjectManager);
            await expect(this.page.locator(projectNameCell).filter({hasText: project.Name}).locator("..")).toContainText(project.EngagementManager);
            await expect(this.page.locator(projectNameCell).filter({hasText: project.Name}).locator("..")).toContainText(project.AccountExecutive);
        } else {
            await expect(this.page.locator(projectNameCell).filter({hasText: project})).toBeVisible();
        }
    }

    public async clickOnMetrics(clickOnMetrics:string){
        await this.page.locator(`//tr/td/a[contains(text(), '${clickOnMetrics}')]/../../td/fa-icon`).click()
    }

}