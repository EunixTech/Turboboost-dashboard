// authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginWithEmail = createAsyncThunk(
  'auth/loginWithEmail',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/v1/api/wordpress/auth/login-with-email',
        { email_address: email }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmail.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default authSlice.reducer;
