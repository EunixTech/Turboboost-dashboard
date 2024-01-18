// import React, { useState, useEffect } from "react";
// import useWidth from "../hooks/useWidth";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

import HoverGreenButton from "../components/button/HoverGreenButton";
import CircularProgressBar from "../components/CircularProgressBar";
import CoreVitalsReportCard from "../components/CoreVitalsReportCard";
import GreetingCard from "../components/GreetingCard";
import CacheStatCard from "../components/CacheStatCard";
import QuickActionCard from "../components/QuickActionCard";
import CacheStatusCard from "../components/CacheStatusCard";

import DoughnutChart from "../components/charts/DoughnutChart";
import DomLineChart from "../components/charts/DomLineChart";

import progressBarDataArr from "../static/progressBarData";
import cacheStatDataArr from "../static/cacheStatData";
import quickActionDataArr from "../static/quickActionData";
import caccheStatusDataArr from "../static/caccheStatusData";
import { googleSpeedAPI } from "../utils/googleSpeedAPI";
import CircularProgressLoader from "../components/loader/CircularProgressLoader";
import ToggleButton from "../components/ToggleButton";
import { featureAPIHandling } from "../utils/featureAPIHandling";
import { setToggle } from "../slice/statusToggleSlice";
import getFetchConfig from "../utils/getFetchConfig";
import appURLs from "../appURL";
import TitleManager from "../components/TitleManager";
import toast from "react-hot-toast";
import { GetAxiosConfig,PostAxiosConfig } from "../utils/axiosConfig.js";
import TimeDifferenceFromCurrent from "../utils/timeCalculator.js";
import AnimatedLoader from "../components/loader/AnimatedLoader";
// const DashboardPage = () => {
//   const [coreVitalsData, updateCoreVitalsData] = useState([]);
//   const [performanceData, updatePerformanceData] = useState([]);
//   const [coreVitals, setVitsals] = useState(true);
//   const [loading, toogleLoading] = useState(true);

//   const dark = useSelector((state) => state.home.dark);
//   const router = useNavigate();
//   const deviceWidth = useWidth();
//   const dispatch = useDispatch();

//   const fetchConfig = getFetchConfig();
//   const appURL = appURLs();

//   const googleSpeedAPI = async (storeName = "") => {
//     console.log(storeName);
//     try {
//       toogleLoading(true);
//       const response = await axios.get(
//         `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${storeName}&category=best-practices&category=seo&category=performance&category=accessibility`
//       );

//       toogleLoading(false);
//       const data = response.data;
//       const lighthouseData = data.lighthouseResult;

//       const metrics = {
//         "First Contentful Paint":
//           lighthouseData.audits["first-contentful-paint"].displayValue,
//         "Speed Index": lighthouseData.audits["speed-index"].displayValue,
//         "Total Blocking Time":
//           lighthouseData.audits["total-blocking-time"].displayValue,
//         "Largest Contentful Paint":
//           lighthouseData.audits["largest-contentful-paint"].displayValue,
//         Performance: lighthouseData.categories.performance.score * 100,
//         Accessibility: lighthouseData.categories.accessibility.score * 100,
//         "Best Practices":
//           lighthouseData.categories["best-practices"].score * 100,
//         SEO: lighthouseData.categories.seo.score * 100,
//       };

//       const performanceArr = Object.keys(metrics)
//         .filter((key) =>
//           ["Performance", "Accessibility", "Best Practices", "SEO"].includes(
//             key
//           )
//         )
//         .map((key) => ({
//           name: key,
//           value: Math.round(metrics[key] * 10) / 10,
//         }));

//       const coreVitualsArr = Object.keys(metrics)
//         .filter((key) =>
//           [
//             "First Contentful Paint",
//             "Speed Index",
//             "Total Blocking Time",
//             "Largest Contentful Paint",
//           ].includes(key)
//         )
//         .map((key) => ({ name: key, value: metrics[key] }));

