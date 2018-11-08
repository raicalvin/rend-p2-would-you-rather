import React, { Component } from "react";
import NavBar from "./components/NavBar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="page-header">Would You Rather?</h2>
        <NavBar />
      </div>
    );
  }
}

export default App;
