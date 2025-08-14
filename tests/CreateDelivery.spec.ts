import { test, expect } from '@playwright/test';
import { loginToApplication } from '../pages/login';

test('test', async ({ page }) => {
  // Use the login helper instead of manual login steps
  await loginToApplication(page);

  // Navigate to create delivery
  await page.getByRole('link', { name: 'QA Regression' }).click();
  await page.getByRole('link', { name: 'Create Delivery' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByRole('link', { name: 'Skip Photo' }).click();
  await page.getByPlaceholder('Delivery Recipient').click();
  await page.getByPlaceholder('Delivery Recipient').fill('DR_AUTO');
  await page.getByPlaceholder('Delivery Recipient').press('Enter');
  await page.getByPlaceholder('Deliver To Location').click();
  await page.getByPlaceholder('Deliver To Location').fill('DTL_AUTO');
  await page.getByPlaceholder('Deliver To Location').press('Enter');
  await page.getByPlaceholder('Notes').click();
  await page.getByPlaceholder('Notes').fill('NOTES_AUTO');
  await page.getByPlaceholder('Notes').press('Enter');
  await page.getByPlaceholder('Number of Pieces').click();
  await page.getByPlaceholder('Number of Pieces').fill('1');
  await page.getByPlaceholder('Number of Pieces').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: 'TestPrinter1' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
});