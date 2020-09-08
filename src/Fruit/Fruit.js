import React from "react";

const fruit = (props) => {
  return (
    <div className="Fruit">
      <strong> {props.name}</strong> is available in <i>{props.qty}</i> quantity
      in <s>{props.children}</s>
    </div>
  );
};

export default fruit;
