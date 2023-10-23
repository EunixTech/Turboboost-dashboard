import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  searchBy: 'URL',
  deviceType: 'All Devices',
  status: 'All Statuses',
  resultsPerPage: '20',
  searchByList: ["URL", "All Devices", "All Statuses", "20"],
  deviceTypeList: ["All Devices", "All Statuses", "20", "URL"],
  statusList: ["All Statuses", "20", "URL", "All Devices"],
  resultPerPageList: ["20", "URL", "All Devices", "All Statuses"],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilterOption(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    clearFilterOptions(state) {
      return initialState;
    },
  },
});

// Export the selectors to access the lists
export const selectSearchByList = (state) => state.filter.searchByList;
export const selectDeviceTypeList = (state) => state.filter.deviceTypeList;
export const selectStatusList = (state) => state.filter.statusList;
export const selectResultPerPageList = (state) => state.filter.resultPerPageList;

export const { updateFilterOption, clearFilterOptions } = filterSlice.actions;
export default filterSlice.reducer;
