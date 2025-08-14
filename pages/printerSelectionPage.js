class PrinterSelectionPage {
  constructor(page) {
    this.page = page;
    this.exitLink = page.getByRole('link', { name: 'Exit' });
  }
  
  async selectPrinter(printerName) {
    await this.page.getByRole('cell', { name: printerName }).click();
  }
  
  async exit() {
    await this.exitLink.click();
  }
}

module.exports = { PrinterSelectionPage };