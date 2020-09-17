import React, { Component } from "react";
import ViewEditToggle from '../components/ViewEditToggle/ViewEditToggle';
import CollapseToggle from '../components/CollapseToggle/CollapseToggle';
import classes from "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state  = {title: 'HOC Example'};
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate');
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('[App.js] componentWillReceiveProps');
  //   if (this.props !== nextProps) {
  //     return true;
  //   }
  //   return false;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
  }

  titleChangeHandler = (event) => {
    const newTitle = event.target.value;
    this.setState({title: newTitle});
  }

  render() {

    const style = {
      width: '50%',
      border: '10px ridge #a490f1',
      margin: '20px auto',
      padding: '50px',
      borderRadius: '10%'
    }

    const list = [
      { id: 1, name: 'Eggs' },
      { id: 2, name: 'Bread' },
    ];

    return (
        <div classes={classes.App} style={style}>

          <ViewEditToggle title={this.state.title} changed={this.titleChangeHandler} btnClass={classes['btn-primary']}/>
          <hr />
          <CollapseToggle list={list} initialToggleStatus={true} btnClass={classes['btn-warning']}/>
          <hr />
          <div>
            <h3>Using HOC</h3>
            <ul>
              <li>Toggle between a paragraph and an input. This will allow the user to toggle between editing
                and viewing the title of a post.</li>
                <li>Toggle between a collapsed/expanded list.</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
