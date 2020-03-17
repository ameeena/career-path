import keyMirror from "keymirror";

export var ActionTypes = keyMirror({
  // API requests actions
  REQUEST_PROFESSIONS: null,
  REQUEST_PROFESSIONS_SUCCESS: null,
  REQUEST_PROFESSIONS_ERROR: null,
  ADD_PROFESSION: null,
  ADD_PROFESSION_SUCCESS: null,
  ADD_PROFESSION_ERROR: null,
  UPDATE_PROFESSION: null,
  UPDATE_PROFESSION_SUCESS: null,
  UPDATE_PROFESSION_ERROR: null,
  SAVE_PROFESSION_FAILURE: null
});

console.log("ActionTypes", ActionTypes);
