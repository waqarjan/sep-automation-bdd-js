@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        Given user completes start application step
        And the user is on the Payment Plan page

@sep16-1
    Scenario: No payment plan is selected on the initial page visit
        Then user should see Start Appliation stepper color is green
        Then user should see price summary is displayed
        And user should see Back button is displayed
        When the user completes Payment plan and clicks Next
        Then user should see Payment plan stepper color is green
        And user should see Review step color is blue
