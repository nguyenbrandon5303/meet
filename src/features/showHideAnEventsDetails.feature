Feature: Show/Hide an Event's Details

  Scenario: An event element is collapsed by default
    Given user has not opened details to an event
    When user is interested in an event
    Then the user should see a collapsed event that can be viewed for more information

  Scenario: User can expand an event to see its details.
    Given user is interested in an event
    When user clicks Show details
    Then the user should see more information about that event

  Scenario: User can collapse an event to hide its details.
    Given user clicked Show details on an event
    When user clicks Hide details
    Then the user should see the collapsed event.