//       updateCoreVitalsData(coreVitualsArr);
//       updatePerformanceData(performanceArr);
//     } catch (e) {
//       toogleLoading(false);
//     }
//   };
//   const criticalCSSToggleValue = useSelector(
//     (state) => state.toggles?.criticalCSS
//   );
//   const imageSizeAdaptionToggleValue = useSelector(
//     (state) => state.toggles?.imageSizeAdaption
//   );
//   const lazyLoadingToggleValue = useSelector(
//     (state) => state.toggles?.lazyLoading
//   );

//   const handleCriticalCSS = async () => {
//     let endPoint = "";
//     if (!criticalCSSToggleValue)
//       endPoint = "/api/shopify/minify-javascript-code";
//     else endPoint = "/api/shopify/minify-javascript-code";
//     await featureAPIHandling(endPoint);
//     dispatch(setToggle({ key: "criticalCSS", value: !criticalCSSToggleValue }));
//   };

//   const handleImageSizeAdaption = async () => {
//     let endPoint = "";
//     if (!lazyLoadingToggleValue)
//       endPoint = "/api/shopify/minify-javascript-code";
//     else endPoint = "/api/shopify/minify-javascript-code";
//     await featureAPIHandling(endPoint);
//     dispatch(
//       setToggle({
//         key: "imageSizeAdaption",
//         value: !imageSizeAdaptionToggleValue,
//       })
//     );
//   };
//   const handlelazyLoading = async () => {
//     let endPoint = "";
//     if (!lazyLoadingToggleValue)
//       endPoint = "/api/shopify/minify-javascript-code";
//     else endPoint = "/api/shopify/minify-javascript-code";
//     await featureAPIHandling(endPoint);
//     dispatch(setToggle({ key: "lazyLoading", value: !lazyLoadingToggleValue }));
//   };

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch(
//           `${appURL}/user/user-profile`,
//           fetchConfig
//         );
//         const resJSON = await response.json();

//         if (resJSON?.status === 200) {
//           const user = resJSON?.acccount;
//           const shopName = user?.app_token?.shopify?.shop;
//           const shopURL = `https://${shopName}/`;
//           console.log("shopURL", shopURL);

//           googleSpeedAPI(shopURL);
//         }
//       } catch (error) {
//         console.error("Error fetching user profile data:", error);
//       }
//     };

//     fetchProfileData();
//   }, []);

// return (
//   <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
//     <div className="w-[100%] h-[50px] shrink-0"></div>

//     <div
//       className={`${dark ? "backgroundDarkMode" : "background"
//         } w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 overflow-x-hidden laptop:px-[20px]  desktop:px-[80px]`}
//     >
//       <div className="w-[100%] pb-[50px] max-w-[1920px] min-h-[100vh]">
//         <div className="w-[100%] pt-[50px] h-[40px] mobile:px-[10px] flex items-center justify-between">
//           <div className="flex items-center mb-[20px] justify-center">
//             <GreetingCard />

//             <img
//               src="/graphic/dashboard/hifi.png"
//               alt="icon"
//               className="w-[18px] ml-[5px] text-[20px] translate-y-[-1px]"
//             />
//           </div>

//           {deviceWidth > 1000 && (
//             <div className="flex items-center justify-center">
//               <div className="w-[18px] translate-y-[0px] h-[18px] justify-center items-center flex rounded-[50%] bg-[#38f8ab3a]">
//                 <div className="w-[10px] h-[10px] rounded-[50%] bg-[#38F8AC]"></div>
//               </div>

//               <h1
//                 className={`${dark ? "headingDarkMode" : "heading"
//                   } ml-[10px] f2 laptop:text-[16px] desktop:text-[18px] font-medium`}
//               >
//                 {" "}
//                 TurboBoost Service Status{" "}
//               </h1>
//             </div>
//           )}
//         </div>

//         <div className="w-[100%] mobile:px-[10px] mt-[20px] grid desktop:grid-cols-4 laptop:grid-cols-2 gap-y-[10px] gap-x-[24px]">

//           {cacheStatDataArr.map((data, index) => (
//             <CacheStatCard
//               key={index}
//               heading={data.heading}
//               purgeHeading={data.purgeHeading}
//               purgeValue={data.purgeValue}
//               percentageData={data.percentageData}
//               fluctuationType={data.fluctuationType}
//               fluctuationAmount={data.fluctuationAmount}
//             />
//           ))}

//         </div>

//         <div className="w-[100%] px-[10px]">
//           <div style={{ backgroundColor: dark ? "#111317" : "#fff", borderColor: dark ? "#1F2329" : "#ebebeb" }} className="w-[100%]  px-[15px] py-[15px] min-h-[110px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[10px] mt-[24px]">

//             <h1 className={`${dark ? "headingDarkMode" : "heading"} desktop:text-[20px] f2 laptop:text-[20px] leading-[22px] font-semibold`} >Service Usage Log </h1>
//             <p className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 laptop:text-[14px] desktop:text-[14px] font-medium tracking-wide`} > This Month </p>
//             <DomLineChart className="custom-chart" />

//           </div>
//         </div>

//         <div className="w-[100%] mt-[24px] mobile:px-[10px] desktop:grid  desktop:grid-cols-3 laptop:grid-cols-2 gap-x-[24px] gap-y-[10px]">
//           <div
//             className={`${dark ? "divWrapperDarkMode" : "divWrapper"
//               } h-[100%] bg-[#fff] mobile:mb-[10px] laptop:mb-[0] border-[1px] px-[15px] py-[14px] border-[#EBEBEB]  rounded-[8px]`}
//           >
//             <div className="w-[100%]  flex items-center justify-between">
//               <p
//                 className={`${dark ? "headingDarkMode" : "heading"
//                   } text-[15px] f2 translate-y-[0px] font-semibold tracking-wide`}
//               >
//                 {" "}
//                 Core Vitals{" "}
//               </p>

//               <div className={`${dark ? "divWrapperDarkMode" : "divWrapper"} w-[180px] cursor-pointer  overflow-hidden border-[1px] h-[30px] flex rounded-[7px] items-center justify-center`}>
//                 <div
//                   onClick={() => { setVitsals(true) }}
//                   style={{
//                     ...(coreVitals
//                       ? {
//                         backgroundColor: dark ? "#272b3379" : "#ebebeb8b",
//                         borderColor: dark ? "#1F2329" : "#ebebeb",
//                         color: dark ? "#fff" : "#000",
//                       }
//                       : {
//                         backgroundColor: dark ? "#111317" : "#fff",
//                         color: dark ? "#fff" : "#000",
//                         borderColor: dark ? "#1F2329" : "#ebebeb",
//                       }),
//                   }}
//                   className="w-[50%] h-[100%]  flex items-center justify-center bg-[#ebebeb8b] border-r-[1px] "
//                 >
//                   <p className="text-[12px] f2  font-medium">Core Vitals</p>
//                 </div>

//                 <div
//                   onClick={() => { setVitsals(false) }}
//                   style={{
//                     ...(!coreVitals
//                       ? {
//                         backgroundColor: dark ? "#272b3379" : "#ebebeb8b",
//                         borderColor: dark ? "#1F2329" : "#ebebeb",
//                         color: dark ? "#fff" : "#000",
//                       }
//                       : {
//                         backgroundColor: dark ? "#111317" : "#fff",
//                         color: dark ? "#fff" : "#000",
//                       }),
//                   }}
//                   className="w-[50%] h-[100%] flex items-center justify-center bg-[#fff]"
//                 >
//                   <p className="text-[12px]  font-medium f2">Performance</p>
//                 </div>

//               </div>
//             </div>

//             {!coreVitals ? (
//               <>
//                 <p className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[12px]  font-semibold f2`}> Performance </p>

//                 <div className="flex items-center justify-around h-[140px]">
//                   {progressBarDataArr.length && progressBarDataArr.map((item, index) => (
//                     <CircularProgressBar
//                       key={index}
//                       margin={item?.margin}
//                       title={item?.title}
//                       percentage={item?.percentage}
//                     />
//                   ))}
//                 </div>
//               </>

//             ) : (<CoreVitalsReportCard coreVitualData={coreVitalsData} />)}

//             {/* (
//                 <div
//                   style={{ display: "flex" }}
//                   className="w-[100%]  w-[100%] grid grid-cols-3 spinner-wrapper  gap-x-[20px] gap-y-[40px] mt-4 flex justify-center"
//                 >
//                   <CircularProgressLoader />
//                 </div>
//               ) : ( */}
//             {/* //   <CoreVitalsReportCard coreVitualData={coreVitalsData} />
//               // )} */}
//           </div>

//           <div
//             className={`${dark ? "divWrapperDarkMode" : "divWrapper"
//               } h-[100%] mobile:mb-[10px] laptop:mb-[0]  bg-[#fff] border-[1px] px-[15px] py-[14px] border-[#EBEBEB] rounded-[8px]`}
//           >
//             {/* <div className="w-[100%]  flex items-center justify-between">
//                                 <p className={`${dark ? "headingDarkMode" : "heading"} text-[15px] f2 translate-y-[0px] font-semibold tracking-wide`} > Total Cache Status </p>

//                                 <div className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 ${dark ? "text-[#ffffff74]  hover:bg-[#ffffff30]" : "text-[#0a0a187e] hover:bg-[#e1e1e1]"} px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium `}>
//                                     View Details
//                                 </div>
//                             </div>

//                             <div className="w-[100%] justify-center items-center flex h-[130px] mt-[25px]">

//                                 <DoughnutChart />
//                                 <div className="max-w-[250px] w-[50%] ml-auto">

//                                     {caccheStatusDataArr.map((data, index) => (
//                                         <CacheStatusCard
//                                             key={index}
//                                             title={data.title}
//                                             size={data.size}
//                                         />
//                                     ))}

//                                 </div>

//                             </div> */}

//             <div className="w-[100%]  flex items-center justify-between">
//               <p
//                 className={`${dark ? "headingDarkMode" : "heading"
//                   } text-[15px] f2 translate-y-[0px] font-semibold tracking-wide`}
//               >
//                 {" "}
//                 Performance{" "}
//               </p>
//               {/*
//                                 <div className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 ${dark ? "text-[#ffffff74]  hover:bg-[#ffffff30]" : "text-[#0a0a187e] hover:bg-[#e1e1e1]"} px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium `}>
//                                     View Details
//                                 </div> */}
//             </div>

//             {loading ? (
//               <div
//                 style={{ display: "flex" }}
//                 className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 spinner-wrapper gap-x-4 gap-y-8 mt-4 flex justify-center"
//               >
//                 <CircularProgressLoader />
//               </div>
//             ) : (
//               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4 flex justify-center">
//                 {performanceData.length &&
//                   performanceData.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-center"
//                     >
//                       <CircularProgressBar
//                         margin={item?.margin}
//                         title={item?.name}
//                         percentage={item?.value}
//                       />
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>

//           <div
//             className={`${dark ? "divWrapperDarkMode" : "divWrapper"
//               }  relative mobile:mb-[10px] laptop:mb-[0]   bg-[#fff] border-[1px]  py-[14px] border-[#EBEBEB] rounded-[8px]`}
//           >
//             <div className="w-[100%] px-[15px] mb-[10px] flex items-center justify-between">
//               <p
//                 className={`${dark ? "headingDarkMode" : "heading"
//                   } text-[15px] f2 translate-y-[0px] font-medium tracking-wide`}
//               >
//                 {" "}
//                 Quick Actions{" "}
//               </p>

//               <div
//                 onClick={() => {
//                   router("/settings");
//                 }}
//                 className={`${dark ? "subHeadingDarkMode" : "subHeading"
//                   } text-[#0a0a187e] f2 ${dark
//                     ? "text-[#ffffff74]  hover:bg-[#ffffff30]"
//                     : "text-[#0a0a187e] hover:bg-[#e1e1e1]"
//                   }  px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium`}
//               >
//                 All Settings
//               </div>
//             </div>

//             <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
//               <p
//                 style={{ color: dark ? "#fff" : "#000" }}
//                 className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
//               >
//                 Lazy Loading
//               </p>
//               <ToggleButton
//                 toggleValue={lazyLoadingToggleValue}
//                 handlingToggle={handlelazyLoading}
//               />
//             </div>

//             <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
//               <p
//                 style={{ color: dark ? "#fff" : "#000" }}
//                 className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
//               >
//                 Image Size Adaption
//               </p>
//               <ToggleButton
//                 toggleValue={imageSizeAdaptionToggleValue}
//                 handlingToggle={handleImageSizeAdaption}
//               />
//             </div>

//             <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
//               <p
//                 style={{ color: dark ? "#fff" : "#000" }}
//                 className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
//               >
//                 Critical CSS
//               </p>
//               <ToggleButton
//                 toggleValue={criticalCSSToggleValue}
//                 handlingToggle={handleCriticalCSS}
//               />
//             </div>

//             {/* {quickActionDataArr?.length &&
//                                 quickActionDataArr.map((action, index) => (
//                                     <QuickActionCard key={index} text={action} />
//                                 ))} */}

//             <HoverGreenButton btnText="Purge all cache " />
//           </div>
//         </div>

//         <div className="w-[100%] h-[50px]"></div>
//       </div>
//     </div>
//   </div>
// );

// export default DashboardPage;

import React, { Suspense, useState, useEffect } from "react";
import HomeLayout from "../layouts/index/index";
import Toggle from "../utils/toggle";
import useWidth from "../hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../services/home";
import Chart1 from "../components/charts/chart1";
import DemoPie from "../components/charts/donut";
import MultiLineChart from "../components/charts/chart5";
import CustomDonutChart from "../components/charts/chart5";
import { useNavigate } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import axios from "axios";

const Dashboard = () => {
  const [imageData, updateImageData] = useState({});
  const [handlerData, updateHandlerData] = useState({});
  const [loader, toggleLoader] = useState(false);
  const [coreVitalsData, updateCoreVitalsData] = useState([]);
  const [performanceData, updatePerformanceData] = useState([]);
  const [coreVitals, setVitsals] = useState(true);
  const [loading, toogleLoading] = useState(true);
  const [loadingAPI, toogleLoadingAPI] = useState(true);
  const [handlerDataObj, UpdateHandlerDataObj] = useState(true);
  const w = useWidth();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  const router = useNavigate();

  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const googleSpeedAPI = async (storeName = "") => {
    console.log(storeName);
    try {
      toogleLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://spokeherd.com/&category=best-practices&category=seo&category=performance&category=accessibility`
      );

      toogleLoading(false);
      const data = response.data;
      const lighthouseData = data.lighthouseResult;

      const metrics = {
        "First Contentful Paint":
          lighthouseData.audits["first-contentful-paint"].displayValue,
        "Speed Index": lighthouseData.audits["speed-index"].displayValue,
        "Total Blocking Time":
          lighthouseData.audits["total-blocking-time"].displayValue,
        "Largest Contentful Paint":
          lighthouseData.audits["largest-contentful-paint"].displayValue,
        Performance: lighthouseData.categories.performance.score * 100,
        Accessibility: lighthouseData.categories.accessibility.score * 100,
        "Best Practices":
          lighthouseData.categories["best-practices"].score * 100,
        SEO: lighthouseData.categories.seo.score * 100,
      };

      const performanceArr = Object.keys(metrics)
        .filter((key) =>
          ["Performance", "Accessibility", "Best Practices", "SEO"].includes(
            key
          )
        )
        .map((key) => ({
          name: key,
          value: Math.round(metrics[key] * 10) / 10,
        }));

      const coreVitualsArr = Object.keys(metrics)
        .filter((key) =>
          [
            "First Contentful Paint",
            "Speed Index",
            "Total Blocking Time",
            "Largest Contentful Paint",
          ].includes(key)
        )
        .map((key) => ({ name: key, value: metrics[key] }));

      updateCoreVitalsData(coreVitualsArr);
      updatePerformanceData(performanceArr);
    } catch (e) {
      toogleLoading(false);
    }
  };

  const fetchImageOptimizationData = async () => {
    try {
      toogleLoadingAPI(true)
      const res = await GetAxiosConfig(`api/dashboard/fetch-image-optimization-data`);
      const resJSON = res?.data;
 
      if (resJSON.status === 200) {
        toogleLoadingAPI(false)
        const OptimizationHandlerData = resJSON?.OptimizationHandlerDataToSend;
        const imageDataObj = resJSON?.dataObj;
        updateImageData(imageDataObj);
        updateHandlerData(OptimizationHandlerData)
      } else {
        toogleLoadingAPI(false);
        return toast.error("Please try again");
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

  const criticalCSSToggleValue = useSelector(
    (state) => state.toggles?.criticalCSS
  );
  const imageSizeAdaptionToggleValue = useSelector(
    (state) => state.toggles?.imageSizeAdaption
  );
  const lazyLoadingToggleValue = useSelector(
    (state) => state.toggles?.lazyLoading
  );

  const handleCriticalCSS = async () => {
    toogleLoadingAPI(true)
    let endPoint = "";
    if (!criticalCSSToggleValue)
      endPoint = "api/shopify/minify-javascript-code";
    else endPoint = "api/shopify/minify-javascript-code";
    await featureAPIHandling(endPoint);
    toogleLoadingAPI(false)
    dispatch(setToggle({ key: "criticalCSS", value: !criticalCSSToggleValue }));
  };

  const handleImageSizeAdaption = async () => {
    let endPoint = "";
    if (!lazyLoadingToggleValue)
      endPoint = "api/shopify/minify-javascript-code";
    else endPoint = "api/shopify/minify-javascript-code";
    await featureAPIHandling(endPoint);
    dispatch(
      setToggle({
        key: "imageSizeAdaption",
        value: !imageSizeAdaptionToggleValue,
      })
    );
  };
  const handlelazyLoading = async () => {
    toogleLoadingAPI(true)
    let endPoint = "";
    if (!lazyLoadingToggleValue)
      endPoint = "api/shopify/minify-javascript-code";
    else endPoint = "api/shopify/minify-javascript-code";
    await featureAPIHandling(endPoint);
    toogleLoadingAPI(false)
    dispatch(setToggle({ key: "lazyLoading", value: !lazyLoadingToggleValue }));
  };

  const imageOptimizationValue = useSelector((state) => state.toggles?.imageOptimization);


  const handleImageOptimization = async() =>{
    toggleLoader(true);
    let endPoint = "";
    if (!imageOptimizationValue) endPoint = "api/shopify/image-optimization";
    else endPoint = "api/shopify/restore-image-optimization";
   
    try {
     
      const res = await GetAxiosConfig(endPoint);
      toggleLoader(false);
      const resData = res?.data;
      if(resData?.status === 200){
      dispatch(setToggle({ key: "imageOptimization", value: !imageOptimizationValue }));
      fetchImageOptimizationData();
        return toast.success(resData?.message);
      } else {
        toggleLoader(false);
        return toast.error("Please try again");
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

  const handlePurgeAll = async() =>{
    toggleLoader(true);
    dispatch(setToggle({ key: "lazyLoading", value: true }));
    dispatch(setToggle({ key: "criticalCSS", value: true }));
    let endPoint = "";
    if (!imageOptimizationValue) endPoint = "api/shopify/image-optimization";
    else endPoint = "api/shopify/restore-image-optimization";
   
    try {
      if(!imageOptimizationValue){

        const res = await GetAxiosConfig(endPoint);
        toggleLoader(false);
        const resData = res?.data;
        if(resData?.status === 200){
        dispatch(setToggle({ key: "imageOptimization", value: true }));
        dispatch(setToggle({ key: "lazyLoading", value: true }));
        dispatch(setToggle({ key: "criticalCSS", value: true }));
        fetchImageOptimizationData();
          return toast.success(resData?.message);
        } else {
          toggleLoader(false);
          return toast.error("Please try again");
        }
      }
     
   
    } catch (error) {
      console.error("Error fetching user profile data:", error);
      toggleLoader(false);
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    
    }
  }


  const urlParams = new URLSearchParams(window.location.search);
  const userToken1 = urlParams.get("userToken");

  const fetchOptimizationHandlerData = async() =>{
    toggleLoader(true);
   try{
      const res = await GetAxiosConfig(`api/dashboard/fetch-optimization-handler-data`);
      toggleLoader(false);
      const resData = res?.data;
      console.log("resDataresDataresDataresDataHandler",resData)
      if(resData?.status === 200){

        return toast.success(resData?.message);
      } else {
        toggleLoader(false);
        return toast.error("Please try again");
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

  useEffect(async() => {
 
    if(!userToken1){
      googleSpeedAPI();
      fetchImageOptimizationData();
      fetchOptimizationHandlerData();
    }
 
  }, [userToken1]);
  console.log("handlerDatahandlerDatahandlerData**********", handlerData)
    

  return loadingAPI ? (
    <AnimatedLoader />
  ) : (
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
                  true ?  <img
                  src="/graphic/warmup/elli.svg"
                  className="mr-[3px] w-[14px]"
                  alt=""
                />:
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
                  % Image Optimized
                </p>
                <Tooltip text="This indicates the percentage of image optimization achieved by TurboBoost." />
              </div>
              <div className="flex mt-[6px] items-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="laptop:text-[25px] f2 desktop:text-[25px]  font-bold "
                >
                  {imageData?.percentageImageOptimize}%
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
                   {imageData?.lastPurge ? new Date(imageData?.lastPurge).toLocaleDateString("en-US") : ""}
                </p>
              </div>: ``

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
                  # Images Optimized
                </p>
                <Tooltip text="This indicates the number of image optimization achieved by TurboBoost." />
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
                <Tooltip text="This information reflects the last time optimization was performed by TurboBoost." />
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
          <div className="w-[100%] mt-[24px] mobile:px-[10px] desktop:flex  desktop:grid-cols-3 laptop:grid-cols-2 gap-x-[24px] gap-y-[10px] flex h-[250px] mobile-cols">
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" h-[100%] bg-[#fff] mobile:mb-[10px] laptop:mb-[0] border-[1px] px-[15px] py-[14px] border-[#EBEBEB]  rounded-[8px] flex flex-wrap justify-between w-[450px]"
            >
              <div className="w-full flex flex-wrap justify-between ">
                <p
                  style={{ color: dark ? "#fff" : "#0A0A18" }}
                  className="text-[17px] f2 translate-y-[0px] font-semibold tracking-wide "
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
                  {loading ? (
                    <div
                      style={{ display: "flex" }}
                      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 spinner-wrapper gap-x-4 gap-y-8 mt-4 flex justify-center"
                    >
                      <CircularProgressLoader />
                    </div>
                  ) : (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4 flex justify-center">
                      {performanceData?.length &&
                        performanceData.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center"
                          >
                            <CircularProgressBar
                              margin={item?.margin}
                              title={item?.name}
                              percentage={item?.value}
                            />
                          </div>
                        ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {loading ? (
                    <div
                      style={{ display: "flex" }}
                      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 spinner-wrapper gap-x-4 gap-y-8 mt-4 flex justify-center"
                    >
                      <CircularProgressLoader />
                    </div>
                  ) : (
                    <div className="flex items-center  justify-around h-[140px]">
                      <CoreVitalsReportCard coreVitualData={coreVitalsData} />
                    </div>
                  )}
                </>
              )}
            </div>

            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
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
                {/* <div className="h-[100%] w-[110px] flex items-center justify-center relative mr-[10px]">
                  <img
                    src={
                      dark
                        ? "/graphic/dashboard/circle-d.svg"
                        : "/graphic/dashboard/circle.svg"
                    }
                    className="h-[100%] w-[100%] left-0 top-0  absolute z-10"
                    alt=""
                  />
                  <p
                    style={{ color: dark ? "#fff" : "#000" }}
                    className=" font-medium f2"
                  >
                    335
                  </p>
                </div> */}
                {/* <DemoPie /> */}
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
                  Image Size Adaption
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
                  Critical CSS
                </p>
                <ToggleButton
                  toggleValue={criticalCSSToggleValue}
                  handlingToggle={handleCriticalCSS}
                />
              </div>

              {/* {quickActionDataArr?.length &&
                                quickActionDataArr.map((action, index) => (
                                    <QuickActionCard key={index} text={action} />
                                ))} */}

              <HoverGreenButton handlePurgeAll={handlePurgeAll} btnText="Purge all cache " />
            </div>
          </div>
          <div className="w-[100%] h-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
