class BlazePage {

    // better approach
    get parent() {
        return $('ul.list-nav-links');
    }

    get childElements() {
        return this.parent.$$('li');
    }

    get getTextForLi() {
        return this.childElements.filter(element => {  //for each loop
            console.log(element.getText());
        });
    }
    //or

    get useCasesElements() {
        return $$('div#main_b_footer_second_block>ul>li');
    }

    get useCasesElementsText() {
        return this.useCasesElements.filter(element => {
            console.log(element.getText());
        })

    }

    //concept of getter/ non-getter methods

     specificChildElement(index){
         return this.parent.$(`li:nth-child(${index})`)
    }

    getSpecificChildElementText(index){
        return this.specificChildElement(index).getText();
   }




}

module.exports = new BlazePage();
