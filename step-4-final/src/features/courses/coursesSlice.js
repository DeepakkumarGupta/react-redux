import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: [
    { id: 1, title: "HTML Basics", level: "Easy" },
    { id: 2, title: "React Fundamentals", level: "Medium" },
  ],
  reducers: {
    addCourse(state, action) {
      state.push(action.payload); // mutate the draft...
    },
    deleteCourse(state, action) {
      return state.filter((c) => c.id !== action.payload); // ...OR return new. Never both.
    },
  },
});

export const { addCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
