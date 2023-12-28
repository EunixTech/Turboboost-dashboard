import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'axios';

// Define the async thunk for registration
export const registerUser = createAsyncThunk('registration/registerUser', async (registrationData) => {
  try {
    const response = await Axios.post('http://localhost:8000/v1/user/register-account', registrationData);

    if (response.status === 200) {
      return response.data; // You can return any relevant data here
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    throw error;
  }
});

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    registerStatus: 'idle',
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.registerStatus = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registerStatus = 'succeeded';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = registrationSlice.actions;

export default registrationSlice.reducer;
