
import HoverGreenButton from "../components/button/HoverGreenButton";
import CircularProgressBar from "../components/CircularProgressBar";
import GreetingCard from "../components/GreetingCard";
import ToggleButton from "../components/ToggleButton";
import { featureAPIHandling } from "../utils/featureAPIHandling";
import { setToggle } from "../slice/statusToggleSlice";
import TitleManager from "../components/TitleManager";
import toast from "react-hot-toast";
import { GetAxiosConfig } from "../utils/axiosConfig.js";
import TimeDifferenceFromCurrent from "../utils/timeCalculator.js";
import AnimatedLoader from "../components/loader/AnimatedLoader";

import React, { useState, useEffect } from "react";
import PercentageLoader from "../components/loader/percentageLoader.jsx";
import useWidth from "../hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import Chart1 from "../components/charts/chart1";
import CustomDonutChart from "../components/charts/chart5";
import { useNavigate } from "react-router-dom";
import Tooltip from "../components/Tooltip";

const GooglePageScore = ({ coreVitalsData, performanceData }) => {

  const dark = useSelector((state) => state.home.dark);
  const [coreVitals, setVitsals] = useState(true);

  return (
    <div
      style={{
        backgroundColor: dark ? "#111317" : "#fff",
        borderColor: dark ? "#1F2329" : "#ebebeb",
        height: "fit-content",
        minHeight: "210px"
      }}
      className=" h-[100%] bg-[#fff] mobile:mb-[10px] laptop:mb-[0] border-[1px] px-[25px] pt-[10px] border-[#EBEBEB]  rounded-[8px]"
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
            onClick={() => {
              setVitsals(true);
            }}
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
            onClick={() => {
              setVitsals(false);
            }}
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
          <div className="flex items-center gap-[10px] justify-around h-[126px]">
            <CircularProgressBar
              mr="0"
              title="Performence"
              percentage={coreVitalsData?.performence}
            />
            <CircularProgressBar
              mr="0"
              title="Accessibility"
              percentage={coreVitalsData?.accessibility}
            />
            <CircularProgressBar
              mr="0"
              title="Best Practices"
              percentage={coreVitalsData?.best_practices}
            />
            <CircularProgressBar title="SEO" percentage={coreVitalsData?.seo} />
          </div>
        </>
      ) : (
        <div style={{ marginBottom: "-40px" }} className="w-[100%] mt-[20px]">
          <div style={{ flexWrap: "nowrap" }} className="flex  justify-around ">
            <div className="w-[150px]">
              <p
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[12px] f2 font-medium"
              >
                First Contentful Paint
              </p>
              <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]">
                {performanceData?.first_contentful_paint}
              </p>
            </div>
            <div className="w-[150px]">
              <p
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[12px] f2 font-medium"
              >
                Speed Index
              </p>
              <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]">
                {performanceData?.speed_index}
              </p>
            </div>
          </div>
          <div style={{ flexWrap: "nowrap" }} className="flex mt-[5%] justify-around ">
            <div className="w-[150px]">
              <p
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[12px] f2 font-medium"
              >
                Total Blocking Time
              </p>
              <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]">
                {performanceData?.total_blocking_time}
              </p>
            </div>
            <div className="w-[150px]">
              <p
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[12px] f2 font-medium"
              >
                Largest Contentful Paint
              </p>
              <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]">
                {performanceData?.largest_contentful_paint}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const Dashboard = () => {
  const [imageData, updateImageData] = useState({});
  const [handlerData, updateHandlerData] = useState({});
  const [coreVitalsData, updateCoreVitalsData] = useState({});
  const [performanceData, updatePerformanceData] = useState({});
  const [loading, toogleLoading] = useState(true);
  const [loadingAPI, toogleLoadingAPI] = useState(true);
  const [loader, toggleLoader] = useState(false);
  const [d, dd] = useState(0);
  const w = useWidth();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  const router = useNavigate();

  // const googleSpeedAPI = async (storeName = "") => {
  //   console.log(storeName);
  //   try {
  //     toogleLoading(true);
  //     const response = await axios.get(
  //       `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://spokeherd.com/&category=best-practices&category=seo&category=performance&category=accessibility`
  //     );

  //     toogleLoading(false);
  //     const data = response.data;
  //     const lighthouseData = data.lighthouseResult;

  //     const metrics = {
  //       "First Contentful Paint":
  //         lighthouseData.audits["first-contentful-paint"].displayValue,
  //       "Speed Index": lighthouseData.audits["speed-index"].displayValue,
  //       "Total Blocking Time":
  //         lighthouseData.audits["total-blocking-time"].displayValue,
  //       "Largest Contentful Paint":
  //         lighthouseData.audits["largest-contentful-paint"].displayValue,
  //       Performance: lighthouseData.categories.performance.score * 100,
  //       Accessibility: lighthouseData.categories.accessibility.score * 100,
  //       "Best Practices":
  //         lighthouseData.categories["best-practices"].score * 100,
  //       SEO: lighthouseData.categories.seo.score * 100,
  //     };

  //     const performanceArr = Object.keys(metrics)
  //       .filter((key) =>
  //         ["Performance", "Accessibility", "Best Practices", "SEO"].includes(
  //           key
  //         )
  //       )
  //       .map((key) => ({
  //         name: key,
  //         value: Math.round(metrics[key] * 10) / 10,
  //       }));

  //     const coreVitualsArr = Object.keys(metrics)
  //       .filter((key) =>
  //         [
  //           "First Contentful Paint",
  //           "Speed Index",
  //           "Total Blocking Time",
  //           "Largest Contentful Paint",
  //         ].includes(key)
  //       )
  //       .map((key) => ({ name: key, value: metrics[key] }));

  //     updateCoreVitalsData(coreVitualsArr);
  //     updatePerformanceData(performanceArr);
  //   } catch (e) {
  //     toogleLoading(false);
  //   }
  // };




  const fetchPageSpeedInsight = async () => {
    try {
      toogleLoadingAPI(true)
      const res = await GetAxiosConfig(`api/dashboard/page-speed-insight-data`);
      const resJSON = res?.data;
      dd(100)
      if (resJSON.status === 200) {

        const pageSpeedInsightData = resJSON?.data?.updated;
        const coreVitualsDataObj = pageSpeedInsightData?.performance;
        const performaceDataObj = pageSpeedInsightData?.core_vitals;
        dispatch(setToggle({ key: "dashboardOptimization", value: true }));
        toogleLoadingAPI(false)
        updateCoreVitalsData(coreVitualsDataObj);
        updatePerformanceData(performaceDataObj);

      } else if (resJSON.status === 403) {

        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');

      } else {
        toogleLoadingAPI(false);
        // return toast.error("Please try again");
      }
    } catch (error) {
      toogleLoadingAPI(false);
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
      console.error("Error fetching user profile data:", error);
    }
  };

  const fetchImageOptimizationData = async () => {
    try {
      toogleLoading(true)
      const res = await GetAxiosConfig(`api/dashboard/fetch-image-optimization-data`);
      const resJSON = res?.data;

      if (resJSON.status === 200) {

        const OptimizationHandlerData = resJSON?.OptimizationHandlerDataToSend;
        const imageDataObj = resJSON?.dataObj;
        updateImageData(imageDataObj);
        updateHandlerData(OptimizationHandlerData);
        toogleLoading(false)
      } else if (resJSON.status === 403) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');

      } 
    } catch (error) {
      // toogleLoadingAPI(false);
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
      console.error("Error fetching user profile data:", error);
    }
  };

  const lazyLoadingToggleValue = useSelector((state) => state.toggles?.lazyLoading);
  const dashboardOptimizationValue = useSelector((state) => state.toggles?.dashboardOptimization);
  const imageOptimizationValue = useSelector((state) => state.toggles?.imageOptimization);

  const handlelazyLoading = async () => {
    toast.dismiss();
    let endPoint = "";
    if (!lazyLoadingToggleValue) endPoint = "api/shopify/adding-image-lazy-loading";
    else endPoint = "api/shopify/restore-adding-image-lazy-loading";
    const data = await featureAPIHandling(endPoint);
    if (data.status === 200) {
      dispatch(setToggle({ key: "lazyLoading", value: !lazyLoadingToggleValue }));
      return toast.success(data.message);
    }

  };

  const handleImageOptimization = async () => {
    toast.dismiss();
    try {

      let endPoint = "";
      if (!imageOptimizationValue) endPoint = "api/shopify/image-optimization";
      else endPoint = "api/shopify/restore-image-optimization";

      toggleLoader(true);
      const res = await GetAxiosConfig(endPoint);

      const resData = res?.data;
      if (resData?.status === 200) {
        dispatch(setToggle({ key: "imageOptimization", value: !imageOptimizationValue }));
        fetchImageOptimizationData();
        toggleLoader(false);
        // return toast.success(resData?.message);
      } else {
        toggleLoader(false);
        // return toast.error("Please try again");
      }
    } catch (error) {
      toggleLoader(false);
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
      console.error("Error fetching user profile data:", error);
    }
  }

  const minifyHTMLToggleValue = useSelector((state) => state.toggles?.minifyHTML);
  const handleMinifyHTML = async () => {
    let endPoint = "";
    if (!minifyHTMLToggleValue) endPoint = "api/shopify/minify-html";
    else endPoint = "api/shopify/restore-minify-html";
    const data = await featureAPIHandling(endPoint);
    if (data.status === 200) {
      dispatch(setToggle({ key: "minifyHTML", value: !minifyHTMLToggleValue }));
      return toast.success(data.message);
    } else return toast.error(data?.message)


  }

  const handlePurgeAll = async () => {

    if (!imageOptimizationValue && !lazyLoadingToggleValue && !minifyHTMLToggleValue) {
      handleImageOptimization();
      handlelazyLoading();
      handleMinifyHTML();
    } else if (!imageOptimizationValue && !lazyLoadingToggleValue) {
      handleImageOptimization();
      handlelazyLoading();
    } else if (!imageOptimizationValue && !minifyHTMLToggleValue) {
      handleImageOptimization();
      handleMinifyHTML();
    } else if (!lazyLoadingToggleValue && !minifyHTMLToggleValue) {
      handlelazyLoading();
      handleMinifyHTML();
    } else if (!imageOptimizationValue) {
      handleImageOptimization();
    } else if (!lazyLoadingToggleValue) {
      handlelazyLoading();
    } else if (!minifyHTMLToggleValue) {
      handleMinifyHTML();
    }

  }

  const urlParams = new URLSearchParams(window.location.search);
  const userToken1 = urlParams.get("userToken");

  const fetchData = () => {
    if (!userToken1) {
      if (!imageOptimizationValue && !Boolean(localStorage.getItem('imageOptimizationAPII'))) {
        handleImageOptimization();
        localStorage.setItem('imageOptimizationAPII', true);
      }
      fetchPageSpeedInsight();
      fetchImageOptimizationData();
    }
  };

  useEffect(() => {
    fetchData();
  }, [userToken1]);

  return (loadingAPI || loader || loading) ? 
    (() => {
      if (userToken1)  {
        return ""
      } else if (!dashboardOptimizationValue)  {
        return (
          <PercentageLoader percentage1={d} />
        )
      } else if (dashboardOptimizationValue) {
        return (
          < AnimatedLoader/>
        )
      } else if (!dashboardOptimizationValue && !userToken1) {
        return (
          <PercentageLoader percentage1={d} />
        )
      } 
      else if (!userToken1)  {
        return (
          < AnimatedLoader/>
        )
      }
    })()

   : (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <TitleManager title="Dashboard" conicalURL="dashboard" />

      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 overflow-x-hidden laptop:px-[20px]  desktop:px-[80px]"
      >
        <div className="w-[100%] pb-[50px] max-w-[1920px] min-h-[100vh]">
          <div className="w-[100%] pt-[50px] h-[40px] mobile:px-[10px] flex items-center justify-between">
            <div className="flex items-center mb-[20px] justify-center">
              <GreetingCard />
              <img
                src="/graphic/dashboard/hifi.png"
                alt=""
                className="w-[18px] ml-[5px] text-[20px] translate-y-[-1px]"
              />
            </div>

            {w > 1000 && (
              <div className="flex items-center justify-center">
                {
                  false ? <img
                    src="/graphic/warmup/elli.svg"
                    className="mr-[3px] w-[14px]"
                    alt=""
                  /> :
                    <div className="w-[18px] translate-y-[0px] h-[18px] justify-center items-center flex rounded-[50%] bg-[#38f8ab3a]">
                      <div className="w-[10px] h-[10px] rounded-[50%] bg-[#38F8AC]"></div>
                    </div>
                }

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
                  Total Images
                </p>
                <Tooltip text="This indicates the percentage of image optimization achieved" />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[25px] f2 desktop:text-[25px]  font-bold "
                >
                  {imageData?.totalImages}
                </p>
                {/* <div className=" flex bg-[#18df902e] px-[13px] py-[2px] rounded-[23px] ml-[10px]">
                  <img
                    src="/graphic/dashboard/trend.svg"
                    className="mr-[5px] translate-y-[1px] w-[14px]"
                    alt=""
                  />
                  <p className="text-[#18DF90] f2 text-[13px] font-bold tracking-wide ">
                    3%
                  </p>
                </div> */}
              </div>
              {
                imageData?.lastPurge ?
                  <div className="flex">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className=" mr-[2px] f2 text-[14px] tracking-wide font-bold"
                    >
                      last purge:
                    </p>
                    <p
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[#000] f2 text-[14px] tracking-wide font-bold"
                    >
                      {(imageData && imageData?.lastPurge) ? new Date(imageData?.lastPurge).toLocaleDateString("en-US") : ""}
                    </p>
                  </div> : ``

              }

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
                  No of Images Optimized
                </p>
                <Tooltip text="This indicates the number of image optimization achieved" />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                  {imageData?.totalOptimizeImage}
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
                <Tooltip text="This indicates the bounce rate of your website." />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                  0%
                </p>
                {/* <div className=" flex bg-[#18df902e] f2 px-[13px] py-[3px] rounded-[23px] ml-[10px]">
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
                </div> */}
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
                  0%
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
                <Tooltip text="This information reflects the last time optimization was performed" />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                  {TimeDifferenceFromCurrent(handlerData?.lastPurge)}
                </p>
                {/* <div className=" flex bg-[#ff004c2d] px-[13px] py-[3px] rounded-[23px] ml-[10px]">
                  <img
                    src="/graphic/dashboard/trend-red-down.svg"
                    className="mr-[5px] translate-y-[1px] w-[14px]"
                    alt=""
                  />
                  <p className="text-[#ff004c] f2 text-[13px] font-medium tracking-wide ">
                    3%
                  </p>
                </div> */}
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

                  {handlerData?.previousPurge ? new Date(handlerData?.previousPurge).toLocaleDateString("en-US") : ""}

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
            <GooglePageScore coreVitalsData={coreVitalsData} performanceData={performanceData} />
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
                  Total Image Optimization
                </p>
                {/* {dark ? (
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
                )} */}
              </div>
              <div className="w-[100%] justify-center items-center flex h-[130px] mt-[20px]">

                <CustomDonutChart imageData={imageData} />
                <div className="max-w-[250px] w-[50%] ml-auto">
                  <div className="flex items-center mb-[4px] justify-between">
                    <div className="flex items-center">

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
                        No of Image Optimize
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] f2 font-bold translate-y-[-2px]"
                    >
                      {imageData?.totalOptimizeImage}
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
                      className="text-[14px] font-bold translate-y-[-2px]"
                    >
                       {imageData?.totalImages-imageData?.totalOptimizeImage}
                    </div>
                  </div>
                  <div className="flex items-center mb-[4px] justify-between">
                    <div className="flex  items-center">
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
                        Not/error'd
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] f2 font-bold translate-y-[-2px]"
                    >
                      0
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
              className=" relative mobile:mb-[10px] laptop:mb-[0]   bg-[#fff] border-[1px]  pt-[14px] pb-[6px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="w-[100%] px-[15px] mb-[10px] flex items-center justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[15px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Quick Links
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
                  Lazy Loading
                </p>
                <ToggleButton
                  toggleValue={lazyLoadingToggleValue}
                  handlingToggle={handlelazyLoading}
                />
              </div>
              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Image Optimization
                </p>
                <ToggleButton
                  toggleValue={imageOptimizationValue}
                  handlingToggle={handleImageOptimization}
                />
              </div>
              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Minify Html
                </p>
                <ToggleButton
                  toggleValue={minifyHTMLToggleValue}
                  handlingToggle={handleMinifyHTML}
                />
              </div>
              <HoverGreenButton handlePurgeAll={handlePurgeAll} btnText="Purge all cache " />
            </div>
          </div>
          {/* <div style={{height:"fit-content"}} className="w-[100%] mt-[24px] mobile:px-[10px] desktop:flex  desktop:grid-cols-3 laptop:grid-cols-2 gap-x-[24px] gap-y-[10px] flex h-[250px] mobile-cols">
 
             <GooglePageScore coreVitalsData={coreVitalsData} performanceData={performanceData} />
           
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
                paddingBottom:"30px"
              }}
              className=" h-[100%] mobile:mb-[10px] laptop:mb-[0]  bg-[#fff] border-[1px] px-[15px] py-[14px] border-[#EBEBEB] rounded-[8px] w-[400px]"
            >
              <div className="w-[100%]  flex items-center justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#0A0A18" }}
                  className="text-[17px] f2 translate-y-[0px] font-semibold tracking-wide"
                >
                  Image Optimizations
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
          
                <CustomDonutChart imageData={imageData} />
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
                        Total No Images
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] f2 font-bold translate-y-[-2px]"
                    >
                      {imageData?.totalImages}
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
                        No of Image Optimize
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] f2 font-bold translate-y-[-2px]"
                    >
                      {imageData?.totalOptimizeImage}
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
                        Pending Optimizations
                      </p>
                    </div>
                    <div
                      style={{ color: dark ? "#fff" : "#000" }}
                      className="text-[14px] font-bold translate-y-[-2px]"
                    >
                      {imageData?.totalOriginImage}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
            style={{height:"fit-content"}}
              className={`${
                dark ? "divWrapperDarkMode" : "divWrapper"
              }  relative mobile:mb-[10px] laptop:mb-[0]   bg-[#fff] border-[1px]  py-[14px] border-[#EBEBEB] rounded-[8px]`}
            >
              <div className="w-[100%] px-[15px] mb-[10px] flex items-center justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#0A0A18" }}
                  className="text-[17px] f2 translate-y-[0px] font-semibold tracking-wide"
                >
                  Quick Links
                </p>

                <div
                  onClick={() => {
                    router("/settings");
                  }}
                  className={`${
                    dark ? "subHeadingDarkMode" : "subHeading"
                  } text-[#0a0a187e] f2 ${
                    dark
                      ? "text-[#ffffff74]  hover:bg-[#ffffff30]"
                      : "text-[#0a0a187e] hover:bg-[#e1e1e1]"
                  }  px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium`}
                >
                  All Settings
                </div>
              </div>

              <div className="flex px-[15px] w-[100%] items-center mt-[20px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Lazy Loading
                </p>
                <ToggleButton
                  toggleValue={lazyLoadingToggleValue}
                  handlingToggle={handlelazyLoading}
                />
              </div>

              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Image Optimization
                </p>
                <ToggleButton
                  toggleValue={imageOptimizationValue}
                  handlingToggle={handleImageOptimization}
                />
              </div>

              <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
                <p
                  style={{ color: dark ? "#fff" : "#000" }}
                  className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
                >
                  Minify Html
                </p>
                <ToggleButton
                  toggleValue={minifyHTMLToggleValue}
                  handlingToggle={handleMinifyHTML}
                />
              </div>

              <HoverGreenButton handlePurgeAll={handlePurgeAll} btnText="Purge all cache " />
            </div>
          </div> */}
          <div className="w-[100%] h-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
