
import { createSlice } from '@reduxjs/toolkit';

const excludesSlice = createSlice({
  name: 'excludes',
  initialState: [],
  reducers: {
    addExclude: (state, action) => {
      state.push(action.payload);
    },
    deleteExclude: (state, action) => {
        return state.filter((exclude) => exclude.id !== action.payload);
      },
  },
});

export const { addExclude, deleteExclude } = excludesSlice.actions;
export default excludesSlice.reducer;
