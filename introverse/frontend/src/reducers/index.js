import { combineReducers } from "redux";
import signupreducers from "./signupreducers";
import signinreducers from "./signinreducers";
import verseReducers from "./verseReducers";
import searchReducers from "./searchreducers";
export default combineReducers({
  signupreducers,
  signinreducers,
  verseReducers,
  searchReducers,
});
