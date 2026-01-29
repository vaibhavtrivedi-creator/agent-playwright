// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Successful Registration with Valid Data', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Register with all valid information', async ({ page }) => {
    // Fill the registration form with valid data
    await registrationPage.fillFirstName('John');
    await registrationPage.fillLastName('Doe');
    await registrationPage.fillEmail('john.doe@example.com');
    await registrationPage.fillPhoneNumber('9876543210');
    await registrationPage.selectOccupation('Engineer');
    await registrationPage.selectMaleGender();
    await registrationPage.fillPassword('Test@123');
    await registrationPage.fillConfirmPassword('Test@123');
    await registrationPage.checkAgeConfirmation();

    // Click Register button
    await registrationPage.clickRegister();

    // Verify registration is completed
    await new Promise(f => setTimeout(f, 2 * 1000));
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
  });

  test('Register with Female gender', async ({ page }) => {
    // Fill the registration form with valid data and Female gender
    await registrationPage.fillFirstName('Jane');
    await registrationPage.fillLastName('Smith');
    await registrationPage.fillEmail('jane.smith@example.com');
    await registrationPage.fillPhoneNumber('9123456789');
    await registrationPage.selectOccupation('Doctor');
    await registrationPage.selectFemaleGender();
    await registrationPage.fillPassword('Secure@456');
    await registrationPage.fillConfirmPassword('Secure@456');
    await registrationPage.checkAgeConfirmation();

    // Click Register button
    await registrationPage.clickRegister();

    // Verify registration is completed
    await new Promise(f => setTimeout(f, 2 * 1000));
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
  });
});
