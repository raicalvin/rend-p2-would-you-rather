import React, { Component } from "react";
import { connect } from "react-redux";
//import { formatQuestion } from "../utils/_DATA.js";

class Question extends Component {
  render() {
    return (
      <div>
        <h3>Would you rather...</h3>
        <button className="btn btn-primary">{this.props.firstOption}</button>
        <button className="btn btn-primary">{this.props.secondOption}</button>
      </div>
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
    secondOption
    // question: formatQuestion(question)
  };
}

export default connect(mapStateToProps)(Question);
