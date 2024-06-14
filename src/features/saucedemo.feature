@Saucedemo
Feature: Saucedemo Example
  @LoginSaucedemo
  Scenario: Login saucedemo success
    Given I navigate to saucedemo page
    When I put the username "standard_user"
    When I put the password "secret_sauce"
    And I click the login button
    Then should visible the page "Products"

  @LoginSaucedemoError
  Scenario: Login saucedemo error
    Given I navigate to saucedemo page
    When I put the username "standard_user"
    When I put the password "password"
    And I click the login button
    Then should visible error login message "Epic sadface: Username and password do not match any user in this service"

  @SaucedemoOrderFinish
  Scenario: Finish order success
    Given I add product do cart
    When I click the cart icon
    When I click the checkout button
    When I put the firstname "firstname"
    When I put the lastname "lastname"
    When I put the zipcode "zipcode"
    When I click the continue button
    And I click the finish button
    Then should visible success order message "THANK YOU FOR YOUR ORDER"
