import { combineReducers } from "redux";
import signupreducers from "./signupreducers";
import signinreducers from "./signinreducers";
export default combineReducers({
  signupreducers,
  signinreducers,
});
