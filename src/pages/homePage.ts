import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';

export class HomePage extends BasePage {

    //1. verify that the user is on the home page
    // get = Locators
    get verifyHomePage() {
    return this.page.locator("text=Welcome back, Desiree! 👋")
    }
    
    async verifyHomePageIsVisible() {
        await this.clickElement(this.verifyHomePage);
    }
}