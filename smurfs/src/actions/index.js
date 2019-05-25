/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURF = "GET_SMURF"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE"
export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"
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

export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURF })
  fetch("http://localhost:3333/smurfs")
    .then(res => res.json())
    .then(smurfs => {
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: smurfs
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: err
      });
    });
} ;


export const addSmurf = smurf => dispatch => {
  dispatch({type: ADD_SMURF})
  fetch("http:///localhost:3333/smurfs", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(smurf),
  })
  .then(res => res.json())
  .then(smurfs => {
    dispatch({
      type: ADD_SMURF_SUCCESS,
      payload: smurfs
    });
  })
  .catch(err => {
    dispatch({
      type: ADD_SMURF_FAILURE,
      payload: err
    });
  });
};
