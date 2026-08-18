@sep16
Feature: Click on the next button on payment plans page

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be disabled.

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed

    Scenario: Click on any plan should activate the next button
        When customer clicks on any plan
        Then the next button should be activated

    Scenario: When the customer clicks on the next button, the step3 page should be displayed
        When customer clicks on the next button
        Then the step3 page should be displayed

    Scenario: In the stepper, step1 and step2 should be green, and step3 should be blue
        When customer clicks on the next button
        Then the stepper should be green for step1 and step2, and blue for step3.

    Scenario: The payment component should be displayed
        When customer clicks on the next button
        Then the payment component should be displayed

    Scenario: A price summary should be displayed
        When customer clicks on the next button
        Then the price summary should be displayed

    Scenario: The back button should be displayed
        When customer clicks on the next button
        Then the back button should be displayed

    Scenario: By default, the pay button should be disabled
        When customer clicks on the next button
        Then the pay button should be disabled
