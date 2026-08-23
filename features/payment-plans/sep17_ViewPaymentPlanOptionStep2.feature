@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)
    #*            Installment plans should be unique


    #TODO: Create scenarios that cover all the acceptance criteria


    Background:
        Given user is on the enrollment page
        Given user completes start application step        

@sep17-1
    Scenario: Upfront payment
        Then user see Upfront text with Upfront price
        And user see pay once text

@sep17-2
    Scenario: Installment plan
        Then user see total number of Installements
        And user see installment amount per month


    
