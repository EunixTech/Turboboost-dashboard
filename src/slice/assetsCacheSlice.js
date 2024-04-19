import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDemoData = createAsyncThunk(
  'demo/fetchDemoData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDemoData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDemoData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDemoData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default apiSlice.reducer;
