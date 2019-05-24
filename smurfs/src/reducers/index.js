import * as actionTypes from '../actions';
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
export const reducer = (stat = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURF:
      return {
        ...state,
         gettingFriends: true };
    case actionTypes.GET_SMURF:
      return {
        ...state,
         friends: action.payload,
         gettingFriends: false
         };
    case actionTypes.UPDATING_SMURF:
      return {
        ...state,
         updatingFriend: true
        };
    case actionTypes.UPDATE_SMURF:
      return {
        ...state,
         friends: action.payload,
         updatingFriend: false
         };
    case actionTypes.DELETING_SMURF:
      return {
        ...state,
         deletingFriend: true
        };
    case actionTypes.DELETE_SMURF:
      return {
        ...state,
         friends: action.payload,
         deletingFriend: false
         };
    case actionTypes.ERROR:
      return {
         ...state,
         gettingFriends: false,
         creatingFriend: false,
         deletingFriend: false,
         updatingFriend: false,
         error: action.payload
    };     
  default:
    return state;
  }
};
