class CRMPage {
   get forgotPasswordLink(){ 
    return $('=Forgot Password?');  //link text
}
 moveToElement(element){
    element.waitForDisplayed();
    element.moveTo();
 }




}

module.exports = new CRMPage();
