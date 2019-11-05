let seller = function () {

    let buttonLogin = element(by.className('btn btn-secondary btn-block'));
    let email_input = element(by.id('email'));
    let password_input = element(by.id('password'));
    let buttonGoLogin = element(by.className('btn btn-primary btn-block'))
    let closeAdds = element(by.css('[ng-click="vm.close()"]'));

    this.get = function (url) {
        browser.get(url)
    };

    this.buttonLogin = function () {
        buttonLogin.click();
    };

    this.enterEmail = function (email) {
        email_input.sendKeys(email)
    };

    this.enterPassword = function (pwd) {
        password_input.sendKeys(pwd)
    };

    this.buttonGoLogin = function () {
        buttonGoLogin.click();
    };

    this.closeAdds = function () {
        closeAdds.click();
    };

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result)
    }


};

module.exports = new seller();