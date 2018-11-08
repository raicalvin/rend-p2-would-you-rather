import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/add">New Poll</Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user" /> Calvin S.
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}
