describe("wait for enabled case", function () {

    it.skip("should wait for button to be enabled", function () {
        browser.url("https://classic.freecrm.com/register/")
        const checkBox = $(`//input[@name='agreeTerms']`)
        const submitBtn = $('#submitButton')
        browser.pause(4000)
        checkBox.click();

        submitBtn.waitForEnabled(4000)
        assert.equal(true, submitBtn.isEnabled())
        browser.pause(4000)
    })

    it("should wait for button to be disabled", function () {
        browser.url("https://classic.freecrm.com/register/")
        const checkBox = $(`//input[@name='agreeTerms']`)
        const submitBtn = $('#submitButton')
        checkBox.click();
        checkBox.waitForDisplayed();
        submitBtn.waitForEnabled(4000)
        assert.equal(true, submitBtn.isEnabled())
        checkBox.waitForDisplayed();
        checkBox.click();
       
        //wait for element to be disabled
        submitBtn.waitForEnabled(4000,true)   //opposite of enabled
        assert.equal(false, submitBtn.isEnabled())
        browser.pause(4000)
    })


})