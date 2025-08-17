import{test} from '../src/fixtures/hooks-fixture';

// test.beforeEach('Before Each Hook', async({loginPage})=>{
//     await loginPage.gotoOrangeHrm();
// })
// test.afterEach('After Each Hook', async({userPage})=>{
//     await userPage.logout();
// })

test('Temp test', async ({ page, gotoUrl }) => {

    // commonUtils.encryptData('Admin');
    // commonUtils.encryptData('admin123');
    // const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    // const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    console.log(await page.title());
})