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

  const switchPersonHandler = () => {
    setPersonState({
      persons: [
        { name: "Ankit2", age: 25, hobby: "FPS games" },
        { name: "David2", age: 24, hobby: "web development" },
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

  return (
    <div className="App">
      <h1> This is my first react app </h1>
      <button className="btn-primary" onClick={switchPersonHandler}>
        Switch Person
      </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        {personState.persons[0].hobby}
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        {personState.persons[1].hobby}
      </Person>

      <hr />
      <h4>We have following fruit stocks:</h4>
      <button className="btn-warning" onClick={changeFruitHandler}>
        Remove Fruit
      </button>
      <Fruit
        name={fruitState.fruits[0].name}
        qty={fruitState.fruits[0].qty}
        color={fruitState.fruits[0].color}
      />
      <Fruit
        name={fruitState.fruits[1].name}
        qty={fruitState.fruits[1].qty}
        color={fruitState.fruits[1].color}
      />
      <Fruit
        name={fruitState.fruits[2].name}
        qty={fruitState.fruits[2].qty}
        color={fruitState.fruits[2].color}
      />
      <Fruit
        name={fruitState.fruits[3].name}
        qty={fruitState.fruits[3].qty}
        color={fruitState.fruits[3].color}
      />
    </div>
  );
};

export default app;
