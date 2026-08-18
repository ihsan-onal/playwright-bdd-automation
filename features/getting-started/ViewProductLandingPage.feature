@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order:
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.

    Background:
        Given user is on the enrollment page

    Scenario: Verify that the Secure checkout text is displayed
        Then the Secure checkout text should be displayed

    Scenario: Verify that the program name is displayed
        Then the program name should be displayed

    Scenario: Verify that the footer elements are displayed in the correct order
        Then the footer elements should be displayed in the correct order

    Scenario: Verify that the help text is displayed in the footer
        Then the help text should be displayed in the footer
