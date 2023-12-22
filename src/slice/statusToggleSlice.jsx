
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontRenderBehavior: false,
  fontLoading: false,

  imageSizeAdaption: false,
  lazyLoading: false,

  minifyJSFile: false,
  delayScripts: false,

  minifyHTML: false,
 
  criticalCSS: false,
  removeUnsedCSS: false,
};

const statusToggleSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      const { key, value } = action.payload;
      console.log("Setting toggle:", key, value);
      state[key] = value;
    },
  },
});

export const { setToggle } = statusToggleSlice.actions;
export default statusToggleSlice.reducer;
