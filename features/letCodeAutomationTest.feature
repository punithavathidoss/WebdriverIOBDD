Feature: The LetCode Automation Test WebPage


    Background: LetCode logged page
        Given I am on the letCode page

    Scenario: Creating account and Validating
        When I click on signup
        Then I validate the signUp page with "SIGN UP"
        When I enter the credentials and click sign up for account creation
        Then I should see account created page with header text as "LetCode with Koushik"

    Scenario: Explore courses Validation
        When I click Explore courses it navigates to course page
        Then I validate the header text with "Courses"
        Then I check for available courses heading "Selenium Webdriver"
        When I click on a course and it navigates to the selected page
        Then I validate header with text "Selenium Webdriver" and go to homepage

    Scenario: Workspace Validation
        When I click on Explore Workspace Button
        Then I should be navigated to Workspace page and I validate the header text "Practice and become pro in test automation"
        When I click on Input
        Then I navigate to input page with header "Input"
        When I start to fill the Inputs
        When I click on Button
        Then I validate Button page with header "Button"
        When I click on Hold Button
        When I click on Select option
        Then I validate the header "Dropdown"
        When I select different options in different dropdowns
        Then I validate wheather its selected as text "You have selected Apple"
        When I click on Elements element
        Then I should see the header with "Elements"
        When I enter the value and click search
        When I click on MultiSelect element
        Then validate the header with "Selectable"
        When I click on Multiple Option
        When I click on Wait
        Then validating the header text with "Wait"
        When I click simple alert and wait for alert and accept alert

    Scenario: Product Validation
        When I click on Product element and it navigates to XPath page
        Then I validate the XPath page with header text "LetXPath"
        When I click on Try it today element it navigates to new extension window
        Then I validate the Page header "LetXPath"
        When I navigate back to LetCode Home page


