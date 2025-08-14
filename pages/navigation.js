class Navigation {
  constructor(page) {
    this.page = page;
    this.qaRegressionLink = page.getByRole('link', { name: 'QA Regression' });
  }
  
  async navigateToQaRegression() {
    await expect(this.qaRegressionLink).toBeVisible();
    await this.qaRegressionLink.click();
  }
}

module.exports = { Navigation };