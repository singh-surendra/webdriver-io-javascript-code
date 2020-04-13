class InternetPage {
    //https://the-internet.herokuapp.com/
   
    get h3Header(){
        return $('h3');
    }

    linkElement(index) {
        return $(`ul li:nth-child(${index}) a`);
    }

    clickOnLink(index) {
        this.linkElement(index).waitForDisplayed();
        this.linkElement(index).click();
    }

    getCheckBoxElement(index) {
        return $(`form#checkboxes input:nth-child(${index})`)
    }

    clickCheckBox(index){
      this.getCheckBoxElement(index).waitForDisplayed();
      this.getCheckBoxElement(index).click();
    }
}

module.exports = new InternetPage();