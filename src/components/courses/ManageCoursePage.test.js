import React from "react";
import { mount } from "enzyme";
import { ManageCoursePage } from "./ManageCoursePage";
import { courses, authors, newCourse } from "../../../tools/mockData";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {},
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
