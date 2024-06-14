@Example
Feature: Example feature
  @Example1
  Scenario: Open Playwright
    Given I open the browser
    When I navigate to "https://playwright.dev/"
    Then the title should contain "Playwright"
