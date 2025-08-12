import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto ('https://icsus-qa01.oraclecloud.rfsmart.com:8443/webclient/');
/* Enable for Auth Server disable for legacy login*/
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('dev.one');
  // await page.getByRole('button', {name: 'Login'}).click();
/* Enable for legacy disable for auth server login*/
  await page.getByPlaceholder('User ID').click();
  await page.getByPlaceholder('User ID').fill('dev.one');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('smartICS1982');

  await page.getByRole('link', { name: 'Enter' }).click();
  await page.getByRole('link', { name: 'QA Regression' }).click();
  await page.getByRole('link', { name: 'Transfer Order Address Labels' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Order').click();
  await page.getByPlaceholder('Order').fill('23123');
 await page.getByPlaceholder('Order').press('Enter');
 await page.getByPlaceholder('Quantity of labels').click();
 await page.getByPlaceholder('Quantity of labels').fill('1');
 await page.getByPlaceholder('Quantity of labels').press('Enter');
 await page.getByRole('link', { name: 'List' }).click();
 await page.getByRole('cell', { name: 'TestPrinter1' }).click();
 await page.getByRole('link', { name: 'Exit' }).click();
 await page.getByRole('link', { name: 'Exit' }).click();
});