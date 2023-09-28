import React from 'react';
import { useSelector } from 'react-redux';
import InputText from './InputText';
import InputDropdown from './InputDropdown';
import Button from './button/Button';

const Filter = () => {
    const dark = useSelector((state) => state.home.dark);
    return (
      <div className="w-[100%] px-[15px] flex mobile:flex-col laptop:flex-row mt-[18px] justify-between items-end">
        <div className="flex mobile:flex-col laptop:flex-row justify-between items-center w-[100%]">
          <InputText label="Search In Results" />
          <InputDropdown
            label="Search By"
            list={["URL", "All Devices", "All Statuses", "20"]}
          />
          <InputDropdown
            label="Device Type"
            list={["All Devices", "All Statuses", "20", "URL"]}
          />
          <InputDropdown
            label="Status"
            list={["All Statuses", "20", "URL", "All Devices"]}
          />
          <InputDropdown
            label="Results Per Page"
            list={["20", "URL", "All Devices", "All Statuses"]}
          />
        </div>
        <div className="flex items-center mobile:w-[100%] mobile:mt-[10px] laptop:mt-[0px] laptop:w-[200px] justify-between shrink-0 ml-[10px]">
          <Button label="Clear" />
          <Button label="Apply" />
        </div>
      </div>
    );
  };

export default Filter;
