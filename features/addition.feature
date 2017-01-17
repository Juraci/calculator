Feature: Addition

  Scenario: Add two numbers
    Given the input "2+2"
    When the calculator is run
    Then the output should be "4"

  Scenario: Adding three numbers
    Given the input "2+2+1"
    When the calculator is run
    Then the output should be "5"
