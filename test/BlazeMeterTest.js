const blazePage = require("../pages/BlazeMeter");
const blazePageElementState = require("../pages/BlazeMeterElementState");

describe("blaze page elements handle", function () {
    it("get text of main links", function () {
        browser.url("https://www.blazemeter.com/");
        // blazePage.getTextForLi;
        // blazePage.useCasesElementsText;
        console.log('third link is :', blazePage.specificChildElement(3).getText());
        console.log('fourth link is', blazePage.getSpecificChildElementText(4));
    });

    it("mian heading exists?", function () {
        console.log('heading is prsent or not:', blazePageElementState.mainHeader.isDisplayed());
    });

    it("mian heading enabled?", function () {
        console.log('heading is enabled or not:',
            blazePageElementState.mainHeader.isEnabled());
    });

    it("mian heading exists?", function () {
        console.log('heading exists in dom or not:',
            blazePageElementState.mainHeader.isExisting());
    });

    it("mian heading is displayed in view port?", function () {
        console.log('heading disaplyed in view port or not:',
            blazePageElementState.mainHeader.isDisplayedInViewport());
    });

    it("JMeter link is displayed in view port?", function () {
        console.log('JMeter link is displayed in view port or not:',
            blazePageElementState.jMeterLink.isDisplayedInViewport());
    });

    it("click on product link if displayed", function () {
        browser.pause(5000);
        blazePageElementState.clickOnProductLink();
        browser.pause(5000);
    })

})