@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to choose a payment plan from the available options
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed

    Scenario: When the user selects any payment plan then that option should be highlighted to indicate selection
        When user selects any payment plan
        Then the selected payment plan should be highlighted

    Scenario: Upon selecting any pricing option, the Next button should become active
        When user selects any pricing option
        Then the Next button should be active

    Scenario: Users should be able to change their plan selections before finalizing their choice
        When user selects any pricing option
        And user changes their plan selection
        Then the selected payment plan should be highlighted
