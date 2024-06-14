import dotenv from 'dotenv';
import TestAction from '@/test-action';
import TestManager from '@/test-manager';
import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber';

BeforeAll(async function () {
  dotenv.config();
  console.log('BeforeAll: Executando antes de todos os cenários');
});

AfterAll(async function () {
  console.log('AfterAll: Executando depois de todos os cenários');
});

Before(async function () {
  console.log('Before: Executando antes de cada cenário');
  await TestManager.getInstance().getPage();
});

After(async function () {
  console.log('After: Executando depois de cada cenário');
  await TestAction.closeBrowser();
});
