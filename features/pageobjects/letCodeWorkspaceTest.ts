class WorkspaceTest {

    get workspaceButton() { return $("//a[text()='Explore Workspace']") }
    get workspaceValidation() { return $("//h1") }
    get workspaceNavBar() { return $("#testing") }
    get homeButton() { return $("[fill='currentColor']") }

    async home() {
        await this.homeButton.click()
    }
    async workspace() {
        await this.workspaceNavBar.click()
    }

    get inputElement() { return $("//a[text()='Edit']") }
    get inputHeader() { return $("//h1") }
    get inputName() { return $("#fullName") }

    async input() {
        await this.inputElement.click()
    }
    async inputValue(names: { name: string }) {
        await this.inputName.setValue(names.name)
    }

    get buttonElement() { return $("//a[text()='Click']") }
    get buttonValidate() { return $("//h1") }
    get alertholdButton() { return $("//h2/ancestor::button") }

    async button() {
        await this.buttonElement.click()
    }
    async holdButton() {
        await this.alertholdButton.waitForClickable()
        await this.workspaceNavBar.click()
    }

    get selectElement() { return $("//a[@href='/dropdowns']") }
    get dropdownHeader() { return $("//h1") }
    get dropdownSelect() { return $("#fruits") }
    get selectByIndexNo() { return $("#superheros") }
    get dropdownValidation() { return $("//p[text()='You have selected Apple']") }

    async select() {
        await this.selectElement.click()
    }
    async dropdownFruit() {
        await this.dropdownSelect.click()
        await this.dropdownSelect.selectByVisibleText("Apple")
    }
    async dropdownSuperHeor() {
        await this.selectByIndexNo.selectByIndex(2)
    }

    get alertElement() { return $("//a[text()='Dialog']") }
    get alertHeader() { return $("//h1") }
    get simpleAlert() { return $("#accept") }
    get confirmAlert() { return $("#confirm") }
    get promptAlert() { return $("#prompt") }

    async alert() {
        await this.alertElement.click()
    }
    async alertTypes() {
        await this.simpleAlert.click()
        await browser.acceptAlert()

        await this.confirmAlert.click()
        await browser.acceptAlert()

        await this.promptAlert.click()
        await browser.sendAlertText("Punroos")
        await browser.acceptAlert()
        await this.workspaceNavBar.click()
    }

    get windowElement() { return $("//a[text()='Tabs']") }
    get windowHeader() { return $("//h1") }
    get gotoHomeButton() { return $("#home") }
    get windowHeaderValidation() { return $("//h1") }

    async Windows() {
        await this.windowElement.click()
    }
    async windowHandle() {
        await this.gotoHomeButton.click()
    }

    get elementsElement() { return $("//a[text()='Find Elements']") }
    get elementValidate() { return $("//h1") }
    get gitName() { return $("//input[@name='username']") }
    get searchButton() { return $("#search") }

    async element() {
        await this.elementsElement.click()
    }
    async gitNameValue(gitName: { name: string }) {
        await this.gitName.setValue(gitName.name)
    }

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

    async multiSelect() {
        await this.multiSelectElement.click()
    }
    async multipleSelect() {
        await this.selectSelenium.click()
        await this.selectTestNg.click()
        await this.selectPostman.click()
        await this.workspaceNavBar.click()
    }

    get waitElement() { return $("//a[text()='Timeout']") }
    get waitHeader() { return $("//h1") }
    get simpleAlertWaitBtn() { return $("#accept") }

    async wait() {
        await this.waitElement.click()
    }
    async simpleAlertWait() {
        await this.simpleAlertWaitBtn.click()
    }

}
export default new WorkspaceTest()