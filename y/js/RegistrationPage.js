const { expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.firstNameField = this.page.getByRole('textbox', { name: 'First Name' });
    this.lastNameField = this.page.getByRole('textbox', { name: 'Last Name' });
    this.emailField = this.page.getByRole('textbox', { name: 'email@example.com' });
    this.phoneNumberField = this.page.getByRole('textbox', { name: 'enter your number' });
    this.occupationDropdown = this.page.getByRole('combobox');
    this.maleRadio = this.page.getByRole('radio', { name: 'Male', exact: true });
    this.femaleRadio = this.page.getByRole('radio', { name: 'Female', exact: true });
    this.passwordField = this.page.getByRole('textbox', { name: 'Passsword' });
    this.confirmPasswordField = this.page.getByRole('textbox', { name: 'Confirm Password' });
    this.ageConfirmationCheckbox = this.page.getByRole('checkbox');
    this.registerButton = this.page.getByRole('button', { name: 'Register' });
    this.registerHeading = this.page.getByRole('heading', { name: 'Register' });
    this.loginLink = this.page.getByText('Login here');

    // Error messages
    this.firstNameError = this.page.getByText('*First Name is required');
    this.lastNameError = this.page.getByText('*Last Name is required');
    this.emailError = this.page.getByText('*Email is required');
    this.phoneNumberError = this.page.getByText('*Phone Number is required');
    this.passwordError = this.page.getByText('*Password is required');
    this.confirmPasswordError = this.page.getByText('Confirm Password is required');
    this.ageCheckboxError = this.page.getByText('*Please check above checkbox');
    this.passwordMismatchError = this.page.getByText('Password and Confirm Password must match with each other.');
  }

  /**
   * Navigate to the registration page
   */
  async navigateToRegistration() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/register');
  }

  /**
   * Fill First Name field
   */
  async fillFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }

  /**
   * Fill Last Name field
   */
  async fillLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }

  /**
   * Fill Email field
   */
  async fillEmail(email) {
    await this.emailField.fill(email);
  }

  /**
   * Fill Phone Number field
   */
  async fillPhoneNumber(phoneNumber) {
    await this.phoneNumberField.fill(phoneNumber);
  }

  /**
   * Select Occupation from dropdown
   */
  async selectOccupation(occupation) {
    await this.occupationDropdown.selectOption([occupation]);
  }

  /**
   * Select Male gender
   */
  async selectMaleGender() {
    await this.maleRadio.click();
  }

  /**
   * Select Female gender
   */
  async selectFemaleGender() {
    await this.femaleRadio.click();
  }

  /**
   * Fill Password field
   */
  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  /**
   * Fill Confirm Password field
   */
  async fillConfirmPassword(confirmPassword) {
    await this.confirmPasswordField.fill(confirmPassword);
  }

  /**
   * Check age confirmation checkbox
   */
  async checkAgeConfirmation() {
    await this.ageConfirmationCheckbox.click();
  }

  /**
   * Click Register button
   */
  async clickRegister() {
    await this.registerButton.click();
  }

  /**
   * Fill complete registration form with valid data
   */
  async fillRegistrationForm(
    firstName,
    lastName,
    email,
    phoneNumber,
    occupation,
    gender,
    password,
    confirmPassword,
    checkAge = true
  ) {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillEmail(email);
    await this.fillPhoneNumber(phoneNumber);
    await this.selectOccupation(occupation);

    if (gender === 'Male') {
      await this.selectMaleGender();
    } else {
      await this.selectFemaleGender();
    }

    await this.fillPassword(password);
    await this.fillConfirmPassword(confirmPassword);

    if (checkAge) {
      await this.checkAgeConfirmation();
    }
  }

  /**
   * Verify First Name error is displayed
   */
  async verifyFirstNameError() {
    await expect(this.firstNameError).toBeVisible();
  }

  /**
   * Verify Last Name error is displayed
   */
  async verifyLastNameError() {
    await expect(this.lastNameError).toBeVisible();
  }

  /**
   * Verify Email error is displayed
   */
  async verifyEmailError() {
    await expect(this.emailError).toBeVisible();
  }

  /**
   * Verify Phone Number error is displayed
   */
  async verifyPhoneNumberError() {
    await expect(this.phoneNumberError).toBeVisible();
  }

  /**
   * Verify Password error is displayed
   */
  async verifyPasswordError() {
    await expect(this.passwordError).toBeVisible();
  }

  /**
   * Verify Confirm Password error is displayed
   */
  async verifyConfirmPasswordError() {
    await expect(this.confirmPasswordError).toBeVisible();
  }

  /**
   * Verify Age Checkbox error is displayed
   */
  async verifyAgeCheckboxError() {
    await expect(this.ageCheckboxError).toBeVisible();
  }

  /**
   * Verify Password Mismatch error is displayed
   */
  async verifyPasswordMismatchError() {
    await expect(this.passwordMismatchError).toBeVisible();
  }

  /**
   * Verify Register heading is visible
   */
  async verifyRegisterPageLoaded() {
    await expect(this.registerHeading).toBeVisible();
  }

  /**
   * Click on Login link
   */
  async clickLoginLink() {
    await this.loginLink.click();
  }
}

module.exports = { RegistrationPage };
