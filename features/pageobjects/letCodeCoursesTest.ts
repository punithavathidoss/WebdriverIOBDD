class CoursePage {

    get CoursesElement() { return $("//a[text()='Explore courses']") }
    get CourseHeader() { return $("//h1") }
    get courseSelenium() { return $("//p[text()=' Selenium Webdriver ']") }
    get seleniumCourseButton() { return $("//button[text()='View more']") }
    get seleniumCourseHeader() { return $("//p[text()=' Selenium Webdriver ']") }

    async Course() {
        await this.CoursesElement.click()
    }
    async seleniumCourse(){
        await this.seleniumCourseButton.click()
    }
}
export default new CoursePage()