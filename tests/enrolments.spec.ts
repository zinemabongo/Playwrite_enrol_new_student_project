import { test, expect } from '../src/fixtures/customFixtures';
import {validUsers} from '../src/data/testData';

test.describe('Enrolment Page Tests', async () => {
    test('sshould be able to enrol a student', async ({ enrolmentsPage }) => {
        await enrolmentsPage.goto();
          await enrolmentsPage.clickEnrollmentButton();
          await expect(enrolmentsPage.verifyEnrollmentPage).toBeVisible()
})
    });