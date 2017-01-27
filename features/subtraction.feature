Feature: Subtraction
  This feature implements subtraction of two or more numbers

  Scenario: Subtracting two positive numbers
    Given the input "4-2"
    When the calculator is run
    Then the output should be "2"
