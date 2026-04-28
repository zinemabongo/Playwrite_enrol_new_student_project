import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';

export class EnrollmentsPage extends BasePage {
    //3. Navigate to enrolments page

    // get = Locators 
    get clickEnrollmentTab() {
        return this.page.getByRole('button',{ name: 'Enrollment' });
    }

    get verifyEnrollmentsPage() {
        return this.page.locator("text= Manage Enrollments")
    }

    get clickEnrollUserButton() {
        return this.page.getByRole('button',{ name: '+ Enroll User' });
    }

    get clickSelectCourseDropdown() {
        return this.page.locator("//div[@class='admin-enrollments']//div//div//form//div//select");
        // page.locator("div[class='admin-enrollments'] div div form div select");
    }

    get courseDropdownTrigger() {
        return this.page.locator('select[name="courseId"]'); 
}

    get selectEnrollmentType() {
        return this.page.getByRole('button', { name: '👤 Individual User' });
    }

    get searchStudentName() {
        return this.page.getByRole('textbox', { name: '🔍 Search by name or email...' });
    }

    get selectStudentFromSearchResults() {
        //return this.page.locator('.search-results .search-result-item').first();
        return this.page.getByText('Zine Mabongo', { exact: true })
    }

    get addEnrollmentNotes() {
        return this.page.getByRole('textbox', { name: 'Add enrollment notes...' });
    }
    get clickEnrollUser() {
        return this.page.getByText('Enroll User', { exact: true });
    }

     get verifyEnrollmentSuccessMessage() {
        return this.page.locator("text=User enrolled successfully!")
    }   

    get clickBackToWebsiteButton() {
        return this.page.getByRole('button', { name: 'Back to Website' });
    }

    get clickProfileNameButton() {
        return this.page.getByRole('button', { name: 'Desiree' });
    }

    get selectLogOutOption() {
        return this.page.getByRole('button', { name: 'Logout' });
    }
        
    // async = methods

    async clickEnrollmentTabButton() {
        await this.clickElement(this.clickEnrollmentTab);
    }

    async verifyEnrollmentsPageIsVisible() {
        await this.clickElement(this.verifyEnrollmentsPage);
    }

    async clickEnrollUserButtonMethod() {
        await this.clickElement(this.clickEnrollUserButton);
    }

    async clickSelectCourseDropdownMethod() {
        const selectElement = this.page.locator("//div[@class='admin-enrollments']//div//div//form//div//select");
        await selectElement.waitFor({ state: 'visible', timeout: 5000 });
        await selectElement.click();
    }

    async selectCourseOptionMethod(courseName = 'API Testing with Postman – Getting Started') {
        const selectElement = this.page.locator("//div[@class='admin-enrollments']//div//div//form//div//select");
        await selectElement.selectOption({ label: courseName });
    }


    async selectEnrollmentTypeMethod() {
        await this.clickElement(this.selectEnrollmentType);
    }

    async searchStudentNameMethod(studentEmail: string) {
        await this.enterText(this.searchStudentName, studentEmail);
    }

    async selectStudentFromSearchResultsMethod() {
        await this.clickElement(this.selectStudentFromSearchResults);
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

    async clickBackToWebsiteButtonMethod() {
        await this.clickElement(this.clickBackToWebsiteButton);
    }

    async clickProfileName() {
        await this.clickElement(this.clickProfileNameButton);
    }

    async selectLogOutOptionMethod() {
        await this.clickElement(this.selectLogOutOption);
    }


}


