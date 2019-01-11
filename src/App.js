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
  if (number % 3 == 0 && number % 5 == 0) {
    return 'fizzbuzz';
  }
  if (number % 3 == 0) {
    return 'fizz';
  }
  if(number % 5 == 0) {
    return 'buzz'
  }
  return `${number}`;
}

export default App;
