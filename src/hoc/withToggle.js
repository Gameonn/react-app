import React, { Component } from 'react'

const withToggle = (PassedComponent) =>
  class WithToggle extends Component {
    state = {
      toggleStatus: true,
    }
    toggleHandler = () => {
      this.setState({ toggleStatus: !this.state.toggleStatus })
    }
    render() {
      return (
        <PassedComponent
          {...this.props}
          toggle={this.toggleHandler}
          toggleStatus={this.state.toggleStatus}
        />
      )
    }
  }

export default withToggle;