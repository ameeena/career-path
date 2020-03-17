// Reducers specify how application changes happen!!
import { combineReducers } from "redux";

import profession from "./professionReducer";

export default combineReducers({
  professionsList: profession
});
