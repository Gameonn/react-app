import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

class App extends Component {
  state = {
    inputString: '',
    stringLen: 0
  };

  stringChangeHandler = (event) => {
    const newString = event.target.value;
    this.setState({inputString: newString});
    let strLength = newString.length;
    this.setState({stringLen: strLength});
  }

  deleteCharHandler = (charIndex) => {
    const userInput = [ ...this.state.inputString.split('')];
    userInput.splice(charIndex, 1);
    const updatedUserInput = userInput.join('');
    this.setState({ inputString:  updatedUserInput });
  };

  render() {
    let char = null;
    let userInput = this.state.inputString.split('');
    if(this.state.stringLen > 0) {
      char = (
          <div>
            {userInput.map((c, index) => {
              return <Char key={index} alphabet={c} deleteChar={() => this.deleteCharHandler(index)} />;
            })}
          </div>
          );
    }

    return (
      <div className="App">
        <h1> This is my first react app </h1>

        <input type="text" onChange={this.stringChangeHandler} value={this.state.inputString} />
        <h6> Length: {this.state.stringLen}</h6>
        <Validation stringLen={this.state.stringLen} />
        {char}
        <hr />


      </div>
    );
  }
}

export default App;
