const seller = require('../pages/seller_panel.js')
const randomString = require('randomstring');
const email = randomString.generate({ length: 5, charset: 'alphabetic' });

describe('Onboarding Sellerpanel', function () {
    it('@register Register', function () {
        seller.get('https://sellerpanelstaging.ralali.xyz/');
        browser.waitForAngularEnabled();
        seller.enterName('protractor')
        seller.enterEmail(email + '@gmail.com');
        seller.enterPassword('12345678');
        seller.buttonGoLogin();
        browser.waitForAngularEnabled();
        browser.refresh();
        seller.verifyKonfirmasi('Konfirmasi Alamat Email Anda')
        // masih belum bisa verify element karena page barunya bukan angular
        browser.sleep(5000);
    })
})