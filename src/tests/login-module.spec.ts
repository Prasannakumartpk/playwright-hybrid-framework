import{test, expect} from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';

test.use({storageState:{
    cookies:[],
    origins:[]
}})

test.describe('Invalid Login Test',()=>{
    test('[Login] Verify that the user cannot login with an invalid password.',{
    tag:['@REGRESSION'],
    annotation:{
        type:'Test Case Link',
        description:'Link'
    }
}, async({gotoUrl, loginPage, commonUtils})=>{
    //const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHrm(`${process.env.USER_NAME}`, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
})

test('[Login] Verify that the user cannot login with an invalid username.',{
    tag:['@REGRESSION'],
    annotation:{
        type:'Test Case Link',
        description:'Link'
    }
}, async({gotoUrl, loginPage, commonUtils})=>{
    //const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username, `${process.env.PASSWORD}`);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.passwordInput).toBeVisible();
})

test('[Login] Verify that the user cannot login with both an invalid username and password',{
    tag:['@SMOKE','@REGRESSION'],
    annotation:{
        type:'Test Case Link',
        description:'Link'
    }
}, async({gotoUrl, loginPage, commonUtils})=>{
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
})

})
