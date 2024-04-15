import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../../../pageobjects/web/fintech/login.page.ts';
import SecurePage from '../../../pageobjects/web/fintech/secure.page.ts';

const pages = {
    login: new LoginPage()
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages['login'].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await pages['login'].login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

