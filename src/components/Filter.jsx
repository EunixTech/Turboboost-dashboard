import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFilterOption,
  clearFilterOptions,
} from "../services/filterSlice"; // Import your filterSlice actions
import InputText from "./InputText";
import InputDropdown from "./InputDropdown";
import Button from "./button/Button";
import {
  selectSearchByList,
  selectDeviceTypeList,
  selectStatusList,
  selectResultPerPageList,
} from "../services/filterSlice"; // Import your selectors

const Filter = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  const filterOptions = useSelector((state) => state.filter);

  // Retrieve the list data using the selectors
  const searchByList = useSelector(selectSearchByList);
  const deviceTypeList = useSelector(selectDeviceTypeList);
  const statusList = useSelector(selectStatusList);
  const resultPerPageList = useSelector(selectResultPerPageList);

  const handleFilterChange = (key, value) => {
    // Dispatch an action to update the filter option in the store
    dispatch(updateFilterOption({ key, value }));
  };

  const handleClearFilter = () => {
    // Dispatch an action to clear filter options in the store
    dispatch(clearFilterOptions());
  };

  return (
    <div className="w-[100%] px-[15px] flex mobile:flex-col laptop:flex-row mt-[18px] justify-between items-end">
      <div className="flex mobile:flex-col laptop:flex-row justify-between items-center w-[100%]">
        <InputText
          label="Search In Results"
          value={filterOptions.searchText}
          onChange={(value) => handleFilterChange("searchText", value)}
        />
        <InputDropdown
          label="Search By"
          list={searchByList}
          value={filterOptions.searchBy}
          onChange={(value) => handleFilterChange("searchBy", value)}
        />
        <InputDropdown
          label="Device Type"
          list={deviceTypeList}
          value={filterOptions.deviceType}
          onChange={(value) => handleFilterChange("deviceType", value)}
        />
        <InputDropdown
          label="Status"
          list={statusList}
          value={filterOptions.status}
          onChange={(value) => handleFilterChange("status", value)}
        />
        <InputDropdown
          label="Results Per Page"
          list={resultPerPageList}
          value={filterOptions.resultPerPage}
          onChange={(value) => handleFilterChange("resultPerPage", value)}
        />
      </div>
      <div className="flex items-center mobile:w-[100%] mobile:mt-[10px] laptop:mt-[0px] laptop:w-[200px] justify-between shrink-0 ml-[10px]">
        <Button label="Clear" onClick={handleClearFilter} />
        <Button label="Apply" />
      </div>
    </div>
  );
};

export default Filter;
