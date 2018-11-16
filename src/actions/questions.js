import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

// Action Creator for receiving questions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer // optionOne or optionTwo
  };
}

// This asynchronous action creator which will be responsible for invoking the saveQuestionAnswer function:
export function handleAnswerQuestion(info) {
  // return a function so we can dispatch whatever we like
  return (dispatch, getState) => {
    // dispatch and getState are STORE methods
    const { authedUser } = getState(); // get the authenticated user from the store state
    // todo: create the paylod to pass to answerQuestion
    const payload = {
      authedUser,
      qid: info.qId,
      answer: info.answer
    };
    console.log(payload);
    // todo: invoke answerQuestion in dispatch, returning an object and running it through the reducers
    return saveQuestionAnswer(payload).then(() =>
      dispatch(answerQuestion(payload))
    );
  };
}
