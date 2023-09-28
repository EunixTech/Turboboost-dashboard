import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";

const Table = ({ setSelected1 }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    const [selected, setSelected] = useState([]);
    const dark = useSelector((state) => state.home.dark);
    return (
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          color: dark ? "#fff" : "#000",
        }}
        className="w-[100%] border-t-[1px]  border-[#ebebeb] mt-[10px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool"
      >
        <div className="mobile:w-[1200px] laptop:w-[100%]">
          <TableHeader
            change={() => {
              if (selected.length !== arr.length) {
                const arrr = [];
                for (let i = 0; i < arr.length; i++) {
                  arrr.push(i);
                }
                setSelected(arrr);
                setSelected1(arrr);
              } else {
                setSelected([]);
                setSelected1([]);
              }
            }}
          />
          {arr.map((item, i) => {
            return (
              <TableItem
                key={i}
                selected={selected.includes(i)}
                change={() => {
                  if (selected.includes(i)) {
                    const finale = selected.filter((e) => e !== i);
                    setSelected(finale);
                    setSelected1(finale);
                  } else {
                    setSelected([...selected, i]);
                    setSelected1([...selected, i]);
                  }
                }}
                last={i === arr.length - 1}
              />
            );
          })}
        </div>
      </div>
    );
  };
  

export default Table;
