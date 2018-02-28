import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {persons: [
          { id: '1', name: 'Quy', age: 20 },
          { id: '2', name: 'Vu', age: 21 },
          { id: '3', name: 'A Khanh', age: 22 },
          { id: '4', name: 'A Luong', age: 22 }
        ],
        otherState: 'some other value',
        showPersons: false}
  }
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
//
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      style.backgroundColor = 'red'
    }
//
    const classes = [];
    if (this.state.persons.length <= 2) {
        classes.push('red');
    }

    if (this.state.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div className="App">
            <p className={classes.join(' ')}>Welcome</p>
            <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
  }
}

export default App;
