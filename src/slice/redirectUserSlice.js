
import { createSlice } from "@reduxjs/toolkit";

const redirectSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {
    getUserDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserDataSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    getUserDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUserDataStart,
  getUserDataSuccess,
  getUserDataFailure,
} = redirectSlice.actions;

export default redirectSlice.reducer;
