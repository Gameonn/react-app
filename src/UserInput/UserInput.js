import React from "react";
import "./UserInput.css";

const userInput = (props) => {
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
    <div className="UserInput">
      <input
        style={inputStyle}
        type="text"
        onChange={props.changed}
        value={props.username}
      />
    </div>
  );
};

export default userInput;
