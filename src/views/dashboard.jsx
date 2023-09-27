import React, { Suspense, useState } from "react";
import Toggle from "../utils/toggle";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import Chart1 from "../components/charts/chart1";
import CustomDonutChart from "../components/charts/chart5";
import { useNavigate } from "react-router-dom";
import HoverGreenButton from "../components/button/HoverGreenButton";
import CircularProgressBar from "../components/CircularProgressBar";
import progressBarDataArr from "../static/progressBarData";
import CoreVitalsReportCard from "../components/CoreVitalsReportCard";



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

const Dashboard = () => {
  const w = useWidth();
  const [coreVitals, setVitsals] = useState(true);

  const dark = useSelector((state) => state.home.dark);
  const router = useNavigate();

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 overflow-x-hidden laptop:px-[20px]  desktop:px-[80px]"
      >
        <div className="w-[100%] pb-[50px] max-w-[1920px] min-h-[100vh]">
          <div className="w-[100%] pt-[50px] h-[40px] mobile:px-[10px] flex items-center justify-between">
            <div className="flex items-center mb-[20px] justify-center">
              <h1
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[18px] f2 font-medium"
              >
                Good evening, Kyle!
              </h1>
              <img
                src="/graphic/dashboard/hifi.png"
                alt=""
                className="w-[18px] ml-[5px] text-[20px] translate-y-[-1px]"
              />
            </div>
            {w > 1000 && (
              <div className="flex items-center justify-center">
                <div className="w-[18px] translate-y-[0px] h-[18px] justify-center items-center flex rounded-[50%] bg-[#38f8ab3a]">
                  <div className="w-[10px] h-[10px] rounded-[50%] bg-[#38F8AC]"></div>
                </div>
                <h1
                  style={{ color: dark ? "#fff" : "#000" }}
                  className=" ml-[10px] f2 laptop:text-[16px] desktop:text-[18px] font-medium"
                >
                  TurboBoost Service Status
                </h1>
              </div>
            )}
          </div>
          <div className="w-[100%] mobile:px-[10px] mt-[20px] grid desktop:grid-cols-4 laptop:grid-cols-2 gap-y-[10px] gap-x-[24px]">
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] rounded-[8px]"
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[16px] f2 tracking-wide font-bold"
                >
                  Cache Hit Ratio
                </p>
                <HoverDetail />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[25px] f2 desktop:text-[25px]  font-bold "
                >
                  96%
                </p>
                <div className=" flex bg-[#18df902e] px-[13px] py-[2px] rounded-[23px] ml-[10px]">
                  <img
                    src="/graphic/dashboard/trend.svg"
                    className="mr-[5px] translate-y-[1px] w-[14px]"
                    alt=""
                  />
                  <p className="text-[#18DF90] f2 text-[13px] font-bold tracking-wide ">
                    3%
                  </p>
                </div>
              </div>
              <div className="flex">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className=" mr-[2px] f2 text-[14px] tracking-wide font-bold"
                >
                  vs last purge:
                </p>
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[#000] f2 text-[14px] tracking-wide font-bold"
                >
                  89%
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="  px-[15px] py-[14px] h-[100%] border-[1px]  rounded-[8px]"
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[#0a0a187e] f2 text-[16px] tracking-wide font-bold"
                >
                  Cache Size
                </p>
                <HoverDetail />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                  125.93 MB
                </p>
                <div className=" flex bg-[#ff004c2d] px-[13px] py-[3px] rounded-[23px] ml-[10px]">
                  <img
                    src="/graphic/dashboard/trend-red-down.svg"
                    className="mr-[5px] translate-y-[1px] w-[14px]"
                    alt=""
                  />
                  <p className="text-[#ff004c] f2 text-[13px] font-medium tracking-wide ">
                    3%
                  </p>
                </div>
              </div>
              <div className="flex">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[#0a0a187e] f2 mr-[2px] text-[14px] tracking-wide font-bold"
                >
                  vs last purge:
                </p>
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[#000] f2 text-[14px] tracking-wide font-bold"
                >
                  136.71 MB
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] rounded-[8px]"
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[#0a0a187e] f2 text-[16px] tracking-wide font-bold"
                >
                  Bounce Rate
                </p>
                <HoverDetail />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                  17.23%
                </p>
                <div className=" flex bg-[#18df902e] f2 px-[13px] py-[3px] rounded-[23px] ml-[10px]">
                  <img
                    src="/graphic/dashboard/trend.svg"
                    style={{
                      transform: "rotateZ(180deg) rotateY(180deg)",
                    }}
                    className="mr-[5px] translate-y-[1px] w-[14px]"
                    alt=""
                  />
                  <p className="text-[#18DF90] f2 text-[13px] font-medium tracking-wide ">
                    3%
                  </p>
                </div>
              </div>
              <div className="flex">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[#0a0a187e] f2 mr-[2px] text-[14px] tracking-wide font-bold"
                >
                  vs last week:
                </p>
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[#000] f2 text-[14px] tracking-wide font-bold"
                >
                  21.92%
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px]  rounded-[8px]"
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[#0a0a187e] f2 text-[16px] tracking-wide font-bold"
                >
                  Last Purge
                </p>
                <HoverDetail />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                  1 Day Ago
                </p>
                <div className=" flex bg-[#ff004c2d] px-[13px] py-[3px] rounded-[23px] ml-[10px]">
                  <img
                    src="/graphic/dashboard/trend-red-down.svg"
                    className="mr-[5px] translate-y-[1px] w-[14px]"
                    alt=""
                  />
                  <p className="text-[#ff004c] f2 text-[13px] font-medium tracking-wide ">
                    3%
                  </p>
                </div>
              </div>
              <div className="flex">
                <p
                  style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                  }}
                  className="text-[#0a0a187e] f2 mr-[2px] text-[14px] tracking-wide font-bold"
                >
                  previous purge:
                </p>
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[#000] f2 text-[14px] tracking-wide font-bold"
                >
                  4/26/94
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] px-[10px]">
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%]  px-[15px] py-[15px] min-h-[110px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[10px] mt-[24px]"
            >
              <h1
                style={{ color: dark ? "#fff" : "#000" }}
                className="desktop:text-[20px] f2 laptop:text-[20px] leading-[22px] font-semibold"
              >
                Service Usage Log
              </h1>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[#0a0a187e] f2 laptop:text-[14px] desktop:text-[14px] font-medium tracking-wide"
              >
                This Month
              </p>

              <Chart1 className="custom-chart" />
            </div>
          </div>
          <div className="w-[100%] mt-[24px] mobile:px-[10px] desktop:grid  desktop:grid-cols-3 laptop:grid-cols-2 gap-x-[24px] gap-y-[10px]">

          {/* google score card */}

          <div style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className=" h-[100%] bg-[#fff] mobile:mb-[10px] laptop:mb-[0] border-[1px] px-[15px] py-[14px] border-[#EBEBEB]  rounded-[8px]"
        >
            <div className="w-[100%]  flex items-center justify-between">
                <p
                    style={{ color: dark ? "#fff" : "#000" }}
                    className="text-[15px] f2 translate-y-[0px] font-semibold tracking-wide"
                >
                    Google Page Score
                </p>
                <div
                    style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className="w-[180px] cursor-pointer  overflow-hidden border-[1px] h-[30px] flex rounded-[7px] items-center justify-center"
                >
                    <div
                        onClick={() => { setVitsals(true)}}
                        style={{
                            ...(coreVitals
                                ? {
                                    backgroundColor: dark ? "#272b3379" : "#ebebeb8b",
                                    borderColor: dark ? "#1F2329" : "#ebebeb",
                                    color: dark ? "#fff" : "#000",
                                }
                                : {
                                    backgroundColor: dark ? "#111317" : "#fff",
                                    color: dark ? "#fff" : "#000",
                                    borderColor: dark ? "#1F2329" : "#ebebeb",
                                }),
                        }}
                        className="w-[50%] h-[100%]  flex items-center justify-center bg-[#ebebeb8b] border-r-[1px] "
                    >
                        <p className="text-[12px] f2  font-medium">Core Vitals</p>
                    </div>

                    <div
                        onClick={() => { setVitsals(false)}}
                        style={{
                            ...(!coreVitals
                                ? {
                                    backgroundColor: dark ? "#272b3379" : "#ebebeb8b",
                                    borderColor: dark ? "#1F2329" : "#ebebeb",
                                    color: dark ? "#fff" : "#000",
                                }
                                : {
                                    backgroundColor: dark ? "#111317" : "#fff",
                                    color: dark ? "#fff" : "#000",
                                }),
                        }}
                        className="w-[50%] h-[100%] flex items-center justify-center bg-[#fff]"
                    >
                        <p className="text-[12px]  font-medium f2">Performance</p>
                    </div>

                </div>

            </div>

            {!coreVitals ? (
                <>
                    <p
                        style={{
                            color: dark ? "#ffffff74" : "#0a0a187e",
                        }}
                        className="text-[12px]  font-semibold f2"
                    >
                        Performance
                    </p>

                    <div className="flex items-center  justify-around h-[140px]">
                        {progressBarDataArr.length && progressBarDataArr.map((item, index) => (
                            <CircularProgressBar
                                key={index}
                                margin={item?.margin}
                                title={item?.title}
                                percentage={item?.percentage}
                            />
                        ))}

                    </div>
                </>

            ) : (
                <CoreVitalsReportCard />
            )}

        </div>

   {/*end google score card */}


            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" h-[100%] mobile:mb-[10px] laptop:mb-[0]  bg-[#fff] border-[1px] px-[15px] py-[14px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="w-[100%]  flex items-center justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[15px] f2 translate-y-[0px] font-semibold tracking-wide"
                >
                  Total Cache Status
                </p>
                {dark ? (
                  <div
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] text-[#ffffff74] f2 hover:bg-[#ffffff30] px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium "
                  >
                    View Details
                  </div>
                ) : (
                  <div
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] translate-x-[7px] text-[#0a0a187e] f2 hover:bg-[#e1e1e1] px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium "
                  >
                    View Details
                  </div>
                )}
              </div>
              <div className="w-[100%] justify-center items-center flex h-[130px] mt-[25px]">

                <CustomDonutChart />
                <div className="max-w-[250px] w-[50%] ml-auto">
                  <div className="flex items-center mb-[4px] justify-between">
                    <div className="flex  items-center">
                      <img
                        src={
                          dark
                            ? "/graphic/dashboard/elli1-d.svg"
                            : "/graphic/dashboard/elli1.svg"
                        }
                        className="w-[10px] h-[10px]"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#fff" : "#000" }}
                        className="text-[13px] f2 font-medium ml-[5px]"
                      >
                        Optimized URLs
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] f2 font-bold translate-y-[-2px]"
                    >
                      244
                    </div>
                  </div>
                  <div className="flex items-center mb-[4px] justify-between">
                    <div className="flex items-center">
                      <img
                        src={
                          dark
                            ? "/graphic/dashboard/elli2-d.svg"
                            : "/graphic/dashboard/elli2.svg"
                        }
                        className="w-[10px] h-[10px]"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#fff" : "#000" }}
                        className="text-[13px] f2 font-medium ml-[5px]"
                      >
                        Pending Optimizations
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] f2 font-bold translate-y-[-2px]"
                    >
                      72
                    </div>
                  </div>
                  <div className="flex items-center mb-[4px] justify-between">
                    <div className="flex items-center">
                      <img
                        src={
                          dark
                            ? "/graphic/dashboard/elli3-d.svg"
                            : "/graphic/dashboard/elli9.svg"
                        }
                        className="w-[10px] h-[10px]"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#fff" : "#000" }}
                        className="text-[13px] f2 font-medium ml-[5px]"
                      >
                        Not Optimized URLs
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] font-bold translate-y-[-2px]"
                    >
                      19
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" relative mobile:mb-[10px] laptop:mb-[0]   bg-[#fff] border-[1px]  py-[14px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="w-[100%] px-[15px] mb-[10px] flex items-center justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[15px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Quick Actions
                </p>

                {dark ? (
                  <div
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    onClick={() => {
                      router("/settings");
                    }}
                    className="text-[#0a0a187e] f2 text-[#ffffff74] hover:bg-[#ffffff30] px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium "
                  >
                    All Settings
                  </div>
                ) : (
                  <div
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    onClick={() => {
                      router("/settings");
                    }}
                    className="text-[#0a0a187e] f2 text-[#0a0a187e] hover:bg-[#e1e1e1] px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium "
                  >
                    All Settings
                  </div>
                )}
              </div>
              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Cache Warmup
                </p>
                <Toggle />
              </div>
              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Image Optimization
                </p>
                <Toggle />
              </div>
              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Safe Mode
                </p>
                <Toggle />
              </div>
              <HoverGreenButton btnText="Purge all cache " />
            </div>
          </div>
          <div className="w-[100%] h-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
