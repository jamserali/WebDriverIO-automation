import { Given, Then, When } from '@wdio/cucumber-framework';

Given(/^I want to execute a GET request to "([^"]*)"$/, async (url) => {

  console.log(`I want to execute a GET request to ${url}`);

})

When(/^I execute the request$/, async () => {

    console.log(`I execute the request`);
})

Then(/^I should receive a response with status (\d+)$/, async (status) => {

      console.log(`I should receive a response with status ${status}`);
})