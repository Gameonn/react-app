import React, { useState } from "react";
import Person from "./Person/Person";
import Fruit from "./Fruit/Fruit";
import "./App.css";

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Ankit", age: 22, hobby: "mobile games" },
      { name: "David", age: 21, hobby: "coding" },
    ],
  });

  const [fruitState, setFruitState] = useState({
    fruits: [
      { name: "Mango", color: "yellow", qty: 25 },
      { name: "Orange", color: "orange", qty: 12 },
      { name: "Apple", color: "red", qty: 40 },
      { name: "Guava", color: "green", qty: 15 },
    ],
  });

  const [showPersons, setShowPersonsState] = useState(false);
  const [showFruits, setShowFruitsState] = useState(true);

  const switchPersonHandler = (newName) => {
    setPersonState({
      persons: [
        { name: "Ankit2", age: 25, hobby: "FPS games" },
        { name: newName, age: 24, hobby: "web development" },
      ],
    });
  };

  const changeFruitHandler = () => {
    setFruitState({
      fruits: [
        { name: "Mango", color: "yellow", qty: 25 },
        { name: "Orange", color: "orange", qty: 12 },
        { name: "grapes", color: "brown", qty: 40 },
        { name: "Guava", color: "green", qty: 15 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Ankit2", age: 25, hobby: "FPS games" },
        { name: event.target.value, age: 24, hobby: "web development" },
      ],
    });
  };

  const togglePersonsHandler = () => {
    setShowPersonsState(!showPersons);
  };

  const toggleFruitHandler = () => {
    setShowFruitsState(!showFruits);
  };
  let persons = null;

  if (showPersons) {
    persons = (
      <div style={{ display: "inline-flex" }}>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} >
          {personState.persons[0].hobby}
        </Person>
        <Person click={switchPersonHandler.bind(this, "Max!!")} changed={nameChangedHandler} name={personState.persons[1].name}
          age={personState.persons[1].age} > {personState.persons[1].hobby} </Person>
      </div>
    );
  }

  return (
    <div className="App">
      <h1> This is my first react app </h1>
      <button
        className="btn-primary"
        onClick={() => switchPersonHandler("Manuel!!")}
      >
        Switch Person
      </button>
      <button className="btn-warning" onClick={togglePersonsHandler}>
        Toggle
      </button>

      {persons}

      <hr />
      <h4>We have following fruit stocks:</h4>
      <button className="btn-warning" onClick={changeFruitHandler}> Change Fruit </button>
      <button className="btn-primary" onClick={toggleFruitHandler}> Toggle </button>
      { showFruits ?
      (<div>
      <Fruit name={fruitState.fruits[0].name} qty={fruitState.fruits[0].qty} color={fruitState.fruits[0].color} />
      <Fruit name={fruitState.fruits[1].name} qty={fruitState.fruits[1].qty} color={fruitState.fruits[1].color} />
      <Fruit name={fruitState.fruits[2].name} qty={fruitState.fruits[2].qty} color={fruitState.fruits[2].color} />
      <Fruit name={fruitState.fruits[3].name} qty={fruitState.fruits[3].qty} color={fruitState.fruits[3].color} />
      </div>)
      : null}
    </div>
  );
};

export default app;
