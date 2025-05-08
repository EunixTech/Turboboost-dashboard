
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const connectSite = createAsyncThunk(
  'site/connectSite',
  async (siteData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/v1/api/wordpress/auth/select-plan',
        siteData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const siteSlice = createSlice({
  name: 'site',
  initialState: {
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(connectSite.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export default siteSlice.reducer;
