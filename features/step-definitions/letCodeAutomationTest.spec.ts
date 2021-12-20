import { Given, When, Then } from '@wdio/cucumber-framework';
import randomdata from "faker"
import signUp from "../testdata/signUp.json"
import LetCodeSignUpTesting from "../pageobjects/letCodeSignUp.page"
import LetCodeWorkspaceTest from "../pageobjects/letCodeWorkspaceTest"
import LetCodeCoursePage from "../pageobjects/letCodeCoursesTest"
import LetCodeProductTest from "../pageobjects/letCodeProductTest"


Given(/^I am on the letCode page$/, async () => {
    await LetCodeSignUpTesting.page();
    browser.maximizeWindow()
});


When(/^I click on signup$/, async () => {
    await LetCodeSignUpTesting.signUp()
});
Then(/^I validate the signUp page with \"([^\"]*)\"$/, async (signup) => {
    await expect(LetCodeSignUpTesting.signUpheader).toHaveText(signup)
});
When(/^I enter the credentials and click sign up for account creation$/, async () => {
    await LetCodeSignUpTesting.nameElement.setValue(signUp.names.name)
    await LetCodeSignUpTesting.email.setValue(randomdata.internet.email())
    await LetCodeSignUpTesting.passwordElement.setValue(randomdata.internet.password(8))
    await LetCodeSignUpTesting.signUpAcception()
});
Then(/^I should see account created page with header text as \"([^\"]*)\"$/, async (letcodewithkoushik) => {
    await expect(LetCodeSignUpTesting.accoutCreateValidate).toHaveText(letcodewithkoushik)
});



When(/^I click Explore courses it navigates to course page$/, async () => {
    await LetCodeCoursePage.course()
});
Then(/^I validate the header text with \"([^\"]*)\"$/, async (courses) => {
    await expect(LetCodeCoursePage.courseHeader).toHaveText(courses)
});
Then(/^I check for available courses heading \"([^\"]*)\"$/, async (selenium) => {
    await expect(LetCodeCoursePage.courseSelenium).toHaveText(selenium)
});
When(/^I click on a course and it navigates to the selected page$/, async () => {
    await LetCodeCoursePage.seleniumCourse()
});
Then(/^I validate header with text \"([^\"]*)\" and go to homepage$/, async (seleniumwebdriver) => {
    await expect(LetCodeCoursePage.seleniumCourseHeader).toHaveText(seleniumwebdriver)
});



When(/^I click on Explore Workspace Button$/, async () => {
    await LetCodeWorkspaceTest.workspace()
});
Then(/^I should be navigated to Workspace page and I validate the header text \"([^\"]*)\"$/, async (practiceandbecomeprointestautomation) => {
    await expect(LetCodeWorkspaceTest.workspaceValidation).toHaveText(practiceandbecomeprointestautomation)
});



When(/^I click on Input$/, async () => {
    await LetCodeWorkspaceTest.input()
});
Then(/^I navigate to input page with header \"([^\"]*)\"$/, async (input) => {
    await expect(LetCodeWorkspaceTest.inputHeader).toHaveText(input)
});
When(/^I start to fill the Inputs$/, async () => {
    await LetCodeWorkspaceTest.inputValue(signUp.names)
    await LetCodeWorkspaceTest.workspace()
});



When(/^I click on Button$/, async () => {
    await LetCodeWorkspaceTest.button()
});
Then(/^I validate Button page with header \"([^\"]*)\"$/, async (button) => {
    await expect(LetCodeWorkspaceTest.buttonValidate).toHaveText(button)
});
When(/^I click on Hold Button$/, async () => {
    await LetCodeWorkspaceTest.holdButton()
});



When(/^I click on Select option$/, async () => {
    await LetCodeWorkspaceTest.select()
});
Then(/^I validate the header \"([^\"]*)\"$/, async (dropdown) => {
    await expect(LetCodeWorkspaceTest.dropdownHeader).toHaveText(dropdown)
});
When(/^I select different options in different dropdowns$/, async () => {
    await LetCodeWorkspaceTest.dropdownFruit()
    await LetCodeWorkspaceTest.dropdownSuperHero()
});
Then(/^I validate wheather its selected as text \"([^\"]*)\"$/, async (youhaveselectedapple) => {
    await expect(LetCodeWorkspaceTest.dropdownValidation).toHaveText(youhaveselectedapple)
    await LetCodeWorkspaceTest.workspace()
});



When(/^I click on Elements element$/, async () => {
    await LetCodeWorkspaceTest.element()
});
Then(/^I should see the header with \"([^\"]*)\"$/, async (elements) => {
    await expect(LetCodeWorkspaceTest.elementValidate).toHaveText(elements)
});
When(/^I enter the value and click search$/, async () => {
    await LetCodeWorkspaceTest.gitNameValue(signUp.gitName)
    await LetCodeWorkspaceTest.workspace()
});



When(/^I click on MultiSelect element$/, async () => {
    await LetCodeWorkspaceTest.multiSelect()
});
Then(/^validate the header with \"([^\"]*)\"$/, async (selectable) => {
    await expect(LetCodeWorkspaceTest.multiSelectHeader).toHaveText(selectable)
});
When(/^I click on Multiple Option$/, async () => {
    await LetCodeWorkspaceTest.multipleSelect()
});



When(/^I click on Wait$/, async () => {
    await LetCodeWorkspaceTest.wait()
});
Then(/^validating the header text with \"([^\"]*)\"$/, async (wait) => {
    await expect(LetCodeWorkspaceTest.waitHeader).toHaveText(wait)
});
When(/^I click simple alert and wait for alert and accept alert$/, async () => {
    await LetCodeWorkspaceTest.simpleAlertWait()
    await browser.pause(5000)
    await browser.acceptAlert()
    await LetCodeWorkspaceTest.home()
});



When(/^I click on Product element and it navigates to XPath page$/, async () => {
    await LetCodeProductTest.productElemBtn.click()
});
Then(/^I validate the XPath page with header text \"([^\"]*)\"$/, async (letxpath) => {
    await expect(LetCodeProductTest.productPageValidate).toHaveText(letxpath)
});
When(/^I click on Try it today element it navigates to new extension window$/, async () => {
    await LetCodeProductTest.tryItTodayButton()
    const extensionTab = await browser.getWindowHandles()
    await browser.switchToWindow(extensionTab[1])
});
Then(/^I validate the Page header \"([^\"]*)\"$/, async (letxpath) => {
    await expect(LetCodeProductTest.xPathExtensionHeader).toHaveText(letxpath)
})
When(/^I navigate back to LetCode Home page$/, async () => {
    const extensionTab = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(extensionTab[0])
});