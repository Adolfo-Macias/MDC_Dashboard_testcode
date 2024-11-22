import { ClientPage, CommonElements, HeaderPage, test} from "../../fixture/loadModules";
import * as data from "../../fixture/clientTestDataAsMananger.json"

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
        await clientPage.validateAddClientProject('Add Client');
        await clientPage.validateAddClientProject('Add Project');
        await clientPage.validateSearchElements();
        await clientPage.validateFilterActiveArchive();
        await clientPage.validateTableHeaders();
        await clientPage.validateProyectDetails("Visible", data.client.projects.project1);
        await clientPage.validateProyectDetails("Visible", data.client.projects.project2);
        await clientPage.validateProyectDetails("Visible", data.client.projects.project3);
        await clientPage.validateTooltip(data.client.TestAutomationClientName, data.client.clientSummary);
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
        await mypage.waitForTimeout(2000)
        await clientPage.selectProjectStatusFilter('Archive')
        await clientPage.validateProyectDetails("Visible", data.client.projects.ArchiveProject)
    });
})