
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import appURLs from '../appURL';

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (dataObj, { rejectWithValue }) => {

    try {
       const appURL = appURLs();
       const token = localStorage.getItem('authToken');
       const response = await axios.post(`${appURL}/api/wordpress/auth/verify-otp`, dataObj, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
         },
         withCredentials: true,
       });
       return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyOTP.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export default authSlice.reducer;
