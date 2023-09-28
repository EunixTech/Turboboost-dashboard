import React, { useEffect, useState } from "react";
import HeaderItem from "../components/HeaderItem";
import Button2 from "./button/Button2";
import Filter from "./Filter";
import Table from "./Table";
import { useSelector } from "react-redux";
import cacheStatusStore from "../views/CacheStatusStore";

const CacheStatus = () => {
    const [selected, setSelected] = useState([]);
    const dark = useSelector((state) => state.home.dark);

    useEffect(() => {
      // Fetch cache status data when the component mounts
      cacheStatusStore.fetchCacheStatus();
    }, []);

    const {
      totalCacheStatus,
      totalCacheSize,
      // optimizedUrls,
      // pendingUrls,
      // notOptimizedUrls,
      // htmlCache,
      // jsCache,
      // cssCache,
      // fontsCache,
      // imagesCache,
    } = cacheStatusStore.cacheStatusData;


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
                  {totalCacheStatus}
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
