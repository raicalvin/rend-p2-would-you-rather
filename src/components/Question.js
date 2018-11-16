import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {
  handleAnswerClick(e) {
    const { dispatch, authedUser, question } = this.props;
    const answer = e.target.id;
    console.log(e.target);
    // need to pass it an info object that contains authedUser, qId, and answer
    if (
      question.optionOne.votes.indexOf(authedUser) === -1 &&
      question.optionTwo.votes.indexOf(authedUser) === -1
    ) {
      dispatch(
        handleAnswerQuestion({
          authedUser,
          qId: question.id,
          answer
        })
      );
    } else {
      alert("Oh yup. You can only select one answer!");
    }
  }

  checkIfAlreadyAnswered() {}

  render() {
    const id = this.props.id;
    // todo: call function to check if authedUser already answered question -> alert if they did
    // todo: disable clicking if already answered
    console.log(this.props);

    let isDisabled1 =
      this.props.question.optionOne.votes.indexOf(this.props.authedUser) !== -1;
    let isDisabled2 =
      this.props.question.optionTwo.votes.indexOf(this.props.authedUser) !== -1;

    return (
      <Link to={`/questions/${id}`}>
        <h3>Would you rather...</h3>
        <div className="center-options-buttons">
          <button
            onClick={this.handleAnswerClick.bind(this)}
            className="btn btn-primary "
            id="optionOne"
            disabled={isDisabled1}
          >
            {this.props.firstOption}
          </button>
          <button
            onClick={this.handleAnswerClick.bind(this)}
            className="btn btn-primary "
            id="optionTwo"
            disabled={isDisabled2}
          >
            {this.props.secondOption}
          </button>
        </div>
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
