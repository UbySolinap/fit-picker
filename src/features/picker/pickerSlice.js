import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tops: {
    isLocked: false,
    item: {},
    subTypes: [],
  },
  bottoms: {
    isLocked: false,
    item: {},
    subTypes: [],
  },
  outerwear: {
    isLocked: false,
    item: {},
    subTypes: [],
  },
  footwear: {
    isLocked: false,
    item: {},
    subTypes: [],
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

      state.tops.isLocked = false;
      state.bottoms.isLocked = false;
      state.outerwear.isLocked = false;
      state.footwear.isLocked = false;
    },
    toggleLock(state, action) {
      state[action.payload].isLocked = !state[action.payload].isLocked;
    },
    addSubTypes(state, action) {
      // Adds all subtype in a state, also filtering duplicates.
      action.payload.clothes.forEach((item) =>
        item.subtype.forEach((type) => {
          if (!state[action.payload.type].subTypes.includes(type)) {
            state[action.payload.type].subTypes.push(type);
          }
        }),
      );
    },
    clearSubType(state, action) {
      state[action.payload].subTypes = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearList,
  toggleLock,
  addSubTypes,
  clearSubType,
} = pickerSlice.actions;

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
