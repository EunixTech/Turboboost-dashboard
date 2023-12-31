import React, { useEffect, useState } from "react";
import HeaderItem from "../components/HeaderItem";
import Button2 from "./button/Button2";
import Filter from "./Filter";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCacheStatus } from "../services/cacheStatusSlice"; // Assuming this is the correct import path

const CacheStatus = () => {
  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  const dispatch = useDispatch();
  const cacheStatus = useSelector((state) => state.cacheStatus.cacheStatusData);

  useEffect(() => {
    // Dispatch the fetchCacheStatus action when the component mounts
    dispatch(fetchCacheStatus());
  }, [dispatch]);

  // Destructure cache status data from the Redux store
  const {
    totalCacheStatus,
    totalCacheSize,
    optimizedUrls,
    pendingUrls,
    notOptimizedUrls,
    htmlCache,
    jsCache,
    cssCache,
    fontsCache,
    imagesCache,
  } = cacheStatus;

  const wrapperClassName = dark ? "divWrapperDarkMode" : "divWrapper";

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        className={`w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111  laptop:px-[80px] mobile:px-[10px] desktop:px-[80px] ${wrapperClassName}`}
      >
        <div className="w-[100%] max-w-[1920px]  min-h-[100vh]">
          <div className="flex pt-[40px] justify-between mb-[20px] h-[34px] items-center w-[100%]">
            <h1
              className={`text-[24px] font-bold tracking-wide ${
                dark ? "headingDarkMode" : ""
              }`}
            >
              Cache Status
            </h1>
          </div>

          <div className="w-[100%] mt-[40px]  laptop:flex justify-between ">
            <div
              className={`laptop:w-[49%] mobile:mb-[10px] laptop:mb-[0px] mobile:w-[100%]  px-[15px] py-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px] ${
                dark ? "divWrapperDarkMode" : ""
              }`}
            >
              <h1
                className={`text-[20px] font-bold tracking-wide ${
                  dark ? "headingDarkMode" : ""
                }`}
              >
                Total Cache Status
              </h1>
              <h1
                className={`text-[30px] mt-[10px] font-bold tracking-wide ${
                  dark ? "headingDarkMode" : ""
                }`}
              >
                {totalCacheStatus}
              </h1>
              <div className="w-[100%] h-[4px] mt-[8px] rounded-[10px] overflow-hidden flex">
                <div className="w-[40%] h-[100%] mr-[2px] rounded-[10px] bg-[#38F8AC]" />
                <div className="w-[27%] h-[100%] mr-[2px] rounded-[10px] bg-[#FFCB65]" />
                <div className="w-[33%] h-[100%] rounded-[10px] bg-[#FF465C]" />
              </div>
              <div className="w-[100%] grid mobile:grid-cols-2 laptop:grid-cols-3 mt-[10px] gap-x-[10px] gap-y-[7px]">
                <HeaderItem
                  title="Optimized URLs"
                  sub={optimizedUrls}
                  color="#38F8AC"
                />
                <HeaderItem
                  title="Pending URLs"
                  sub={pendingUrls}
                  color="#FFCB65"
                />
                <HeaderItem
                  title="Not optimized urls"
                  sub={notOptimizedUrls}
                  color="#FF465C"
                />
              </div>
            </div>
            <div
              className={`laptop:w-[49%] mobile:mb-[10px] laptop:mb-[0px] mobile:w-[100%]  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px] ${
                dark ? "divWrapperDarkMode" : ""
              }`}
            >
              <h1
                className={`text-[20px] font-bold tracking-wide ${
                  dark ? "headingDarkMode" : ""
                }`}
              >
                Total Cache Size
              </h1>
              <h1
                className={`text-[30px] mt-[10px] font-bold tracking-wide ${
                  dark ? "headingDarkMode" : ""
                }`}
              >
                {totalCacheSize}
              </h1>
              <div className="w-[100%] h-[4px] mt-[8px] rounded-[10px] overflow-hidden flex">
                <div className="w-[25%] h-[100%] mr-[2px] rounded-[10px] bg-[#391F87]" />
                <div className="w-[23%] h-[100%] mr-[2px] rounded-[10px] bg-[#766695]" />
                <div className="w-[22%] h-[100%] mr-[2px] rounded-[10px] bg-[#9963FE]" />
                <div className="w-[18%] h-[100%] mr-[2px] rounded-[10px] bg-[#CCB0FF]" />
                <div className="w-[10%] h-[100%] bg-[#E9DEFC]" />
              </div>
              <div className="w-[100%] mobile:grid-cols-2 grid laptop:grid-cols-3 mt-[10px] gap-x-[10px] gap-y-[7px]">
                <HeaderItem
                  title="HTML Cache"
                  sub={htmlCache}
                  color="#391F87"
                />
                <HeaderItem title="JS Cache" sub={jsCache} color="#766695" />
                <HeaderItem title="CSS Cache" sub={cssCache} color="#9963FE" />
                <HeaderItem
                  title="Fonts Cache"
                  sub={fontsCache}
                  color="#CCB0FF"
                />
                <HeaderItem
                  title="Images Cache"
                  sub={imagesCache}
                  color="#E9DEFC"
                />
              </div>
            </div>
          </div>
          <div
            className={`w-[100%] mt-[15px] mobile:pb-[10px] laptop:pb-[0]  mb-[30px]  pt-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px] ${
              dark ? "divWrapperDarkMode" : ""
            }`}
          >
            <div className=" px-[15px] flex justify-between items-center">
              <div className="">
                <h1
                  className={`text-[20px] font-bold tracking-wide ${
                    dark ? "headingDarkMode" : ""
                  }`}
                >
                  Search
                </h1>
                <p
                  className={`text-[14px] font-bold tracking-wide  text-[#0a0a187a] ${
                    dark ? "subHeadingDarkMode" : ""
                  }`}
                >
                  1,357 Results
                </p>
              </div>
              <div className="flex items-center">
                {selected.length > 0 && (
                  <p
                    className={`text-[12px] mr-[10px] font-bold tracking-wide text-[#0a0a187a] ${
                      dark ? "subHeadingDarkMode" : ""
                    }`}
                  >
                    1,357 Results
                  </p>
                )}

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
