import { Locator, Page } from "@playwright/test";

export class LeftNavogationPage{
    readonly page: Page;
    readonly pimLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.locator("//a[contains(@href,'viewPimModule')]");

    }

    /**
     * To open PIM module
     */
    async openPimModule(){
        await this.pimLink.click();
    }
}