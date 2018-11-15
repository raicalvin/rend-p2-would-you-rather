export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

import { saveQuestionAnswer } from "../utils/api";

// Action Creator for receiving questions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function answerQuestion({ authedUser, qId, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qId,
    answer // optionOne or optionTwo
  };
}

export function handleAnswerQuestion(info) {
  return dispatch => {
    dispatch(answerQuestion(info));
    return saveQuestionAnswer(info).catch(e => {
      console.warn("Error in saving answer: ", e);
      dispatch(answerQuestion(info));
      alert("There was an error answering the question. Try again!");
    });
  };
}
