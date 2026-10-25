import { createSlice } from "@reduxjs/toolkit";

// State is just a string. For primitives, RETURN the new value.
const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setQuery(state, action) {
      return action.payload;
    },
  },
});

export const { setQuery } = filterSlice.actions;
export default filterSlice.reducer;
