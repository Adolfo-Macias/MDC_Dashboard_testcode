import { Page,expect } from "@playwright/test"

const clientButtonSelector = 'a[routerlink="/clients"]>span[class="nav-label"]'
const projectButtonSelector = 'a[routerlink="/dashboards/projects"]>span[class="nav-label"]'
const apexLogo = 'mat-toolbar > img'
const mdcTitle = 'mat-toolbar > h1'
const logoutButton = 'mat-toolbar > button'
const tabProjectClient = 'ul > li > a > span'


export class HeaderPage {

    constructor(public page:Page){}

    public async validateHeader(){
        await this.validateApexLogo();
        await this.validateDashboarTitle();
        await this.validateLogoutButton();
    }

    public async validateApexLogo(){
        await expect(this.page.locator(apexLogo)).toBeVisible();
        await expect(this.page.locator(apexLogo)).toHaveAttribute('src', '/assets/images/Apex_logo_horizontal_white.png');
    }

    public async validateDashboarTitle(){
        await expect(this.page.locator(mdcTitle)).toBeVisible();
        await expect(this.page.locator(mdcTitle)).toHaveText("MDC Project Dashboard");
    }

    public async validateLogoutButton(){
        await expect(this.page.locator(logoutButton)).toBeVisible();
        await expect(this.page.locator(logoutButton)).toHaveText("Logout");
    }

    public async clickOnProjectView(){
        await expect(this.page.locator(projectButtonSelector)).toBeVisible();
        await this.page.click(projectButtonSelector);
        await this.page.waitForLoadState('domcontentloaded');
    }

    public async clickOnClientView(){
        await expect(this.page.locator(clientButtonSelector)).toBeVisible();
        await this.page.click(clientButtonSelector);
        await this.page.waitForLoadState('domcontentloaded');
    }

    public async validateTabExist(Exist:string, tabText:string){
        if (Exist=='not Exist') {
            await expect(this.page.locator(tabProjectClient).filter({hasText: tabText})).toHaveCount(0);
        } else {
            await expect(this.page.locator(tabProjectClient).filter({hasText: tabText})).toBeVisible();
            await expect(this.page.locator(tabProjectClient).filter({hasText: tabText})).toHaveText(tabText);
        } 
    }

}