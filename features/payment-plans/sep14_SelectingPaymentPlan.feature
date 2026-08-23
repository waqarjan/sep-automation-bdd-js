@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    #TODO: Create scenarios that cover all the acceptance criteria


    Background:
        Given user is on the enrollment page
        Given user completes start application step
        And the user is on the Payment Plan page

@sep14-1
    Scenario: No payment plan is selected on the initial page visit
        Then user see no Payment Plan is be selected
        Then user see Next button is disabled by default


@sep14-2
    Scenario: Selecting a payment plan highlights the selected option and enables Next
        When the user selects Upfront payment plan accordion
        Then user see the Upfront payment plan option is highlighted
        Then user see the Next button is enabled
        Then user should be able to change payment plan from Upfront to Installments