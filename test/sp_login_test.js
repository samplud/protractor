const seller = require('../pages/seller_panel.js')

describe('Seller Panel', function () {
    it('@login Login', function () {
        seller.get('https://sellerpanel.ralali.com/');
        seller.buttonLogin();
        browser.waitForAngularEnabled();
        seller.enterEmail('tokoaditsme@yopmail.com');
        seller.enterPassword('12345678');
        seller.buttonGoLogin();
        browser.waitForAngularEnabled();
        seller.verifyResult('Souvenir Merchants')
        browser.sleep(5000);
    })
})