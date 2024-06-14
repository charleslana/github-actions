import TestAction from '@/test-action';

class SaucedemoPage {
  private inputUsername = '#user-name';
  private inputPassword = '#password';
  private loginButton = '#login-button';
  private productsHeader = '//div[@class="product_label" and text()="%s"]';
  private loginErrorMessage = `//h3[@data-test="error" and contains(., '%s')]`;
  private addToCartButton = '(//button[contains(@class, "btn_inventory")])[1]';
  private cartIconAction = '#shopping_cart_container';
  private checkoutButton = '//a[contains(@class, "checkout_button")]';
  private inputFirstName = '#first-name';
  private inputLastName = '#last-name';
  private inputZipCode = '#postal-code';
  private continueButton = '//input[contains(@class, "cart_button")]';
  private finishButton = '//a[contains(@class, "cart_button")]';
  private orderFinishHeader = '//h2[text()="%s"]';

  public async fillLoginUsername(username: string): Promise<void> {
    await TestAction.fill(this.inputUsername, username);
  }

  public async fillLoginPassword(password: string): Promise<void> {
    await TestAction.fill(this.inputPassword, password);
  }

  public async clickLoginButton(): Promise<void> {
    await TestAction.click(this.loginButton);
  }

  public async waitForProductsPage(name: string): Promise<void> {
    await TestAction.waitForVisible(this.productsHeader.replace('%s', name));
  }

  public async login(): Promise<void> {
    await TestAction.navigate(process.env.APP_URL as string);
    await this.fillLoginUsername(process.env.APP_USER as string);
    await this.fillLoginPassword(process.env.APP_PASSWORD as string);
    await this.clickLoginButton();
    await this.waitForProductsPage('Products');
  }

  public async waitForUsernamePasswordInvalid(message: string): Promise<void> {
    await TestAction.waitForVisible(this.loginErrorMessage.replace('%s', message));
  }

  public async addProductToCard(): Promise<void> {
    await TestAction.click(this.addToCartButton);
  }

  public async clickCardIcon(): Promise<void> {
    await TestAction.click(this.cartIconAction);
  }

  public async clickCheckoutButton(): Promise<void> {
    await TestAction.click(this.checkoutButton);
  }

  public async fillCheckoutFirstName(firstName: string): Promise<void> {
    await TestAction.fill(this.inputFirstName, firstName);
  }

  public async fillCheckoutLastName(lastName: string): Promise<void> {
    await TestAction.fill(this.inputLastName, lastName);
  }

  public async fillCheckoutZipCode(zipCode: string): Promise<void> {
    await TestAction.fill(this.inputZipCode, zipCode);
  }

  public async clickContinueButton(): Promise<void> {
    await TestAction.click(this.continueButton);
  }

  public async clickFinishButton(): Promise<void> {
    await TestAction.click(this.finishButton);
  }

  public async waitForOrderSuccess(message: string): Promise<void> {
    await TestAction.waitForVisible(this.orderFinishHeader.replace('%s', message));
  }
}

export default SaucedemoPage;
