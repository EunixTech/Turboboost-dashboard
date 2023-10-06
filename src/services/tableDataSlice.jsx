import { createSlice } from "@reduxjs/toolkit";

const tableDataSlice = createSlice({
  name: "tableData",
  initialState: [], // Initial state should be an empty array or whatever structure you need
  reducers: {
    setTableData: (state, action) => {
      // This reducer sets the tableData in the store
      return action.payload; // Assuming action.payload is an array of data
    },
  },
});

export const { setTableData } = tableDataSlice.actions;

export default tableDataSlice.reducer;
