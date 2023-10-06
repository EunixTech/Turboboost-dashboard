import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";

const Table = ({ setSelected1 }) => {
  // Use a more descriptive name for your array
  const tableData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  const wrapperClassName = dark ? "divWrapperDarkMode" : "divWrapper";

  return (
    <div
      className={`w-[100%] border-t-[1px] border-[#ebebeb] mt-[10px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool${wrapperClassName}`}
    >
      <div className="mobile:w-[1200px] laptop:w-[100%]">
        <TableHeader
          change={() => {
            if (selected.length !== tableData.length) {
              const newArr = [];
              for (let i = 0; i < tableData.length; i++) {
                newArr.push(i);
              }
              setSelected(newArr);
              setSelected1(newArr);
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
