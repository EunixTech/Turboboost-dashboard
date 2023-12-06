import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    storeUserData: (state, action) => {
      // Update the state with the data from the API response
      state.userProfile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeUserData } = userSlice.actions;

export default userSlice.reducer;
