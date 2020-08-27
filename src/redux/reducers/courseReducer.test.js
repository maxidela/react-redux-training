import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

it("should add a course when passed CREATE_COURSE_SUCCESS", () => {
  const initialState = [{ title: "A" }, { title: "B" }];
  const newCourse = { title: "C" };

  const action = actions.createCourseSuccess(newCourse);

  const newState = courseReducer(initialState, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update a course when passed UPDATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 1, title: "C" },
  ];
  const course = { id: 2, title: "New Title" };
  const action = actions.updateCourseSuccess(course);

  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((a) => a.id === course.id);

  expect(newState.length).toEqual(3);
  expect(updatedCourse.title).toEqual("New Title");
});