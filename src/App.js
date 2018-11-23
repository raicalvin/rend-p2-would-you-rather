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
  Redirect,
  Switch
} from "react-router-dom";
import QuestionView from "./components/QuestionView.js";

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: rest.location.pathname }}
          />
        )
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
      <div className="App">
        <h2 className="page-header">Would You Rather?</h2>
        <Router>
          <div>
            <NavBar />
            <div>
              <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute
                  exact
                  path="/"
                  component={() =>
                    this.props.loading === true ? null : <Dashboard />
                  }
                  authedUser={authedUser}
                />
                <PrivateRoute
                  exact
                  path="/leaderboard"
                  component={Leaderboard}
                  authedUser={authedUser}
                />
                <PrivateRoute
                  exact
                  path="/questions/:id"
                  component={QuestionView}
                  authedUser={authedUser}
                />
                <PrivateRoute
                  exact
                  path="/add"
                  component={NewQuestion}
                  authedUser={authedUser}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
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
