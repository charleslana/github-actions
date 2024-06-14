@Saucedemo
Feature: Finish cart after login
  @LoginSaucedemo
  Scenario: Login saucedemo success
    Given I navigate to saucedemo page
    When I put the username "standard_user"
    When I put the password "secret_sauce"
    And I click the login button
    Then the page "Products" is visible
