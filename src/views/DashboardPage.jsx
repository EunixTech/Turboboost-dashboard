import React, { useState, useEffect } from "react";
import useWidth from "../hooks/useWidth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
import { useDispatch, useSelector } from "react-redux";
import { featureAPIHandling } from "../utils/featureAPIHandling";
import { setToggle } from "../slice/statusToggleSlice";
const DashboardPage = () => {
    const [coreVitalsData, updateCoreVitalsData] = useState([]);
    const [performanceData, updatePerformanceData] = useState([]);
    const [coreVitals, setVitsals] = useState(true);
    const [loading, toogleLoading] = useState(true);

    const dark = useSelector((state) => state.home.dark);
    const router = useNavigate();
    const deviceWidth = useWidth();
    const dispatch = useDispatch();

    const googleSpeedAPI = async (storeName = "https://menehariya.netscapelabs.com/") => {
        try {
            toogleLoading(true);
            const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${storeName}&category=best-practices&category=seo&category=performance&category=accessibility`);

            toogleLoading(false);
            const data = response.data;
            const lighthouseData = data.lighthouseResult;

            const metrics = {
                "First Contentful Paint": lighthouseData.audits['first-contentful-paint'].displayValue,
                "Speed Index": lighthouseData.audits['speed-index'].displayValue,
                "Total Blocking Time": lighthouseData.audits['total-blocking-time'].displayValue,
                "Largest Contentful Paint": lighthouseData.audits['largest-contentful-paint'].displayValue,
                "Performance": lighthouseData.categories.performance.score * 100,
                "Accessibility": lighthouseData.categories.accessibility.score * 100,
                "Best Practices": lighthouseData.categories['best-practices'].score * 100,
                "SEO": lighthouseData.categories.seo.score * 100,
            };

            const performanceArr = Object.keys(metrics)
                .filter(key => ["Performance", "Accessibility", "Best Practices", "SEO"].includes(key))
                .map(key => ({ name: key, value: Math.round(metrics[key] * 10) / 10 }));

            const coreVitualsArr = Object.keys(metrics)
                .filter(key => ["First Contentful Paint", "Speed Index", "Total Blocking Time", "Largest Contentful Paint"].includes(key))
                .map(key => ({ name: key, value: metrics[key] }));

            updateCoreVitalsData(coreVitualsArr);
            updatePerformanceData(performanceArr);
        } catch (e) {
            toogleLoading(false);
        }
    };
    const criticalCSSToggleValue = useSelector((state) => state.toggles?.criticalCSS);
    const imageSizeAdaptionToggleValue = useSelector((state) => state.toggles?.imageSizeAdaption);
    const lazyLoadingToggleValue = useSelector((state) => state.toggles?.lazyLoading);

    const handleCriticalCSS = async() =>{
        let endPoint = "";
        if (!criticalCSSToggleValue) endPoint = "/api/shopify/minify-javascript-code";
        else endPoint = "/api/shopify/minify-javascript-code";
        await featureAPIHandling(endPoint);
        dispatch(setToggle({ key: "criticalCSS", value: !criticalCSSToggleValue }));
      }

      const handleImageSizeAdaption = async() =>{
        let endPoint = "";
        if (!lazyLoadingToggleValue) endPoint = "/api/shopify/minify-javascript-code";
        else endPoint = "/api/shopify/minify-javascript-code";
        await featureAPIHandling(endPoint);
        dispatch(setToggle({ key: "imageSizeAdaption", value: !imageSizeAdaptionToggleValue }));
      }
        const handlelazyLoading = async() =>{
        let endPoint = "";
        if (!lazyLoadingToggleValue) endPoint = "/api/shopify/minify-javascript-code";
        else endPoint = "/api/shopify/minify-javascript-code";
        await featureAPIHandling(endPoint);
        dispatch(setToggle({ key: "lazyLoading", value: !lazyLoadingToggleValue }));
      }

    useEffect(() => {
        googleSpeedAPI();
    }, []);

    return (
        <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
            <div className="w-[100%] h-[50px] shrink-0"></div>

            <div className={`${dark ? "backgroundDarkMode" : "background"} w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 overflow-x-hidden laptop:px-[20px]  desktop:px-[80px]`}>

                <div className="w-[100%] pb-[50px] max-w-[1920px] min-h-[100vh]">

                    <div className="w-[100%] pt-[50px] h-[40px] mobile:px-[10px] flex items-center justify-between">

                        <div className="flex items-center mb-[20px] justify-center">
                            <GreetingCard />

                            <img
                                src="/graphic/dashboard/hifi.png"
                                alt="icon"
                                className="w-[18px] ml-[5px] text-[20px] translate-y-[-1px]"
                            />
                        </div>

                        {deviceWidth > 1000 && (
                            <div className="flex items-center justify-center">
                                <div className="w-[18px] translate-y-[0px] h-[18px] justify-center items-center flex rounded-[50%] bg-[#38f8ab3a]">
                                    <div className="w-[10px] h-[10px] rounded-[50%] bg-[#38F8AC]"></div>
                                </div>

                                <h1 className={`${dark ? "headingDarkMode" : "heading"} ml-[10px] f2 laptop:text-[16px] desktop:text-[18px] font-medium`} > TurboBoost Service Status </h1>
                            </div>
                        )}
                    </div>

                    {/* <div className="w-[100%] mobile:px-[10px] mt-[20px] grid desktop:grid-cols-4 laptop:grid-cols-2 gap-y-[10px] gap-x-[24px]">

                        {cacheStatDataArr.map((data, index) => (
                            <CacheStatCard
                                key={index}
                                heading={data.heading}
                                purgeHeading={data.purgeHeading}
                                purgeValue={data.purgeValue}
                                percentageData={data.percentageData}
                                fluctuationType={data.fluctuationType}
                                fluctuationAmount={data.fluctuationAmount}
                            />
                        ))}

                    </div>  */}
                    {/* 
                    <div className="w-[100%] px-[10px]">
                        <div style={{ backgroundColor: dark ? "#111317" : "#fff", borderColor: dark ? "#1F2329" : "#ebebeb" }} className="w-[100%]  px-[15px] py-[15px] min-h-[110px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[10px] mt-[24px]">

                            <h1 className={`${dark ? "headingDarkMode" : "heading"} desktop:text-[20px] f2 laptop:text-[20px] leading-[22px] font-semibold`} >Service Usage Log </h1>
                            <p className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 laptop:text-[14px] desktop:text-[14px] font-medium tracking-wide`} > This Month </p>
                            <DomLineChart className="custom-chart" />

                        </div>
                    </div> */}

                    <div className="w-[100%] mt-[24px] mobile:px-[10px] desktop:grid  desktop:grid-cols-3 laptop:grid-cols-2 gap-x-[24px] gap-y-[10px]">

                        <div className={`${dark ? "divWrapperDarkMode" : "divWrapper"} h-[100%] bg-[#fff] mobile:mb-[10px] laptop:mb-[0] border-[1px] px-[15px] py-[14px] border-[#EBEBEB]  rounded-[8px]`}>
                            <div className="w-[100%]  flex items-center justify-between">

                                <p className={`${dark ? "headingDarkMode" : "heading"} text-[15px] f2 translate-y-[0px] font-semibold tracking-wide`}> Core Vitals </p>
                                {/* 
                                <div className={`${dark ? "divWrapperDarkMode" : "divWrapper"} w-[180px] cursor-pointer  overflow-hidden border-[1px] h-[30px] flex rounded-[7px] items-center justify-center`}>
                                    <div
                                        onClick={() => { setVitsals(true) }}
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
                                        onClick={() => { setVitsals(false) }}
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

                                </div> */}

                            </div>

                            {/* {!coreVitals ? (
                                <>
                                    <p className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[12px]  font-semibold f2`}> Performance </p>

                                    <div className="flex items-center justify-around h-[140px]">
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

                             ) : 
                              */}
                            {
                                loading ?    <div style={{display:'flex'}} className="w-[100%]  w-[100%] grid grid-cols-3 spinner-wrapper  gap-x-[20px] gap-y-[40px] mt-4 flex justify-center">
                                <CircularProgressLoader />
                            </div>: <CoreVitalsReportCard coreVitualData={coreVitalsData} />

                            }



                        </div>


                        <div className={`${dark ? "divWrapperDarkMode" : "divWrapper"} h-[100%] mobile:mb-[10px] laptop:mb-[0]  bg-[#fff] border-[1px] px-[15px] py-[14px] border-[#EBEBEB] rounded-[8px]`}>
                            {/* <div className="w-[100%]  flex items-center justify-between">
                                <p className={`${dark ? "headingDarkMode" : "heading"} text-[15px] f2 translate-y-[0px] font-semibold tracking-wide`} > Total Cache Status </p>

                                <div className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 ${dark ? "text-[#ffffff74]  hover:bg-[#ffffff30]" : "text-[#0a0a187e] hover:bg-[#e1e1e1]"} px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium `}>
                                    View Details
                                </div>
                            </div>

                            <div className="w-[100%] justify-center items-center flex h-[130px] mt-[25px]">

                                <DoughnutChart />
                                <div className="max-w-[250px] w-[50%] ml-auto">

                                    {caccheStatusDataArr.map((data, index) => (
                                        <CacheStatusCard
                                            key={index}
                                            title={data.title}
                                            size={data.size}
                                        />
                                    ))}

                                </div>

                            </div> */}

                            <div className="w-[100%]  flex items-center justify-between">
                                <p className={`${dark ? "headingDarkMode" : "heading"} text-[15px] f2 translate-y-[0px] font-semibold tracking-wide`} > Performance </p>
                                {/* 
                                <div className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 ${dark ? "text-[#ffffff74]  hover:bg-[#ffffff30]" : "text-[#0a0a187e] hover:bg-[#e1e1e1]"} px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium `}>
                                    View Details
                                </div> */}
                            </div>

                            {
                                loading ?
                                    <div style={{display:'flex'}} className="w-[100%]  w-[100%] grid grid-cols-3 spinner-wrapper  gap-x-[20px] gap-y-[40px] mt-4 flex justify-center">
                                        <CircularProgressLoader />
                                    </div>


                                    :
                                    <div className="w-[100%] grid grid-cols-3 gap-x-[20px] gap-y-[40px] mt-4 flex justify-center">

                                        {performanceData.length && performanceData.map((item, index) => (
                                            <div key={index} className="flex items-center justify-center">
                                                <CircularProgressBar
                                                    margin={item?.margin}
                                                    title={item?.name}
                                                    percentage={item?.value}
                                                />
                                            </div>
                                        ))}



                                    </div>
                            }




                        </div>

                        <div className={`${dark ? "divWrapperDarkMode" : "divWrapper"}  relative mobile:mb-[10px] laptop:mb-[0]   bg-[#fff] border-[1px]  py-[14px] border-[#EBEBEB] rounded-[8px]`}>
                            <div className="w-[100%] px-[15px] mb-[10px] flex items-center justify-between">
                                <p className={`${dark ? "headingDarkMode" : "heading"} text-[15px] f2 translate-y-[0px] font-medium tracking-wide`} > Quick Actions </p>

                                <div
                                    onClick={() => { router("/settings") }}
                                    className={`${dark ? "subHeadingDarkMode" : "subHeading"} text-[#0a0a187e] f2 ${dark ? "text-[#ffffff74]  hover:bg-[#ffffff30]" : "text-[#0a0a187e] hover:bg-[#e1e1e1]"}  px-[7px] py-[2px] rounded-sm cursor-pointer text-[13px] translate-y-[1px] font-medium`}
                                >
                                    All Settings
                                </div>

                            </div>

                            <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
            <p style={{ color: dark ? "#fff" : "#000" }}
               className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
            >
                Lazy Loading
            </p>
            <ToggleButton toggleValue={lazyLoadingToggleValue} handlingToggle={handlelazyLoading} />
        </div>

        <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
            <p style={{ color: dark ? "#fff" : "#000" }}
               className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
            >
                Image Size Adaption
            </p>
            <ToggleButton toggleValue={imageSizeAdaptionToggleValue} handlingToggle={handleImageSizeAdaption} />
        </div>

        <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
            <p style={{ color: dark ? "#fff" : "#000" }}
               className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
            >
                Critical CSS
            </p>
            <ToggleButton toggleValue={criticalCSSToggleValue} handlingToggle={handleCriticalCSS} />
        </div>

                            {/* {quickActionDataArr?.length &&
                                quickActionDataArr.map((action, index) => (
                                    <QuickActionCard key={index} text={action} />
                                ))}

                            <HoverGreenButton btnText="Purge all cache " /> */}
                        </div>

                    </div>

                    <div className="w-[100%] h-[50px]"></div>
                </div>

            </div>

        </div>

    );
};

export default DashboardPage;

