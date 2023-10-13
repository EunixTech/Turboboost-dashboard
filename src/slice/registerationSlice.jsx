
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registrationStatus: 'idle', // 'idle', 'pending', 'succeeded', 'failed'
  error: null,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.registrationStatus = 'pending';
    },
    registrationSuccess: (state) => {
      state.registrationStatus = 'succeeded';
    },
    registrationFailed: (state, action) => {
      state.registrationStatus = 'failed';
      state.error = action.payload;
    },
  },
});

export const { registrationPending, registrationSuccess, registrationFailed } = registrationSlice.actions;

export default registrationSlice.reducer;
