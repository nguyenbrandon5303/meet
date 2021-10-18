import React, { Component } from 'react';
import { OfflineAlert } from './Alert';

class Event extends Component {
  state = {
    details: false,
    offlineText: ''
  };

  toggleDetails = (detailsState) => {
    this.setState({
      details: !detailsState
    });
  }

  componentDidMount() {
    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You are currently offline. Displayed are cached events. Please go back online to have update the events.'
      })
    } else {
      this.setState({
        offlineText: ''
      })
    }
  }

  render() {
    let event = this.props.event;
    let detailsState = this.state.details;

    return (
      <div className="Event">
        <OfflineAlert text={this.state.offlineText} />
        <h1 className="EventSummary">{event.summary}</h1>
        <div className="EventStart">{event.start.dateTime}</div>
        <div className="EventLocation">{event.location}</div>
        <button className="showDetail" onClick={() => this.toggleDetails(detailsState)}>Details</button>
        {this.state.details && (
          <div className="EventLink">See details on Google Calendar {event.htmlLink}</div>
        )}
        {this.state.details && (
          <div className="EventDetails">{event.description}</div>
        )}
      </div>
    );
  }
}

export default Event;