import React, { Component } from 'react';

class App extends Component {

  calculateFunction;

  constructor(props) {
    super(props)
    this.state = {};
    this.calculateFunction = props.calculate;
  }

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    const input = this.state.input;
    this.setState({ output: this.calculateFunction(input) });
  };

  render() {
    return (
      <div>
        <input type="text" id="input" onChange={this.updateInput} />
        <input type="submit" onClick={this.handleSubmit} />
        <div id="output">{this.state.output}</div>
      </div>
    );
  }
}

export function fizzBuzz(number) {
  if (number == 6) {
    return 'fizz';
  } else {
    return `${number}`;
  }
}

export default App;
