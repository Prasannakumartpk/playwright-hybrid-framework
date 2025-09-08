import{test as baseTest} from '../fixtures/pom-fixture';

type HooksFixtureType = {
    gotoUrl: any;
    logout: any;
}

export const test = baseTest.extend<HooksFixtureType>({
    gotoUrl: async({loginPage}, use)=>{
        await loginPage.gotoOrangeHrm();
        await use();
    },
    logout: async({userPage}, use)=>{
        await use();
        await userPage.logout();
    }
})

export {expect} from '@playwright/test';