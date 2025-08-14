class QaRegressionPage {
  constructor(page) {
    this.page = page;
    this.createDeliveryLink = page.getByRole('link', { name: 'Create Delivery' });
  }
  
  async navigateToCreateDelivery() {
    await expect(this.createDeliveryLink).toBeVisible();
    await this.createDeliveryLink.click();
  }
}

module.exports = { QaRegressionPage };