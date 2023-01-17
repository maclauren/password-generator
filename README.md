permalink: /index.html

# password-generator
Password generator app that an app that runs in the browser and features dynamically updated HTML and CSS, all powered by JavaScript code

## Table of Contents:
- User Story
- Acceptance Criteria
- Method

## User Story
AS A company employee. I WANT to generate a random password based on criteria I've selected by modifying starter code. SO THAT I can improve my account security.

## Acceptance Criteria
The application must:

Generate a password when the button is clicked.

Present a series of prompts for password criteria:

Length of password:

At least 10 characters but no more than 64.

Character types:
Lowercase
Uppercase
Numeric
Special characters ($@%&*, etc.)

Code should validate for each input and at least one character type should be selected.

Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.

## Method

1. Added prompt to function for password options
2. Added function for getting a random element from an array
3. Added character options (numeric, special, lower case, upper case)
4. Added boolean logic to generating characters
5. Added generation options for each type of character
6. Added logic to generate characters randomly
7. Added logic to join all random results together
