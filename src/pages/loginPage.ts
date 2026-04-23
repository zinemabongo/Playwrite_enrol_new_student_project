import {Page,Locator, expect} from '@playwright/test';
import {BasePage} from './basePage';
import {validUsers} from '../data/testData';

export class LoginPage extends BasePage {
    private readonly pageUrl = 'https://ndosisimplifiedautomation.vercel.app/';
    
    get navigateToLoginPage(): Locator {
        return this.page.getByRole('button',{ name: 'Login' });
    }

    get loginButton(): Locator {
        return this.page.getByRole('button',{ name: 'Login' });
    }

    get emailInput(): Locator {
        return this.page.getByPlaceholder('Email');
    }

    get passwordInput(): Locator {
        return this.page.getByPlaceholder('Password');
    }

     async goto(){
        await this.navigateTo(this.pageUrl);
    }

    async clickLoginButton(){
        await this.clickElement(this.navigateToLoginPage);
    
    }

    async login(email: string, password: string){
        await this.enterText(this.emailInput, email);
        await this.enterText(this.passwordInput, password);
        await this.clickElement(this.loginButton);
        await this.page.pause();
    }
}
