import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    userSelected: false,
    userId: ""
  };

  authenticateUser(user) {
    if (!this.state.userSelected) {
      alert("Please select a user to login");
    }
    this.props.dispatch(setAuthedUser(this.state.userId));
  }

  handleUserSelection(e) {
    console.log(e.target.value);
    this.setState({ userSelected: true, userId: e.target.value }, () =>
      console.log(this.state)
    );
  }

  render() {
    console.log(this.props.users);
    return (
      <div className="login-border center-flex-items">
        <span>Please select a user and login...</span>
        <div className="center-flex-items">
          <select onChange={this.handleUserSelection.bind(this)}>
            <option value="" disabled selected>
              Select Users...
            </option>
            {this.props.users.map(user => (
              <option>{user.id}</option>
            ))}
          </select>
          <button
            onClick={this.authenticateUser.bind(this)}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(Login);
