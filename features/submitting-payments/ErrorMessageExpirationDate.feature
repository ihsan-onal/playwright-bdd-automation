@sep27
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed.

    #* AC1: An immediate error message should be thrown if the expiration number is too short or wrong:
    #*              Your card's expiration date is incomplete.
    #*              Your card's expiration year is in the past.

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed
        When customer clicks on any plan
        Then the next button should be activated
        When customer clicks on the next button
        Then the step3 page should be displayed

    Scenario: Error message for incomplete expiration date
        When customer enters an incomplete expiration date
        Then the expiration date error message should be "Your card’s expiration date is incomplete."

    Scenario: Error message for expiration date in the past
        When customer enters an expiration date in the past
        Then the expiration date error message should be "Your card’s expiration year is in the past."
