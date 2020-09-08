import React, { Component } from "react";
import Person from "./Person/Person";
import Fruit from "./Fruit/Fruit";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> This is my first react app </h1>
        <Person name="Ankit" age="25">
          I love playing FPS games
        </Person>
        <Person name="David" age="21" />
        <hr />
        <h4>We have following fruit stocks:</h4>
        <Fruit name="Mango" qty="25">
          color as Yellow
        </Fruit>
        <Fruit name="Banana" qty="36">
          color as Yellow
        </Fruit>
        <Fruit name="Apple" qty="50">
          color as Red
        </Fruit>
        <Fruit name="Orange" qty="12">
          color as Orange
        </Fruit>
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: App },
    //   React.createElement("h1", null, "This is my first react app")
    // );
  }
}

export default App;
