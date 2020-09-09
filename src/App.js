import React, { Component } from "react";
import Person from "./Person/Person";
import Fruit from "./Fruit/Fruit";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Ankit", age: 22, hobby: "mobile games" },
      { name: "David", age: 21, hobby: "coding" },
    ],
    fruits: [
      { name: "Mango", color: "yellow", qty: 25 },
      { name: "Orange", color: "orange", qty: 12 },
      { name: "Apple", color: "red", qty: 40 },
      { name: "Guava", color: "green", qty: 15 },
    ],
  };

  switchPersonHandler = () => {
    this.setState({
      persons: [
        { name: "Ankit2", age: 28, hobby: "mobile games" },
        { name: "David2", age: 24, hobby: "coding" },
      ],
    });
  };

  changeFruitHandler = () => {
    this.setState({
      fruits: [
        { name: "Mango", color: "yellow", qty: 25 },
        { name: "Orange", color: "orange", qty: 12 },
        { name: "grapes", color: "brown", qty: 40 },
        { name: "Guava", color: "green", qty: 15 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1> This is my first react app </h1>
        <button className="btn-primary" onClick={this.switchPersonHandler}>
          Switch Person
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          {this.state.persons[0].hobby}
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          {this.state.persons[1].hobby}
        </Person>

        <hr />
        <h4>We have following fruit stocks:</h4>
        <button className="btn-warning" onClick={this.changeFruitHandler}>
          Remove Fruit
        </button>
        <Fruit
          name={this.state.fruits[0].name}
          qty={this.state.fruits[0].qty}
          color={this.state.fruits[0].color}
        />
        <Fruit
          name={this.state.fruits[1].name}
          qty={this.state.fruits[1].qty}
          color={this.state.fruits[1].color}
        />
        <Fruit
          name={this.state.fruits[2].name}
          qty={this.state.fruits[2].qty}
          color={this.state.fruits[2].color}
        />
        <Fruit
          name={this.state.fruits[3].name}
          qty={this.state.fruits[3].qty}
          color={this.state.fruits[3].color}
        />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: App },
    //   React.createElement("h1", null, "This is my first react app")
    // );
  }
}

export default App;
