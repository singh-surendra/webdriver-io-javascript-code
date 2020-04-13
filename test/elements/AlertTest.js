const alertPage = require("/Users/surendra.singh/Documents/SuriPersonal/web-driver-io-practice/pages/AlertPage.js");
describe("handle alert pop ups", function () {

    it("accept alert ", function () {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        browser.pause(2000);
        alertPage.clickOnAlertButton(1);
        //capture alert text
        const alertText = browser.getAlertText();
        assert.equal('I am a JS Alert', alertText);
        console.log(alertText);
        //accept alert
        browser.acceptAlert();
        console.log(alertPage.getResultText());
        assert.equal('You successfuly clicked an alert', alertPage.getResultText());
        browser.pause(3000);
    })

    it.skip("dismiss alert ", function () {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        browser.pause(2000);
        alertPage.clickOnAlertButton(2);
        //dismiss alert
        browser.dismissAlert();
        console.log(alertPage.getResultText());
        assert.equal('You clicked: Cancel', alertPage.getResultText());
        browser.pause(3000);

    })

    it.skip("enter text on alert and accept ", function () {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        browser.pause(2000);
        alertPage.clickOnAlertButton(3);
        //send text to alert, it will automatically accpet the alert
        browser.sendAlertText('this is suri');
        browser.pause(2000);
        console.log(alertPage.getResultText());
        assert.equal('You entered: this is suri', alertPage.getResultText());
        browser.pause(3000);
    })

    it("alert accpet on reddif mail login page ", function () {
        browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
        $(`//input[@type='submit']`).waitForDisplayed();
        $(`//input[@type='submit']`).click();
        browser.pause(3000);
        //capture text
        const text = browser.getAlertText();
        console.log(text);
        assert.equal('Please enter a valid user name', text);
        browser.acceptAlert();
        browser.pause(3000);
    })

})
