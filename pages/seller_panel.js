let seller = function () {

    let nameInput = element(by.id('name'));
    let emailInput = element(by.id('email'));
    let passwordInput = element(by.id('password'));
    let buttonGoLogin = element(by.className('btn btn-primary btn-block'))
    let closeAdds = element(by.css('[ng-click="vm.close()"]'));

    this.get = function (url) {
        browser.get(url)
    };

    this.enterName = function (name) {
        nameInput.sendKeys(name)
    };

    this.enterEmail = function (email) {
        emailInput.sendKeys(email)
    };

    this.enterPassword = function (pwd) {
        passwordInput.sendKeys(pwd)
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
    };

    this.verifyKonfirmasi = function (konfirmasi) {
        let verifyKonfirmasi = element(by.css('.div.content > h1', konfirmasi));
        expect(verifyKonfirmasi.getText()).toEqual(konfirmasi);
    }
};

module.exports = new seller();