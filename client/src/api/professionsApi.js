import axios from 'axios';

import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3500/api/professions/';

// API call to get all the list of professions
export function getProfessionsList() {
  return axios.get(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

// API call to post/put professions list
export function saveProfessions(profession) {
  // check if key exists .. if key exists then put else post
  if(profession._key) {
    return axios.put(baseUrl + profession._key, profession)
    .then(handleResponse)
    .catch(handleError);
  } else {
    return axios.post(baseUrl, profession)
    .then(handleResponse)
    .catch(handleError);
  }
}