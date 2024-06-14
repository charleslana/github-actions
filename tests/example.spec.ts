import TestAction from '@/test-action';
import TestManager from '@/test-manager';
import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test manager', async () => {
  const page = await TestManager.getInstance().getPage();
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('test action', async () => {
  await TestAction.navigate('https://playwright.dev/');
  await TestAction.expectTitle('Playwright');
});
