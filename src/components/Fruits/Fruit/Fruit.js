import React from "react";
import classes from "./Fruit.css";


const fruit = (props) => {
  return (
    <div className={classes.Fruit}>
      <div className={classes[props.color]}>
        <strong onClick={props.click}> {props.name}</strong> is available in <i>{props.qty}</i>
        <input type="text" value={props.name} onChange={props.changed} />
      </div>
    </div>
  );
};

export default fruit;
