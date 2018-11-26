import { getInitialData } from "../utils/api.js";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      // Take the users and the questions and add them to the state of our Redux store
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
