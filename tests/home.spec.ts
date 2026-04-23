import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';


test.describe('Home Page Tests', () => {
    test('should display the correct title', async ({ homePage }) => {
        await homePage.goto();
        await expect(homePage.verifyHomePage).toBeVisible();
    });
});
