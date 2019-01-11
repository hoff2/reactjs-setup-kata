Feature: FizzBuzz
  As a user
  I want to see the result of the FizzBuzz calculation
  So that I can easily identify numbers divisible by 3 and 5

  Scenario: Returns a number when given a number not divisible by 3 or 5
    Given Input contains 17
    When I click submit
    Then 17 is displayed
 