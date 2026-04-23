import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';

export class HomePage extends BasePage {
    get verifyHomePage() {
    return this.page.locator("text=Welcome back, Desiree! 👋")
    }
    
    async verifyHomePageIsVisible() {
        await this.clickElement(this.verifyHomePage);
    }
}