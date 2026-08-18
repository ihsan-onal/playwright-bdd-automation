@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.
    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    Background:
        Given user is on the enrollment page

    Scenario: Default field types and values should be present and validate for email format
        Then the first name text field is present
        And the last name text field is present
        And the email address text field is present and validates for email format
        And the phone text field is present and allows numbers only

    Scenario: About us dropdown list is present
        Then the About us dropdown list is present

    Scenario: The Next button should be disabled if any required data is missing or invalid
        Then the Next button should be disabled if any required data is missing or invalid
