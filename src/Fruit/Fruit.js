import React from "react";
import "./Fruit.css";

const fruit = (props) => {
  return (
    <div className="Fruit">
      <div className={props.color}>
        <strong> {props.name}</strong> is available in <i>{props.qty}</i>
      </div>
    </div>
  );
};

export default fruit;
