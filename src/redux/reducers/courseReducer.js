import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCCESS:
      return action.courses;
    default:
      return state;
  }
}
