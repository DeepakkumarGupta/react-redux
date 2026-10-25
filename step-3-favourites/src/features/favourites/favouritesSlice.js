import { createSlice } from "@reduxjs/toolkit";

// Store only the IDs. Course data stays in the courses slice (single source of truth).
const favouritesSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    toggleFavourite(state, action) {
      const i = state.indexOf(action.payload);
      if (i === -1) state.push(action.payload);
      else state.splice(i, 1);
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
