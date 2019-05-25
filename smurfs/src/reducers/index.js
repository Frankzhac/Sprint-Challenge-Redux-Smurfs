import {
  GET_SMURF,
  GET_SMURF_SUCCESS ,
  GET_SMURF_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions'
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  gettingFriends: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default function smurfsReducer(state=initialState, action) {
  switch(action.type) {

    // GET requests

    case GET_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      }

    case GET_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: state.smurfs.concat(action.payload)
      }

    case GET_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

      // POST requests

    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
      }

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: state.smurfs.concat(action.payload)
      }

    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }

    default:
      return state
  }
}
