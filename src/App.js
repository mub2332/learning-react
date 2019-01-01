import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Learn React</h1>
        <Person name="Mahir" age="20"></Person>
      </div>
    );
  }
}

export default App;
