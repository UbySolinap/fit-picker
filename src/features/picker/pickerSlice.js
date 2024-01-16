import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  top: {},
  bottom: {},
  outerWear: {},
  footWear: {},
};

const pickerSlice = createSlice({
  name: "picker",
  initialState,
  reducers: {
    addTop(state, action) {
      state.top.assign(state.top, action.payload);
    },
  },
});

export const { addTop } = pickerSlice.actions;

export default pickerSlice.reducer;
