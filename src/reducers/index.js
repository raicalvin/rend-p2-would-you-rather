// This will export our call to combineReducers
import { combineReducers } from "redux";

import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

// Each reducer handles its OWN slice of the state. Use the combineReducers function to combine all these reducers into a single reducer to pass to the store.
export default combineReducers({
  authedUser,
  users,
  questions
});
