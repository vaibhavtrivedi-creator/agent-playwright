// spec: specs/registration-plan.md
// seed: y/seed.spec.js

const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('./js/RegistrationPage');

test.describe('Occupation Dropdown Options', () => {
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistration();
    await registrationPage.verifyRegisterPageLoaded();
  });

  test('Verify all occupation options are available', async ({ page }) => {
    // Click on the occupation dropdown to verify all options
    const occupationDropdown = page.getByRole('combobox');

    // Verify dropdown has all occupation options
    const options = await occupationDropdown.locator('option').all();
    const optionTexts = await Promise.all(
      options.map(option => option.textContent())
    );

    // Verify all expected options are present
    expect(optionTexts).toContain('Doctor');
    expect(optionTexts).toContain('Student');
    expect(optionTexts).toContain('Engineer');
    expect(optionTexts).toContain('Scientist');
  });

  test('Register with each occupation option', async () => {
    const occupations = ['Doctor', 'Student', 'Engineer', 'Scientist'];

    for (const occupation of occupations) {
      // Fill the form with occupation
      await registrationPage.fillFirstName('TestUser');
      await registrationPage.fillLastName('Tester');
      await registrationPage.fillEmail(`test${occupation}@example.com`);
      await registrationPage.fillPhoneNumber('9876543210');
      await registrationPage.selectOccupation(occupation);
      await registrationPage.selectMaleGender();
      await registrationPage.fillPassword('Test@123');
      await registrationPage.fillConfirmPassword('Test@123');
      await registrationPage.checkAgeConfirmation();

      // Verify the occupation was selected (value includes index prefix)
      const expectedValue = occupations.indexOf(occupation) + 1 + ': ' + occupation;
      await expect(registrationPage.occupationDropdown).toHaveValue(expectedValue);

      // Reload page for next iteration
      await registrationPage.navigateToRegistration();
    }
  });
});
