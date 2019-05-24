import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const START_REQUEST = 'START_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
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

export const startRequest = () => {
  dispatch({ type: START_REQUEST});
  return axios
    .post(`${URl}/request`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data
      });
      dispatch({
        type: REQUEST_FAIL,
        payload: err
      });
    });
    .catch(err => {
      console.log(err);
    });
 };
};

export const addSmurf = () => {
  const newSmurf = axios.get(`${URL}/add`, smurf);
  return dispatch => {
    dispatch({ type: ADD_SMURF });
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
      dispatch({ type: GET_SMURF });
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
