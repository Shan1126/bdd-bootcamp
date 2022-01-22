import {seleniumUtils} from  '../seleniumUtils/utils'
import {multiply, clickButton} from '../seleniumUtils/utils'
import {executeXpath} from '../driverUtils/driverUtil'
Given('I am on the amazon.com website', async function() {

    // load amazon.com website in the browser
    // use selenium to load the broswer and type amazon.com and enter

    loadPage('walmart.com')
    const value = multiply(100, 60)

});
When('I hover over Sign In text', async function() {
    executeXpath('//*[@id="ap_register_form"]/input[7]')
});

Given('I am on the amazon.com seller website', async function() {

});

When('I enter bestseller in the search box', async function() {

});

When('I click create account button', async function() {
    clickButton('//*[@id="ap_register_form"]/input[7]');
});

Then('I should see results', async function() {

});

When('I hover over Sign In text', async function() {
   //do something 
});
