import TestAction from '@/test-action';
import { Given, Then, When } from '@cucumber/cucumber';

Given('I open the browser', async function () {
  await TestAction.navigate('about:blank');
});

When('I navigate to {string}', async function (url: string) {
  await TestAction.navigate(url);
});

Then('the title should contain {string}', async function (title: string) {
  await TestAction.expectTitle(title);
});
