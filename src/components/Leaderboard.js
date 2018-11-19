import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  rankUsersScores(usersToRank) {
    let users = Object.values(usersToRank);
    let rankedUsers = users.sort((a, b) => {
      let totalA = Object.keys(a.answers).length + a.questions.length;
      let totalB = Object.keys(b.answers).length + b.questions.length;
      return totalB - totalA;
    });
    return rankedUsers;
  }

  render() {
    this.rankUsersScores(this.props.users);
    return (
      <div>
        <h2>Leaderboard</h2>
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
          <tbody>
            {this.rankUsersScores(this.props.users).map(user => (
              <tr key={user.id}>
                <td>
                  <div className="center-flex-items">
                    <img className="avatar" src={user.avatarURL} />
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
                <td>
                  {Object.keys(user.answers).length + user.questions.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  console.log(users);
  return { users };
}

export default connect(mapStateToProps)(Leaderboard);
