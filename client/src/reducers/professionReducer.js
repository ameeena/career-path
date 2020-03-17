import { ActionTypes as types } from "../constants/constants";
import initialState from "./initialState";

function professionReducer(state = initialState.professionsList, action) {
  switch (action.type) {
    case types.REQUEST_PROFESSIONS_SUCCESS:
      return action.professionsList;
    case types.ADD_PROFESSION_SUCESS:
      return [...state, { ...action.profession }];
    case types.UPDATE_PROFESSION_SUCESS:
      return state.map(profession =>
        profession._key === action.profession._key
          ? action.profession
          : profession
      );
    case types.SAVE_PROFESSION_ERROR:
      return state;
    case types.REQUEST_PROFESSIONS_ERROR:
      return state;
    default:
      return state;
  }
}

export default professionReducer;
