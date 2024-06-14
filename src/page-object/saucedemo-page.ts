import TestAction from '@/test-action';

class SaucedemoPage {
  private inputUsername = '#user-name';
  private inputPassword = '#password';
  private loginButton = '#login-button';
  private productsHeader = '//div[@class="product_label" and text()="%s"]';

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
}

export default SaucedemoPage;
