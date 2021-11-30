import { combineReducers } from "redux";
import signupreducers from "./signupreducers";
import signinreducers from "./signinreducers";
import verseReducers from "./verseReducers";
export default combineReducers({
  signupreducers,
  signinreducers,
  verseReducers,
});
