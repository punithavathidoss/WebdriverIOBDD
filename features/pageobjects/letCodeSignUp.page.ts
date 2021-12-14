class SignUpTesting {

    async page() { await browser.url("https://letcode.in/") }
    get signUp() { return $("//a[text()='Log in']/preceding-sibling::a") }
    get signUpheader() { return $("//h1") }
    get nameElement() { return $("//input[@placeholder = 'Enter your name']") }
    get email() { return $("//input[@placeholder ='Enter valid email address']") }
    get passwordElement() { return $("//input[@placeholder = 'Enter your password']") }
    get signUpCheckbox() { return $("#agree") }
    get signUpButton() { return $("//button[@class = 'button is-primary']") }
    get accoutCreateValidate(){ return $("//h1[text()=' LetCode with Koushik']") }

}
export default new SignUpTesting()