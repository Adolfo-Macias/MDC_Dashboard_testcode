import { ClientPage, CommonElements, HeaderPage, test, EditClientPage } from "../../fixture/loadModules";
import * as data from "../../fixture/clientTestDataAsMananger.json"

let mypage
test.beforeEach(async ({baseURL}) => {
    mypage = await CommonElements.loadContext(baseURL);
});

test.describe('Basic elements for Manager user in EDIT Client view', async () =>{
    test('Validate all elementes are visible', async () => {
        const headerPage = new HeaderPage(mypage)
        const clientPage = new ClientPage(mypage)
        const editClientPage = new EditClientPage(mypage)
        await headerPage.clickOnClientView();
        await headerPage.validateHeader()
        await clientPage.validateTitle();
        await clientPage.clickOnEditProject(data.client.projects.project1.Name)
        await editClientPage.validateInputFieldsValues(data.client.projects.project1) 
    });



})