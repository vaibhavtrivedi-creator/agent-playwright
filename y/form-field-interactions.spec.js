// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Form Field Interactions', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Verify all form fields are accessible', async ({ page }) => {
    // Verify all form elements are present and interactive
    await expect(registrationPage.firstNameField).toBeVisible();
    await expect(registrationPage.firstNameField).toBeEnabled();

    await expect(registrationPage.lastNameField).toBeVisible();
    await expect(registrationPage.lastNameField).toBeEnabled();

    await expect(registrationPage.emailField).toBeVisible();
    await expect(registrationPage.emailField).toBeEnabled();

    await expect(registrationPage.phoneNumberField).toBeVisible();
    await expect(registrationPage.phoneNumberField).toBeEnabled();

    await expect(registrationPage.occupationDropdown).toBeVisible();
    await expect(registrationPage.occupationDropdown).toBeEnabled();

    await expect(registrationPage.maleRadio).toBeVisible();
    await expect(registrationPage.femaleRadio).toBeVisible();

    await expect(registrationPage.passwordField).toBeVisible();
    await expect(registrationPage.passwordField).toBeEnabled();

    await expect(registrationPage.confirmPasswordField).toBeVisible();
    await expect(registrationPage.confirmPasswordField).toBeEnabled();

    await expect(registrationPage.ageConfirmationCheckbox).toBeVisible();
    await expect(registrationPage.registerButton).toBeVisible();
    await expect(registrationPage.registerButton).toBeEnabled();

    // Verify Register heading is displayed
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Verify navigation link to login page', async ({ page }) => {
    // Verify login link is visible
    await expect(registrationPage.loginLink).toBeVisible();

    // Click on login link with force option to bypass banner overlay
    await page.locator('a:has-text("Login here")').click({ force: true });

    // Wait for URL to change
    await page.waitForURL(/.*\/auth\/login/, { timeout: 10000 }).catch(() => { });

    // Verify URL changes to login page
    await expect(page).toHaveURL(/.*\/auth\/login/);
  });
});
