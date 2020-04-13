class BlazeElementState {

    get mainHeader() {
        return $('h2.home_title');
    }

    get jMeterLink() {
        return $("//a[text()='JMeter']");
    }

    //creating a wrapper 

    get productLink() {
        return $('ul.list-nav-links li:nth-child(1)  a');
    }

    clickOnProductLink() {
        if (this.productLink.isDisplayed() === true) {
            this.productLink.click();
        }

    }

}
module.exports = new BlazeElementState();