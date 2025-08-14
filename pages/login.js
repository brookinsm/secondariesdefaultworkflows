/**
 * Login function that tries Auth Server login first, then falls back to legacy login
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function loginToApplication(page) {
  await page.goto('https://icsus-qa01.oraclecloud.rfsmart.com:8443/webclient/');
  
  // Try Auth Server login first
  try {
    // Check if username field for Auth Server login exists with a timeout
    const authUsernameField = await page.waitForSelector('input[placeholder="Username"]', { timeout: 5000 });
    
    if (authUsernameField) {
      console.log("Using Auth Server login...");
      await page.getByPlaceholder('Username').click();
      await page.getByPlaceholder('Username').fill('dev.one');
      await page.getByRole('button', {name: 'Login'}).click();
      return true;
    }
  } catch (error) {
    // If Auth Server login elements aren't found, try legacy login
    console.log("Auth Server login not available, trying legacy login...");
    try {
      await page.getByPlaceholder('User ID').click();
      await page.getByPlaceholder('User ID').fill('dev.one');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('smartICS1982');
      await page.getByRole('link', { name: 'Enter' }).click();
      return true;
    } catch (legacyError) {
      console.error("Legacy login failed:", legacyError);
      throw new Error("Both login methods failed");
    }
  }
  return false;
}