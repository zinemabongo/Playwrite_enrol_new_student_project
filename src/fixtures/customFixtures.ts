import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {HomePage} from '../pages/homePage';
import {AdminPage} from '../pages/adminPage';
import {EnrolmentsPage} from '../pages/enrolmentsPage';


type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    adminPage: AdminPage;
    enrolmentsPage: EnrolmentsPage;
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

    enrolmentsPage: async ({ page }, use) => {
        const enrolmentsPage = new EnrolmentsPage(page);
        await use(enrolmentsPage);
    }

});

export { expect } from '@playwright/test';