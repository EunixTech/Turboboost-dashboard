
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an initial state for the cache status
const initialState = {
  cacheStatusData: {
    totalCacheStatus: 0,
    totalCacheSize: '100 MB',
    optimizedUrls: 80,
    pendingUrls: 1555,
    notOptimizedUrls: 0,
    htmlCache: '0 MB',
    jsCache: '0 MB',
    cssCache: '0 MB',
    fontsCache: '0 kB',
    imagesCache: '100 MB',
  },
  status: 'idle',
  error: null,
};

// Create an asynchronous thunk to fetch cache status data
export const fetchCacheStatus = createAsyncThunk('cacheStatus/fetchCacheStatus', async () => {
  // Simulate an API call (replace with API endpoint)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Update the data with dummy values
  return {
    totalCacheStatus: 335,
    totalCacheSize: '467.08 MB',
    optimizedUrls: 246,
    pendingUrls: 72,
    notOptimizedUrls: 19,
    htmlCache: '114.79 MB',
    jsCache: '21.54 MB',
    cssCache: '67.67 MB',
    fontsCache: '766.48 kB',
    imagesCache: '262.46 MB',
  };
});

// Create a slice of the cache status state
const cacheStatusSlice = createSlice({
  name: 'cacheStatus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCacheStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCacheStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cacheStatusData = action.payload;
      })
      .addCase(fetchCacheStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the asynchronous thunk for external use
// export { fetchCacheStatus };

// Export the reducer
export default cacheStatusSlice.reducer;
