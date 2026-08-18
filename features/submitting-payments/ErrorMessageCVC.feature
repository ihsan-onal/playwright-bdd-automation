@sep29
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: An immediate error message should be shown if the CVC number is too short or incorrect.

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed
        When customer clicks on any plan
        Then the next button should be activated
        When customer clicks on the next button
        Then the step3 page should be displayed

    Scenario: Error message for incorrect CVC number
        When customer enters an incorrect CVC number
        Then the CVC validation result should indicate an error

    Scenario: Error message for incomplete CVC number
        When customer enters an incomplete CVC number
        Then the CVC validation result should indicate an error
