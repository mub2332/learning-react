import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mahir', age: 20 },
      { name: 'Meherwan', age: 19 },
      { name: 'Marcel', age: 21 }
    ],
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: event.target.value, age: 20 },
        { name: 'Meherwan', age: 19 },
        { name: 'Marcel', age: 21 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Mub')}
            changed={this.nameChangedHandler}>
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

    return (
      <div className="App">
        <h1>Learn React</h1>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle display</button>
        {persons}
      </div>
    );
  }
}

export default App;
