import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    storeUserData: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { storeUserData } = userSlice.actions;

export default userSlice.reducer;
