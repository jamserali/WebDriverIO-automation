@mobile
Feature: App Login test

  Scenario: App Login test
    Given I launch the app
    When I enter "test" in the "username" field
    And I enter "test" in the "password" field
    And I press "login"
    Then I should see Home screen