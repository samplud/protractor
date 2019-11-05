const homepage = require('../pages/homepage.js')

describe('demo calculator test', function () {
    it('@testAdd addation test', function () {
        //open browser
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //input first form
        homepage.enterFirstNumber('2');
        //select operator
        homepage.clickOperatorAddition()
        //input second form
        homepage.enterSecondNumber('6');
        //klik go
        homepage.clickGo();
        //verify
        homepage.verifyResult('8');
        browser.sleep(3000)
    })
    it('@testdiv division test', function () {
        //open browser
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //input first form
        homepage.enterFirstNumber('12');
        //select operator
        homepage.clickOperatorDivision();
        //input second form
        homepage.enterSecondNumber('6');
        //klik go
        homepage.clickGo();
        //verify
        homepage.verifyResult('2');
        browser.sleep(3000)
    })
    it('@bug only xample bugs application | 12 : 6 Expected result 2', function () {
        //open browser
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //input first form
        homepage.enterFirstNumber('12');
        //select operator
        homepage.clickOperatorDivision();
        //input second form
        homepage.enterSecondNumber('6');
        //klik go
        homepage.clickGo();
        //verify
        homepage.verifyResult('10');
        browser.sleep(3000)
    })
})