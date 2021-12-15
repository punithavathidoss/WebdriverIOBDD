class ProductPageTest{


get productElemBtn(){ return $("//a[text()='LetXPath']") }
get productPageValidate(){ return $("//h1") }
get tryTodayButton(){ return $("//a[contains(@href,'https://chrome.google.com/webstore/detail/letxpath/bekeh')]") }
get xPathExtensionHeader(){ return $("//h1[text()='LetXPath']") }
get homeButton() { return $("[fill='currentColor']") }

}
export default new ProductPageTest()