import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
  integrations: [],
  loading: false,
  error: null,
};

// Create an async thunk to fetch integration data
export const fetchIntegrationData = createAsyncThunk(
  'integration/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch integration data from an API (replace with your API call)
      const response = await fetch('/api/integrations');
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a Redux slice
const integrationSlice = createSlice({
  name: 'integration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIntegrationData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIntegrationData.fulfilled, (state, action) => {
        state.loading = false;
        state.integrations = action.payload;
      })
      .addCase(fetchIntegrationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the async thunk for use in components
// export { fetchIntegrationData };

// Export the reducer for use in the Redux store
export default integrationSlice.reducer;
