// const spiceJet = require("../pages/Actions.Page");

// describe("page actions Features", function () {
//     // it("move to element", function () {
//     //     browser.url("https://www.spicejet.com/");
//     //     spiceJet.moveToElement(spiceJet.loginSignUpLink);
//     //     spiceJet.moveToElement(spiceJet.spiceClubMembersLink);
//     //     spiceJet.moveToElement(spiceJet.memberLoginLink);
//     //     spiceJet.clickElement(spiceJet.memberLoginLink);
//     //     browser.pause(2000);
//     // });

//     it("keys action perform- tab", function () {
//         browser.url("https://the-internet.herokuapp.com/key_presses");

//         browser.keys("Tab");
//         // spiceJet.enterSearch("Clear");
//         // spiceJet.enterSearch("Enter");
//         const text = spiceJet.getResultLabelText();
//         console.log("You entered : ", text);
//         assert.equal("You entered: TAB", text);
//         browser.pause(3000);
//     })

//     it("keys action perform- Shift", function () {
//         browser.url("https://the-internet.herokuapp.com/key_presses");
//         browser.keys("Shift");
//         const text = spiceJet.getResultLabelText();
//         console.log("You entered : ", text);
//         assert.equal("You entered: SHIFT", text);
//         browser.pause(3000);
//     })

// })