@sep26

Feature: Enabling The Pay button
As a customer, I should be able to click pay button after I agreed to the terms and conditions.

# Acceptance Criteria
# 1. The pay button is disabled and terms & conditions checkbox is unchecked by default
# 2. The pay button will be activated once the user agrees to the terms and conditions


    Background:
    Given user is on the enrollment page
    Given user completes start application step
    Given user completes payment plan page


@sep26-1
    Scenario: Valid card information
        Then user see Terms and Conditions checkbox is unchecked
        And user see the Pay button is disabled
