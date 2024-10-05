import { ClientPage, CommonElements, HeaderPage, test} from "../fixture/loadModules";
import * as data from "../fixture/clientTestData.json"

let mypage
test.beforeEach(async ({baseURL}) => {
    mypage = await CommonElements.loadContext(baseURL);
});

test.describe('Basic elements for Manager user in Client view', async () =>{
    test('Validate all elementes are visible', async () => {
        const headerPage = new HeaderPage(mypage)
        const clientPage = new ClientPage(mypage)
        await headerPage.clickOnClientView();
        await headerPage.validateHeader()
        await headerPage.validateTabExist('Exist', 'Clients')
        await headerPage.validateTabExist('Exist', 'Projects')
        await clientPage.validateTitle();
        // pending validate buttons for Add Cient and Add Project
        await clientPage.validateSearchElements();
        //  pending validate dropdown
        await clientPage.validateTableHeaders();
        await clientPage.validateProyectName("Visible", data.client.projects.project1.Name);
        await clientPage.clickOnExpandCollapseClient(data.client.TestAutomationClientName);
        await clientPage.validateProyectName("not Visble", data.client.projects.project1.Name);
    });

    test('Validate SearchBar', async () => {
        const headerPage = new HeaderPage(mypage)
        const clientPage = new ClientPage(mypage)
        await headerPage.clickOnClientView()
        await clientPage.validateProyectName("Visible", data.client.projects.project1.Name)
        await clientPage.validateProyectName("Visible", data.client.projects.project2.Name)
        await clientPage.validateProyectName("Visible", data.client.projects.project3.Name)
        await clientPage.inputSearch(data.client.projects.project3.Name)
        await clientPage.validateTableHeaders();
        await clientPage.validateProyectName("Visible", data.client.projects.project3.Name)
        await clientPage.validateProyectName("not Visble", data.client.projects.project1.Name);       
        await clientPage.validateProyectName("not Visble", data.client.projects.project2.Name);       
    });

    test('Validate Archive filter', async () => {
        const headerPage = new HeaderPage(mypage)
        const clientPage = new ClientPage(mypage)
        await headerPage.clickOnClientView()
        await clientPage.selectProjectStatusFilter('Archive')
        await clientPage.validateProyectDetails("Visible", data.client.projects.ArchiveProject)
    });
})