import keyMirror from "keymirror";

export var ActionTypes = keyMirror({
  // API requests actions
  REQUEST_PROFESSIONS: null,
  REQUEST_PROFESSIONS_SUCCESS: null,
  ADD_PROFESSION: null,
  ADD_PROFESSION_SUCCESS: null,
  UPDATE_PROFESSION: null,
  UPDATE_PROFESSION_SUCESS: null,
  BEGIN_API_CALL : null,
  API_CALL_ERROR: null
});

console.log("ActionTypes", ActionTypes);
