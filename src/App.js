import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
// import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    // offlineText: '',
    showWelcomeScreen: undefined
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

  async componentDidMount() {
    this.mounted = true;

    // if (!navigator.onLine) {
    //   this.setState({
    //     offlineText: 'You are currently offline. Displayed are cached events. Please go back online to have update the events.'
    //   })
    // }

    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App" >
        {/* <OfflineAlert text={this.state.offlineText} /> */}
        <p>Name of City:</p>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <p>Number of Events:</p>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}></NumberOfEvents>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  };
}

export default App;