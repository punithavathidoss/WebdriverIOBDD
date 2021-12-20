import report from '@wdio/allure-reporter'

class LetCodeWorkspaceTest {

    get workspaceButton() { return $("//a[text()='Explore Workspace']") }
    get workspaceValidation() { return $("//h1") }
    get workspaceNavBar() { return $("#testing") }
    get homeButton() { return $("[fill='currentColor']") }


    async home() {
        await this.homeButton.click()
        report.addStep(`Clicking Home Button Icon: ${await this.homeButton.click()}`)

    }
    async workspace() {
        await this.workspaceNavBar.click()
        report.addStep(`Clicking Workspace button: ${await this.workspaceNavBar.click()}`)
    }
    async workspaceSetUp() {
        await browser.url("https://letcode.in/test")
    }

    get inputElement() { return $("//a[text()='Edit']") }
    get inputHeader() { return $("//h1") }
    get inputName() { return $("#fullName") }

    async input() {
        await this.inputElement.click()
        report.addStep(`Clicking on Input Button: ${this.inputElement.click}`)
    }
    async inputValue(names: { name: string }) {
        await this.inputName.setValue(names.name)
        report.addStep(`Entered Value: ${names.name}`)
    }

    get buttonElement() { return $("//a[text()='Click']") }
    get buttonValidate() { return $("//h1") }
    get alertholdButton() { return $("//h2/ancestor::button") }

    async button() {
        await this.buttonElement.click()
        report.addStep(`Clicking on Button element: ${this.buttonElement.click}`)
    }
    async holdButton() {
        await this.alertholdButton.waitForClickable()
        report.addStep(`Clicking on Hold and Alert Button: ${this.alertholdButton.click}`)
        await this.workspaceNavBar.click()

    }

    get selectElement() { return $("//a[@href='/dropdowns']") }
    get dropdownHeader() { return $("//h1") }
    get dropdownSelect() { return $("#fruits") }
    get selectByIndexNo() { return $("#superheros") }
    get dropdownValidation() { return $("//p[text()='You have selected Apple']") }

    async select() {
        await this.selectElement.click()
        report.addStep(`Clicking Select Button for Drop down: ${this.selectElement.click}`)
    }
    async dropdownFruit() {
        await this.dropdownSelect.click()
        report.addStep(`Clicking on Fruits drop down: ${this.dropdownSelect.click}`)
        await this.dropdownSelect.selectByVisibleText("Apple")
        report.addStep(`Selection by visible text: ${await this.dropdownSelect.selectByVisibleText("Apple")}`)
    }
    async dropdownSuperHero() {
        await this.selectByIndexNo.selectByIndex(2)
        report.addStep(`Selecting SuperHero name from dropdown using Index number`)
    }


    get elementsElement() { return $("//a[text()='Find Elements']") }
    get elementValidate() { return $("//h1") }
    get gitName() { return $("//input[@name='username']") }
    get searchButton() { return $("#search") }

    async element() {
        await this.elementsElement.click()
        report.addStep(`Clicking on Element Button: ${this.elementsElement.click}`)
    }
    async gitNameValue(gitName: { name: string }) {
        await this.gitName.setValue(gitName.name)
        report.addStep(`Passing value as : ${gitName.name}`)
    }


    get multiSelectElement() { return $("//a[text()='AUI - 4']") }
    get multiSelectHeader() { return $("//h1") }
    get selectSelenium() { return $("//h3[text()='Selenium']") }
    get selectTestNg() { return $("//h3[text()='TestNg']") }
    get selectPostman() { return $("//h3[text()='Postman']") }

    async multiSelect() {
        await this.multiSelectElement.click()
        report.addStep(`Clicking on Multi Select Button: ${this.multiSelectElement.click}`)
    }
    async multipleSelect() {
        await this.selectSelenium.click()
        report.addStep(`Clicking on Selenium Button: ${this.selectSelenium.click}`)
        await this.selectTestNg.click()
        report.addStep(`Clicking on TestNg Button: ${this.selectTestNg.click}`)
        await this.selectPostman.click()
        report.addStep(`Clicking on Postman Button: ${this.selectPostman.click}`)
        await this.workspaceNavBar.click()
    }

    get waitElement() { return $("//a[text()='Timeout']") }
    get waitHeader() { return $("//h1") }
    get simpleAlertWaitBtn() { return $("#accept") }

    async wait() {
        await this.waitElement.click()
        report.addStep(`Clicking on wait Button: ${this.waitElement.click}`)
    }
    async simpleAlertWait() {
        await this.simpleAlertWaitBtn.click()
        report.addStep(`Clicking On simple Alert and Wait: ${await this.simpleAlertWaitBtn.click()}`)
    }

    get fileManagementBtn() { return $("//a[text()='File management']") }
    get uploadHeader() { return $("//h2[text()='Upload ']") }
    get chooseFileBtn() { return $("//span[text()=' Choose a file… ']") }

    async fileManagement() {
        await this.fileManagementBtn.click()
        report.addStep(`Clicking on Files Button`)
    }
    async fileHeader() {
        await this.uploadHeader.click()
    }
    async chooseFileAsImg() {
        await this.chooseFileBtn.click()
    }

}
export default new LetCodeWorkspaceTest()