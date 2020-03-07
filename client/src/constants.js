import  keyMirror  from 'keymirror';

export var ActionTypes = keyMirror({
    // API requests actions
    REQUEST_PROFESSIONS:null,
    REQUEST_PROFESSIONS_SUCCESS:null,
    REQUEST_PROFESSIONS_ERROR:null
})

console.log('ActionTypes', ActionTypes);