import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Titles />
        </div>
      </div>
    );
  }
};

export default App;
