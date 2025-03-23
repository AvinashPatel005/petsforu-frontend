import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  panel: "SEARCH"
};

const mapnavSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPanel: (state, action) => {
      state.panel = action.payload;
    }
  }
});

export const { setPanel } = mapnavSlice.actions;
export default mapnavSlice.reducer;
