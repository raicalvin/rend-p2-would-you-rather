import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {
  handleAnswerClick(e) {
    const { dispatch, authedUser, question } = this.props;
    const answer = e.target.id;
    // need to pass it an info object that contains authedUser, qId, and answer
    console.log(answer);
    dispatch(
      handleAnswerQuestion({
        authedUser,
        qId: question.id,
        answer
      })
    );
  }

  render() {
    const id = this.props.id;
    return (
      <Link to={`/questions/${id}`}>
        <h3>Would you rather...</h3>
        <button
          onClick={this.handleAnswerClick.bind(this)}
          className="btn btn-primary"
          id="optionOne"
        >
          {this.props.firstOption}
        </button>
        <button
          onClick={this.handleAnswerClick.bind(this)}
          className="btn btn-primary"
          id="optionTwo"
        >
          {this.props.secondOption}
        </button>
      </Link>
    );
  }
}

// The first argument is data we are destructuring from the store { authedUser, users, questions }
// The second argument is the regular props being passed into the Question component { id }
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const firstOption = question.optionOne.text;
  const secondOption = question.optionTwo.text;
  const user = users[id];
  return {
    authedUser,
    firstOption,
    secondOption,
    question
    // question: formatQuestion(question)
  };
}

export default connect(mapStateToProps)(Question);
