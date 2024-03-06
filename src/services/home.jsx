import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    auth: false,
    dark: localStorage.getItem("dark") ? true : false,
    upgradePopUpShow: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setDark: (state, action) => {
      state.dark = action.payload;
    },
    setUpgradePopUpShow: (state, action) => {
      state.upgradePopUpShow = action.payload;
    },
  },
});

export const { setAuth, setDark, setUpgradePopUpShow } = homeSlice.actions;

export default homeSlice.reducer;
