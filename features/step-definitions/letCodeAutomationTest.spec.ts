import { Given, When, Then } from '@wdio/cucumber-framework';
import randomdata from "faker"
import signUp from "../testdata/signUp.json"
import SignUpTesting from "../pageobjects/letCodeSignUp.page"
import WorkspaceTest from "../pageobjects/letCodeWorkspaceTest"
import CoursePage from "../pageobjects/letCodeCoursesTest"
import ProductPageTest from "../pageobjects/letCodeProductTest"


Given(/^I am in the letCode home page$/, async () => {
    SignUpTesting.page();
    browser.maximizeWindow()
});
When(/^I click on signup$/, async () => {
    await SignUpTesting.signUp.click()
});
Then(/^I validate the header \"([^\"]*)\"$/, async (signup) => {
    await expect(SignUpTesting.signUpheader).toHaveText(signup)
});
When(/^I enter the credentials and click sign up for account creation$/, async () => {
    await SignUpTesting.nameElement.setValue(signUp.names.name)
    await SignUpTesting.email.setValue(randomdata.internet.email())
    await SignUpTesting.passwordElement.setValue(randomdata.internet.password(8))
    await SignUpTesting.signUpCheckbox.click()
    await SignUpTesting.signUpButton.click()
});
Then(/^I should see account created page with header text as \"([^\"]*)\"$/, async (letcodewithkoushik) => {
    await expect(SignUpTesting.accoutCreateValidate).toHaveText(letcodewithkoushik)
});


When(/^I click on Explore Workspace Button$/, async () => {
    await WorkspaceTest.workspaceButton.click()
});
Then(/^I should be navigated to Workspace page and I validate the header text \"([^\"]*)\"$/, async (practiceandbecomeprointestautomation) => {
    await expect(WorkspaceTest.workspaceValidation).toHaveText(practiceandbecomeprointestautomation)
});



When(/^I click on Input$/, async () => {
    await WorkspaceTest.inputElement.click()
});
Then(/^I navigate to input page with header \"([^\"]*)\"$/, async (input) => {
    await expect(WorkspaceTest.inputHeader).toHaveText(input)
});
When(/^I start to fill the Inputs$/, async () => {
    await WorkspaceTest.inputName.setValue(signUp.names.name)
    await WorkspaceTest.workspaceNavBar.click()
});



When(/^I click on Button$/, async () => {
    await WorkspaceTest.buttonElement.click()
});
Then(/^I validate Button page with header \"([^\"]*)\"$/, async (button) => {
    await expect(WorkspaceTest.buttonValidate).toHaveText(button)
});
When(/^I click on Hold Button$/, async () => {
    await WorkspaceTest.holdButton.waitForClickable()
    await WorkspaceTest.workspaceNavBar.click()
});



When(/^I click on Select option$/, async () => {
    await WorkspaceTest.selectElement.click()
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
    await WorkspaceTest.workspaceNavBar.click()
});



When(/^I click on Alert element$/, async () => {
    await WorkspaceTest.alertElement.click()
});
Then(/^I validate the header text \"([^\"]*)\"$/, async (alert) => {
    await expect(WorkspaceTest.alertHeader).toHaveText(alert)
});
When(/^I select different alert and handle them$/, async () => {
    await WorkspaceTest.alertTypes()
    await WorkspaceTest.workspaceNavBar.click()
});



When(/^I click on Windows element$/, async () => {
    await WorkspaceTest.windowElement.click()
});
Then(/^I validate the header with \"([^\"]*)\"$/, async (windows) => {
    await expect(WorkspaceTest.windowHeader).toHaveText(windows)
});
When(/^I select Open Home page and it navigates to new windows$/, async () => {
    await WorkspaceTest.gotoHomeButton.click()
    const navigateWindow = await browser.getWindowHandles()
    await browser.switchToWindow(navigateWindow[1])
});
Then(/^I validate the navigated window with \"([^\"]*)\"$/, async (header) => {
    await expect(WorkspaceTest.windowHeaderValidation).toHaveText(header)
    const navigateWindow = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(navigateWindow[0])
    await WorkspaceTest.workspaceNavBar.click()
});



