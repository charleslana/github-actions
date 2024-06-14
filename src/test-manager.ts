import BrowserType from './types/browser-type';
import { Browser, chromium, Page } from 'playwright';
import { firefox, webkit } from '@playwright/test';

class TestManager {
  private static instance: TestManager;
  private browser: Browser | null = null;
  private page: Page | null = null;

  private constructor() {}

  public static getInstance(): TestManager {
    if (!TestManager.instance) {
      TestManager.instance = new TestManager();
    }
    return TestManager.instance;
  }

  public async getPage(): Promise<Page> {
    if (!this.browser) {
      this.browser = await this.getBrowser();
    }
    if (!this.page) {
      this.page = await this.browser.newPage();
    }
    return this.page;
  }

  public async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.page = null;
    }
  }

  private async getBrowser(): Promise<Browser> {
    const browserType = process.env.BROWSER as BrowserType;
    switch (browserType) {
      case 'chromium':
        return await chromium.launch({ headless: false });
      case 'firefox':
        return await firefox.launch({ headless: false });
      case 'webkit':
        return await webkit.launch({ headless: false });
      default:
        return await chromium.launch({ headless: false });
    }
  }
}

export default TestManager;
