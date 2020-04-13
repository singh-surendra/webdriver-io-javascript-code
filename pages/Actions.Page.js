class Spicejet {

    get loginSignUpLink() { return $('#ctl00_HyperLinkLogin') }   //parent
    get spiceClubMembersLink() { return $("//*[text()='SpiceClub Members']") }    //child1
    get memberLoginLink() { return $("(//*[text()='Member Login'])[2]") }   //child2 =grand child

    moveToElement(element) {
        element.waitForDisplayed();
        element.moveTo();
    }

    clickElement(element) {
        element.waitForDisplayed();
        element.click();
    }


    get search(){ return $('#target')}
    
    get resultLabel(){ return $('#result')}

    getResultLabelText(){
        this.resultLabel.waitForDisplayed();
        return this.resultLabel.getText();
    }

    enterSearch(text){
        this.search.waitForDisplayed();
        this.search.setValue(text);
    }



}

module.exports = new Spicejet();