When(/^I click on Elements element$/, async () => {
    await WorkspaceTest.elementsElement.click()
});
Then(/^validate the header with \"([^\"]*)\"$/, async (elements) => {
    await expect(WorkspaceTest.elementValidate).toHaveText(elements)
});
When(/^I enter the value and click search$/, async () => {
    await WorkspaceTest.gitNameValue(signUp.gitName)
    await WorkspaceTest.workspaceNavBar.click()
});



// Then(/^I click on Drop element and validate the header with \"([^\"]*)\"$/, async (drop) => {
//     await WorkspaceTest.dragdropElement.click()
//     await expect(WorkspaceTest.dragdropValidate).toHaveText(drop)
// });
// When(/^I perform drag and drop$/, async () => {
//     await WorkspaceTest.selectDrag.dragAndDrop(await WorkspaceTest.target)
// });
// Then(/^I should see header text \"([^\"]*)\" in Target$/, async (dropped) => {
//     await expect(WorkspaceTest.dragdroppedValidate).toHaveText(dropped)
//     await WorkspaceTest.workspaceNavBar.click()
// });



When(/^I click on MultiSelect element$/, async () => {
    await WorkspaceTest.multiSelectElement.click()
});
Then(/^validate the header with \"([^\"]*)\"$/, async (selectable) => {
    await expect(WorkspaceTest.multiSelectHeader).toHaveText(selectable)
});
When(/^I click on Multiple Option$/, async () => {
    await WorkspaceTest.multipleSelect()
    await WorkspaceTest.workspaceNavBar.click()
});



When(/^I click on Wait$/, async () => {
    await WorkspaceTest.waitElement.click()
});
Then(/^validate the header text with \"([^\"]*)\"$/, async (wait) => {
    await expect(WorkspaceTest.waitHeader).toHaveText(wait)
});
When(/^I click simple alert and wait for alert and accept alert$/, async () => {
    await WorkspaceTest.simpleAlertWait.click()
    await browser.pause(5000)
    await browser.acceptAlert()
    await WorkspaceTest.homeButton.click()
});



When(/^I click on Explore courses it navigates to course page$/, async () => {
    await CoursePage.CoursesElement.click()
});
Then(/^I validate the header text with \"([^\"]*)\"$/, async (courses) => {
    await expect(CoursePage.CourseHeader).toHaveText(courses)
});
Then(/^I check for available courses heading \"([^\"]*)\"$/, async (selenium) => {
    await expect(CoursePage.courseSelenium).toHaveText(selenium)
});
When(/^I click on a course and it navigates to the selected page$/, async () => {
    await CoursePage.seleniumCourseButton.click()
});
Then(/^I validate header with text \"([^\"]*)\" and go to homepage$/, async (seleniumwebdriver) => {
    await expect(CoursePage.seleniumCourseHeader).toHaveText(seleniumwebdriver)
    await CoursePage.homeButton.click()
});



When(/^I click on Product element and it navigates to XPath page$/, async () => {
    await ProductPageTest.productElemBtn.click()
});
Then(/^I validate the XPath page with header text \"([^\"]*)\"$/, async (letxpath) => {
    await expect(ProductPageTest.productPageValidate).toHaveText(letxpath)
});
When(/^I click on Try it today element it navigates to new extension window$/, async () => {
    await ProductPageTest.tryTodayButton.click()
    const extensionTab = browser.getWindowHandles()
    await browser.switchToWindow(extensionTab[1])
});
Then(/^I validate the Page header \"([^\"]*)\" and navigate back to LetCode Home page$/, async (letxpath) => {
    await expect(ProductPageTest.xPathExtensionHeader).toHaveText(letxpath)
    const productTab = browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(productTab[0])
    await ProductPageTest.homeButton.click()
});
