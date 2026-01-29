// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Validation Error - Age Confirmation Not Checked', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Submit without age confirmation checkbox', async () => {
    // Fill form without checking age confirmation
    await registrationPage.fillFirstName('David');
    await registrationPage.fillLastName('Miller');
    await registrationPage.fillEmail('david.miller@example.com');
    await registrationPage.fillPhoneNumber('9876543212');
    await registrationPage.selectOccupation('Engineer');
    await registrationPage.selectMaleGender();
    await registrationPage.fillPassword('MyPass@789');
    await registrationPage.fillConfirmPassword('MyPass@789');
    // Intentionally not checking age confirmation

    // Click Register button
    await registrationPage.clickRegister();

    // Verify age confirmation error is displayed
    await registrationPage.verifyAgeCheckboxError();
  });
});
