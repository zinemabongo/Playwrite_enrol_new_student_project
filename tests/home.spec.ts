import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';


test.describe('Home Page Tests', () => {
    test('home page should display the correct title', async ({ loginPage,homePage }) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.login(validUsers.adminUser.email, validUsers.adminUser.password);
        await homePage.verifyHomePage.waitFor({ state: 'visible' });
        await expect(homePage.verifyHomePage).toBeVisible();
    })
})
