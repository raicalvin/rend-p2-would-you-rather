import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Question from "./Question";

// This page will view a single question and then showcase the votes and scores for the answers

class QuestionView extends Component {
  render() {
    const { id } = this.props.match.params;
    const { questions } = this.props.state;
    const question = questions[id];
    if (question === undefined) {
      return <Redirect to="/not-found" />;
    }

    return (
      <div className="question-border center center-flex-items single-question-view">
        <Question id={id} />
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  return { id, state };
}

export default connect(mapStateToProps)(QuestionView);
