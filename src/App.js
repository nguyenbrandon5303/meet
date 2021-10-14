import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
      }
    });
  };

  componentWillUnmount() {
    this.mounted = false;
  };

  render() {
    return (
      <div className="App" >
        <p>Name of City:</p>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <p>Number of Events:</p>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}></NumberOfEvents>
        <EventList events={this.state.events} />
      </div>
    );
  };
}

export default App;