@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

@sep08-1
    Scenario: Task Tracker Status
        Then user should Start Application step color is blue
        And user should see Payment plan step color is grey
        And user should see Review step color is grey
        When user completes Start Application and clicks Next
        Then user should see Start Appliation step color turns green and Payment plan step turns blue
        When user completes Payment plan and clicks Next
        Then user should see Payment plan step color turns green and Review step turns blue