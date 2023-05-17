import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchState: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { searchState } = searchSlice.actions;
