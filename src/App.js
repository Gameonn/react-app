import React, { Component } from "react";
import Person from "./Person/Person";
import Fruit from "./Fruit/Fruit";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Ankit", age: 22, hobby: "mobile games" },
      { id: 2, name: "David", age: 21, hobby: "coding" },
    ],
    fruits: [
      { id: 1, name: "Mango", color: "yellow", qty: 25 },
      { id: 2, name: "Orange", color: "orange", qty: 12 },
      { id: 3, name: "Apple", color: "red", qty: 40 },
      { id: 4, name: "Guava", color: "green", qty: 15 },
    ],
    showPersons: true,
    showFruits: false,
  };

  switchPersonHandler = (newName) => {
    this.setState({
      persons: [
        { id: 11, name: "Ankit2", age: 25, hobby: "FPS games" },
        { id: 12, name: newName, age: 24, hobby: "web development" },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  changeFruitHandler = () => {
    this.setState({
      fruits: [
        { id: 1, name: "Mango", color: "yellow", qty: 25 },
        { id: 2, name: "Orange", color: "orange", qty: 12 },
        { id: 3, name: "grapes", color: "brown", qty: 40 },
        { id: 4, name: "Guava", color: "green", qty: 15 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    console.log("personIndex", id);
    console.log("target", event.target.value);
    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  toggleFruitHandler = () => {
    const doesShow = this.state.showFruits;
    this.setState({ showFruits: !doesShow });
  };

  removeFruitHandler = (fruitIndex) => {
    const fruitsArr = [...this.state.fruits];
    fruitsArr.splice(fruitIndex, 1);
    this.setState({ fruits: fruitsArr });
  };

  fruitChangeHandler = (event, id) => {
    const fruits = [...this.state.fruits];
    const fruitIndex = fruits.findIndex((f) => f.id === id);

    const fruit = { ...this.state.fruits[fruitIndex] };
    fruit.name = event.target.value;
    fruits[fruitIndex] = fruit;
    this.setState({ fruits: fruits });
  };

  render() {
    const style = {
      backgroundColor: '#ffc107',
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div style={{ display: "inline-flex" }}>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              >
                {person.hobby}
              </Person>
            );
          })}
        </div>
      );
      style.backgroundColor = '#cbadd2';
    }

    let classes = [];
    if(this.state.persons.length <= 2)
      classes.push('dull');
    if(this.state.persons.length <= 1)
      classes.push('spacing');
    if(this.state.persons.length === 0)
      classes.push('bg');

    return (
        <div className="App">
          <h1 className={classes.join(' ')}> This is my first react app </h1>
          <button
            className="btn-primary"
            onClick={() => this.switchPersonHandler("Manuel!!")}
          >
            Switch Person
          </button>
          <button className="" style={style} onClick={this.togglePersonsHandler}>
            Toggle
          </button>
          {persons}

          <hr />
          <h4>We have following fruit stocks:</h4>
          <button className="btn-warning" onClick={this.changeFruitHandler}>
            Change Fruit
          </button>
          <button className="btn-primary" onClick={this.toggleFruitHandler}>
            Toggle
          </button>
          {this.state.showFruits ? (
            <div>
              {this.state.fruits.map((fruit, i) => {
                return (
                  <Fruit
                    key={fruit.id}
                    name={fruit.name}
                    qty={fruit.qty}
                    color={fruit.color}
                    click={() => this.removeFruitHandler(i)}
                    changed={(e) => this.fruitChangeHandler(e, fruit.id)}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
    );
  }
}

export default App;
