@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

@sep19-1
    Scenario Outline: providing all fields takes the user to payment plan step
        Then user should Start Application step color is blue
        When user enters the first name
        And user enters the last name
        And user enters the email address
        And user enters the phone number
        And user selects "<how did you hear>" about us dropdown
        And user clicks the Next button on start application step
        Then user should see Start Appliation stepper color is green
        And user should see Payment plan step color is blue
    Examples:
            | how did you hear  |
            |Email              |

@sep19-2
    Scenario: providing only the required fields takes the user to payment plan step
        Then user should Start Application step color is blue
        When user enters the first name
        And user enters the last name
        And user enters the email address
        And user enters the phone number
        And user clicks the next button on start application step
        Then user should see Start Appliation stepper color is green
        And user should see Payment plan step color is blue