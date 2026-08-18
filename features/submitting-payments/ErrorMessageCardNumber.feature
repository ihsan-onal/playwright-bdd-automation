@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed.

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed
        When customer clicks on any plan
        Then the next button should be activated
        When customer clicks on the next button
        Then the step3 page should be displayed

    Scenario: Error message for the incomplete card number
        When customer enters an incomplete card number
        Then the error message should be displayed

    Scenario: Error message for the invalid card number
        When customer enters an invalid card number
        Then the error message should be displayed
