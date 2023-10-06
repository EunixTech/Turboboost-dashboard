import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../services/tableDataSlice";
const Table = ({ setSelected1 }) => {
  const tableData = useSelector((state) => state.tableData); // Get tableData from the Redux store
  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  const wrapperClassName = dark ? "divWrapperDarkMode" : "divWrapper";
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch an action to set tableData when the component mounts
    dispatch(
      setTableData([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    );
  }, [dispatch]);
  return (
    <div
      className={`w-[100%] border-t-[1px] border-[#ebebeb] mt-[10px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool${wrapperClassName}`}
    >
      <div className="mobile:w-[1200px] laptop:w-[100%]">
        <TableHeader
          change={() => {
            if (selected.length !== tableData.length) {
              const allIndexes = [];
              for (let i = 0; i < tableData.length; i++) {
                allIndexes.push(i);
              }
              setSelected(allIndexes);
              setSelected1(allIndexes);
            } else {
              setSelected([]);
              setSelected1([]);
            }
          }}
        />
        {tableData.map((item, i) => {
          return (
            <TableItem
              key={i}
              selected={selected.includes(i)}
              change={() => {
                if (selected.includes(i)) {
                  const updatedSelection = selected.filter((e) => e !== i);
                  setSelected(updatedSelection);
                  setSelected1(updatedSelection);
                } else {
                  setSelected([...selected, i]);
                  setSelected1([...selected, i]);
                }
              }}
              last={i === tableData.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
