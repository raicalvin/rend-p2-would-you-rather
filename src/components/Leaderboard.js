import React, { Component } from "react";

class Leaderboard extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Answered</th>
            <th>Asked</th>
            <th>Score</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Leaderboard;
