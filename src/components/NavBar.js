import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/add">New Poll</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span>{this.props.authedUser}</span>
            </li>
            <li>
              <Link to="/login">{this.props.authedUser ? "Logout" : ""}</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar);
