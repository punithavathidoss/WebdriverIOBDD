import report from '@wdio/allure-reporter'

class LetCodeCoursePage {

    get coursesElement() { return $("//a[text()='Explore courses']") }
    get courseHeader() { return $("//h1") }
    get courseSelenium() { return $("//p[text()=' Selenium Webdriver ']") }
    get seleniumCourseButton() { return $("//button[text()='View more']") }
    get seleniumCourseHeader() { return $("//p[text()=' Selenium Webdriver ']") }

    async course() {
        await this.coursesElement.click()
        report.addStep(`Clicking on Course Button: ${this.coursesElement.click()}`)
    }
    async seleniumCourse() {
        await this.seleniumCourseButton.click()
        report.addStep(`Clicking On Selenium Course: ${this.seleniumCourseButton.click()}`)
    }
}
export default new LetCodeCoursePage()