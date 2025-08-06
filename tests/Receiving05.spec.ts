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
  await page.getByRole('link', { name: 'Receiving 05' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Order').click();
  await page.getByPlaceholder('Order').fill('RFS104895');
 await page.getByPlaceholder('Order').press('Enter');
 // await page.getByRole('link', { name: 'List' }).click();
  //await page.getByRole('cell', { name: 'AS65001' }).click();
  await page.getByPlaceholder('Packing Slip Number').click();
  await page.getByPlaceholder('Packing Slip Number').fill('8675309');
  await page.getByPlaceholder('Packing Slip Number').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: 'AS65001' }).click();
  await page.getByPlaceholder('RemainingQuantity').click();
  await page.getByPlaceholder('RemainingQuantity').fill('1');
  await page.getByPlaceholder('RemainingQuantity').press('Enter');
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
  await page.getByRole('cell', { name: '\\\\PRINT-SERV\\Lexmark-room' }).click();
  await page.getByRole('link', { name: 'Done' }).click();
  await page.getByPlaceholder('Receipt Traveler Quantity').click();
  await page.getByPlaceholder('Receipt Traveler Quantity').fill('1');
  await page.getByPlaceholder('Receipt Traveler Quantity').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: '\\\\PRINT-SERV\\Lexmark-room'}).click();
  await page.getByRole('link', { name: 'Exit' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();

});