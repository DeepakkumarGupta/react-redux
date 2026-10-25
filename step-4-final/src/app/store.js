import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import favouritesReducer from "../features/favourites/favouritesSlice";
import filterReducer from "../features/filter/filterSlice";

const KEY = "forge-store";

// 1) Start from what we saved last time (if anything)
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined; // blocked storage or corrupt JSON: start fresh
  }
}

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    favourites: favouritesReducer,
    filter: filterReducer,
  },
  preloadedState: load(),
});

// 2) After EVERY change, save. (Not the search box: that shouldn't persist.)
store.subscribe(() => {
  try {
    const { courses, favourites } = store.getState();
    localStorage.setItem(KEY, JSON.stringify({ courses, favourites }));
  } catch {
    /* ignore storage errors */
  }
});
