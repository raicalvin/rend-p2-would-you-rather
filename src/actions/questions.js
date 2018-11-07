export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

// Action Creator for receiving questions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}
