Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given user opened the app
    When user hasn't specified a number for amount of events shown
    Then the user should see at most 32 events.

  Scenario: User can change the number of events they want to see.
    Given user opened the app
    When user changes number of events displayed
    Then the user should see at most the number of events the user entered.