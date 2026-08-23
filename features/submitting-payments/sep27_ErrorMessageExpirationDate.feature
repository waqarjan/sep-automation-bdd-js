@sep27
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed. 


    #* AC1: 1. An immediate error message should be thrown if the expiration number is too short or wrong:
    #*                  Your card's expiration date is incomplete.
    #*                  Your card's expiration year is in the past.


     #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        Given user completes start application step
        Given user completes payment plan page

@sep27-1
    Scenario Outline: Valid card information
        When user enter invalid "<Expire date>" date that is in the past
        Then the user should inline "<Error message>" for Expiration date field
        Examples:
            | Expire date | Error message                                 |
            |12/25        | Your card’s expiration year is in the past.   |