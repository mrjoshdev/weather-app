import React, { Component } from 'react';
import Anchor_Man from './Anchor_Man.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ron's Weather App</h1>
          <br></br>
          <img src={Anchor_Man} className="App-logo" alt="Anchor_Man" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
