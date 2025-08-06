import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://icsus-qa01.oraclecloud.rfsmart.com:8443/webclient/');
  const Username = 'dev.one'
  const UserID = 'dev.one'
  const Password = 'smartICS1982'
  const isLegacyVisible =  await page.getByPlaceholder('User ID').isVisible();
  if(isLegacyVisible) {
    await page.getByPlaceholder('User ID').click();
    await page.getByPlaceholder('User ID').fill(UserID);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(Password);
    await page.getByRole('link', { name: 'Enter' }).click();
  }
    else
  {
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(Username);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(Password);
    await page.getByRole('button', { name: 'Login' }).click();
  }
});