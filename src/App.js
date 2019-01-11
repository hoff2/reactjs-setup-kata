import React, { Component } from 'react';

class App extends Component {
  state = {};

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    const input = this.state.input;
    this.setState({ output: input });
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

export default App;
