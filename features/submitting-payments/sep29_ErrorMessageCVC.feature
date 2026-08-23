@sep29
Feature: Error message for the invalid CVC number

    # As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    # AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        Given user completes start application step
        Given user completes payment plan page

@sep29-1
    Scenario Outline: Invalid CVC information
        When user enters invalid "<Card Secruty No>" CVC number
        Then the user should see an inline error message for CVC field
        Examples:
            | Card Secruty No |
            | 12 |