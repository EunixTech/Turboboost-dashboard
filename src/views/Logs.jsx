import React, { useEffect, useState } from "react";
import HomeLayout from "../layouts/index/index";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import Chart2 from "../components/charts/chart2";
import Chart3 from "../components/charts/chart3";
import Chart4 from "../components/charts/chart4";

// const Button = ({ onClick }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         // onClick();
//       }}
//       className={`laptop:w-[170px]  mobile:w-[100%] ${!dark ? "bg-[#ebebeb] " : "bg-[#204c3a]"}
//         h-[40px]   cursor-pointer rounded-[4px] border-[1px] ${
//           dark ? "border-[#204c3a]" : "border-[#ebebeb] "
//         } flex items-center justify-center mt-[20px]`}
//     >
//       <p
//         className={`text-[${
//           false ? "#fff" : "#000"
//         }]   f2 text-[12px]  border-[1px]  ${
//           dark ? "border-[#204c3a]" : "border-[#ebebeb]"
//         } ${
//           dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
//         } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[2.5px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
//       >
//         Download Log (.csv)
//       </p>
//     </div>
//   );
// };

const Button = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={`laptop:w-[170px]  mobile:w-[100%] ${
        !dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"
      }
        
        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[#2fe49c] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Download Log (.csv)
      </p>
    </div>
  );
};

const HeaderItem = ({ color, title, sub }) => {
  return (
    <div className=" h-[60px] bg-[#e6e6e640] px-[12px] py-[12px] rounded-[6px] border-[1px] border-[#ebebeb]">
      <div className="flex items-center">
        <div
          className="w-[8px] h-[8px] rounded-[50%]"
          style={{ backgroundColor: color }}
        ></div>
        <h1 className="text-[11px] font-bold ml-[4px] text-[#0a0a187a]">
          {title}
        </h1>
      </div>
      <h1 className="text-[15px] mt-[5px] font-bold tracking-wide ">{sub}</h1>
    </div>
  );
};

const InputText = ({ label }) => {
  return (
    <div className=" w-[19.5%] h-[100%]">
      <p className="text-[12px] font-bold tracking-wide  text-[#0a0a187a]">
        {label}
      </p>
      <input
        type="text"
        className="w-[100%] border-[1px] outline-none border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[34px]"
      />
    </div>
  );
};

const InputDropdown = ({ label, list }) => {
  const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });

  const dark = useSelector((state) => state.home.dark);

  return (
    <div className=" w-[19.5%] h-[100%]">
      <p className="text-[12px] font-bold tracking-wide  text-[#0a0a187a]">
        {label}
      </p>
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] relative border-[1px]  border-[#ebebeb]  text-[12px] font-medium mt-[7px] h-[34px]"
      >
        <div
          onClick={() => {
            setClicked(true);
          }}
          className="w-[100%] cursor-pointer px-[10px] h-[34px] flex justify-between items-center"
        >
          <p className="text-[12px] font-bold tracking-wide  text-[#000]">
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div className="w-[100%] min-h-[10px] rounded-[2px] px-[5px] py-[5px] border-[1px] border-[#ebebeb] absolute z-20 top-[40px] bg-[#fff]">
            {list.map((item, i) => {
              return (
                <div
                  onMouseOver={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={i}
                  style={{
                    backgroundColor: i === curr ? "#222" : "#fff",
                    color: i === curr ? "#fff" : "#000",
                  }}
                  onClick={() => {
                    setCurr(i);
                  }}
                  className="w-[100%] rounded-[2px] h-[27px] mb-[3px] flex items-center justify-center text-[11px] cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="w-[100%] px-[15px] flex mt-[18px] justify-between items-end">
      <div className="flex justify-between items-center w-[100%]">
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
      <div className="flex items-center w-[200px] justify-between shrink-0 ml-[10px]">
        <div className="w-[48%] h-[34px] text-[11px] rounded-[3px] bg-[#d9d9d95b] flex items-center justify-center text-[#000] font-bold">
          Clear
        </div>
        <div className="w-[48%] h-[34px] text-[11px] rounded-[3px] bg-[#38F8AC] flex items-center justify-center text-[#000] font-bold">
          Apply
        </div>
      </div>
    </div>
  );
};

const CheckBox = ({ change, check, setCheck }) => {
  return (
    <div
      style={{
        backgroundColor: check && "#38f8ab34",
        borderColor: check ? "#38F8AC" : "#ebebeb",
      }}
      onClick={() => {
        setCheck(!check);
        change();
      }}
      className="w-[14px] h-[14px] border-[1px] rounded-[2px] cursor-pointer flex items-center justify-center"
    >
      {check && (
        <img
          alt=""
          src="/graphic/status/check.svg"
          className="w-[8px] h-[8px]"
        />
      )}
    </div>
  );
};

const Status = ({ i }) => {
  return (
    <div
      className="h-[19px] flex items-center px-[9.5px]  justify-between rounded-[23px] "
      style={{
        backgroundColor:
          i === 1
            ? "#38f8ab31"
            : i === 2
            ? "#ffcc6538"
            : i === 3
            ? "#ff465c38"
            : "#9963fe36",
      }}
    >
      <div
        className="w-[5px] h-[5px] shrink-0 rounded-[50%]"
        style={{
          backgroundColor:
            i === 1
              ? "#0FE38F"
              : i === 2
              ? "#FFCB65"
              : i === 3
              ? "#FF465C"
              : "#9963FE",
        }}
      ></div>
      <p
        className="text-[10px] tracking-wide ml-[5px]"
        style={{
          color:
            i === 1
              ? "#0FE38F"
              : i === 2
              ? "#FFCB65"
              : i === 3
              ? "#FF465C"
              : "#9963FE",
        }}
      >
        {i === 1
          ? "Optimization Started"
          : i === 2
          ? "Incomplete"
          : i === 3
          ? "Disconnected"
          : "Tag Create"}
      </p>
    </div>
  );
};

const TableHeader2 = ({ change }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] px-[10px] flex h-[35px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[22.5%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Date/Time
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[22.5%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Event
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[22.5%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        URL
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[18.5%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Last Optimized
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[14%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Details
      </div>
    </div>
  );
};

const TableItem2 = ({ last, change, selected }) => {
  const [check, setCheck] = useState(false);

  const dark = useSelector((state) => state.home.dark);
  function random1Or4() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();

    // If the random number is less than 0.5, return 1; otherwise, return 4
    return randomNumber < 0.5 ? 1 : 4;
  }
  return (
    <div
      style={{
        border: last && "0px !important",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[22.5%] text-[14px] px-[15px]  leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        2023-05-25 03:24:47+03:00
      </div>
      <div className="w-[22.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center">
        <Status i={random1Or4()} />
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[22.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        https://txtcartapp.com/review
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[18.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        pageType:archive
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[14%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        Device: Mobile
      </div>
    </div>
  );
};

const Table1 = ({ setSelected1 }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] border-t-[1px]  border-[#ebebeb] mt-[10px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool"
    >
      <div className="mobile:w-[1200px] laptop:w-[100%]">
        <TableHeader1 />
        {arr.map((item, i) => {
          return <TableItem1 key={i} last={i === arr.length - 1} />;
        })}
      </div>
    </div>
  );
};

const TableHeader1 = ({ change }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] px-[10px] flex h-[28px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Date/Time
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Pageviews
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[10px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        CDN Bandwidth (MiB)
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Images (MiB)
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        CSS (MiB)
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        JS (MiB)
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Fonts (MiB)
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Others (MiB)
      </div>
    </div>
  );
};

const TableItem1 = ({ last, change, selected }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);

  return (
    <div
      style={{
        border: last && "0px !important",

        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        2023-05-25
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        142
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px]  leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        107.97 MiB
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        107.97 MiB
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        0 MiB
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px]   leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        0 MiB
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        0 MiB
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        0 MiB
      </div>
    </div>
  );
};

const Table2 = ({ setSelected1 }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] border-t-[1px]  border-[#ebebeb] mt-[10px]"
    >
      <TableHeader2 />
      {arr.map((item, i) => {
        return <TableItem2 key={i} last={i === arr.length - 1} />;
      })}
    </div>
  );
};

const Table3 = ({ setSelected1 }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dark = useSelector((state) => state.home.dark);
  const [selected, setSelected] = useState([]);

  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] border-t-[1px]  border-[#ebebeb] mt-[10px]"
    >
      <TableHeader3 />
      {arr.map((item, i) => {
        return <TableItem3 key={i} last={i === arr.length - 1} />;
      })}
    </div>
  );
};

const TableHeader3 = ({ change }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] px-[10px] flex h-[35px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Date
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Event
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Platform
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[10%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Version
      </div>
    </div>
  );
};

const TableItem3 = ({ last, change, selected }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        border: last && "0px !important",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        May 8th, 05:10:01 EST 2023
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        Plugin Updated
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        WordPress
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[10%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        6.1.1
      </div>
    </div>
  );
};

const Navigator = ({ current, setCurrent }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] h-[40px]   px-[5px] border-b-[1px] border-[#ebebeb] flex  items-center"
    >
      <div
        onClick={() => {
          setCurrent(0);
        }}
        className="h-[100%] cursor-pointer px-[10px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 0 && "2px solid #38F8AC",
            color: dark
              ? current === 0
                ? "#fff"
                : "#82828A"
              : current === 0
              ? "#000"
              : "#0a0a1876",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className=" translate-y-[0px]">Resource Usage</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(1);
        }}
        className="h-[100%]  cursor-pointer px-[10px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 1 && "2px solid #38F8AC",
            color: dark
              ? current === 1
                ? "#fff"
                : "#82828A"
              : current === 1
              ? "#000"
              : "#0a0a1876",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[0px]"> Cache API</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(2);
        }}
        className="h-[100%]  cursor-pointer px-[10px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 2 && "2px solid #38F8AC",
            color: dark
              ? current === 2
                ? "#fff"
                : "#82828A"
              : current === 2
              ? "#000"
              : "#0a0a1876",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[0px]">Connector History</span>
        </div>
      </div>
    </div>
  );
};

const InputDate = ({}) => {
  const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const list = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "Sept",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });

  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="flex mobile:mb-[5px] laptop:mb-0 items-center h-[100%]">
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="mobile:w-[100%] laptop:w-[110px] mr-[10px] relative  text-[12px] font-medium h-[30px]"
      >
        <div
          onClick={() => {
            setClicked(true);
          }}
          style={{
            borderColor: dark ? "#1F2329" : "#ebebeb",
            borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
          }}
          className="w-[100%] cursor-pointer pl-[10px] pr-[10px]  border-[1px]  border-[#ebebeb] h-[30px] flex justify-between items-center"
        >
          <img src="/graphic/logs/cal.svg" className="w-[10px]" alt="" />
          <p
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[12px] font-bold tracking-wide  text-[#000]"
          >
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div
            style={{
              color: dark ? "#fff" : "#000",
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%] min-h-[10px] rounded-[2px]  py-[0px] border-[1px] border-t-0 border-[#ebebeb] absolute z-20 top-[29px] bg-[#fff]"
          >
            {list.map((item, i) => {
              return (
                <div
                  onMouseOver={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={i}
                  style={{
                    backgroundColor:
                      i === curr
                        ? dark
                          ? "#000"
                          : "#ebebeb"
                        : dark
                        ? "#111317"
                        : "#fff",
                  }}
                  onClick={() => {
                    setCurr(i);
                  }}
                  className="w-[100%]  h-[30px]  flex items-center px-[10px] text-[11px] cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="w-[30px] shrink-0 h-[30px] bg-[#0A0A18] flex rounded-[3px] items-center justify-center">
        <img src="/graphic/logs/refresh.svg" className="w-[15px]" alt="" />
      </div>
    </div>
  );
};

const CacheStatus = () => {
  const [current, setCurrent] = useState(0);
  const w = useWidth();
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] mobile:px-[10px] laptop:px-[80px]"
      >
        <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
          <div className="flex justify-between mb-[40px] pt-[40px] h-[34px] items-center w-[100%]">
            <h1
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[24px] font-bold tracking-wide "
            >
              Logs
            </h1>
          </div>
          <div
            style={{
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%]   bg-[#fff] border-[1px] border-[#EBEBEB] mb-[30px] rounded-[8px]"
          >
            <Navigator current={current} setCurrent={setCurrent} />
            {current === 0 && (
              <>
                <div className="w-[100%] px-[15px] py-[15px]">
                  <div className="w-[100%] mb-[15px] flex mobile:flex-col laptop:flex-row laptop:items-center justify-between">
                    <h1
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[20px] mobile:mb-[5px] laptop:mb-0 font-bold tracking-wide "
                    >
                      CDN Bandwidth and Pageviews
                    </h1>
                    {/* <div className="flex mobile:mb-[10px] laptop:mb-0 items-center h-[100%]">
                      <div className="flex items-center h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#38F8AC" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px] font-medium ml-[4px] text-[#000]"
                        >
                          CDN Bandwidth (MiB)
                        </h1>
                      </div>
                      <div className="flex items-center ml-[10px] h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#9963FE" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px] font-medium ml-[4px] text-[#000]"
                        >
                          Pageviews
                        </h1>
                      </div>
                    </div> */}
                    <InputDate />
                  </div>
                  {/* <img
                    src={
                      w > 1000
                        ? "/graphic/logs/chart1.svg"
                        : "/graphic/logs/chart1m.svg"
                    }
                    alt=""
                  /> */}
                  <Chart2 />
                </div>
                <div
                  style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%] px-[15px] pb-[20px] pt-[15px] mt-[13px] border-[1px] border-[#ebebeb]"
                >
                  <div className="w-[100%] mb-[15px] flex  mobile:flex-col laptop:flex-row laptop:items-center justify-between">
                    <h1
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[20px] mobile font-bold tracking-wide "
                    >
                      CDN Distribution
                    </h1>
                    {/* <div className="flex items-center h-[100%]">
                      <div className="flex items-center h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#38F8AC" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px] font-medium ml-[4px] text-[#000]"
                        >
                          Images
                        </h1>
                      </div>
                      <div className="flex items-center ml-[10px] h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#FF465C" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px] font-medium ml-[4px] text-[#000]"
                        >
                          CSS
                        </h1>
                      </div>
                      <div className="flex items-center ml-[10px] h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#9963FE" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px] font-medium ml-[4px] text-[#000]"
                        >
                          JS
                        </h1>
                      </div>
                      <div className="flex items-center ml-[10px] h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#F8B738" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px]  font-medium ml-[4px] text-[#000]"
                        >
                          Fonts
                        </h1>
                      </div>
                      <div className="flex items-center ml-[10px] h-[100%]">
                        <div
                          className="w-[8px] h-[8px] rounded-[50%]"
                          style={{ backgroundColor: "#FF46CB" }}
                        ></div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[14px] font-medium ml-[4px] text-[#000]"
                        >
                          Others
                        </h1>
                      </div>
                    </div> */}
                    <div></div>
                  </div>
                  {/* <img
                    src={
                      w > 1000
                        ? "/graphic/logs/chart2.svg"
                        : "/graphic/logs/chart2m.svg"
                    }
                    className={
                      w > 1000 ? "translate-y-[-30px]" : "translate-y-[-60px]"
                    }
                    alt=""
                  /> */}

                  <Chart3 />
                </div>
              </>
            )}
            {current === 1 && (
              <div className="w-[100%] px-[15px]  py-[15px]">
                <div className="w-[100%] mb-[15px] flex items-center justify-between">
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide "
                  >
                    API Events
                  </h1>
                  {/* <div className="flex items-center h-[100%]">
                    <div className="flex items-center h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#38F8AC" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Optimizations
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#FF465C" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Purge/Invalidate Requests
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#9963FE" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Tag Create Requests
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#F8B738" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Tag Delete Requests
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#FF46CB" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Failure
                      </h1>
                    </div>
                  </div> */}
                  <InputDate />
                </div>
                {/* <img src="/graphic/logs/chart3.svg" alt="" /> */}
                <Chart4 />
              </div>
            )}
            {current === 2 && (
              <>
                <div className="flex justify-between px-[15px] pt-[20px] items-center">
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide text-[#000]"
                  >
                    Connector History
                  </p>
                </div>
                <Table3 />
              </>
            )}
          </div>
          {current === 0 && (
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%] min-h-[10px] mb-[30px] mt-[20px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="flex mobile:flex-col laptop:flex-row justify-between px-[15px] pt-[20px] laptop:items-center">
                <div className="mobile:mb-[10px] laptop:mb-0">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] font-bold tracking-wide text-[#0a0a1877]"
                  >
                    6055 Pageviews, 15407.75MiB CDN Bandwidth
                  </p>
                </div>
                {/* <div className="laptop:w-[170px]  mobile:w-[100%] hover:bg-[#2FE49C] cursor-pointer mobile:mb-[10px] laptop:mb-0 h-[38px] bg-[#38F8AC] rounded-[3px] flex items-center justify-center text-[14px] font-bold tracking-wide">
                Download Log (.csv)
              </div> */}
                <Button />
              </div>
              <Table1 />
            </div>
          )}
          {current === 1 && (
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%] min-h-[10px] mb-[30px] mt-[20px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="flex justify-between px-[15px] pt-[20px] items-center">
                <div>
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide text-[#000]"
                  >
                    Results for: 2023-05-25
                  </p>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] font-bold tracking-wide text-[#0a0a1877]"
                  >
                    1 Optimization, 0 Purge/Invalidate Requests, 1 Tag Create
                    Request, 0 Tag Delete Requests, 0 Failed Optimizations
                  </p>
                </div>
                <Button />
              </div>
              <Table2 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CacheStatus;
