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
    this.setState({ userSelected: true, userId: e.target.value }, () =>
      console.log(this.state)
    );
  }

  // When component mounts, clear the user so that user CANNOT get into other parts of the app
  componentDidMount() {
    this.props.dispatch(clearAuthedUser(this.state.userId));
  }

  render() {
    const { location } = this.props;
    const prevLocation = location.state;
    console.log("Previous location was:", prevLocation);

    if (this.state.okToLogin && prevLocation) {
      console.log("Redirecting to PREVIOUS LOCATION");
      return <Redirect to={prevLocation} />;
    } else if (this.state.okToLogin) {
      console.log("Redirecting to HOME");
      return <Redirect to="/" />;
    }

    return (
      <div className="login-border center-login center-flex-items">
        <span>Please select a user and login...</span>
        <div className="center-flex-items">
          <select
            defaultValue={""}
            onChange={this.handleUserSelection.bind(this)}
          >
            <option value="" disabled>
              Select Users...
            </option>
            {this.props.users.map(user => (
              <option key={user.id}>{user.id}</option>
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
