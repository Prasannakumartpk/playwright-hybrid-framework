import { expect } from '@playwright/test';
import{test} from '../../fixtures/hooks-fixture';

test('Global Setup for Auto Login', async({page, loginPage, dashboardPage})=>{

    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm(`${process.env.USER_NAME}`, `${process.env.PASSWORD}`);
    await page.waitForURL(process.env.BASE_URL + '/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})