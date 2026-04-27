import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {HomePage} from '../pages/homePage';
import {AdminPage} from '../pages/adminPage';
import {EnrollmentsPage} from '../pages/enrollmentsPage';
import { UserPage } from '../pages/userPage';


type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    adminPage: AdminPage;
    enrollmentsPage: EnrollmentsPage;
    userPage: UserPage;
};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    adminPage: async ({ page }, use) => {
        const adminPage = new AdminPage(page);
        await use(adminPage);
    },

    enrollmentsPage: async ({ page }, use) => {
        const enrolmentsPage = new EnrollmentsPage(page);
        await use(enrolmentsPage);
    },
    
    userPage: async ({ page }, use) => {
        const userPage = new UserPage(page);
        await use(userPage);
    }

});

export { expect } from '@playwright/test';