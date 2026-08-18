@sep23 @requires-live-payment
Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    #* AC1: When the user enters valid card information, checks the terms and conditions checkbox,
    #*      and clicks on the Pay button, then they should be redirected to the confirmation page.
    #* AC2: In the stepper, steps 1, 2, 3 should be green.
    #* AC3: The correct program name should be displayed.
    #* AC4: The correct user email should be displayed.
    #* AC5: The correct company contact information should be displayed.

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed
        When customer clicks on any plan
        Then the next button should be activated
        When customer clicks on the next button
        Then the step3 page should be displayed

    Scenario: Make a payment with valid card information
        When customer fills all the fields with valid information
        And customer checks the terms and conditions checkbox
        And customer clicks on the Pay button
        Then the confirmation page should be displayed
