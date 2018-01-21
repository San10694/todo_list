import { types } from "./../actions/TaskActions";

const INITIAL_STATE = { taskList: [], loading: true };

export default (state = INITIAL_STATE, action) => {
  //console.log("action.type-" + JSON.stringify(action));

  switch (action.type) {
    case types.FETCH_TASK_LIST_SUCCESS:
      return { ...state, taskList: action.payload, loading: false };
    case types.FETCH_TASK_LIST_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
