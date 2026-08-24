@sep23
Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    #* AC1: When the user enters valid card information, checks the terms and conditions checkbox, 
    #*      and clicks on the Pay button, then they should be redirected to the confirmation page.

    #* AC2: In the stepper, steps 1, 2, 3 should be green.
    #* AC3: The correct program name should be displayed.
    #* AC4: The correct user email should be displayed.
    #* AC5: The correct company contact information should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria


    Background:
        Given user is on the enrollment page
        Given user completes start application step
        Given user completes payment plan page

@sep23-1
    Scenario: Valid card information
        Then user should see Start Appliation stepper color is green
        Then user should see Payment plan stepper color is green
        Then user should see Review step color is blue
        And the user enters valid Card Number
        And the user enters valid card Expiry Date
        And the user enters valid card Security Code
        And the user enters valid ZIP code


@sep23-2
    Scenario: Make Payment
        When the user enter valid card information
        And the user check Terms and conditions checkbox
        And the user clicks on Pay button
        Then user should see Payments confirmation page
        And user should see program Test Automation with Selenium
        And user should see correct email address is displayed
        And user should see CYDEO contact information
        Then user should see Review step color is green
