// Action Creators!!

import { ActionTypes as types } from '../constants/constants';
import axios from 'axios';

export function fetchProfession() {
    return (dispatch) => {
        makeGetProfessionAjaxCall(dispatch);
    }
}

function makeGetProfessionAjaxCall(dispatch) {
    dispatch({type:types.REQUEST_PROFESSIONS});
  
    axios.get('http://localhost:3500/api/professions')
    .then((resp) => {
        console.log(resp);
      dispatch({type:types.REQUEST_PROFESSIONS_SUCCESS, data: resp.data});
    })
    .catch((err) => {
      dispatch({type:types.REQUEST_PROFESSIONS_ERROR, data: err});
    });
  }