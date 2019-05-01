Feature: Mastermind

  Scenario: A
    Given The combination is "ABCD"
    Given the user enters "BCDE"
    When the code is entered
    Then the hint is "--- "

  Scenario: B
    Given The combination is "ABCD"
    Given the user enters "ABCD"
    When the code is entered
    Then the hint is "++++"

  Scenario: C
    Given The combination is "CDEF"
    Given the user enters "CDAB"
    When the code is entered
    Then the hint is "++  "
