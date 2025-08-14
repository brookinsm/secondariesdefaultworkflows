class CreateDeliveryPage {
  constructor(page) {
    this.page = page;
    this.organizationCodeInput = page.getByPlaceholder('Organization Code');
    this.skipPhotoLink = page.getByRole('link', { name: 'Skip Photo' });
    this.deliveryRecipientInput = page.getByPlaceholder('Delivery Recipient');
    this.deliverToLocationInput = page.getByPlaceholder('Deliver To Location');
    this.notesInput = page.getByPlaceholder('Notes');
    this.numberOfPiecesInput = page.getByPlaceholder('Number of Pieces');
    this.listLink = page.getByRole('link', { name: 'List' });
  }
  
  async fillOrganizationCode(code) {
    await this.organizationCodeInput.click();
    await this.organizationCodeInput.fill(code);
    await this.organizationCodeInput.press('Enter');
  }
  
  async skipPhoto() {
    await this.skipPhotoLink.click();
  }
  
  async fillDeliveryRecipient(recipient) {
    await this.deliveryRecipientInput.click();
    await this.deliveryRecipientInput.fill(recipient);
    await this.deliveryRecipientInput.press('Enter');
  }
  
  async fillDeliverToLocation(location) {
    await this.deliverToLocationInput.click();
    await this.deliverToLocationInput.fill(location);
    await this.deliverToLocationInput.press('Enter');
  }
  
  async fillNotes(notes) {
    await this.notesInput.click();
    await this.notesInput.fill(notes);
    await this.notesInput.press('Enter');
  }
  
  async fillNumberOfPieces(pieces) {
    await this.numberOfPiecesInput.click();
    await this.numberOfPiecesInput.fill(pieces);
    await this.numberOfPiecesInput.press('Enter');
  }
  
  async navigateToPrinterList() {
    await this.listLink.click();
  }
  
  async fillDeliveryForm(formData) {
    await this.fillOrganizationCode(formData.orgCode);
    await this.skipPhoto();
    await this.fillDeliveryRecipient(formData.recipient);
    await this.fillDeliverToLocation(formData.location);
    await this.fillNotes(formData.notes);
    await this.fillNumberOfPieces(formData.pieces);
  }
}

module.exports = { CreateDeliveryPage };