import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
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
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Calvin S.
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}
