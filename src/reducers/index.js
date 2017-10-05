import { combineReducers } from "redux";
import apiMessage from "./apiMessage";
import userMessage from "./userMessage";

const rootReducer = combineReducers({
  apiMessage,
  userMessage
});

export default rootReducer;
