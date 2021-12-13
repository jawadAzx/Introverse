import { combineReducers } from "redux";
import signupreducers from "./signupreducers";
import signinreducers from "./signinreducers";
import verseReducers from "./verseReducers";
import searchReducers from "./searchreducers";
import tablesReducers from "./tablesreducers";
import commentReducers from "./commentReducers";

export default combineReducers({
  signupreducers,
  signinreducers,
  verseReducers,
  searchReducers,
  tablesReducers,
  commentReducers,
});
