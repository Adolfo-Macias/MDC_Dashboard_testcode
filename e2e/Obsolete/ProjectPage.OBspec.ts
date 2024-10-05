import { test, expect, Page  } from '@playwright/test';
import { CommonElements } from '../../Pages/commonPage.ts'
import { ClientPage } from '../../Pages/clientPage.ts'
import { HeaderPage } from '../../Pages/headerPage.ts';

let mypage
test.beforeEach(async ({baseURL}) => {
    mypage = await CommonElements.loadContext(baseURL);
});


test.describe('Basic elements for Manager user', async () =>{
    test('Validate all elementes are visible', async () => {
        await HeaderPage.clickOnProjectView(mypage);
        await ClientPage.validateButtonExist(mypage, 'Projects') 
        await ClientPage.validateButtonExist(mypage, 'Clients') 
        await mypage.waitForTimeout(5000)
    });
})