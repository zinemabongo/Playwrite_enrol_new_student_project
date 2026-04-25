import {test, expect} from '@playwright/test';

test("verify ndosi automation title",async ({page}) =>{
await page.goto("https://ndosisimplifiedautomation.vercel.app/#")

await expect(page).toHaveTitle("Ndosi Test Automation")

})

//1.Login as an admin account

test("login as admin",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("admin@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("@12345678")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("text=Welcome back, Desiree! 👋")).toBeVisible()

})


//2.Navigate to admin panel
test("navigate to admin panel",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("admin@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("@12345678")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(2000)
    await page.getByText('Desiree', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.locator('span').filter({ hasText: 'Admin Panel' }).first().click()
    await page.waitForTimeout(2000)
    await expect(page.getByRole('heading', { name: '🔐 Admin Dashboard' })).toBeVisible()
})

//3.Click Enrolments
test("click enrolments",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("admin@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("@12345678")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(2000)
    await page.getByText('Desiree', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.locator('span').filter({ hasText: 'Admin Panel' }).first().click()
    await page.waitForTimeout(2000)
    await page.locator('nav').locator('button').nth(4).click()
    await page.waitForTimeout(2000)
    await expect(page.getByText('🎓 Manage Enrollments')).toBeVisible()
})


//4.Enrol your student account to any course
test("enrol student to course",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("admin@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("@12345678")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(2000)
    await page.getByText('Desiree', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.locator('span').filter({ hasText: 'Admin Panel' }).first().click()
    await page.waitForTimeout(2000)
    await page.locator('nav').locator('button').nth(4).click()
    await page.waitForTimeout(2000)
    await expect(page.getByText('🎓 Manage Enrollments')).toBeVisible()
    await page.getByRole('button', { name: '+ Enroll User' }).click()
    await page.waitForTimeout(2000)

    await page.getByText('-- Select Course --', { exact: true }).click()
    await page.locator('option').filter({ hasText: 'API Testing with Postman – Getting Started' }).first().click()
    await page.getByRole('button', { name: '👤 Individual User' }).click()
    await page.getByRole('textbox', { name: '🔍 Search by name or email...' }).click()
    await page.getByRole('textbox', { name: '🔍 Search by name or email...' }).fill("zine.mabongo@gmail.com")  
    await page.locator("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/form[1]/div[3]/div[1]/div[1]").click()
    await page.getByRole('textbox', { name: 'Add enrollment notes...' }).fill("First enrolment for API Testing course")   
    await page.getByText('Enroll User', { exact: true }).click()
    await page.waitForTimeout(2000)
    await expect(page.locator("text=Student enrolled successfully!")).toBeVisible()
})


//5.Login as student and validate that you are enrolled
test("login as student and validate enrolment",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("zine.mabongo@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("Mabongo@1")
    await page.locator("button:has-text('Login')").click()
    await page.getByText('Zine', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'View All →' }).click()
    await page.waitForTimeout(2000)
    await expect(page.getByText('API Testing with Postman – Getting Started')).toBeVisible()
})  

// 6.Delete the enrolment and validate that the course is removed from your student account
test("delete enrolment and validate",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("admin@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("@12345678")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(2000)
    await page.getByText('Desiree', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.locator('span').filter({ hasText: 'Admin Panel' }).first().click()
    await page.waitForTimeout(2000)
    await page.locator('nav').locator('button').nth(4).click()
    await page.waitForTimeout(2000)
    await expect(page.getByText('🎓 Manage Enrollments')).toBeVisible()
    await page.getByRole('textbox', { name: 'Search by email...' }).fill("zine.mabongo@gmail.com")
    await page.waitForTimeout(2000)
    await page.locator('[name="courseId"]').click()
    await page.waitForTimeout(2000)
    await page.locator('tr').filter({ hasText: 'PI Testing with Postman – Getting Started' }).selectText()
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Delete' }).click()
    await page.waitForTimeout(2000)

    // click ok on the confirmation popup
    await page.on('dialog', async dialog => {
    console.log(dialog.message()); // optional logging
    await dialog.accept();
});
    await page.click('OK') // This line may not be necessary if the dialog is handled by the event listener above;
    await page.waitForTimeout(2000)
    await expect(page.locator("text=Enrollment deleted successfully!")).toBeVisible()

    //6.Login as student to validate deletion
    test("login as student and validate enrolment",async ({page}) =>{
    await page.goto("https://ndosisimplifiedautomation.vercel.app/#")
    await page.getByText('Login', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("textbox", { name: "Email" }).fill("zine.mabongo@gmail.com")
    await page.getByRole("textbox", { name: "Password" }).fill("Mabongo@1")
    await page.locator("button:has-text('Login')").click()
    await page.getByText('Zine', { exact: true }).click()
    await page.waitForTimeout(2000)
    await page.getByText('-- Select Course --', { exact: true }).click()
    await page.waitForTimeout(2000)
    //await expect(page.getByText('API Testing with Postman – Getting Started')).not.toBeVisible()
})
})