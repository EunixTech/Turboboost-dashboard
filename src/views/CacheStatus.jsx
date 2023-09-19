import React, { useEffect, useState } from "react";
import HomeLayout from "../layouts/index/index";
import { useSelector } from "react-redux";

// const Button = ({ onClick }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         // onClick();
//       }}
//       className={`w-[48%] ${!dark ? "bg-[#ebebeb] " : "bg-[#204c3a]"}
//         h-[34px]   cursor-pointer rounded-[4px] border-[1px] ${
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
//         } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[1.5px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
//       >
//         Clear
//       </p>
//     </div>
//   );
// };

const Button = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={`w-[48%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

        h-[34px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[#2fe49c]  active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Clear
      </p>
    </div>
  );
};

const Button2 = ({ onClick, check }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        style={{
          backgroundColor: check ? "#F87238" : "#FF465C",
        }}
        className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#000]" : "bg-[#000]"
        } rounded-[4px] hover:opacity-80 active:translate-y-[0px] pl-[6px] pr-[12px] hover:bg-[#333345] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        <img
          src="/graphic/status/del.svg"
          className="w-[12px] ml-[6px] mr-[6px] translate-y-[0px]"
          alt=""
        />{" "}
        <div className="translate-y-[1px]">
          {check ? "Purge Selected" : "Purge All Cache"}
        </div>
      </p>
    </div>
  );
};

// const Button2 = ({ onClick, check }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         // onClick();
//       }}
//       className={`laptop:w-[150px]  mobile:w-[100%] ${
//         !dark ? "bg-[#ebebeb] " : "bg-[#204c3a]"
//       }
//         h-[40px]   cursor-pointer rounded-[4px] border-[1px] ${
//           dark ? "border-[#204c3a]" : "border-[#ebebeb] "
//         } flex items-center justify-center mt-[20px]`}
//     >
//       <p
//         style={{
//           backgroundColor: check ? "#F87238" : "#FF465C",
//         }}
//         className={`text-[${
//           true ? "#fff" : "#000"
//         }]   f2 text-[12px]  border-[1px]  ${
//           dark ? "border-[#204c3a]" : "border-[#ebebeb]"
//         } ${
//           dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
//         } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[2.5px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
//       >
//         <img
//           src="/graphic/status/del.svg"
//           className="w-[12px] ml-[6px] mr-[6px] translate-y-[0px]"
//           alt=""
//         />{" "}
//         <div className="translate-y-[1px]">
//           {check ? "Purge Selected" : "Purge All Cache"}
//         </div>
//       </p>
//     </div>
//   );
// };

// const Button1 = ({ onClick }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         // onClick();
//       }}
//       className={`w-[48%] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}
//       h-[34px]   cursor-pointer rounded-[4px] border-[1px] ${
//         dark ? "border-[#1F2329]" : "border-[#ebebeb] "
//       } flex items-center justify-center mt-[20px]`}
//     >
//       <p
//         className={`text-[${
//           true ? "#fff" : "#000"
//         }]   f2 text-[12px]  border-[1px]  ${
//           dark ? "border-[#1F2329]" : "border-[#ebebeb]"
//         } ${
//           dark ? "bg-[#000]" : "bg-[#000]"
//         } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[1.5px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
//       >
//         Apply
//       </p>
//     </div>
//   );
// };

const Button1 = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {}}
      className={`w-[48%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

        h-[34px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#000]" : "bg-[#000]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[#333345] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Apply
      </p>
    </div>
  );
};

const HeaderItem = ({ color, title, sub }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
        color: dark ? "#fff" : "#000",
      }}
      className=" h-[70px] bg-[#e6e6e640]  px-[12px] py-[12px] rounded-[6px] border-[1px] border-[#ebebeb]"
    >
      <div className="flex items-center">
        <div
          className="w-[8px] h-[8px] rounded-[50%]"
          style={{ backgroundColor: color }}
        ></div>
        <h1
          style={{
            color: dark ? "#ffffff74" : "#0a0a187e",
          }}
          className="text-[12px] font-bold ml-[4px] text-[#0a0a187a]"
        >
          {title}
        </h1>
      </div>
      <h1 className="text-[24px] mobile:mt-[2px] laptop:mt-[0px] font-bold tracking-wide ">
        {sub}
      </h1>
    </div>
  );
};

const InputText = ({ label }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="mobile:w-[100%] laptop:w-[19.5%] h-[100%]">
      <p
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]"
      >
        {label}
      </p>
      <input
        style={{
          color: dark ? "#fff" : "#000",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        type="text"
        className="w-[100%] border-[1px] outline-none bg-transparent border-[#ebebeb] rounded-[4px] px-[10px] text-[12px] font-medium mt-[4px] h-[34px]"
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
    <div className="mobile:w-[100%] laptop:w-[19.5%] h-[100%]">
      <p
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]"
      >
        {label}
      </p>
      <div
        style={{
          color: dark ? "#fff" : "#000",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] relative     text-[12px] font-medium mt-[4px] h-[34px]"
      >
        <div
          onClick={() => {
            setClicked(true);
          }}
          style={{
            borderColor: dark ? "#1F2329" : "#ebebeb",
            borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
          }}
          className="w-[100%] cursor-pointer rounded-[4px] border-[1px] border-[#ebebeb] px-[10px] h-[34px] flex justify-between items-center"
        >
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
            className="w-[100%] min-h-[10px]  rounded-b-[4px] px-[0px] py-[5px] border-[1px] border-t-[0] border-[#ebebeb] absolute z-20  top-[33px] bg-[#fff]"
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
                  className="w-[100%] h-[34px]  flex items-center justify-center text-[11px] cursor-pointer"
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
        {/* <div className="w-[48%] h-[34px] text-[11px] cursor-pointer rounded-[3px]  text-[#fff] hover:bg-[#333345] bg-[#191B21] flex items-center justify-center text-[#000] font-bold">
          Clear
        </div>
        <div className="w-[48%] h-[34px] text-[11px] cursor-pointer rounded-[3px] hover:bg-[#2FE49C] bg-[#38F8AC] flex items-center justify-center text-[#000] font-bold">
          Apply
        </div> */}
        <Button />
        <Button1 />
      </div>
    </div>
  );
};

const CheckBox = ({ change, check, setCheck }) => {
  return (
    <div
      style={{
        backgroundColor: check && "#38f8ab34",
        borderColor: check ? "#38F8AC" : "#959494",
      }}
      onClick={() => {
        setCheck(!check);
        change();
      }}
      className="w-[14px] h-[14px] border-[1px] border-[#959494] rounded-[2px] cursor-pointer flex items-center justify-center"
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

const TableHeader = ({ change }) => {
  const [check, setCheck] = useState(false);

  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
        color: dark ? "#fff" : "#000",
      }}
      className="w-[100%] flex h-[25px] border-b-[1px] border-[#ebebeb]"
    >
      <div className="w-[7%]  px-[10px] items-center flex h-[100%] ">
        <CheckBox change={change} check={check} setCheck={setCheck} />
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[27%] text-[12px] tracking-wide text-[#0a0a1876] font-bold flex h-[100%] items-center"
      >
        URL
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[11%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
      >
        Device
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[28%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
      >
        Tags
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[9%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
      >
        Last Optimized
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[9%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
      >
        Status
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[9%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
      >
        Actions
      </div>
    </div>
  );
};

const Status = ({ i }) => {
  return (
    <div
      className="h-[22px] flex items-center px-[9.5px] justify-between rounded-[23px] "
      style={{
        backgroundColor:
          i === 1 ? "#38f8ab31" : i === 2 ? "#ffcc6538" : "#ff465c38",
      }}
    >
      <div
        className="w-[6px] h-[6px] shrink-0 rounded-[50%]"
        style={{
          backgroundColor:
            i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      ></div>
      <p
        className="text-[11px] tracking-wide ml-[5px]"
        style={{
          color: i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      >
        {i === 1 ? "Optimized" : i === 2 ? "Incomplete" : "Disconnected"}
      </p>
    </div>
  );
};

const TableItem = ({ last, change, selected }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);

  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
        color: dark ? "#fff" : "#000",
      }}
      className="w-[100%] flex h-[70px] border-b-[1px] border-[#ebebeb]"
    >
      <div className="w-[7%]  px-[10px] items-center flex h-[100%] ">
        <CheckBox check={selected} setCheck={setCheck} change={change} />
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[27%] pr-[10px] text-[14px] hover:underline cursor-pointer leading-[16px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        http://txtcartapp.com/sms-library/sms-marketing-calendar-for-ecommerce-may-2022/
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[11%]  text-[14px] tracking-wide text-[#000] font-bold  flex h-[100%] items-center"
      >
        Desktop
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[28%]  text-[14px] tracking-wide text-[#000] font-bold  flex h-[100%] items-center"
      >
        Author:1, pageType:sms:library,{" "}
        <span className="text-[#0a0a1876] ml-[3px]">more...</span>
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[9%]  text-[14px] tracking-wide text-[#000] font-bold  flex h-[100%] items-center"
      >
        05/23/23
      </div>
      <div className="w-[9%]  text-[10px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center">
        <Status i={1} />
      </div>
      <div className="w-[9%]  text-[10px] tracking-wide px-[10px] cursor-pointer text-[#0a0a1876] font-bold  flex h-[100%] items-center">
        <img
          src="/graphic/status/trash.svg"
          className="w-[15px] h-[15px]"
          alt=""
        />
      </div>
    </div>
  );
};

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

const CacheStatus = () => {
  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111  laptop:px-[80px] mobile:px-[10px] desktop:px-[80px]"
      >
        <div className="w-[100%] max-w-[1920px]  min-h-[100vh]">
          <div className="flex pt-[40px] justify-between mb-[20px] h-[34px] items-center w-[100%]">
            <h1
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[24px] font-bold tracking-wide "
            >
              Cache Status
            </h1>
          </div>

          <div className="w-[100%] mt-[40px]  laptop:flex justify-between ">
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="laptop:w-[49%] mobile:mb-[10px] laptop:mb-[0px] mobile:w-[100%]  px-[15px] py-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[20px] font-bold tracking-wide "
              >
                Total Cache Status
              </h1>
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[30px] mt-[10px] font-bold tracking-wide "
              >
                335
              </h1>
              <div className="w-[100%] h-[4px] mt-[8px] rounded-[10px] overflow-hidden flex">
                <div className="w-[40%] h-[100%] mr-[2px] rounded-[10px] bg-[#38F8AC]" />
                <div className="w-[27%] h-[100%] mr-[2px] rounded-[10px] bg-[#FFCB65]" />
                <div className="w-[33%] h-[100%] rounded-[10px] bg-[#FF465C]" />
              </div>
              <div className="w-[100%] grid mobile:grid-cols-2 laptop:grid-cols-3 mt-[10px] gap-x-[10px] gap-y-[7px]">
                <HeaderItem title="Optimized URLs" sub="246" color="#38F8AC" />
                <HeaderItem title="Pending URLs" sub="72" color="#FFCB65" />
                <HeaderItem
                  title="Not Optimized URLs"
                  sub="19"
                  color="#FF465C"
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="laptop:w-[49%] mobile:mb-[10px] laptop:mb-[0px] mobile:w-[100%]  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[20px] font-bold tracking-wide "
              >
                Total Cache Size
              </h1>
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[30px] mt-[10px] font-bold tracking-wide "
              >
                467.08 MB
              </h1>
              <div className="w-[100%] h-[4px] mt-[8px] rounded-[10px] overflow-hidden flex">
                <div className="w-[25%] h-[100%] mr-[2px] rounded-[10px] bg-[#391F87]" />
                <div className="w-[23%] h-[100%] mr-[2px] rounded-[10px] bg-[#766695]" />
                <div className="w-[22%] h-[100%] mr-[2px] rounded-[10px] bg-[#9963FE]" />
                <div className="w-[18%] h-[100%] mr-[2px] rounded-[10px] bg-[#CCB0FF]" />
                <div className="w-[10%] h-[100%] bg-[#E9DEFC]" />
              </div>
              <div className="w-[100%] mobile:grid-cols-2 grid laptop:grid-cols-3 mt-[10px] gap-x-[10px] gap-y-[7px]">
                <HeaderItem title="HTML Cache" sub="114.79MB" color="#391F87" />
                <HeaderItem title="JS Cache" sub="21.54MB" color="#766695" />
                <HeaderItem title="CSS Cache" sub="67.67MB" color="#9963FE" />
                <HeaderItem
                  title="Fonts Cache"
                  sub="766.48kB"
                  color="#CCB0FF"
                />
                <HeaderItem
                  title="Images Cache"
                  sub="262.46MB"
                  color="#E9DEFC"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%] mt-[15px] mobile:pb-[10px] laptop:pb-[0]  mb-[30px]  pt-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
          >
            <div className=" px-[15px] flex justify-between items-center">
              <div className="">
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px] font-bold tracking-wide "
                >
                  Search
                </h1>
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]"
                >
                  1,357 Results
                </p>
              </div>
              <div className="flex items-center">
                {selected.length > 0 && (
                  <p className="text-[12px] mr-[10px] font-bold tracking-wide  text-[#0a0a187a]">
                    1,357 Results
                  </p>
                )}
                {/* <div
                  style={{
                    backgroundColor:
                      selected.length > 0 ? "#F87238" : "#FF465C",
                  }}
                  className="h-[38px] rounded-[5px] flex items-center cursor-pointer text-[#fff] font-medium text-[12px] px-[14px] justify-center "
                >
                  <img
                    src="/graphic/status/del.svg"
                    className="w-[14px] mr-[4px]"
                    alt=""
                  />
                  {selected.length > 0 ? "Purge Selected" : "Purge All Cache"}
                </div> */}
                <Button2 check={selected.length > 0} />
              </div>
            </div>
            <Filter />
            <Table setSelected1={setSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CacheStatus;
