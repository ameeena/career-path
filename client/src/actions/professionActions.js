import { ActionTypes as types } from '../constants/actionTypes';
import * as professionApi from '../api/professionsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";


// Action Creators
export function getProfessionsSuccess(result) {
  return { type : types.REQUEST_PROFESSIONS_SUCCESS, professionsList : result.data};
}

export function updateProfessionSuccess(savedProfession) {
  return { type : types.UPDATE_PROFESSION_SUCCESS, profession : savedProfession};
}

export function addProfessionSuccess (savedProfession) {
  return { type : types.ADD_PROFESSION_SUCCESS, profession : savedProfession};
}

//---

export function getProfessions () {
  // every thunk returns a function 
  return async (dispatch) => {
    try {
      dispatch(beginApiCall());
      const result = await professionApi
        .getProfessionsList();
      dispatch(getProfessionsSuccess(result));
    }
    catch (err) {
      dispatch(apiCallError(err));
      throw err;
    }
  }
}

export function saveProfession(profession) {
  return async (dispatch) => {
    try {
      dispatch(beginApiCall());
      const savedProfession = await professionApi
        .saveProfessions(profession);
      savedProfession._key
        ? dispatch(updateProfessionSuccess(savedProfession))
        : dispatch(addProfessionSuccess(savedProfession));
    }
    catch (err) {
      dispatch(apiCallError(err));
      throw err;
    }
  }
}
