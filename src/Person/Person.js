import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      My Name is {props.name} and I am {props.age} years old. {props.children}
      <p>Using Math random function - {Math.floor(Math.random() * 115)} </p>
    </div>
  );
};

export default person;
