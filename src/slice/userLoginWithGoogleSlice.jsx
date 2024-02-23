import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define an initial state for the user
const initialState = {
  loginGoogle: null,
  loading: 'idle',
  error: null,
};

// Create an async thunk to make the API request
export const loginWithGoogle = createAsyncThunk(
  'user/loginWithGoogle',
  async (data) => {
    try {
      // Make an API request to the specified endpoint
      const response = await axios.post('http://localhost:8000/v1/user/login-with-google', data);

      // Return the response data
      return response.data;
    } catch (error) {
      // If an error occurs, reject the promise with the error message
      throw error.message;
    }
  }
);

// Create a user slice with reducers for success and error
const userLoginWithGoogleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default userLoginWithGoogleSlice.reducer;
