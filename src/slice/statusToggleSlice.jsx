import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  someKey: false, 
};

const statusToggleSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { setToggle } = statusToggleSlice.actions;
export default statusToggleSlice.reducer;
