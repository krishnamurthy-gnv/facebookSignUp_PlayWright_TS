Feature: User crates an account in facebook
    Background: User navigates to the application

    Scenario: User navigates to the Signup page
        Given User navigates to the application
        When User clicks the button create new account in the facebook page
        Then User is navigated to create an account

    Scenario: Signup should be successful        
        And User enters the firstName as "ABCD"
        And User enters the lastName as "EFGH"
        And User selects the month as "May"
        And User selects the date as "23"
        And User select the yeas as "2000"
        And User selects the gender as "Male"
        And User enters the email as "abcd@gmail.com"
        And User enters the password as "abcd@DEF"
        When User clicks the button "Sign Up"
        Then User account should be registered successfully