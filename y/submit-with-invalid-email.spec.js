// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Validation Error - Invalid Email Format', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Submit with invalid email format', async () => {
    // Fill form with invalid email format
    await registrationPage.fillFirstName('Michael');
    await registrationPage.fillLastName('Brown');
    await registrationPage.fillEmail('invalid-email-format');
    await registrationPage.fillPhoneNumber('9999999999');
    await registrationPage.selectOccupation('Student');
    await registrationPage.selectMaleGender();
    await registrationPage.fillPassword('Pass@123');
    await registrationPage.fillConfirmPassword('Pass@123');
    await registrationPage.checkAgeConfirmation();

    // Click Register button
    await registrationPage.clickRegister();

    // Verify form is not submitted (email field still has focus or form still visible)
    await expect(registrationPage.registerButton).toBeVisible();
  });
});
