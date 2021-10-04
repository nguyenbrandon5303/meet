import React, { Component } from 'react';

class Event extends Component {
  state = {
    details: false
  };

  toggleDetails = (detailsState) => {
    this.setState({
      details: !detailsState
    });
  }

  render() {
    let event = this.props.event;
    let detailsState = this.state.details;

    return (
      <div className="Event">
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