import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {
  componentDidMount() {
    console.log(this.props.users);
  }
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

  showVotesCount(opt1Disabled, opt2Disabled) {
    if (opt1Disabled || opt2Disabled) {
      let opt1Votes = this.props.questions[this.props.question.id].optionOne
        .votes.length; // votes of option 1
      let opt2Votes = this.props.questions[this.props.question.id].optionTwo
        .votes.length; // votes of option 2
      let totalVotes = opt1Votes + opt2Votes; // total votes
      let opt1Percent = ((opt1Votes / totalVotes) * 100).toFixed(1);
      let opt2Percent = ((opt2Votes / totalVotes) * 100).toFixed(1);
      console.log(opt1Percent, opt2Percent);
      return (
        <div>
          <div className="center-options-buttons">
            <span>{opt1Percent + "%"}</span>
            <span>{opt2Percent + "%"}</span>
          </div>
          <div className="center-options-buttons">
            <span>Votes: {opt1Votes}</span>
            <span>Votes: {opt2Votes}</span>
          </div>
        </div>
      );
    }
  }

  render() {
    const id = this.props.id;

    let avatarUrl = this.props.users[this.props.question.author].avatarURL;

    let isDisabled1 =
      this.props.question.optionOne.votes.indexOf(this.props.authedUser) !== -1;
    let isDisabled2 =
      this.props.question.optionTwo.votes.indexOf(this.props.authedUser) !== -1;

    let resultsHeading = this.showVotesCount(isDisabled1, isDisabled2);

    return (
      <Link to={`/questions/${id}`}>
        <div className="center-flex-items">
          <img className="avatar" src={avatarUrl} />
        </div>
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
        <div>
          <span>{resultsHeading}</span>
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
    question,
    questions,
    users
    // question: formatQuestion(question)
  };
}

export default connect(mapStateToProps)(Question);
