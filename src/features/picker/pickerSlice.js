import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tops: {
    isLocked: false,
    item: {},
  },
  bottoms: {
    isLocked: false,
    item: {},
  },
  outerwear: {
    isLocked: false,
    item: {},
  },
  footwear: {
    isLocked: false,
    item: {},
  },
};

const pickerSlice = createSlice({
  name: "picker",
  initialState,
  reducers: {
    addItem(state, action) {
      state[action.payload.type].item = action.payload;
    },
    removeItem(state, action) {
      state[action.payload].item = {};
    },
    clearList(state) {
      state.tops.item = {};
      state.bottoms.item = {};
      state.outerwear.item = {};
      state.footwear.item = {};
    },
    toggleLock(state, action) {
      state[action.payload].isLocked = !state[action.payload].isLocked;
    },
  },
});

export const { addItem, removeItem, clearList, toggleLock } =
  pickerSlice.actions;

export default pickerSlice.reducer;

// Checks if the use didn't pick any clothes of any type yet.
export const getEmpty = (state) => {
  let isEmpty = false;

  if (
    Object.keys(state.picker.tops.item).length === 0 &&
    Object.keys(state.picker.bottoms.item).length === 0 &&
    Object.keys(state.picker.outerwear.item).length === 0 &&
    Object.keys(state.picker.footwear.item).length === 0
  ) {
    isEmpty = true;
  }
  return isEmpty;
};
