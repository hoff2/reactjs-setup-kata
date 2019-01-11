import React, { Component } from 'react';

class App extends Component {
  state = {};

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" id="input" onChange={this.updateInput} />
        <input type="submit" />
        <div id="output">17</div>
      </div>
    );
  }
}

export default App;
