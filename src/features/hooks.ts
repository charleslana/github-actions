import dotenv from 'dotenv';
import TestAction from '@/test-action';
import TestManager from '@/test-manager';
import { After, AfterAll, AfterStep, Before, BeforeAll, Status } from '@cucumber/cucumber';

BeforeAll(async function () {
  dotenv.config();
  console.log('BeforeAll: Executando antes de todos os cenários');
});

AfterAll(async function () {
  console.log('AfterAll: Executando depois de todos os cenários');
});

AfterStep(async function (scenario) {
  console.log(`AfterStep: Executando a cada etapa do cenário : ${scenario.pickleStep.text}`);
  if (scenario.result.status === Status.PASSED) {
    console.log('Step success');
  }
  if (scenario.result.status === Status.FAILED) {
    const page = await TestManager.getInstance().getPage();
    const screenshotBuffer = await page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
    });
    this.attach(screenshotBuffer, 'image/png');
    console.log(`Step failed, Error: ${scenario.result.exception?.message}`);
    console.log(`Screenshot saved: reports/screenshots/${scenario.pickle.name}.png`);
  }
});

Before(async function (scenario) {
  console.log(`Before: Executando antes de cada cenário: ${scenario.pickle.name}`);
  await TestManager.getInstance().getPage();
});

After(async function () {
  console.log('After: Executando depois de cada cenário');
  await TestAction.closeBrowser();
});
