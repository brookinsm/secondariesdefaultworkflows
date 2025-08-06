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
  await page.getByRole('link', { name: 'Putaway Receipt 02' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('002');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Enter Receipt').click();
  await page.getByPlaceholder('Enter Receipt').fill('2844');
  await page.getByPlaceholder('Enter Receipt').press('Enter');
  await page.getByPlaceholder('Item Number').click();
  await page.getByPlaceholder('Item Number').fill('8009');
  await page.getByPlaceholder('Item Number').press('Enter');
  await page.getByPlaceholder('Quantity').click();
  await page.getByPlaceholder('Quantity').fill('1');
  await page.getByPlaceholder('Quantity').press('Enter');
  await page.getByPlaceholder('UOM').click();
  await page.getByPlaceholder('UOM').fill('Ea');
  await page.getByPlaceholder('UOM').press('Enter');
  await page.getByPlaceholder('Subinventory').click();
  await page.getByPlaceholder('Subinventory').fill('Stores');
  await page.getByPlaceholder('Subinventory').press('Enter');
  await page.getByPlaceholder('Locator').click();
  await page.getByPlaceholder('Locator').fill('1.1.1.1');
  await page.getByPlaceholder('Locator').press('Enter');
  await page.getByPlaceholder('Quantity of labels').click();
  await page.getByPlaceholder('Quantity of labels').fill('1');
  await page.getByPlaceholder('Quantity of labels').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: 'TestPrinter1' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
});