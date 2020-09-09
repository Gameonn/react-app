import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    username: "Ankit",
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  updateNameHandler = (newName) => {
    this.setState({
      username: newName,
    });
  };

  render() {
    return (
      <div className="App">
        <h1> This is a test application </h1>
        <button
          className="btn-primary"
          onClick={this.updateNameHandler.bind(this, "Max!!")}
        >
          Update Name
        </button>
        <UserInput
          changed={this.changeUsernameHandler}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
