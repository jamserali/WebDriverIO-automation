import { Given, Then } from '@wdio/cucumber-framework';
import { HamburgerMenu } from '../../../../pageobjects/mobile/fintech/HamburgerMenu.ts';

Given(/^I launch the app$/, async () => {
    console.log('I launch the app');
    const  hamburgerMenu = new HamburgerMenu();
    await hamburgerMenu.clickHamburgerIcon();
    console.log('I click the hamburger icon');
});

Given(/^I enter "([^"]*)" in the "([^"]*)" field$/, async (text, field) => {
    console.log(`I enter ${text} in the ${field} field`);
});

Given(/^I press "([^"]*)"$/, async (button) => {
    console.log(`I press ${button}`);
});

Then(/^I should see Home screen$/, async () => {
    console.log('I should see Home screen');
});

