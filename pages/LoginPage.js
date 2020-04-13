class LoginPage{

    get userName() { return $('#username')}
    get password() { return $('#password')}
    get loginButton(){ return $('button')}

    enterUserName(text){
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clickOnLogin(){
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }




}

module.exports = new LoginPage();

