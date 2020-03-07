import { ActionTypes as types } from '../constants';
var defaultState = {
    professionsList: []
};
function profession(state = defaultState, action) {
    switch (action.type) {
        case types.REQUEST_PROFESSIONS_SUCCESS:
            return {
                ...state,
                professionsList: action.data
            }
        case types.REQUEST_PROFESSIONS_ERROR:
            break;
        default:
            return state;
    }
}

export default profession;