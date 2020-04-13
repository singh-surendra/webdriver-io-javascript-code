const loginPage = require("../pages/LoginPage");
const loginData = require("../testData/loginData")

describe("handling application login ", function () {
    it("check enter username", function () {
        browser.url("https://the-internet.herokuapp.com/login");
        loginPage.enterUserName(loginData.username);
        assert.equal(loginData.username, loginPage.userName.getValue());
    });

    it("check enter password", function () {
        loginPage.enterPassword(loginData.password);
        assert.equal(loginData.password, loginPage.password.getValue());
    });

    it.skip("click login button", function () {
        loginPage.clickOnLogin();
    });

    //clear value : 1. click on it 
    // 2. user "clearValue()" method
    it.skip("should clear username value ", function () {
        loginPage.userName.click();
        loginPage.userName.clearValue();
        assert.equal('', loginPage.userName.getValue());  //pass
    });

})