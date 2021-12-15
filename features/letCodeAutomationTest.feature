Feature: The LetCode Automation Test WebPage

    Scenario: Creating account and Validating
        Given I am in the letCode home page
        Then I click on signup and I validate the header "SIGN UP"
        When I enter the credentials and click sign up for account creation
        Then I should see account created page with header text as "LetCode with Koushik"
       
        When I click on Explore Workspace Button
        Then I should be navigated to Workspace page and I validate the header text "Practice and become pro in test automation"

        Then I click on Input and I navigate to input page with header "Input"
        When I start to fill the inputs

        Then I click on Button and I validate Button page with header "Button"
        Then I click on Hold Button

        Then I click on Select option and I validate the header "Dropdown"
        When I select different options in different dropdowns
        Then I validate wheather its selected as text "You have selected Apple"

        Then I click on Alert element and I validate the header text "Alert"
        When I select different alert and handle them

        # Then I click on Windows element and validate the header with "Windows"
        # When I select Open Home page and it navigates to new windows
        # Then I validate the navigated window with "Practice and become pro in test automation"

        Then I click on Elements element and validate the header with "Elements"
        When I enter the value and click search

        # Then I click on Drop element and validate the header with "Drop"
        # When I perform drag and drop
        # Then I should see header text "Dropped!" in Target

        Then I click on MultiSelect element and validate the header with "Selectable"
        When I click on Multiple Option

        Then I click on Wait and validate the header text with "Wait"
        When I click simple alert and wait for alert
        Then I validate the alert box and click Ok buttton

        When I click on Explore courses it navigates to course page
        Then I validate the header text with "Courses"
        Then I check for available courses heading "Selenium Webdriver"
        When I click on a course and it navigates to the selected page
        Then I validate header with text "Selenium Webdriver" and go to homepage

        When I click on Product element and it navigates to XPath page
        Then I validate the XPath page with header text "LetXPath"
        When I click on Try it today element it navigates to new extension window
        Then I validate the Page header "LetXPath" and navigate back to LetCode Home page


