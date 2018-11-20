import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import NotFoundPage from "./components/NotFoundPage";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import QuestionView from "./components/QuestionView.js";

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authedUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    let { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          <h2 className="page-header">Would You Rather?</h2>
          <NavBar />
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/"
            component={() =>
              this.props.loading === true ? null : <Dashboard />
            }
            authedUser={authedUser}
          />
          <PrivateRoute
            path="/leaderboard"
            component={Leaderboard}
            authedUser={authedUser}
          />
          <PrivateRoute
            path="/questions/:id"
            component={QuestionView}
            authedUser={authedUser}
          />
          <PrivateRoute
            path="/add"
            component={NewQuestion}
            authedUser={authedUser}
          />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
