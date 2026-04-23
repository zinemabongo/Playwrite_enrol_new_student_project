import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';

export class AdminPage extends BasePage {

    //2. Navigate to admin page
    // get = Locators

    get clickProfileIcon() {
        return this.page.getByRole('button',{ name: 'Desiree' });
    }

    get selectAdminPanel() {
        return this.page.getByRole('button',{ name: 'Admin Panel' });
    }

    get verifyAdminDashboard() {
        return this.page.locator("text=Admin Dashboard")
    }


    // async = methods
    
    async clickProfileIconButton() {
        await this.clickElement(this.clickProfileIcon);
    }

    async selectAdminPanelButton() {
        await this.clickElement(this.selectAdminPanel);
    }

    async verifyAdminPageIsVisible() {
        await this.clickElement(this.verifyAdminDashboard);
    }
}