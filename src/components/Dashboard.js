import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question.js";
import QuestionView from "./QuestionView";

class Dashboard extends Component {
  state = {
    unansweredButtonIsActive: true
  };

  filterQuestions(questions, authedUser) {
    let filteredQuestions = this.props.questionIds.map(key => questions[key]);

    let showUnansweredQuestions = this.state.unansweredButtonIsActive;

    if (filteredQuestions.length === 0) {
      return null;
    }

    // Unanswered questions list
    if (showUnansweredQuestions) {
      return filteredQuestions.filter(
        question =>
          question.optionOne.votes.indexOf(authedUser) === -1 &&
          question.optionTwo.votes.indexOf(authedUser) === -1
      );
    }

    // Answered questions list
    if (!showUnansweredQuestions) {
      return filteredQuestions.filter(
        question =>
          question.optionOne.votes.indexOf(authedUser) !== -1 ||
          question.optionTwo.votes.indexOf(authedUser) !== -1
      );
    }
  }

  handleActiveButtonClick(event) {
    if (event.target.id === "unanswered-poll-button") {
      this.setState({
        unansweredButtonIsActive: true
      });
    }
    if (event.target.id === "answered-poll-button") {
      this.setState({
        unansweredButtonIsActive: false
      });
    }
  }

  render() {
    // Return an array of questions to be displayed
    let filteredQuestionsToDisplay = this.filterQuestions(
      this.props.questions,
      this.props.authedUser
    );

    if (filteredQuestionsToDisplay === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Dashboard</h2>

        <div
          className="center-flex-items"
          onClick={this.handleActiveButtonClick.bind(this)}
        >
          <button
            className={
              "btn btn-primary " +
              (this.state.unansweredButtonIsActive ? "active" : "")
            }
            id="unanswered-poll-button"
          >
            Unanswered Polls
          </button>
          <button
            className={
              "btn btn-primary " +
              (this.state.unansweredButtonIsActive ? "" : "active")
            }
            id="answered-poll-button"
          >
            Answered Polls
          </button>
        </div>

        <ul className="center center-flex-items">
          {filteredQuestionsToDisplay.map(question => (
            <li key={question.id} className="question-border">
              <Question id={question.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Get necessary information from Redux store state
function mapStateToProps({ questions, authedUser }) {
  return {
    questions,
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser: authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);

/*
Basically, you destructure anything you want from the state being passed into mapStateToProps and then create an object that is the props used in your Dashboard component which is referred to as 'this.props.'

Read this carefully: You create a store. Then pass that to your components using <Provider />. Then you can establish a connection to the store between your components using the connect()() function. The connect()() function takes in a function to be called and the component. Within the function that will be called, you can destructure items from the state/store and then create a object with that information. The component can then access those props using this.props.
*/
