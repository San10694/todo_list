import axios from "axios";

const base_url = "https://api.myjson.com/bins/i64i5";

export const types = {
  FETCH_TASK_LIST_SUCCESS: "FETCH_TASK_LIST_SUCCESS",
  FETCH_TASK_LIST_FAILED: "FETCH_TASK_LIST_FAILED"
};

export const fetchTaskList = () => {
  return dispatch => {
    axios
      .get(base_url)
      .then(response => {
        //console.log("list - " + JSON.stringify(response.data));
        fetchListSucess(dispatch, response);
      })
      .catch(error => {
        fetchListFailed(dispatch);
      });
  };
};

function fetchListFailed(dispatch) {
  dispatch({ type: types.FETCH_TASK_LIST_FAILED });
}

function fetchListSucess(dispatch, response) {
  dispatch({ type: types.FETCH_TASK_LIST_SUCCESS, payload: response.data });
}
