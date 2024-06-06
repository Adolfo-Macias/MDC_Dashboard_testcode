import { test, expect  } from '@playwright/test';
import { utils } from '../Pages/common.ts'
import { clientPage } from '../Pages/clientPage.ts'

let page;
const clientButtonSelector = 'a[routerlink="/clients"]>span[class="nav-label"]'
const projectButtonSelector = 'a[routerlink="/dashboards/projects"]>span[class="nav-label"]'

test.beforeEach(async () => {
    page = await utils.loadContext();
});

test.describe('Basic elements for Manager user', () =>{

    test('Validate all elementes are visible', async () => {
        await page.click(projectButtonSelector);
        await clientPage.validateButtonExist(page, 'Projects', projectButtonSelector) 
        await clientPage.validateButtonExist(page, 'Clients', clientButtonSelector) 
        await page.waitForTimeout(3000)
    });

    


})



    
