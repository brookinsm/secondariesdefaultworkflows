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
  await page.getByRole('link', { name: 'Physical Inventory Manual' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Physical Inventory Name').click();
  await page.getByPlaceholder('Physical Inventory Name').fill('CS1 Physical Inventory');
  await page.getByPlaceholder('Physical Inventory Name').press('Enter');
  await page.getByPlaceholder('Inventory').click();
  await page.getByPlaceholder('Inventory').fill('CS1');
  await page.getByPlaceholder('Inventory').press('Enter');
  await page.getByPlaceholder('Locator').click();
  await page.getByPlaceholder('Locator').fill('A.1.1.1');
  await page.getByPlaceholder('Locator').press('Enter');
  await page.getByPlaceholder('Item Number').click();
  await page.getByPlaceholder('Item Number').fill('CD-REG-ITEM-01');
  await page.getByPlaceholder('Item Number').press('Enter');
  await page.getByPlaceholder('Quantity').click();
  await page.getByPlaceholder('Quantity').fill('10');
  await page.getByPlaceholder('Quantity').press('Enter');
  await page.getByPlaceholder('UOM').click();
  await page.getByPlaceholder('UOM').fill('Ea');
  await page.getByPlaceholder('UOM').press('Enter');
  await page.getByPlaceholder('Number Of Tags').click();
  await page.getByPlaceholder('Number Of Tags').fill('1');
  await page.getByPlaceholder('Number Of Tags').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: '\\\\PRINT-SERV\\Lexmark-room' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
});