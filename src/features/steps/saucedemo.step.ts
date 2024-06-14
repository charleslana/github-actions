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

Then('should visible the page {string}', async function (name: string) {
  await saucedemoPage.waitForProductsPage(name);
});

Then('should visible error login message {string}', async function (message: string) {
  await saucedemoPage.waitForUsernamePasswordInvalid(message);
});

Given('I add product do cart', async function () {
  await saucedemoPage.login();
  await saucedemoPage.addProductToCard();
});

When('I click the cart icon', async function () {
  await saucedemoPage.clickCardIcon();
});

When('I click the checkout button', async function () {
  await saucedemoPage.clickCheckoutButton();
});

When('I put the firstname {string}', async function (firstname: string) {
  await saucedemoPage.fillCheckoutFirstName(firstname);
});

When('I put the lastname {string}', async function (lastname: string) {
  await saucedemoPage.fillCheckoutLastName(lastname);
});

When('I put the zipcode {string}', async function (zipcode: string) {
  await saucedemoPage.fillCheckoutZipCode(zipcode);
});

When('I click the continue button', async function () {
  await saucedemoPage.clickContinueButton();
});

When('I click the finish button', async function () {
  await saucedemoPage.clickFinishButton();
});

Then('should visible success order message {string}', async function (message: string) {
  await saucedemoPage.waitForOrderSuccess(message);
});
