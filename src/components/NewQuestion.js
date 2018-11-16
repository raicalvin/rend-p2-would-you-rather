import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneInput: "",
    optionTwoInput: ""
  };

  handleChange(e) {
    const { text } = e.target.value;
    let text1 =
      e.target.name === "option1" ? e.target.value : this.state.optionOneInput;
    let text2 =
      e.target.name === "option2" ? e.target.value : this.state.optionTwoInput;

    console.log(text1, text2);

    this.setState(() => ({
      optionOneInput: text1,
      optionTwoInput: text2
    }));
  }

  handleSubmit(e) {
    // grab the two user-entered options
    let opt1 = this.state.optionOneInput;
    let opt2 = this.state.optionTwoInput;
    console.log(opt1, opt2);
    // reset the input value fields to blank values
    this.setState(() => ({
      optionOneInput: "",
      optionTwoInput: ""
    }));
    // add question to the store
    const { dispatch } = this.props;
    dispatch(
      handleAddQuestion({
        opt1,
        opt2
      })
    );
  }

  render() {
    return (
      <div>
        <h2>New Question</h2>
        <div className="single-question-view question-border">
          <h3>Would you rather...</h3>
          <form>
            <input
              value={this.state.optionOneInput}
              name="option1"
              type="text"
              placeholder="Answer 1..."
              onChange={this.handleChange.bind(this)}
            />
            <input
              value={this.state.optionTwoInput}
              name="option2"
              type="text"
              placeholder="Answer 2..."
              onChange={this.handleChange.bind(this)}
            />
          </form>
          <div className="center-btn">
            <button
              type="submit"
              className="btn btn-primary add-ques-btn"
              disabled={
                this.state.optionOneInput === "" ||
                this.state.optionTwoInput === ""
              }
              onClick={this.handleSubmit.bind(this)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
