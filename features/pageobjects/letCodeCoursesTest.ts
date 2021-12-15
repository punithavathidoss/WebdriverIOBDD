class CoursePage{

get CoursesElement(){return $("//a[text()='Explore courses']")}
get CourseHeader(){return $("//h1")}
get courseSelenium(){return $("//p[text()=' Selenium Webdriver ']")}
get seleniumCourseButton(){return $("//button[text()='View more']")}
get seleniumCourseHeader(){return $("//p[text()=' Selenium Webdriver ']")}
get homeButton() { return $("[fill='currentColor']") }
}
export default new CoursePage()