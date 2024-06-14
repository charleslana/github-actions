import SaucedemoPage from '@/page-object/saucedemo-page';
import TestAction from '@/test-action';
import { BeforeAll, Given, Then, When } from '@cucumber/cucumber';

let saucedemoPage: SaucedemoPage;

BeforeAll(async function () {
  saucedemoPage = new SaucedemoPage();
});

Given('I navigate to saucedemo page', async function () {
  await TestAction.navigate(process.env.APP_URL as string);
});

When('I put the username {string}', async function (username: string) {
  await saucedemoPage.fillLoginUsername(username);
});

When('I put the password {string}', async function (password: string) {
  await saucedemoPage.fillLoginPassword(password);
});

When('I click the login button', async function () {
  await saucedemoPage.clickLoginButton();
});

Then('the page {string} is visible', async function (name: string) {
  await saucedemoPage.waitForProductsPage(name);
});
