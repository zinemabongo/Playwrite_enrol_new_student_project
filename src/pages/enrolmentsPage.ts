import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';

export class EnrolmentsPage extends BasePage {
    get clickEnrollmentTab() {
        return this.page.getByRole('button',{ name: 'Enrollment' });
    }

    get verifyEnrollmentPage() {
        return this.page.locator("text=Enrollment Management")
    }

    get clickAddStudentButton() {
        return this.page.getByRole('button',{ name: 'Add Student' });
    }

    async clickEnrollmentTabButton() {
        await this.clickElement(this.clickEnrollmentTab);
    }

    async verifyEnrollmentPageIsVisible() {
        await this.clickElement(this.verifyEnrollmentPage);
    }