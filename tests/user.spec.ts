import {test, expect} from '@playwright/test';
import {validUsers} from '../src/data/testData';
import { test as customTest } from '../src/fixtures/customFixtures';

customTest.describe('User Tests', () => {
    customTest('should display enrolled course for the student', async ({ loginPage,homePage,userPage }) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.login(validUsers.registeredUser.email, validUsers.registeredUser.password);
        await homePage.verifyHomePage.waitFor({ state: 'visible' });
        await userPage.clickBrowseCourses();
        await userPage.verifyEnrolledCourseIsListed();
        await expect(userPage.verifyEnrolledCourseListed).toBeVisible();
    })
})