import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';

test.describe('Enrolment Page Tests', async () => {
    test('sshould be able to enrol a student', async ({ loginPage,homePage,adminPage,enrollmentsPage }) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.login(validUsers.adminUser.email, validUsers.adminUser.password);
        await homePage.verifyHomePage.waitFor({ state: 'visible' });
        await adminPage.clickProfileIconButton();
        await adminPage.selectAdminPanelButton();
        await enrollmentsPage.clickEnrollmentTabButton();
        await expect(enrollmentsPage.verifyEnrollmentsPage).toBeVisible()
        await enrollmentsPage.clickEnrollUserButtonMethod();
        await enrollmentsPage.clickSelectCourseDropdownMethod();
        await enrollmentsPage.selectCourseOptionMethod();
        await enrollmentsPage.selectEnrollmentTypeMethod();
        await enrollmentsPage.searchStudentNameMethod(validUsers.registeredUser.email);
        await enrollmentsPage.addEnrollmentNotesMethod('Enrolling student for testing purposes');
        await enrollmentsPage.clickEnrollUserMethod();
        await expect(enrollmentsPage.verifyEnrollmentSuccessMessage).toBeVisible();
    })
})
