@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields

    Background:
        Given user is on the enrollment page

    Scenario: Verify that the next button takes the user to step2 when all fields are provided
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then user should be taken to step2

    Scenario: Verify that the next button takes the user to step2 when only required fields are provided
        When user fills only the required fields with valid information
        And user clicks the next button on step 1
        Then user should be taken to step2
