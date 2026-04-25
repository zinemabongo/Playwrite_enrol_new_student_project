import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';

test.describe('Admin Page Tests', () => {
    test('should display the admin dashboard', async ({ adminPage, loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.login(validUsers.adminUser.email, validUsers.adminUser.password);
        await homePage.verifyHomePage.waitFor({ state: 'visible' });
        await adminPage.clickProfileIconButton();
        await adminPage.selectAdminPanelButton();
        await expect(adminPage.verifyAdminDashboard).toBeVisible();
    });
})