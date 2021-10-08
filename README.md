# meet

## User Stories

### Filter Events by City
#### As a user, I should be able to filter events by city so that I can get event information from that city.

### Show/Hide an Event's Details
#### As a user, I should be able to expand/collapse an event to see/hide its details so that I can interact with event information.

### Specify Number of Events
#### As a user, I should be able to change the number of events displayed so I can see any amount of events I want.

### Use the App when Offline
#### As a user, I should be able to see cached data offline so I can see events when I have no internet connection.

### Data Visualization
#### As a user, I should be able to see a chart with the number upcoming events so that I know how many eventa are in each city.

## User Stories (Gherkin syntax)

### Filter Events by City
#### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.
##### Given user opened the app, when user hasn't searched for a city, then the user should see upcoming events from all cities.

#### Scenario 2: User should see a list of suggestions when they search for a city.
##### Given user opened the app, when user searches for a city, then the user should see a list of suggestions.

#### Scenario 3: User can select a city from the suggested list.
##### Given user searched for a city, when user selected a city from suggested list, then the user should see upcoming events from that city.


### Show/Hide an Event's Details
#### Scenario 1: An event element is collapsed by default
##### Given user has not opened details to an event, when user is interested in an event, then the user should see a collapsed event that can be viewed for more information.

#### Scenario 2: User can expand an event to see its details.
##### Given user is interested in an event, when user clicks "Show details," then the user should see more information about that event.

#### Scenario 3: User can collapse an event to hide its details.
##### Given user clicked "Show details" on an event, when user clicks "Hide details," then the user should see the collapsed event.

### Specify Number of Events
#### Scenario 1: When user hasn’t specified a number, 32 is the default number.
##### Given user opened the app, when user hasn't specified a number for amount of events shown, then the user should see at most 32 events.

#### Scenario 2: User can change the number of events they want to see.
##### Given user opened the app, when user changes number of events displayed, then the user should see at most the number of events the user entered.


### Use the App when Offline
#### Scenario 1: Show cached data when there’s no internet connection.
##### Given user opened the app, when there's no internet connection, then the user should see cached data.

#### Scenario 2: Show error when user changes the settings (city, time range).
##### Given there's no internet connection, when user changes settings, then the user should see an error.


### Data Visualization
#### Scenario 1: Show a chart with the number of upcoming events in each city.
##### Given user opened the app, when user searches for a city, then the user should see a chart with the number of upcoming events in each city.


