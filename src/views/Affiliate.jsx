import React, { Suspense, useEffect, useState } from "react";
import HomeLayout from "../layouts/index";
import { useSelector } from "react-redux";

const Table = ({ setSelected1 }) => {
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
      <div className="mobile:w-[800px] laptop:w-[100%]">
        <TableHeader />
        {arr.map((item, i) => {
          return <TableItem key={i} id={i + 1} last={i === arr.length - 1} />;
        })}
      </div>
    </div>
  );
};

const Status = ({ i }) => {
  return (
    <div
      className="h-[19px] flex items-center px-[9.5px] justify-between rounded-[23px] "
      style={{
        backgroundColor:
          i === 1
            ? "#85858c37"
            : i === 2
            ? "#13de8d3e"
            : i === 3
            ? "#0066ff3d"
            : "#754ffe3e",
      }}
    >
      <p
        className="text-[14px] tracking-wide "
        style={{
          color:
            i === 1
              ? "#85858C"
              : i === 2
              ? "#13DE8E"
              : i === 3
              ? "#0066FF"
              : "#754FFE",
        }}
      >
        {i === 1 ? "Free" : i === 2 ? "Starter" : i === 3 ? "Growth" : "Pro"}
      </p>
    </div>
  );
};

const TableItem = ({ last, id }) => {
  const [check, setCheck] = useState(false);

  function random1Or4() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();

    // If the random number is less than 0.5, return 1; otherwise, return 4
    return randomNumber < 0.5 ? 1 : 4;
  }
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        {id}
      </div>

      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        Roblox Racing
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[25%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        05/23/23
      </div>
      <div className="w-[15%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center">
        <Status i={Math.floor(Math.random() * 4) + 1} />
      </div>
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
      }}
      className="w-[100%] px-[10px] flex h-[25px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        #
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Store Name
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[25%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Date Registered
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[15%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        TurboBoost Plan
      </div>
    </div>
  );
};

const HoverDetail = () => {
  const [hover, setHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Track whether the image has loaded

  const handleImageLoad = () => {
    console.log(true);
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };
  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="relative "
    >
      {hover && (
        <div className="absolute shrink-0  w-[150px] left-[-62.1px]  z-50 bottom-[13px]">
          <Suspense fallback={null}>
            <img
              onLoad={handleImageLoad}
              src="/hover.svg"
              className="z-0 w-[145px] h-[88px]"
              alt=""
            />
            {imageLoaded && (
              <div className="w-[100%] h-[100%] px-[10px] py-[14px] font-medium text-[12px] leading-[16px] top-0 left-0 absolute z-10">
                Lorem ipsum dolor sit amet consectetur. Volutpat in justo amet.
              </div>
            )}
          </Suspense>
        </div>
      )}
      <img
        className="w-[20px] cursor-pointer"
        src="/graphic/dashboard/info.svg"
        alt=""
      />
    </div>
  );
};

const Affiliate = () => {
  const dark = useSelector((state) => state.home.dark);

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] mobile:px-[10px]  laptop:px-[20px]  desktop:px-[50px]"
      >
        <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
          <div
            style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
            className="w-[100%] pt-[50px]"
          >
            <h1
              style={{ color: dark ? "#fff" : "#000" }}
              className="text-[18px] font-bold tracking-wide "
            >
              Affiliate
            </h1>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%] px-[15px] bg-[#fff] border-[1px] border-[#ebebeb] rounded-[9px] py-[18px]  mt-[10px]"
            >
              <div
                style={{
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="w-[100%] overflow-hidden h-[34px] border-[1px] border-[#ebebeb] rounded-[5px] flex"
              >
                <input
                  type="text"
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  placeholder="https://turboboost.io/shopify/install?r=UjZLd1pT0Hdam"
                  className="w-[100%] tracking-wide px-[10px] text-[14px] font-medium outline-none h-[100%]"
                />
                <div
                  className={`w-[100px] shrink-0 border-[${
                    dark ? "#1F2329" : "#ebebeb"
                  }] text-[${
                    dark ? "#fff" : "#000"
                  }] hover:bg-[#0a0a18] hover:text-white flex items-center cursor-pointer justify-center text-[14px] font-medium h-[100%] border-l-[1px] border-[#ebebeb]`}
                >
                  <span className="translate-y-[-1px]" >

                  Copy Link
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] font-bold mt-[9px] tracking-wide text-[#0a0a1880]"
              >
                Your commission payout is equal to 20% of the plan value your
                referral chooses when signing up for TurboBoost. TurboBoost
                reserves the right to chance the terms and conditions of the
                affiliate program.
              </p>
            </div>
            <div className="w-[100%] mt-[10px] grid laptop:grid-cols-2  desktop:grid-cols-3 mobile:gap-[10px] laptop:gap-[20px]">
              <div
                style={{
                  backgroundColor: dark ? "#111317" : "#fff",
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className=" px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
              >
                <div className="flex justify-between items-center">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] text-[14px] tracking-wide font-bold"
                  >
                    Current Active Promo
                  </p>
                  {/* <img
                  className="w-[13px]"
                  src="/graphic/dashboard/info.svg"
                  alt=""
                /> */}
                  <HoverDetail />
                </div>
                <div className="flex mt-[6px] items-center">
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[25px] font-medium "
                  >
                    None
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: dark ? "#111317" : "#fff",
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className=" px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
              >
                <div className="flex justify-between items-center">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] text-[14px] tracking-wide font-bold"
                  >
                    Referrals
                  </p>
                  <HoverDetail />
                </div>
                <div className="flex mt-[6px] items-center">
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[25px] font-medium "
                  >
                    17
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: dark ? "#111317" : "#fff",
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className=" px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
              >
                <div className="flex justify-between items-center">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] text-[14px] tracking-wide font-bold"
                  >
                    Earnings
                  </p>
                  <HoverDetail />
                </div>
                <div className="flex mt-[6px] items-center">
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[25px] font-medium "
                  >
                    $351.98
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" w-[100%] pt-[20px] mt-[10px] mb-[10px]  pt -[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[15px] font-bold px-[15px] tracking-wide "
              >
                Referred Stores
              </h1>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
