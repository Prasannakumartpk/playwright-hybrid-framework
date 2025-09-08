import { expect } from '@playwright/test';
import{test} from '../fixtures/common-fixture';

test('Global Setup for Auto Login', async({page, loginPage, dashboardPage, commonUtils})=>{

    //const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    //const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm(`${process.env.USER_NAME}`, `${process.env.PASSWORD}`);
    await page.waitForURL(process.env.BASE_URL + '/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})