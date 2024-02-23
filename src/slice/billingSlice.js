import { createSlice } from '@reduxjs/toolkit';

const billingSlice = createSlice({
  name: 'billing',
  initialState: {
    currentPlan: 'Starter',
    selected: 0,
    // Add other billing-related state variables here
  },
  reducers: {
    setPlan: (state, action) => {
      state.currentPlan = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    // Add other reducers for billing actions
  },
});

export const { setPlan, setSelected } = billingSlice.actions;
export default billingSlice.reducer;
