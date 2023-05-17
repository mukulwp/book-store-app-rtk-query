import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedValue: "All",
};

const filterSlice = createSlice({
  name: "filer",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.checkedValue = action.payload;
    },
  },
});
 
export default filterSlice.reducer;
export const{changeStatus} = filterSlice.actions;