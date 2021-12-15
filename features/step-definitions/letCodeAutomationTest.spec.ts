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
Then(/^I click on signup and I validate the header \"([^\"]*)\"$/, async (signup) => {
    await SignUpTesting.signUp.click()
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



Then(/^I click on Input and I navigate to input page with header \"([^\"]*)\"$/, async (input) => {
    await WorkspaceTest.inputElement.click()
    await expect(WorkspaceTest.inputHeader).toHaveText(input)
});
When(/^I start to fill the inputs$/, async () => {
    await WorkspaceTest.inputName.setValue(signUp.names.name)
    await WorkspaceTest.workspaceNavBar.click()
});



Then(/^I click on Button and I validate Button page with header \"([^\"]*)\"$/, async (button) => {
    await WorkspaceTest.buttonElement.click()
    await expect(WorkspaceTest.buttonValidate).toHaveText(button)
});
Then(/^I click on Hold Button$/, async () => {
    await WorkspaceTest.holdButton.waitForClickable()
    await WorkspaceTest.workspaceNavBar.click()
});



Then(/^I click on Select option and I validate the header \"([^\"]*)\"$/, async (dropdown) => {
    await WorkspaceTest.selectElement.click()
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



Then(/^I click on Alert element and I validate the header text \"([^\"]*)\"$/, async (alert) => {
    await WorkspaceTest.alertElement.click()
    await expect(WorkspaceTest.alertHeader).toHaveText(alert)
});
When(/^I select different alert and handle them$/, async () => {
    await WorkspaceTest.alertTypes()
    await WorkspaceTest.workspaceNavBar.click()
});



// Then(/^I click on Windows element and validate the header with \"([^\"]*)\"$/, async (windows) => {
//     await WorkspaceTest.windowElement.click()
//     await expect(WorkspaceTest.windowHeader).toHaveText(windows)
// });
// When(/^I select Open Home page and it navigates to new windows$/, async () => {
//     await WorkspaceTest.gotoHomeButton.click()
//     await browser.switchToWindow('https://letcode.in/test')
// });
// Then(/^I validate the navigated window with \"([^\"]*)\"$/, async (header) => {
//     await expect(WorkspaceTest.windowHeaderValidation).toHaveText(header)
//     await browser.closeWindow()
//     await WorkspaceTest.workspaceNavBar.click()
// });



Then(/^I click on Elements element and validate the header with \"([^\"]*)\"$/, async (elements) => {
    await WorkspaceTest.elementsElement.click()
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



Then(/^I click on MultiSelect element and validate the header with \"([^\"]*)\"$/, async (selectable) => {
    await WorkspaceTest.multiSelectElement.click()
    await expect(WorkspaceTest.multiSelectHeader).toHaveText(selectable)
});
When(/^I click on Multiple Option$/, async () => {
    await WorkspaceTest.multipleSelect()
    await WorkspaceTest.workspaceNavBar.click()
});



Then(/^I click on Wait and validate the header text with \"([^\"]*)\"$/, async (wait) => {
    await WorkspaceTest.waitElement.click()
    await expect(WorkspaceTest.waitHeader).toHaveText(wait)
});
When(/^I click simple alert and wait for alert$/, async () => {
    await WorkspaceTest.simpleAlertWait.click()
    await WorkspaceTest.simpleAlertWait.waitForDisplayed()
    if(await browser.isAlertOpen()){}
    await browser.acceptAlert()
});
Then(/^I validate the alert box and click Ok buttton$/, async () => {
    await browser.getAlertText()
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
});
Then(/^I validate the Page header \"([^\"]*)\" and navigate back to LetCode Home page$/, async (letxpath) => {
    await expect(ProductPageTest.xPathExtensionHeader).toHaveText(letxpath)
    await ProductPageTest.homeButton.click()
});
