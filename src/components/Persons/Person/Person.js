import React from "react";
import classes from "./Person.css";
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const person = (props) => {

  console.log( '[Person.js] rendering' );
  //inline styles
  const inputStyle = {
    backgroundColor: "#eee",
    border: "1px solid blue",
    padding: "5px 10px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#555",
    borderRadius: "4px",
    boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
  };

  return (
    <Auxiliary className={classes.Person}>
      <AuthContext.Consumer>
        {(context) => context.isAuthenticated ? <p> Authenticated</p> : <p>Please Log in</p>}
      </AuthContext.Consumer>
      <h4 onClick={props.click}>
        My Name is {props.name} and I am {props.age} years old. {props.children}
      </h4>
      <input type="text" style={inputStyle} onChange={props.changed} value={props.name} />
      {/* <p>Using Math random function - {Math.floor(Math.random() * 115)} </p> */}
    </Auxiliary>
  );
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default person;
