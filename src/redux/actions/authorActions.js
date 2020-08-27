import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusActions";

// Action creators
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// Thunks
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorsApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
