@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.

    Background:
        Given user is on the enrollment page

    Scenario: Product name is displayed on the information card
        Then the product name should be displayed on the information card

    Scenario: Product name on the information card matches the product name on the left side of the screen
        Then the product name on the information card should match the product name on the left side of the screen

    Scenario: Product price is displayed
        Then the product price should be displayed

    Scenario: Flexible payment plan is displayed
        Then the flexible payment plan should be displayed

    Scenario: Program start date is displayed
        Then the program start date should be displayed

    Scenario: Return policy and final date for returns is displayed
        Then the return policy and the final date for returns should be displayed
