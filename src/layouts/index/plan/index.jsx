import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useWidth from "../../../hooks/useWidth";
import { billingApi } from "../../../utils/billingApi";
import { planMockData } from "../../../utils/constant";
import AnimatedLoader from "../../../components/loader/AnimatedLoader";
import { GetAxiosConfig } from "../../../utils/axiosConfig.js";
import getFetchConfig from '../../../utils/getFetchConfig';
import standardFetchHandlers from '../../../utils/standardFetchHandlers';
import handleFetchErrors from '../../../utils/handleFetchErrors';
import appURLs from '../../../appURL';
import toast from 'react-hot-toast';
const CurrentPlan = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="absolute top-0 right-0 w-[100px] h-[34px]">
      <img
        src={dark ? "/currr.svg" : "/current.svg"}
        className="absolute z-0 w-[110px] shrink-0"
        alt=""
      />
      <div className="absolute z-10 w-[100%] h-[30px] flex items-center justify-center translate-y-[-5px] translate-x-[2px] font-medium tracking-wide leading-[12px] text-[12px] items-center text-[#0FE38F]">
        Current Plan
      </div>
    </div>
  );
};

const Plan = ({ cancel }) => {

  const [selected, setSelected] = useState(0);
  const [loader, toggleLoader] = useState(false);
  const [plan, setPlan] = useState(2);
  const [currentPlan, updateCurrentPlan] = useState("Starter");
  const [itemData, updateItem] = useState({});
  const dark = useSelector((state) => state.home.dark);
  const w = useWidth();


  const handleBilling = async () => {
    try {
      const planMap = {
        0: "Free",
        1: "Starter",
        2:"Growth",
        3: "Pro"
      };
  
      if(currentPlan === planMap[plan]) return toast.error("Please change plan");
      if (itemData && !Object.keys(itemData).length) return toast.error("Please change plan");
      let response = await billingApi(itemData, selected);

      if (response?.data?.confirmationUrl) {
        console.log(response?.data?.confirmationUrl);
        window.location.replace(response?.data?.confirmationUrl);
      }
    } catch (e) {
      return toast.error("Please try again");
    }
  };

  const selectingPlan = (item, index) => {
    setPlan(index)
    updateItem(item)
    // updateCurrentPlan("")
  }

  const handlePlanIntervalSetting = (type) => {
    selectingPlan(type);
    
  }


  const fetchingBillingDetails = async () => {

    const fetchConfig = getFetchConfig(),
      appURL = appURLs();
    toggleLoader(true)
    fetch(`${appURL}/user/current-plan-detail`, fetchConfig)
      .then(handleFetchErrors)
      .then((res) => {

        toggleLoader(false)
        if (Number(res?.status) === 200) {
          const planName = res?.data?.plan;
          const planMap = {
            "Free": 0,
            "Starter": 1,
            "Growth": 2,
            "Pro": 3
          };
          setPlan(planMap[planName] || 0);

          updateCurrentPlan(planName)
        }

      })
      .catch(standardFetchHandlers.error)
      .finally(() => {
        setTimeout(() => {
          toggleLoader(false)
          // return toast.error("Something went wrong1");
        }, 1000);
      });
  }
  const urlParams = new URLSearchParams(window.location.search);
  const userToken1 = urlParams.get("userToken");

  useEffect(() => {
    if(!userToken1){
      fetchingBillingDetails()
    }
  }, [userToken1])

  return (

    <div
      style={{ zIndex: 100 }}
      className="w-[100%] h-[100vh] fixed  bg-[#00000074] flex items-center justify-center laptop:px-0 mobile:px-[10px] py-[50px]"
    >


      <div
        style={{
          backgroundColor: dark ? "#111317" : "#fff",
          borderColor: dark ? "#1F2329" : "#ebebeb",
          minHeight:"700px"
        }}
        className="mobile:w-[100%] custom-h scroll-hidden laptop:w-[900px] overflow-y-auto flex px-[15px] flex-col pt-[15px] rounded-[13px] bg-[#fff] relative border-[1px] border-[#ebebeb] "
      >
        {loader ? <AnimatedLoader /> : <>
          <div className="flex  items-center shrink-0 justify-between ">
            <h1
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[20px] font-bold "
            >
              Choose Your Plan {currentPlan}
            </h1>
            <img
              onClick={() => {
                cancel();
              }}
              src="/graphic/connect-website/cross.svg"
              className="cursor-pointer w-[15px]"
              alt=""
            />
          </div>

          <div
            style={{
              backgroundColor: dark ? "#191B21" : "#0A0A18",
            }}
            className="w-[100%] mobile:h-[120px] py-[10px] laptop:h-[60px] flex mobile:flex-col laptop:mobile:flex-row mobile:items-center laptop:justify-between items-center bg-[#0A0A18] rounded-[3px] mt-[20px] px-[18px]"
          >

            <div>
              <p className="text-[12px] mobile:text-center laptop:text-left text-[#fff] tracking-wide font-medium">
                Plan to stick around for a while?
              </p>
              <p className="text-[14px] text-[#18DF90] leading-[13px] tracking-wide font-medium">
                Get 2 months free with annual billing.
              </p>
            </div>
            <div className="flex w-[200px] shrink-0 laptop:mt-[0] mobile:mt-[5px] h-[38px] bg-[#ffffff25]  rounded-[4px] px-[3px] py-[3px]">
              <div
                onClick={() => {
                  handlePlanIntervalSetting(0);
                }}
                style={{
                  backgroundColor: selected === 0 ? "#18df903f" : "",
                  color: selected === 0 ? "#38F8AC" : "#ffffff7c",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[14px] font-medium flex items-center justify-center tracking-wide"
              >
                Monthly
              </div>
              <div
                onClick={() => {
                  handlePlanIntervalSetting(1);
                }}
                style={{
                  backgroundColor: selected === 1 ? "#18df903f" : "",
                  color: selected === 1 ? "#38F8AC" : "#ffffff7c",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[14px] font-medium flex items-center justify-center tracking-wide"
              >
                Annually
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[20px] w-[100%]">
            {w > 1000 && (
              <div
                style={{
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                  height:"515px"
                }}
                className="w-[30%] cursor-pointer overflow-hidden   rounded-[5px] relative border-[1px]  px-[17px] py-[12px]"
              >
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[12px] font-bold tracking-wide"
                >
                  SELECTED PLAN INCLUDES:
                </p>
                {plan === 0 && (
                  <>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        5,000 page views per month
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Optimized by TurboBoost Badge
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Fast and easy setup
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Assets Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Page Optimization
                      </p>
                    </div>

                      <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        All-in-one performance optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Lazy Loading
                      </p>
                    </div>
                    {/* <div className="w-[100%] mt-[10px] flex justify-between">
                    <img
                      src="/graphic/status/check.svg"
                      className="w-[13px] mr-[10px] shrink-0"
                      alt=""
                    />
                    <p
                      style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                      className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                    >
                      100 GB CDN bandwidth/mo
                    </p>
                  </div> */}
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Basic Support
                      </p>
                    </div>
                  </>
                )}

                {plan === 1 && (
                  <>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        50,000 page views per month
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        All-in-one performance optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Lazy Loading
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Assets Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Page Optimization
                      </p>
                    </div>

                    {/* <div className="w-[100%] mt-[10px] flex justify-between">
                    <img
                      src="/graphic/status/check.svg"
                      className="w-[13px] mr-[10px] shrink-0"
                      alt=""
                    />
                    <p
                      style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                      className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                    >
                      100 GB CDN bandwidth/mo
                    </p>
                  </div> */}
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Critical CSS
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Lazy Load hidden images
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Delay Resource Loading
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Fast and easy setup
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Expert Support
                      </p>
                    </div>
                  </>
                )}

                {plan === 2 && (
                  <>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        200,000 page views per month
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        All-in-one performance optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Lazy Loading
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Assets Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Page Optimization
                      </p>
                    </div>

                    {/* <div className="w-[100%] mt-[10px] flex justify-between">
                    <img
                      src="/graphic/status/check.svg"
                      className="w-[13px] mr-[10px] shrink-0"
                      alt=""
                    />
                    <p
                      style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                      className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                    >
                      100 GB CDN bandwidth/mo
                    </p>
                  </div> */}
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Critical CSS
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Delay Resource Loading
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Lazy Load hidden images
                      </p>
                    </div>
                   
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Remove unused CSS
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Adaptive Image Sizing
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Fast and easy setup
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        24/7 Support
                      </p>
                    </div>
                  </>
                )}

                {plan === 3 && (
                  <>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        200,000 page views per month
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        All-in-one performance optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Lazy Loading
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Assets Optimization
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Page Optimization
                      </p>
                    </div>

                    {/* <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    100 GB CDN bandwidth/mo
                  </p>
                </div> */}
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Critical CSS
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Delay Resource Loading
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Lazy Load hidden images
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Image Optimization
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Remove unused CSS
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Adaptive Image Sizing
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        Fast and easy setup
                      </p>
                    </div>
                    <div className="w-[100%] mt-[10px] flex justify-between">
                      <img
                        src="/graphic/status/check.svg"
                        className="w-[13px] mr-[10px] shrink-0"
                        alt=""
                      />
                      <p
                        style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                        className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                      >
                        24/7 Support
                      </p>
                    </div>
                  </>
                )}


              </div>
            )}

            <div className="laptop:w-[68%] mobile:w-[100%] ">
              {planMockData?.map((item, index) => {
                return <div
                  style={{
                    borderColor:
                      plan === index ? "#38F8AC" : dark ? "#1F2329" : "#ebebeb",
                  }}
                  onClick={() => { selectingPlan(item, index) }}
                  className="w-[100%] cursor-pointer overflow-hidden h-[110px] mb-[10px] rounded-[5px] border-[1.5px] relative px-[17px] flex items-center justify-between"
                >
                  {
                    item?.name == currentPlan && <CurrentPlan />
                  }

                  <div>
                    <h1
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[20px] font-bold "
                    >
                      {item?.name}
                    </h1>
                    <h1
                      style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                      className="text-[14px] text-[#696e7e89] font-medium "
                    >
                      {item?.pageViews} page views/month
                    </h1>
                  </div>
                  <div
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="w-[150px] ml-[10px] relative shrink-0 text-[30px] font-bold "
                  >
                    {selected === 0 ? `$${item?.monthlyPrice}` : `$${(item?.monthlyPrice / 12).toFixed(1)}`}
                    <span className="text-[14px] font-medium text-[#696e7e89]">
                      /month
                    </span>
                    {selected === 1 && (
                      <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[45px]">
                        ${item?.annuallyPrice} billed Annually
                      </div>
                    )}
                  </div>
                </div>
              })}

            </div>
          </div>
          <div className="w-[100%] mt-[10px] mb-[10px] h-[36px] flex justify-end items-center">

            <div onClick={handleBilling}
              style={{
                color: "#191925",
              }}
              className="px-[20px] rounded-[3px] text-[14px] cursor-pointer font-bold h-[38px] hover:bg-[#2FE49C]  bg-[#38F8AC] flex items-center justify-center"
            >
              Continue
            </div>

          </div>
        </>
        }
      </div>


    </div>
  );
};

export default Plan;

