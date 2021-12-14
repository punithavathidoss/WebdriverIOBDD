class WorkspaceTest {

    get workspaceButton() { return $("//a[text()='Explore Workspace']") }
    get workspaceValidation() { return $("//h1") }
    get workspaceNavBar() { return $("#testing") }
    
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

    get alertElement() { return $("//a[text()='Dialog']") }
    get alertHeader() { return $("//h1") }
    get simpleAlert() { return $("#accept") }
    get confirmAlert() { return $("#confirm") }
    get promptAlert() { return $("#prompt") }

    get windowElement() { return $("//a[text()='Tabs']") }
    get windowHeader() { return $("//h1") }
    get gotoHomeButton() { return $("#home") }

    get elementsElement() { return $("//a[text()='Find Elements']") }
    get elementValidate() { return $("//h1") }
    get gitName() { return $("//input[@name='username']") }
    get searchButton() { return $("#search") }

    get dragdropElement() { return $("//a[text()='AUI - 2']") }
    get dragdropValidate() { return $("//h1") }
    get selectDrag() { return $("//div[@id='draggable']") }
    get dragdroppedValidate() { return ("//p[text()='Dropped!']") }

    get multiSelectElement() { return $("//a[text()='AUI - 4']") }
    get multiSelectHeader() { return $("//h1") }
    get selectSelenium() { return $("//h3[text()='Selenium']") }
    get selectTestNg() { return $("//h3[text()='TestNg']") }
    get selectPostman() { return $("//h3[text()='Postman']") }

    // get slideElement() { return $("//a[text()='AUI - 5']") }
    // get SlideHeader(){return $("")}

    // get calenderElement() { return $("//a[text()='Date & Time']") }
    // get calenderValidate() { return $("//h1") }
    // get () { return $("") }
    // get selectdateValidate() { return $("") }

    get waitElement() { return $("//a[text()='Timeout']") }
    get waitHeader() { return $("//h1") }
    get simpleAlertWait() { return $("#accept") }
    //get waitAlertValidate() { return $("") }


}
export default new WorkspaceTest()