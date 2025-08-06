import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login";

/* Go to login page using beforeEach hook */
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Go to Login Page", async () => {
    await loginPage.goto();
    await loginPage.validateLoginPageURL();
  });
});

test.describe("Default Workflow Tests", () => {
  /* Login Validation test - Successful Login Test */
  test("Validate Successful Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step("Input Valid Credentials and Submit", async () => {
      await loginPage.inputValidLoginCredentials();
      await loginPage.submitLoginCredentials();
    });

    await test.step("Validate Post-Login State", async () => {
      // Add any post-login validation (e.g., check if redirected to inventory page or if logout button is visible)
      await loginPage.validatePostLoginState();
    });
  });
});
