import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    query: 32,
    errorText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value > 0 && value < 100) {
      this.setState({
        query: value,
        errorText: ''
      });
    } else {
      this.setState({
        query: 32,
        errorText: 'Please enter a number between 0 and 100.'
      });
    }
  };

  render() {

    return (
      <div>
        <input
          type="number"
          className="NumberOfEvents"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;