import React, { Component } from "react";
import { connect } from "react-redux";

class NotFoundPage extends Component {
  render() {
    return <h2>404! Not Found! Whoops!</h2>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(NotFoundPage);
