import { Locator, Page } from "@playwright/test";

export class PimPage{
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.addButton = page.locator("//button[normalize-space()='Add']");
        this.firstNameInput = page.locator("//input[@placeholder='First Name']");
        this.middleNameInput = page.locator("//input[@placeholder='Middle Name']");
        this.lastNameInput = page.locator("//input[@placeholder='Last Name']");
        this.saveButton = page.locator("//button[normalize-space()='Save']");
        this.newEmployeeNameHeading = page.locator(".oxd-text.oxd-text--h6.--strong");


    }
/**
 * To Add new Employee in PIM Module
 * @param firstName 
 * @param middleName 
 * @param lastName 
 */
    async addEmployee(firstName: string, middleName: string, lastName: string){
        await this.addButton.click();
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.saveButton.click();

    }
    
}