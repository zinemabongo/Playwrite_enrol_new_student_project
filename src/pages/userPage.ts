import {Page,Locator} from '@playwright/test';
import {BasePage} from './basePage';

//5.Login as student and validate that you are enrolled

export class UserPage extends BasePage {

    // get = Locators
    get verifyHomePage() {
    return this.page.locator("text=Welcome back, Zine! 👋")
    }

    get clickMyLearningTab() {
        return this.page.getByRole('button', { name: 'My Learning' });
    }

    get clickMyCoursesTab() {
        return this.page.getByRole('button', { name: 'My Courses' });
    }

    // get clickBrowseCoursesButton() {
    //     return this.page.getByRole('button', { name: 'Browse Courses' });
    // }

    get verifyEnrolledCourseListed() {
        return this.page.getByRole('heading', { name: 'API Testing with Postman – Getting Started' });
    }

    // async = methods

    async verifyHomePageIsVisible() {
        await this.clickElement(this.verifyHomePage);
    }

    async clickMyLearning() {
        await this.clickElement(this.clickMyLearningTab);
    }

    async clickMyCourses() {
        await this.clickElement(this.clickMyCoursesTab);
    }

    // async clickBrowseCourses() {
    //     await this.clickElement(this.clickBrowseCoursesButton);
    // }

    async verifyEnrolledCourseIsListedMethod() {
        await this.verifyElementVisible(this.verifyEnrolledCourseListed);
    }
}