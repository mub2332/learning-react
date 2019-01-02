import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Mahir', age: 20 },
      { id: '2', name: 'Meherwan', age: 19 },
      { id: '3', name: 'Marcel', age: 21 }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ 
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let redBold = ['red', 'bold'].join(' ');
    let bold = 'bold';

    let pClass = null;

    if (this.state.persons.length % 2 === 0) {
      pClass = redBold;
    } else {
      pClass = bold;
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Learn React</h1>
          <p className={pClass}>style check</p>
          <button
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle display</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
