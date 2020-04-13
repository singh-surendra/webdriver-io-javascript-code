describe("wait for delete button using waitForExist", function () {

    it.skip("should wait for delete button ", function () {
        browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
        const addElement = $(`//button[text()='Add Element']`)
        const deleteElement = $(`//button[text()='Delete']`)
        addElement.waitForDisplayed()
        addElement.click();

        deleteElement.waitForExist(4000);
        assert.equal(true, deleteElement.isExisting())
        browser.pause(4000)

        deleteElement.click();
        assert.equal(false, deleteElement.isExisting())
        browser.pause(4000)
    })


    it("should wait and click preview button ", function () {
        browser.url("https://app.hubspot.com/login")
        const email = $('#username')
        const password = $('#password')
        const loginBtn = $('#loginBtn')
       //login steps
        email.waitForDisplayed();
        email.setValue('surendra010191@gmail.com')
        password.setValue('Basant@2019')
        loginBtn.click();

        //this is my landing on contact page

        $(`//*[@id='nav-primary-contacts-branch']`).waitForDisplayed();
        $(`//*[@id='nav-primary-contacts-branch']`).click();

        $(`//*[@id='nav-secondary-contacts']`).waitForDisplayed();
        $(`//*[@id='nav-secondary-contacts']`).click();
        
        browser.pause(4000)
        const previewBtn = $(`//span[text()='Surendra Singh']//ancestor::a//following-sibling::span/button`)
        previewBtn.moveTo()
        previewBtn.waitForExist(3000)
        previewBtn.waitForDisplayed()
        previewBtn.click()
        browser.pause(4000)

    })

})