import TestManager from './test-manager';
import { expect, Page } from '@playwright/test';

class TestAction {
  private static page: Page | null = null;

  private constructor() {}

  public static async navigate(url: string): Promise<void> {
    const page = await this.getPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  public static async expectTitle(title: string): Promise<void> {
    const page = await this.getPage();
    await expect(page).toHaveTitle(new RegExp(`${title}`, 'i'));
  }

  public static async fill(selector: string, text: string): Promise<void> {
    const page = await this.getPage();
    await page.fill(selector, text);
  }

  public static async click(selector: string): Promise<void> {
    const page = await this.getPage();
    await page.click(selector);
  }

  public static async waitForVisible(selector: string): Promise<void> {
    const page = await this.getPage();
    await page.waitForSelector(selector);
  }

  public static async closeBrowser(): Promise<void> {
    await TestManager.getInstance().closeBrowser();
    this.page = null;
  }

  private static async getPage(): Promise<Page> {
    if (!this.page) {
      this.page = await TestManager.getInstance().getPage();
    }
    return this.page;
  }
}

export default TestAction;
