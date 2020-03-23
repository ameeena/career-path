// Reducers specify how application changes happen!!
import { combineReducers } from "redux";

import profession from "./professionReducer";
import apiCallsInProgress from "./apiStatusReducer";

export default combineReducers({
  professionsList: profession,
  apiCallsInProgress
});
