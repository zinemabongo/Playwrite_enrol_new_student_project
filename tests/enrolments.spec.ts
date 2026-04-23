import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';

test.describe('Enrolment Page Tests', async () => {
    test('sshould be able to enrol a student', async ({ enrolmentsPage }) => {
        await enrolmentsPage.goto();
          await enrolmentsPage.clickEnrollmentTabButton();
          await expect(enrolmentsPage.verifyEnrolmentsPage).toBeVisible()
            await enrolmentsPage.clickEnrollUserButtonMethod();
            await enrolmentsPage.clickSelectCourseDropdownMethod();
            await enrolmentsPage.selectCourseOptionMethod();
            await enrolmentsPage.selectEnrollmentTypeMethod();
            await enrolmentsPage.searchStudentNameMethod(validUsers.registeredUser.email);
            await enrolmentsPage.addEnrollmentNotesMethod('Enrolling student for testing purposes');
            await enrolmentsPage.clickEnrollUserMethod();
            await expect(enrolmentsPage.verifyEnrollmentSuccessMessage).toBeVisible();
    });
    