import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const GETTING_SMURF = 'GETTING_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'UPDATE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'UPDATING_SMURF';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const URL = 'http://localhost:3333/smurfs';

export const addSmurf = smurf => {
  const newSmurf = axios.get(`${URL}/add`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(res => {
        dispatch({
          type: ADD_SMURF,
          payload: res.data
        });
      .catch(err => {
          dispatch({
            type: ERROR,
            payload: err
          });
        });
      });
  };

  export const getSmurf = () => {
    const smurf = axios.get(`${URL}/get`);
    return dispatch => {
      dispatch({ type: GETTING_SMURF });
      smurf
        .then(res => {
          type: GET_SMURF,
          payload: res.data
        });
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: err
          });
        })
    }
  }

  export const deleteSmurf = id => {
  const deletedFriend = axios.delete(`${URL}/delete`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    deletedFriend
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
