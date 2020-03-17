import { ActionTypes as types } from '../constants/constants';
import * as professionApi from '../api/professionsApi';


// Action Creators
export function getProfessionsSuccess(result) {
  return { type : types.REQUEST_PROFESSIONS_SUCCESS, professionsList : result.data};
}

export function  getProfessionsFailure(err) {
  return { type : types.REQUEST_PROFESSIONS_ERROR , error : err};
}

export function updateProfessionSuccess(savedProfession) {
  return { type : types.UPDATE_PROFESSION_SUCCESS, profession : savedProfession};
}

export function addProfessionSuccess (savedProfession) {
  return { type : types.ADD_PROFESSION_SUCCESS, profession : savedProfession};
}

export function saveProfessionFailure (err) {
  return { type : types.SAVE_PROFESSION_FAILURE, profession : err};
}
//---

export function getProfessions () {
  // every thunk returns a function 
  return async (dispatch) => {
    try {
      const result = await professionApi
        .getProfessionsList();
      dispatch(getProfessionsSuccess(result));
    }
    catch (err) {
      dispatch(getProfessionsFailure(err));
    }
  }
}

export function saveProfession(profession) {
  return async (dispatch) => {
    try {
      const savedProfession = await professionApi
        .saveProfessions(profession);
      savedProfession._key
        ? dispatch(updateProfessionSuccess(savedProfession))
        : dispatch(addProfessionSuccess(savedProfession));
    }
    catch (err) {
      dispatch(saveProfessionFailure(err));
    }
  }
}
