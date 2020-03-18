import React, {Component} from 'react';
import './App.css';
import Welcome from '../src/components/Welcome/Welcome';
import Persons from './components/Persons/Persons';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id: "asde1", name: "Igor", age: "29" },
        { id: "fdfrgd2", name: "Tim", age: "30" },
        { id: "fhgjmg23", name: "Rem", age: "20" }
      ],
    }
  }

  nameChangedhandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePerson = index => {  
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  

  render(){
   
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Welcome name="Igor" />
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangedhandler}
        />
      </div>
    );
  }
}

export default App;
