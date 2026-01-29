// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Validation Error - Password Mismatch', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Submit with mismatched passwords', async () => {
    // Fill form with mismatched passwords
    await registrationPage.fillFirstName('Sarah');
    await registrationPage.fillLastName('Wilson');
    await registrationPage.fillEmail('sarah.wilson@example.com');
    await registrationPage.fillPhoneNumber('9876543211');
    await registrationPage.selectOccupation('Scientist');
    await registrationPage.selectFemaleGender();
    await registrationPage.fillPassword('Password@123');
    await registrationPage.fillConfirmPassword('DifferentPass@123');
    await registrationPage.checkAgeConfirmation();

    // Click Register button
    await registrationPage.clickRegister();

    // Verify password mismatch error is displayed
    await registrationPage.verifyPasswordMismatchError();
  });
});
