describe("wait until sync for the elements using waitUntil method", function () {

    it("wait for home page", function () {
        browser.url("https://app.hubspot.com/login")
        const email = $('#username')
        const password = $('#password')
        const loginBtn = $('#loginBtn')
        
        //dynamic wait 
        browser.waitUntil(function(){
            return email.isDisplayed() == true
        }, 6000, 'email is not displayed after given time')

        email.setValue('surendra010191@gmail.com')
        password.setValue('Basant@2019')
        loginBtn.click();

        //about demo section

        const header = $(`//*[contains(text(),'Take a closer look at how HubSpot works.')]`)
        browser.waitUntil(function(){
            return header.getText() === 'Take a closer look at how HubSpot works.'
        }, 6000, 'header is not displayed after given time')
        console.log(header.getText());
        assert.equal('Take a closer look at how HubSpot works.',header.getText());

        browser.pause(5000);
        
    })

})