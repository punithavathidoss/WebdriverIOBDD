class ProductPageTest{


get productElemBtn(){ return $("//a[text()='LetXPath']") }
get productPageValidate(){ return $("//h1") }
get tryTodayButton(){ return $("//a[contains(@href,'https://chrome.google.com/webstore/detail/letxpath/bekeh')]") }
get xPathExtensionHeader(){ return $("//h1[text()='LetXPath']") }
get homeButton() { return $("[fill='currentColor']") }

async product(){
    await this.productElemBtn.click()
}
async tryItTodayButton(){
    await this.tryTodayButton.click()
}

}
export default new ProductPageTest()