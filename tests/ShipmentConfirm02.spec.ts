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
  await page.getByRole('link', { name: 'Shipment Confirm 02' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Shipment Number').click();
  await page.getByPlaceholder('Shipment Number').fill('31088');
  await page.getByPlaceholder('Shipment Number').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: '8001'}).click();
  await page.getByPlaceholder('Quantity').click();
  await page.getByPlaceholder('Quantity').fill('1');
  await page.getByPlaceholder('Quantity').press('Enter');
  await page.getByPlaceholder('UOM').click();
  await page.getByPlaceholder('UOM').fill('Ea');
  await page.getByPlaceholder('UOM').press('Enter');
  ///Incomplete
  await page.getByRole('link', { name: 'Exit' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();

});