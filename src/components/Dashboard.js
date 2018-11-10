import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props.questionIds);
    return (
      <div>
        <h2 className="center">Dashboard</h2>
        <ul className="center">
          {this.props.questionIds.map(id => (
            <li key={id}>
              <div>Question ID: {id}</div>
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
