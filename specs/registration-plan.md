# Registration Plan
**URL:** https://rahulshettyacademy.com/client/#/auth/register

## 1. Successful Registration with Valid Data
**Seed:** `tests/seed.spec.ts`

### 1.1 Register with all valid information
**Steps:**
1. Navigate to the registration page
2. Enter "John" in the First Name field
3. Enter "Doe" in the Last Name field
4. Enter "john.doe@example.com" in the Email field
5. Enter "9876543210" in the Phone Number field
6. Select "Engineer" from the Occupation dropdown
7. Select "Male" radio button for Gender
8. Enter "Test@123" in the Password field
9. Enter "Test@123" in the Confirm Password field
10. Check the "I am 18 year or Older" checkbox
11. Click the Register button

**Verify:**
- User successfully registers and is redirected to the appropriate page
- Registration success message or confirmation page is displayed

## 2. Registration with Female Gender
**Seed:** `tests/seed.spec.ts`

### 2.1 Register with Female gender option
**Steps:**
1. Navigate to the registration page
2. Enter "Jane" in the First Name field
3. Enter "Smith" in the Last Name field
4. Enter "jane.smith@example.com" in the Email field
5. Enter "9123456789" in the Phone Number field
6. Select "Doctor" from the Occupation dropdown
7. Select "Female" radio button for Gender
8. Enter "Secure@456" in the Password field
9. Enter "Secure@456" in the Confirm Password field
10. Check the "I am 18 year or Older" checkbox
11. Click the Register button

**Verify:**
- User successfully registers with Female gender option selected
- Registration is completed successfully

## 3. Validation Error - Missing Required Fields
**Seed:** `tests/seed.spec.ts`

### 3.1 Submit form without filling any fields
**Steps:**
1. Navigate to the registration page
2. Click the Register button without filling any fields

**Verify:**
- Form validation errors are displayed for required fields
- User is not able to submit the form

### 3.2 Submit form with only First Name filled
**Steps:**
1. Navigate to the registration page
2. Enter "Robert" in the First Name field
3. Leave all other fields empty
4. Click the Register button

**Verify:**
- Form validation errors are displayed for missing required fields
- Registration is not completed

## 4. Validation Error - Invalid Email Format
**Seed:** `tests/seed.spec.ts`

### 4.1 Submit with invalid email format
**Steps:**
1. Navigate to the registration page
2. Enter "Michael" in the First Name field
3. Enter "Brown" in the Last Name field
4. Enter "invalid-email-format" in the Email field (without @ symbol)
5. Enter "9999999999" in the Phone Number field
6. Select "Student" from the Occupation dropdown
7. Select "Male" radio button for Gender
8. Enter "Pass@123" in the Password field
9. Enter "Pass@123" in the Confirm Password field
10. Check the "I am 18 year or Older" checkbox
11. Click the Register button

**Verify:**
- Email validation error is displayed
- Registration form is not submitted

## 5. Validation Error - Password Mismatch
**Seed:** `tests/seed.spec.ts`

### 5.1 Submit with mismatched passwords
**Steps:**
1. Navigate to the registration page
2. Enter "Sarah" in the First Name field
3. Enter "Wilson" in the Last Name field
4. Enter "sarah.wilson@example.com" in the Email field
5. Enter "9876543211" in the Phone Number field
6. Select "Scientist" from the Occupation dropdown
7. Select "Female" radio button for Gender
8. Enter "Password@123" in the Password field
9. Enter "DifferentPass@123" in the Confirm Password field (different from Password)
10. Check the "I am 18 year or Older" checkbox
11. Click the Register button

**Verify:**
- Password mismatch error is displayed
- Registration form is not submitted

## 6. Validation Error - Age Confirmation Not Checked
**Seed:** `tests/seed.spec.ts`

### 6.1 Submit without age confirmation checkbox
**Steps:**
1. Navigate to the registration page
2. Enter "David" in the First Name field
3. Enter "Miller" in the Last Name field
4. Enter "david.miller@example.com" in the Email field
5. Enter "9876543212" in the Phone Number field
6. Select "Engineer" from the Occupation dropdown
7. Select "Male" radio button for Gender
8. Enter "MyPass@789" in the Password field
9. Enter "MyPass@789" in the Confirm Password field
10. Leave the "I am 18 year or Older" checkbox unchecked
11. Click the Register button

**Verify:**
- Age confirmation validation error is displayed
- Registration form is not submitted

## 7. Form Field Interactions
**Seed:** `tests/seed.spec.ts`

### 7.1 Verify all form fields are accessible
**Steps:**
1. Navigate to the registration page
2. Verify First Name textbox is visible and clickable
3. Verify Last Name textbox is visible and clickable
4. Verify Email textbox is visible and clickable
5. Verify Phone Number textbox is visible and clickable
6. Verify Occupation dropdown is visible and clickable
7. Verify Gender radio buttons are visible and clickable
8. Verify Password textbox is visible and clickable
9. Verify Confirm Password textbox is visible and clickable
10. Verify Age confirmation checkbox is visible and clickable
11. Verify Register button is visible and clickable

**Verify:**
- All form elements are present and interactive
- Page header "Register" is displayed

### 7.2 Verify navigation link to login page
**Steps:**
1. Navigate to the registration page
2. Click on "Already have an account? Login here" link

**Verify:**
- User is redirected to the login page
- URL changes to login page

## 8. Occupation Dropdown Options
**Seed:** `tests/seed.spec.ts`

### 8.1 Verify all occupation options are available
**Steps:**
1. Navigate to the registration page
2. Click on the Occupation dropdown
3. Verify all occupation options are displayed

**Verify:**
- "Doctor" option is available
- "Student" option is available
- "Engineer" option is available
- "Scientist" option is available