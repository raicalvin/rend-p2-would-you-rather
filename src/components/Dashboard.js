import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question.js";

class Dashboard extends Component {
  render() {
    console.log(this.props.questionIds);
    /*
      Check to see who authedUser is.
      Check to see which button is active (answered or unanswered).
      Sort through questions to make sure the id of authedUser matches a vote answer.
      Display the questions that do not match for unanswered in the unanswered section
    */
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="center-flex-items">
          <button className="btn btn-primary">Unanswered Polls</button>
          <button className="btn btn-primary active">Answered Polls</button>
        </div>

        <ul className="center center-flex-items">
          {this.props.questionIds.map(id => (
            <li key={id} className="question-border">
              <div>Question ID: {id}</div>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Get necessary information from Redux store state
function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);

/*
Basically, you destructure anything you want from the state being passed into mapStateToProps and then create an object that is the props used in your Dashboard component which is referred to as 'this.props.'

Read this carefully: You create a store. Then pass that to your components using <Provider />. Then you can establish a connection to the store between your components using the connect()() function. The connect()() function takes in a function to be called and the component. Within the function that will be called, you can destructure items from the state/store and then create a object with that information. The component can then access those props using this.props.
*/
