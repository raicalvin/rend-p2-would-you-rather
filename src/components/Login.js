import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser, clearAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    userSelected: false,
    userId: "",
    okToLogin: false
  };

  authenticateUser(e) {
    if (!this.state.userSelected) {
      alert("Please select a user to login");
    } else {
      this.setState({ okToLogin: true });
      this.props.dispatch(setAuthedUser(this.state.userId));
    }
  }

  handleUserSelection(e) {
    console.log(e.target.value);
    this.setState({ userSelected: true, userId: e.target.value }, () =>
      console.log(this.state)
    );
  }

  // When component mounts, clear the user so that user CANNOT get into other parts of the app
  componentDidMount() {
    this.props.dispatch(clearAuthedUser(this.state.userId));
  }

  render() {
    if (this.state.okToLogin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-border center-login center-flex-items">
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
