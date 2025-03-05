import {test as mytest} from "@playwright/test"
import { CommonElements } from '../Pages/commonPage.ts'
import { ClientPage } from '../Pages/clientPage.ts'
import { HeaderPage } from '../Pages/headerPage.ts';
import { ProjectPage } from '../Pages/ProjectPage.ts'
import { MetricsPage } from "../Pages/metricsPage.ts";


type pages = {
    commonPage: CommonElements
    clientPage: ClientPage
    headerPage: HeaderPage
    projectPage: ProjectPage
    metricsPage: MetricsPage
}

const fixtureTestBase = mytest.extend<pages>({
    commonPage: async({page}, use) =>{
        await use(new CommonElements());
    },
    clientPage: async({page}, use) =>{
        await use(new ClientPage(page));
    },
    headerPage: async({page}, use) =>{
        await use(new HeaderPage(page));
    },
    projectPage: async({page}, use) =>{
        await use(new ProjectPage(page));
    },
    metricsPage:async({page}, use) =>{
        await use(new MetricsPage(page));
    }

})

export const test = fixtureTestBase;
export const expect = fixtureTestBase.expect;
export { CommonElements };
export { ClientPage };
export { HeaderPage };
export { ProjectPage };
export { MetricsPage }