@sep28
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        Given user completes start application step
        Given user completes payment plan page

@sep28-1
    Scenario Outline: Scenario Outline name: Valid card information
        When user enters invalid Card number "<invalid Card No>"
        Then the user should see inline error message for Card number field
        Examples:
            |invalid Card No|
            | 4000056655665558 |