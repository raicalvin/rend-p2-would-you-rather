import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Question from "./Question";

// This page will view a single question and then showcase the votes and all that information

class QuestionView extends Component {
  render() {
    console.log("Hello, QuestionView is being called");
    const { id } = this.props.match.params;
    const { questions } = this.props.state;
    const question = questions[id];
    console.log(question);
    if (question === undefined) {
      return <Redirect to="/not-found" />;
    }

    return (
      <div className="question-border center center-flex-items single-question-view">
        <Question id={id} test={"YoOoOoOooo"} />
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  return { id, state };
}

export default connect(mapStateToProps)(QuestionView);
