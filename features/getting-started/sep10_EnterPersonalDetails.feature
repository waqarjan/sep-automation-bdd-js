@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

@sep10-1
    Scenario: Default field
        When user see first name field is displayed
        And user see the last name field is displayed
        And user see the email address field is displayed
        And user see the phone number field is displayed
        And the User should see Payment plan is displayed