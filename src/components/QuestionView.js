import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

// This page will view a single question and then showcase the votes and all that information

class QuestionView extends Component {
  render() {
    const { id } = this.props.match.params;
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
