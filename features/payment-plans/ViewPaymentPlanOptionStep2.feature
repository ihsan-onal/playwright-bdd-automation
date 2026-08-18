@sep17
Feature: View payment plan options in Step 2

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront (first row)
    #*              $ <upfront_price> pay once (second row)
    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            <number_of_installments> Installments (first row)
    #*            $ <monthly_price> per month (second row)
    #*            Installment plans should be unique

    Background:
        Given user is on the enrollment page
        When user fills all the fields with valid information
        And user clicks the next button on step 1
        Then the step2 page should be displayed

    Scenario: Display upfront payment option
        When payment plan options are displayed
        Then there should be only one upfront price option
        And the payment plan option should display

    Scenario: Display installment payment plans
        When payment plan options are displayed
        Then there should be a total of 2 payment plans
        And each installment plan should be unique
        And for each installment plan
