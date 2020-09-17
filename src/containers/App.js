import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Fruits from "../components/Fruits/Fruits";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass/WithClass";
import classes from "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
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
      showCockpit: true,
    };

  }

  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps', props, state);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate');
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('[App.js] componentWillReceiveProps');
  //   if (this.props !== nextProps) {
  //     return true;
  //   }
  //   return false;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
  }


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
    console.log('[App.js] render ');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div style={{ display: "inline-flex" }}>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
        <WithClass classes={classes.App}>
          <button onClick={() => {this.setState({showCockpit:false})}} > Remove Cockpit </button>
          {this.state.showCockpit ? (
          <Cockpit title={this.props.appTitle} persons={this.state.persons} showPersons={this.state.showPersons}
                  toggle={this.togglePersonsHandler} personsLength={this.state.persons.length}
                  switch={this.switchPersonHandler} />
          ) : null};
          {persons}

          <hr />
          <h4>We have following fruit stocks:</h4>
          <button className={classes['btn-warning']} onClick={this.changeFruitHandler}>
            Change Fruit
          </button>
          <button className={classes['btn-primary']} onClick={this.toggleFruitHandler}>
            Toggle
          </button>
          {this.state.showFruits ? (
              <Fruits fruits={this.state.fruits} clicked={this.removeFruitHandler} changed={this.fruitChangeHandler} />
          ) : null}
        </WithClass>
    );
  }
}

export default App;
