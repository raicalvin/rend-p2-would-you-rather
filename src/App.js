import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Leaderboard from "./components/Leaderboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="page-header">Would You Rather?</h2>
        <NavBar />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
