import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import favouritesReducer from "../features/favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    favourites: favouritesReducer,
  },
});
