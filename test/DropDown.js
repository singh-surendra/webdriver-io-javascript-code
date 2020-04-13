describe("drop down handling", function () {
    it.skip("select dropdown value by text", function () {
        browser.url("https://www.facebook.com/");
        browser.pause(2000);
        $('#day').selectByVisibleText('10');
        $('#month').selectByVisibleText('Apr');
        $('#year').selectByVisibleText('1990');
        browser.pause(3000);

    })

    it.skip("select dropdown value by index", function () {
        browser.url("https://www.facebook.com/");
        browser.pause(2000);
        $('#day').selectByIndex(3);
        $('#month').selectByIndex(9);
        $('#year').selectByIndex(13);
        browser.pause(3000);

    })

    it.skip("select dropdown value by attribute", function () {
        browser.url("https://www.facebook.com/");
        browser.pause(2000);
        $('#day').selectByAttribute('value', "25");
        $('#month').selectByAttribute('value', "7");
        $('#year').selectByAttribute('value', "2015");
        browser.pause(3000);
    })

    //print all values from drop down :
    //select a particular value from dropdown when 'select; tag is not available
    it.skip("get all values from month -dropdown and select a particular value ", function () {
        browser.url("https://www.facebook.com/");
        browser.pause(2000);
        let list = $$('#month option');
        console.log('lenght is', list.length);

        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            console.log('element is:', element.getText());
            if(element.getText() === 'Mar'){
                element.click();
                break;
            }
        }

        browser.pause(3000);
    })


})