import { ProjectPage, CommonElements, HeaderPage, test, MetricsPage} from "../../../fixture/loadModules";
import * as data from "../../../fixture/clientTestData.json"

let mypage
test.beforeEach(async ({baseURL}) => {
    mypage = await CommonElements.loadContext(baseURL);
});

test.describe('Basic elements for Manager user in Visits view', async () =>{

    test('Visit Metrics', async () => {
        const headerPage = new HeaderPage(mypage)
        const projectPage = new ProjectPage(mypage)
        const metricsPage = new MetricsPage(mypage)
        await headerPage.clickOnProjectView()
        await projectPage.clickOnMetrics(data.client.projects.project1.Name)
        await headerPage.validateHeader()
        await headerPage.validateTabExist('Exist', 'Clients')
        await headerPage.validateTabExist('Exist', 'Projects')
        await metricsPage.validateTabExist('Exist', 'Iterations')
        await metricsPage.validateTabExist('Exist', 'Risks')
        await metricsPage.validateTableHeaders()
        
    });


})