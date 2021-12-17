class SignUpTesting {

    async page() {
        await browser.url("https://letcode.in/")
    }

    get signUpBtn() { return $("//a[text()='Log in']/preceding-sibling::a") }
    get signUpheader() { return $("//h1") }
    get nameElement() { return $("//input[@placeholder = 'Enter your name']") }
    get email() { return $("//input[@placeholder ='Enter valid email address']") }
    get passwordElement() { return $("//input[@placeholder = 'Enter your password']") }
    get signUpCheckbox() { return $("#agree") }
    get signUpButton() { return $("//button[@class = 'button is-primary']") }
    get accoutCreateValidate(){ return $("//h1[text()=' LetCode with Koushik']") }

    async signUp(){
        await this.signUpBtn.click()
    }
    async signUpAcception(){
        await this.signUpCheckbox.click()
        await this.signUpButton.click()
    }
}
export default new SignUpTesting()