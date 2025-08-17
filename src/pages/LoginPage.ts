import{Locator, Page} from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly invalidCredentialsErrorPopup: Locator;

    constructor(page:Page){
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsErrorPopup = page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text");

    }

    /**
     * To open URL into browser
     */
    async gotoOrangeHrm(){
        await this.page.goto(`${process.env.BASE_URL}`);
    }

    /**
     * To Login into OrangeHRM Application 
     * @param userName 
     * @param password 
     */
    async loginOrangeHrm(userName: string, password: string){
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}