import { expect, Page } from "@playwright/test";
const tableHeader = 'thead > tr > th'
const clientNameRow = 'tr > td > strong'
const projectNameCell = 'tr > td.cdk-column-name'
const title = 'h3'
const searchBar='div > input'
const searchButton ="button[id='searchIcon']"
const dropDownProject = 'select[id="clientStatus"]'

export class ClientPage {

    constructor(public page:Page){}

    public async selectProjectStatusFilter(status:string){
        await this.page.selectOption(dropDownProject, status, {timeout: 10000});
        await this.page.waitForTimeout(3000)

    }

    public async validateSearchElements(){
        await this.validateSearchBar();
        await this.validateSearchButton();
    }

    public async inputSearch(searchText:string){
        await this.page.locator(searchBar).fill(searchText);
        await this.clickOnSearchButton();
    }

    public async clickOnSearchButton(){
        await this.page.locator(searchButton).click();
    }

    public async validateSearchButton(){
        await expect(this.page.locator(searchButton)).toBeVisible();
    }

    public async validateSearchBar(){
        await expect(this.page.locator(searchBar)).toBeVisible();
        await expect(this.page.locator(searchBar)).toHaveAttribute('placeholder',"Search");
    }

    public async validateTitle(){
        await expect(this.page.locator(title)).toBeVisible();
        await expect(this.page.locator(title)).toContainText(/Client/i);
    }

    public async validateTableHeaders(){
        await expect(this.page.locator(tableHeader)).toContainText(['Project Name', 'Project Manager', 'Engagement Manager', 'Account Executive','Action']);
    }

    public async clickOnExpandCollapseClient(clientName:string){
        await expect(this.page.locator(clientNameRow).filter({hasText: clientName})).toBeVisible();
        await this.page.locator(`//tr /td/strong[contains(text(), '${clientName}')]/..//fa-icon[contains(@class, 'ng-fa-icon') and contains(@class, 'ng-star-inserted')]`).click()
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

}
