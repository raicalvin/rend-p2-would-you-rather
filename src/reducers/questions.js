import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      // return a new object state
      // spread all the previous questions out from state
      // remember, you are re-creating each piece of the state. In this case, we are rebuilding parts of the questions state by accessing certain keys, spreading them out, and adding new information to them. Study this carefully.
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [
              ...state[action.qid][action.answer].votes,
              action.authedUser
            ]
          }
        }
      };
    default:
      return state;
  }
}
