import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';
import { get } from 'node:http';

export class EnrolmentsPage extends BasePage {
    //3. Navigate to enrolments page
    // get = Locators
    get clickEnrollmentTab() {
        return this.page.getByRole('button',{ name: 'Enrollment' });
    }

    get verifyEnrolmentsPage() {
        return this.page.locator("text=Enrollment Management")
    }

    get clickEnrollUserButton() {
        return this.page.getByRole('button',{ name: '+ Enroll User' });
    }

    get clickSelectCourseDropdown() {
        return this.page.getByPlaceholder('-- Select Course --' );
    }

    get selectCourseOption() {
        return this.page.getByRole('option',{ name: 'API Testing with Postman – Getting Started' });
    }

    get selectEnrollmentType() {
        return this.page.getByRole('button', { name: '👤 Individual User' });
    }

    get searchStudentName() {
        return this.page.getByRole('textbox', { name: '🔍 Search by name or email...' });
    }

    get addEnrollmentNotes() {
        return this.page.getByRole('textbox', { name: 'Add enrollment notes...' });
    }
    get clickEnrollUser() {
        return this.page.getByText('Enroll User', { exact: true });
    }

     get verifyEnrollmentSuccessMessage() {
        return this.page.locator("text=Student enrolled successfully!")
    }   
        
    // async = methods
     async goto(){
        await this.navigateTo('https://ndosisimplifiedautomation.vercel.app/#/admin/enrollments');
    }

    async clickEnrollmentTabButton() {
        await this.clickElement(this.clickEnrollmentTab);
    }

    async verifyEnrolmentsPageIsVisible() {
        await this.clickElement(this.verifyEnrolmentsPage);
    }

    async clickEnrollUserButtonMethod() {
        await this.clickElement(this.clickEnrollUserButton);
    }

    async clickSelectCourseDropdownMethod() {
        await this.clickElement(this.clickSelectCourseDropdown);
    }

    async selectCourseOptionMethod() {
        await this.clickElement(this.selectCourseOption);
    }

    async selectEnrollmentTypeMethod() {
        await this.clickElement(this.selectEnrollmentType);
    }

    async searchStudentNameMethod(studentEmail: string) {
        await this.enterText(this.searchStudentName, studentEmail);
    }

    async addEnrollmentNotesMethod(notes: string) {
        await this.enterText(this.addEnrollmentNotes, notes);
    }
    
    async clickEnrollUserMethod() {
        await this.clickElement(this.clickEnrollUser);
    }   

    async verifyEnrollmentSuccessMessageIsVisible() {
        await this.clickElement(this.verifyEnrollmentSuccessMessage);
    }
}