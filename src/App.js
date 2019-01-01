import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mahir', age: 20 },
      { name: 'Meherwan', age: 19 },
      { name: 'Marcel', age: 21 }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 20 },
        { name: 'Meherwan', age: 19 },
        { name: 'Marcel', age: 21 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Learn React</h1>
        <button onClick={() => this.switchNameHandler('Mubtasim')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Mub')}>
          Hobbies: sleeping
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}></Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
