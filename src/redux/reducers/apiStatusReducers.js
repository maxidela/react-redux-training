import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionsTypesEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionsTypesEndsInSuccess(action.type)) {
    console.log("dic one");
    return state - 1;
  }

  return state;
}
