import { configureStore } from "@reduxjs/toolkit";

import pickerReducer from "./features/picker/pickerSlice";

const store = configureStore({
  reducer: {
    picker: pickerReducer,
  },
});

export default store;
