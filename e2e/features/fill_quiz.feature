Feature: Fill quiz

  Scenario: Play through the quiz and reach results
    Given the app is running at "http://localhost:3000"
    When I play the quiz until the end
    Then I should see my result and my name
