import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    query: 32,
    numberOutOfBounds: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value > 0 && value < 100) {
      this.setState({
        query: value,
        numberOutOfBounds: ''
      });
    } else {
      this.setState({
        query: 32,
        numberOutOfBounds: 'Please enter a number between 0 and 100.'
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
        <div className="OutOfBounds">{this.state.numberOutOfBounds}</div>
      </div>
    );
  }
}

export default NumberOfEvents;