import React from "react";
import Radium from 'radium';
import "./Fruit.css";

const style = {
  '@media (min-width: 900px)': {
    boxShadow: '5px 10px 20px #27545b',
    borderRadius: '10px',
  }
};

const fruit = (props) => {
  return (
    <div className="Fruit" style={style}>
      <div className={props.color}>
        <strong onClick={props.click}> {props.name}</strong> is available in <i>{props.qty}</i>
        <input type="text" value={props.name} onChange={props.changed} />
      </div>
    </div>
  );
};

export default Radium(fruit);
