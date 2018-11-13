import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Leaderboard from "./components/Leaderboard";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <h2 className="page-header">Would You Rather?</h2>
        <NavBar />
        {/* <Leaderboard /> */}
        <Leaderboard />
        {this.props.loading === true ? null : <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect()(App);
