import React from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Leaderboard</a>
          </li>
          <li>
            <a href="#">New Poll</a>
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
  );
}
