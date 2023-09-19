import React, { useState } from "react";
import HomeLayout from "../layouts/index/index";
import { useSelector } from "react-redux";

// const Button = ({ onClick }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         // onClick();
//       }}
//       className={`w-[100%] ${!dark ? "bg-[#ebebeb] " : "bg-[#204c3a]"}
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
//         Add New Website
//       </p>
//     </div>
//   );
// };

const Button = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] hover:bg-[#2fe49c] active:translate-y-[0px] font-bold active:border-0  translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide `}
      >
        Add New Website
      </p>
    </div>
  );
};

// const Button1 = ({ onClick }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         onClick();
//       }}
//       className={`w-[100%] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}
//       h-[40px]   cursor-pointer rounded-[4px] border-[1px] ${
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
//         } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[2.5px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
//       >
//         Browse Connectors
//       </p>
//     </div>
//   );
// };

const Button1 = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#000]" : "bg-[#000]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[#333345] active:border-0 translate-y-[-3px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Browse Connectors
      </p>
    </div>
  );
};

const TableHeader = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] h-[32px]  border-y-[1px] border-[#EBEBEB]   flex"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Site Name
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[23%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Site URL
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[20%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Site ID
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[17%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Site Secret
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[15%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Status
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[13%] font-medium text-[#0a0a187b] justify-center text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Actions
      </div>
    </div>
  );
};

const Status = ({ i }) => {
  return (
    <div
      className="h-[19px] flex items-center px-[8.5px] justify-between rounded-[23px] "
      style={{
        backgroundColor:
          i === 1 ? "#38f8ab31" : i === 2 ? "#ffcc6538" : "#ff465c38",
      }}
    >
      <div
        className="w-[5px] h-[5px] shrink-0 rounded-[50%]"
        style={{
          backgroundColor:
            i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      ></div>
      <p
        className="text-[12px] tracking-wide ml-[5px]"
        style={{
          color: i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      >
        {i === 1 ? "Active" : i === 2 ? "Incomplete" : "Disconnected"}
      </p>
    </div>
  );
};

const TableItem = ({ name, url, id, secret, status }) => {
  const dark = useSelector((state) => state.home.dark);
  const [clicked, setClicked] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] h-[40px]  border-b-[1px] border-[#ebebeb]   flex"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[12%] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        {name}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[23%] overflow-hidden pr-[10px] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        {url}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        onClick={() => {
          setClicked(!clicked);
        }}
        onMouseOver={() => {
          setHover1(true);
        }}
        onMouseLeave={() => {
          setHover1(false);
        }}
        className="w-[20%] cursor-pointer font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        {clicked ? "PHJDtTfis" : "PHJDtTfisM..."}
        <div className="flex ml-[10px] cursor-pointer translate-y-[-2px]">
          <img
            src={
              hover1
                ? "/graphic/connect-website/copy1.svg"
                : "/graphic/connect-website/copy.svg"
            }
            className={`w-[12px]`}
            alt=""
          />
          <p
            style={{
              color: hover1 ? "#0A0A18" : "#85858C",
            }}
            className="text-[#85858C] ml-[1px]"
          >
            Copy
          </p>
        </div>
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        onClick={() => {
          if (hover2) {
            setClicked1(true);
          }
        }}
        onMouseOver={() => {
          setHover2(true);
        }}
        onMouseLeave={() => {
          setHover2(false);
          setClicked1(false);
        }}
        className="w-[17%] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        {clicked1 ? "IV73238FB33" : "••••••••••"}
        <div className="flex ml-[10px] cursor-pointer translate-y-[-2px]">
          <img
            src={
              hover2
                ? "/graphic/connect-website/copy1.svg"
                : "/graphic/connect-website/copy.svg"
            }
            className="w-[12px]"
            alt=""
          />
          <p
            style={{
              color: hover2 ? "#0A0A18" : "#85858C",
            }}
            className="text-[#85858C] ml-[1px]"
          >
            Copy
          </p>
        </div>
      </div>
      <div className="w-[15%] font-medium text-[#0a0a187b] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]">
        <Status i={status} />
      </div>
      <div className="w-[13%] flex  items-center justify-center font-medium text-[#0a0a187b] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]">
        <img
          src="/graphic/status/trash.svg"
          className="w-[15px] hover:opacity-70 cursor-pointer h-[15px]"
          alt=""
        />
      </div>
    </div>
  );
};

const Table = () => {
  const data = [
    {
      name: "TxtCart",
      url: "http://txtcartapp.com/",
      id: "PHJDtTfisMlMaLY...",
      secret: "••••••••••••••••••",
      status: 1,
    },
    {
      name: "Appstack",
      url: "http://appstack.io/",
      id: "PHJDtTfisMlMaLY...",
      secret: "••••••••••••••••••",
      status: 1,
    },
    {
      name: "Apple",
      url: "http://apple.com/",
      id: "PHJDtTfisMlMaLY...",
      secret: "••••••••••••••••••",
      status: 2,
    },
    {
      name: "KBM",
      url: "http://kylebigleymotorsports.com/",
      id: "PHJDtTfisMlMaLY...",
      secret: "••••••••••••••••••",
      status: 1,
    },
    {
      name: "Something",
      url: "http://somethinggroup.com/",
      id: "PHJDtTfisMlMaLY...",
      secret: "••••••••••••••••••",
      status: 3,
    },
  ];

  return (
    <div className="w-[100%] mt-[15px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool">
      <div className="mobile:w-[900px]  laptop:min-w-[900px] laptop:w-[100%]">
        <TableHeader />
        {data.map((item, i) => {
          return (
            <TableItem
              key={i}
              name={item.name}
              url={item.url}
              id={item.id}
              secret={item.secret}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
};

const ConnectWebsite = ({ setShow }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <>
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
        <div className="w-[100%] h-[50px] shrink-0"></div>
        <div
          style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
          className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] laptop:px-[80px] mobile:px-[10px] desktop:px-[80px]"
        >
          <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
            <div className="w-[100%] pt-[30px]">
              <h1
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[24px] f2 font-bold tracking-wide "
              >
                Connect Website
              </h1>
              {/* <p
              style={{
                color: dark ? "#ffffff74" : "#0a0a187e",
              }}
              className="text-[#0a0a187e] f2 text-[14px] tracking-wide font-medium"
            >
              Lorem ipsum dolor sit amet consectetur
            </p> */}
            </div>
            <div className="w-[100%] mt-[18px] laptop:flex justify-between">
              <div
                style={{
                  backgroundColor: dark ? "#111317" : "#fff",
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="laptop:w-[73%] mobile:w-[100%] pb-[5px] pt-[14px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
              >
                <div className="flex px-[15px] justify-between items-center">
                  {/* <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px] f2 font-bold tracking-wide "
                >
                  Connect Website
                </h1> */}
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] f2 text-[14px] font-medium"
                  >
                    5 Connections
                  </p>
                </div>
                <Table />
              </div>
              <div className="mobile:w-[100%] mobile:mt-[10px] laptop:mt-[0px] laptop:w-[26%] ">
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%]  px-[15px] py-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="desktop:text-[20px] mobile:text-[20px] font-bold tracking-wide "
                  >
                    Add New Website
                  </h1>
                  <div className="w-[100%] mt-[4px]">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className="desktop:text-[14px] mobile:text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                    >
                      Website URL
                    </p>
                    <input
                      style={{
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      type="text"
                      placeholder="e.g. https://mywebsite.com"
                      className="w-[100%] h-[34px] bg-transparent rounded-[4px] border-[1px] border-[#ebebeb] outline-none mt-[5px] desktop:text-[12px] mobile:text-[11px] font-medium px-[10px] "
                    />
                  </div>
                  <div className="w-[100%] mt-[8px]">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className="text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                    >
                      Website Name
                    </p>
                    <input
                      style={{
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      type="text"
                      placeholder="e.g. My Website"
                      className="w-[100%] h-[34px] bg-transparent rounded-[4px] border-[1px] border-[#ebebeb] outline-none mt-[5px] desktop:text-[12px] mobile:text-[11px] font-medium px-[10px] "
                    />
                  </div>
                  <Button />
                  {/* <div className="w-[100%] h-[40px] cursor-pointer mt-[18px] hover:bg-[#2FE49C] rounded-[3px] flex items-center justify-center bg-[#38F8AC]">
                  <h1 className="text-[14px] font-medium">Add New Website</h1>
                </div> */}
                </div>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%]  px-[15px] py-[14px] mt-[10px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="desktop:text-[20px] mobile:text-[15px] font-bold tracking-wide "
                  >
                    Download Connectors
                  </h1>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] text-[#0a0a1889] my-[5px] font-medium"
                  >
                    We have a collection of free connectors for different
                    platforms. If we don’t have your platform, you can directly
                    integrate with SDK/API. Follow this button to browse the
                    available connectors.
                  </p>
                  {/* <div
                  onClick={() => {
                    setShow(true);
                  }}
                  className="w-[100%] h-[38px] hover:bg-[#333345] cursor-pointer mt-[12px] rounded-[3px] flex items-center justify-center bg-[#000] text-[#fff]"
                >
                  <h1 className="text-[14px] font-bold">Browse Connectors</h1>
                </div> */}
                  <Button1
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWebsite;
