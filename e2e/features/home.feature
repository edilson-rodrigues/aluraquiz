Feature: Home page

  Scenario: View homepage title
    Given the app is running at "http://localhost:3000"
    When I open the home page
    Then I should see "Marvel Studios"
