import report from '@wdio/allure-reporter'

class LetCodeSignUpTesting {

    async page() {
        await browser.url("https://letcode.in/")
        report.addStep('loading URL')
    }

    get signUpBtn() { return $("//a[text()='Log in']/preceding-sibling::a") }
    get signUpheader() { return $("//h1") }
    get nameElement() { return $("//input[@placeholder = 'Enter your name']") }
    get email() { return $("//input[@placeholder ='Enter valid email address']") }
    get passwordElement() { return $("//input[@placeholder = 'Enter your password']") }
    get signUpCheckbox() { return $("#agree") }
    get signUpButton() { return $("//button[@class = 'button is-primary']") }
    get accoutCreateValidate() { return $("//h1[text()=' LetCode with Koushik']") }

    async signUp() {
        await this.signUpBtn.click()
        report.addStep(`Clicked on Sign Up Button: ${this.signUpBtn.click()}`)
    }
    async signUpAcception() {
        await this.signUpCheckbox.click()
        report.addStep(`Mark the sign up check box: ${this.signUpCheckbox.click()}`)
        await this.signUpButton.click()
        report.addStep(`Clicking on Sign up: ${this.signUpButton.click()}`)
    }
}
export default new LetCodeSignUpTesting()