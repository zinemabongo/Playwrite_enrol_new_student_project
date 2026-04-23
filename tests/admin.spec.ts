import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';

test.describe('Admin Page Tests', () => {
    test('should display the admin dashboard', async ({ adminPage }) => {
        await adminPage.goto();
        await adminPage.clickProfileIconButton();
        await adminPage.selectAdminPanelButton();
        await expect(adminPage.verifyAdminDashboard).toBeVisible();
    });
})