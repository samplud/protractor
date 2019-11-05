const seller = require('../pages/seller_panel.js')

describe('POC seller panel', function () {
    it('@seller addation test', function () {
        //open browser
        seller.get('https://sellerpanel.ralali.com/');
        //input klik button login
        seller.buttonLogin();
        //input email
        browser.waitForAngularEnabled();
        // browser.waitForAngular(false);
        seller.enterEmail('iki@yopmail.com');
        //input password
        seller.enterPassword('000000');
        //submit
        seller.buttonGoLogin();
        //close adds
        browser.waitForAngularEnabled();
        // browser.waitForAngular(false);
        seller.closeAdds();
        //verify
        browser.waitForAngularEnabled();
        seller.verifyResult('Souvenir Merchant')
        browser.sleep(5000);
        // browser.waitForAngular();
    })
})