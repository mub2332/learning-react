import React, { Component } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}></Persons>
        </div>
      );
      
      btnClass = styles.red;
    }

    let pClass = [];

    if (this.state.persons.length % 2 === 0) {
      pClass.push(styles.red);
    } else {
      pClass.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Learn React</h1>
        <p className={pClass.join(' ')}>style check</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle display</button>
        {persons}
      </div>
    );
  }
}

export default App;
