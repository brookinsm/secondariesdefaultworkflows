import { test, expect, Page } from '@playwright/test';
import { loginToApplication } from '../pages/login';
import { Navigation } from '../pages/navigation';
import { QaRegressionPage } from '../pages/qaRegressionPage';
import { CreateDeliveryPage } from '../pages/createDeliveryPage';
import { PrinterSelectionPage } from '../pages/printerSelectionPage';
import { deliveryData } from '../fixtures/testData';

test('Create a new delivery', async ({ page }) => {
  // Login to application
  await loginToApplication(page);
  
  // Initialize page objects
  const navigation = new Navigation(page);
  const qaRegressionPage = new QaRegressionPage(page);
  const createDeliveryPage = new CreateDeliveryPage(page);
  const printerSelectionPage = new PrinterSelectionPage(page);
  
  // Navigate to create delivery
  await navigation.navigateToQaRegression();
  await qaRegressionPage.navigateToCreateDelivery();
  
  // Fill delivery form
  await createDeliveryPage.fillDeliveryForm({
    orgCode: deliveryData.orgCode,
    recipient: deliveryData.recipient,
    location: deliveryData.location,
    notes: deliveryData.notes,
    pieces: deliveryData.pieces
  });
  
  // Navigate to printer selection and complete
  await createDeliveryPage.navigateToPrinterList();
  await printerSelectionPage.selectPrinter(deliveryData.printer);
  
  // Exit
  await printerSelectionPage.exit();
  await printerSelectionPage.exit(); // Second exit click from your original test
  
  // Here you could add assertions to verify the delivery was created
});