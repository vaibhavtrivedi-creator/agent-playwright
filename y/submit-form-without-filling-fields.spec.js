// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Validation Error - Missing Required Fields', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Submit form without filling any fields', async () => {
    // Click Register button without filling any fields
    await registrationPage.clickRegister();

    // Verify validation errors are displayed
    await registrationPage.verifyFirstNameError();
    await registrationPage.verifyEmailError();
    await registrationPage.verifyPasswordError();
    await registrationPage.verifyAgeCheckboxError();
  });

  test('Submit form with only First Name filled', async () => {
    // Fill only First Name
    await registrationPage.fillFirstName('Robert');

    // Click Register button
    await registrationPage.clickRegister();

    // Verify validation errors are displayed for other required fields
    await registrationPage.verifyEmailError();
    await registrationPage.verifyPasswordError();
    await registrationPage.verifyAgeCheckboxError();
  });
});
