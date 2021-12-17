import { Given, When, Then } from '@wdio/cucumber-framework';
import randomdata from "faker"
import signUp from "../testdata/signUp.json"
import SignUpTesting from "../pageobjects/letCodeSignUp.page"
import WorkspaceTest from "../pageobjects/letCodeWorkspaceTest"
import CoursePage from "../pageobjects/letCodeCoursesTest"
import ProductPageTest from "../pageobjects/letCodeProductTest"

Given(/^I am on the letCode page$/, async () => {
    SignUpTesting.page();
    browser.maximizeWindow()
});


When(/^I click on signup$/, async () => {
    await SignUpTesting.signUp()
});
Then(/^I validate the signUp page with \"([^\"]*)\"$/, async (signup) => {
    await expect(SignUpTesting.signUpheader).toHaveText(signup)
});
When(/^I enter the credentials and click sign up for account creation$/, async () => {
    await SignUpTesting.nameElement.setValue(signUp.names.name)
    await SignUpTesting.email.setValue(randomdata.internet.email())
    await SignUpTesting.passwordElement.setValue(randomdata.internet.password(8))
    await SignUpTesting.signUpAcception()
});
Then(/^I should see account created page with header text as \"([^\"]*)\"$/, async (letcodewithkoushik) => {
    await expect(SignUpTesting.accoutCreateValidate).toHaveText(letcodewithkoushik)
});



When(/^I click on Explore courses it navigates to course page$/, async () => {
    await CoursePage.Course()
});
Then(/^I validate the header text with \"([^\"]*)\"$/, async (courses) => {
    await expect(CoursePage.CourseHeader).toHaveText(courses)
});
Then(/^I check for available courses heading \"([^\"]*)\"$/, async (selenium) => {
    await expect(CoursePage.courseSelenium).toHaveText(selenium)
});
When(/^I click on a course and it navigates to the selected page$/, async () => {
    await CoursePage.seleniumCourse()
});
Then(/^I validate header with text \"([^\"]*)\" and go to homepage$/, async (seleniumwebdriver) => {
    await expect(CoursePage.seleniumCourseHeader).toHaveText(seleniumwebdriver)
});



When(/^I click on Explore Workspace Button$/, async () => {
    await WorkspaceTest.workspace()
});
Then(/^I should be navigated to Workspace page and I validate the header text \"([^\"]*)\"$/, async (practiceandbecomeprointestautomation) => {
    await expect(WorkspaceTest.workspaceValidation).toHaveText(practiceandbecomeprointestautomation)
});



When(/^I click on Input$/, async () => {
    await WorkspaceTest.input()
});
Then(/^I navigate to input page with header \"([^\"]*)\"$/, async (input) => {
    await expect(WorkspaceTest.inputHeader).toHaveText(input)
});
When(/^I start to fill the Inputs$/, async () => {
    await WorkspaceTest.inputValue(signUp.names)
    await WorkspaceTest.workspace()
});



When(/^I click on Button$/, async () => {
    await WorkspaceTest.button()
});
Then(/^I validate Button page with header \"([^\"]*)\"$/, async (button) => {
    await expect(WorkspaceTest.buttonValidate).toHaveText(button)
});
When(/^I click on Hold Button$/, async () => {
    await WorkspaceTest.holdButton()
});



When(/^I click on Select option$/, async () => {
    await WorkspaceTest.select()
});
Then(/^I validate the header \"([^\"]*)\"$/, async (dropdown) => {
    await expect(WorkspaceTest.dropdownHeader).toHaveText(dropdown)
});
When(/^I select different options in different dropdowns$/, async () => {
    await WorkspaceTest.dropdownFruit()
    await WorkspaceTest.dropdownSuperHeor()
});
Then(/^I validate wheather its selected as text \"([^\"]*)\"$/, async (youhaveselectedapple) => {
    await expect(WorkspaceTest.dropdownValidation).toHaveText(youhaveselectedapple)
    await WorkspaceTest.workspace()
});



When(/^I click on Alert element$/, async () => {
    await WorkspaceTest.alert()
});
Then(/^I validate the header text \"([^\"]*)\"$/, async (alert) => {
    await expect(WorkspaceTest.alertHeader).toHaveText(alert)
});
When(/^I select different alert and handle them$/, async () => {
    await WorkspaceTest.alertTypes()
});



When(/^I click on Windows element$/, async () => {
    await WorkspaceTest.Windows()
});
Then(/^I validate the header with \"([^\"]*)\"$/, async (windows) => {
    await expect(WorkspaceTest.windowHeader).toHaveText(windows)
});
When(/^I select Open Home page and it navigates to new windows$/, async () => {
    await WorkspaceTest.windowHandle()
    const navigateWindow = await browser.getWindowHandles()
    await browser.switchToWindow(navigateWindow[1])
});
Then(/^I validate the navigated window with \"([^\"]*)\"$/, async (header) => {
    await expect(WorkspaceTest.windowHeaderValidation).toHaveText(header)
    const navigateWindow = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(navigateWindow[0])
    await WorkspaceTest.workspace()
});



When(/^I click on Elements element$/, async () => {
    await WorkspaceTest.element()
});
Then(/^I should see the header with \"([^\"]*)\"$/, async (elements) => {
    await expect(WorkspaceTest.elementValidate).toHaveText(elements)
});
When(/^I enter the value and click search$/, async () => {
    await WorkspaceTest.gitNameValue(signUp.gitName)
    await WorkspaceTest.workspace()
});



When(/^I click on MultiSelect element$/, async () => {
    await WorkspaceTest.multiSelect()
});
Then(/^validate the header with \"([^\"]*)\"$/, async (selectable) => {
    await expect(WorkspaceTest.multiSelectHeader).toHaveText(selectable)
});
When(/^I click on Multiple Option$/, async () => {
    await WorkspaceTest.multipleSelect()
});



When(/^I click on Wait$/, async () => {
    await WorkspaceTest.wait()
});
Then(/^validating the header text with \"([^\"]*)\"$/, async (wait) => {
    await expect(WorkspaceTest.waitHeader).toHaveText(wait)
});
When(/^I click simple alert and wait for alert and accept alert$/, async () => {
    await WorkspaceTest.simpleAlertWait()
    await browser.pause(5000)
    await browser.acceptAlert()
    await WorkspaceTest.home()
});




When(/^I click on Product element and it navigates to XPath page$/, async () => {
    await ProductPageTest.productElemBtn.click()
});
Then(/^I validate the XPath page with header text \"([^\"]*)\"$/, async (letxpath) => {
    await expect(ProductPageTest.productPageValidate).toHaveText(letxpath)
});
When(/^I click on Try it today element it navigates to new extension window$/, async () => {
    await ProductPageTest.tryItTodayButton()
    const extensionTab = await browser.getWindowHandles()
    await browser.switchToWindow(extensionTab[1])
});
Then(/^I validate the Page header \"([^\"]*)\"$/, async (letxpath) => {
    await expect(ProductPageTest.xPathExtensionHeader).toHaveText(letxpath)
})
When(/^I navigate back to LetCode Home page$/, async () => {
    const extensionTab = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(extensionTab[0])
});