import { Given, When, Then } from '@wdio/cucumber-framework';
import randomdata from "faker"
import signUp from "../testdata/signUp.json"
import SignUpTesting from "../pageobjects/letCodeSignUp.page"
import WorkspaceTest from "../pageobjects/letCodeWorkspaceTest"



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
Then(/^I click on Hold Button and validating$/, async () => {
    await WorkspaceTest.holdButton.click()
});



Then(/^I click on Select option and I validate the header \"([^\"]*)\"$/, async (dropdown) => {
    await
});
When(/^I select different options in different dropdowns$/, async () => {
    await
});
Then(/^I validate wheather its selected$/, async () => {
    await
});



Then(/^I click on Alert element and I validate the header text \"([^\"]*)\"$/, async (alert) => {
    await
});
When(/^I select simple alert and handle$/, async () => {
    await
});
When(/^I select Confirm alert and handle$/, async () => {
    await
});
When(/^I select Prompt Alert and Handle it$/, async () => {
    await
});




Then(/^I click on Windows element and validate the header with \"([^\"]*)\"$/, async (windows) => {
    await
});
When(/^I select Open Home page and it navigates to new windows$/, async () => {
    await
});
Then(/^I validate the navigated window$/, async () => {
    await
});



Then(/^I click on Elements element and validate the header with \"([^\"]*)\"$/, async (elements) => {
    await
});
When(/^I enter the value and click search$/, async () => {
    await
});



Then(/^I click on Drop element and validate the header with \"([^\"]*)\"$/, async (drop) => {
    await
});
When(/^I perform drag and drop$/, async () => {
    await
});
Then(/^I should see header text \"([^\"]*)\" in Target$/, async (dropped) => {
    await
});



Then(/^I click on MultiSelect element and validate the header with \"([^\"]*)\"$/, async (selectable) => {
    await
});
When(/^I click on Multiple Option$/, async () => {
    await
});



// Then(/^I click on Slider element and validate the header text with \"([^\"]*)\"$/, async (slider) => {
//     await
// });
// When(/^I slide and click Get countries$/, async () => {
//     await
// });
// Then(/^I validate the countries listed$/, async () => {
//     await
// });



// Then(/^I click on Calender element and validate the header text with \"([^\"]*)\"$/, async (calender) => {
//     await
// });
// When(/^I select the dates$/, async () => {
//     await
// });
// Then(/^I validate the selected date selected text$/, async () => {
//     await
// });



Then(/^I click on Wait and validate the header text with \"([^\"]*)\"$/, async (wait) => {
    await
});
When(/^I click simple alert and wait for alert$/, async () => {
    await
});
Then(/^I validate the alert box and click Ok buttton$/, async () => {
    await
});




When(/^I click on Explore courses it navigates to course page$/, async () => {
    await
});
Then(/^I validate the header text with \"([^\"]*)\"$/, async (courses) => {
    await
});
Then(/^I check for available courses heading$/, async () => {
    await
});
When(/^I click on a course and it navigates to the selected page$/, async () => {
    await
});
Then(/^I validate header with text \"([^\"]*)\"$/, async (seleniumwebdriver) => {
    await
});



When(/^I click on Product element and it navegates to XPath page$/, async () => {
    await
});
Then(/^I validate the XPath page with header text \"([^\"]*)\"$/, async (letxpath) => {
    await
});
When(/^I click on Try it today element it navigates to new extention window$/, async () => {
    await
});
Then(/^I validate the Page header \"([^\"]*)\" and navigate back to LetCode Home page$/, async (letxpath) => {
    await
});
