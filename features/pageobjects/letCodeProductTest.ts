import report from '@wdio/allure-reporter'

class LetCodeProductTest{


get productElemBtn(){ return $("//a[text()='Product']") }
get productPageValidate(){ return $("//h1") }
get tryTodayButton(){ return $("//a[contains(@href,'https://chrome.google.com/webstore/detail/letxpath/bekeh')]") }
get xPathExtensionHeader(){ return $("//h1[text()='LetXPath']") }
get homeButton() { return $("[fill='currentColor']") }

async product(){
    await this.productElemBtn.click()
    report.addStep(`Clicking On Product Element: ${this.productElemBtn.click}`)
}
async tryItTodayButton(){
    await this.tryTodayButton.click()
    report.addStep(`Clicking on Try it today option: ${this.tryTodayButton.click()}`)
}

}
export default new LetCodeProductTest()