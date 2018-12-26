import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false

  }
  incrementCount = () => {
    this.setState(({count}) => ({
      count: count + 1
    }));
  }

  toggleLight = () => {
    this.setState(({isOn}) => ({
      isOn: !isOn
    }));
  }

  render() {
    return (
      <>
      <button onClick={this.incrementCount}>I was clicked {this.state.count} times</button>  
      <h2>Toggle Light</h2>
      <div
        style={{
          height: '50px',
          width: '50px',
          background: this.state.isOn ? 'yellow' : 'grey'
        }}
        onClick={this.toggleLight}
      >
      </div>     
      </>
    );
  }
}

export default App;
