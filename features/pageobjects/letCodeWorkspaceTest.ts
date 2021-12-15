class WorkspaceTest {

    get workspaceButton() { return $("//a[text()='Explore Workspace']") }
    get workspaceValidation() { return $("//h1") }
    get workspaceNavBar() { return $("#testing") }
    get homeButton() { return $("[fill='currentColor']") }

    get inputElement() { return $("//a[text()='Edit']") }
    get inputHeader() { return $("//h1") }
    get inputName() { return $("#fullName") }

    get buttonElement() { return $("//a[text()='Click']") }
    get buttonValidate() { return $("//h1") }
    get holdButton() { return $("//h2/ancestor::button") }

    get selectElement() { return $("//a[@href='/dropdowns']") }
    get dropdownHeader() { return $("//h1") }
    get dropdownSelect() { return $("#fruits") }
    get selectByIndexNo() { return $("#superheros") }
    get dropdownValidation() { return $("//p[text()='You have selected Apple']") }

    get alertElement() { return $("//a[text()='Dialog']") }
    get alertHeader() { return $("//h1") }
    get simpleAlert() { return $("#accept") }
    get confirmAlert() { return $("#confirm") }
    get promptAlert() { return $("#prompt") }

    get windowElement() { return $("//a[text()='Tabs']") }
    get windowHeader() { return $("//h1") }
    get gotoHomeButton() { return $("#home") }
    get windowHeaderValidation() { return $("//h1") }

    get elementsElement() { return $("//a[text()='Find Elements']") }
    get elementValidate() { return $("//h1") }
    get gitName() { return $("//input[@name='username']") }
    get searchButton() { return $("#search") }

    get dragdropElement() { return $("//a[text()='AUI - 2']") }
    get dragdropValidate() { return $("//h1") }
    get selectDrag() { return $("//div[@id='draggable']") }
    get target() { return $(".ui-widget-header.ui-droppable.ui-state-highlight") }
    get dragdroppedValidate() { return ("//p[text()='Dropped!']") }

    get multiSelectElement() { return $("//a[text()='AUI - 4']") }
    get multiSelectHeader() { return $("//h1") }
    get selectSelenium() { return $("//h3[text()='Selenium']") }
    get selectTestNg() { return $("//h3[text()='TestNg']") }
    get selectPostman() { return $("//h3[text()='Postman']") }


    get waitElement() { return $("//a[text()='Timeout']") }
    get waitHeader() { return $("//h1") }
    get simpleAlertWait() { return $("#accept") }

    async dropdownFruit() {
        await this.dropdownSelect.click()
        await this.dropdownSelect.selectByVisibleText("Apple")
    }
    async dropdownSuperHeor() {
        await this.selectByIndexNo.selectByIndex(2)
    }
    async alertTypes() {
        await this.simpleAlert.click()
        await browser.acceptAlert()

        await this.confirmAlert.click()
        await browser.acceptAlert()

        await this.promptAlert.click()
        await browser.sendAlertText("Punroos")
        await browser.acceptAlert()
    }
    async windowHandle() {
        await this.gotoHomeButton.click()
    }
    async gitNameValue(gitName: { name: string }) {
        await this.gitName.setValue(gitName.name)
    }
    async multipleSelect() {
        await this.selectSelenium.click()
        await this.selectTestNg.click()
        await this.selectPostman.click()
    }
}
export default new WorkspaceTest()