import { ProjectPage, CommonElements, HeaderPage, test} from "../../fixture/loadModules";
import * as data from "../../fixture/clientTestDataAsMananger.json";

let mypage
test.beforeEach(async ({baseURL}) => {
    mypage = await CommonElements.loadContext(baseURL);
});

test.describe('Basic elements for Manager user in Project view', async () =>{
    test('Validate all elementes are visible', async () => {
        const headerPage = new HeaderPage(mypage)
        const projectPage = new ProjectPage(mypage)
        await headerPage.clickOnProjectView()
        await headerPage.validateHeader()
        await headerPage.validateTabExist('Exist', 'Clients')
        await headerPage.validateTabExist('Exist', 'Projects')
        await projectPage.validateTableHeaders();
        await projectPage.validateProyectName("Visible", data.client.projects.project1.Name);
        await projectPage.validateProyectName("Visible", data.client.projects.project2.Name);
        await projectPage.validateProyectName("Visible", data.client.projects.project3.Name);
        await projectPage.clickOnExpandCollapseClient(data.client.TestAutomationClientName);
        await projectPage.validateProyectName("not Visble", data.client.projects.project1.Name);
        await projectPage.validateProyectName("not Visble", data.client.projects.project2.Name);
        await projectPage.validateProyectName("not Visble", data.client.projects.project3.Name);
        await projectPage.clickOnExpandCollapseClient(data.client.TestAutomationClientName);
        await projectPage.validateProyectDetails("Visible", data.client.projects.project1);
        await projectPage.validateProyectDetails("Visible", data.client.projects.project2);
        await projectPage.validateProyectDetails("Visible", data.client.projects.project3);
        await headerPage.validateHeader()
    });




})