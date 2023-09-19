import React, { useState } from "react";
import { useSelector } from "react-redux";
import useWidth from "../../../hooks/useWidth";

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
  const [plan, setPlan] = useState(2);
  const dark = useSelector((state) => state.home.dark);
  const w = useWidth();
  return (
    <div
      style={{ zIndex: 100 }}
      className="w-[100%] h-[100vh] fixed  bg-[#00000074] flex items-center justify-center laptop:px-0 mobile:px-[10px] py-[50px]"
    >
      <div
        style={{
          backgroundColor: dark ? "#111317" : "#fff",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="mobile:w-[100%] custom-h scroll-hidden laptop:w-[900px] overflow-y-auto flex px-[15px] flex-col pt-[15px] rounded-[13px] bg-[#fff] relative border-[1px] border-[#ebebeb] "
      >
        <div className="flex  items-center shrink-0 justify-between ">
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[20px] font-bold "
          >
            Choose Your Plan
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
                setSelected(0);
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
                setSelected(1);
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
                      1 website
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
                      200,000 page views/mo
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
                      100 GB CDN bandwidth/mo
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
                      Adaptive image sizing
                    </p>
                  </div>
                </>
              )}
              {plan > 0 && (
                <>
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
                          100 GB CDN bandwidth/mo
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
                          Adaptive image sizing
                        </p>
                      </div>
                    </>
                  )}
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
                      14-day money back guarantee
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
                      Expert support team
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
                      Advanced caching mechanism
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
                      Complete image optimization stack
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
                      Built in global CDN
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
                      World class proprietary speed algorithm
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="laptop:w-[68%] mobile:w-[100%]">
            <div
              style={{
                borderColor:
                  plan === 0 ? "#38F8AC" : dark ? "#1F2329" : "#ebebeb",
              }}
              onClick={() => {
                setPlan(0);
              }}
              className="w-[100%] cursor-pointer overflow-hidden h-[110px]  rounded-[5px] border-[1.5px] relative px-[17px] flex items-center justify-between"
            >
              <div>
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px] font-bold "
                >
                  Free
                </h1>
                <h1
                  style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                  className="text-[14px] text-[#696e7e89] font-medium "
                >
                  5,000 page views/mo, 1.00GB CDN bandwidth/mo, “Optimized by
                  TurboBoost Badge” on website
                </h1>
              </div>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[150px] ml-[10px] shrink-0 text-[30px] font-bold "
              >
                $0
                <span
                  style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                  className="text-[14px] font-medium text-[#696e7e89]"
                >
                  /month
                </span>
              </div>
            </div>
            <div
              style={{
                borderColor:
                  plan === 1 ? "#38F8AC" : dark ? "#1F2329" : "#ebebeb",
              }}
              onClick={() => {
                setPlan(1);
              }}
              className="w-[100%] cursor-pointer overflow-hidden h-[110px] mt-[10px]  rounded-[5px] relative border-[1px]  px-[17px] flex items-center justify-between"
            >
              <div>
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px] font-bold "
                >
                  Starter
                </h1>
                <h1
                  style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                  className="text-[14px] text-[#696e7e89] font-medium "
                >
                  50,000 page views/mo, 25 GB CDN bandwidth/mo
                </h1>
              </div>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[150px] ml-[10px] relative shrink-0 text-[30px] font-bold "
              >
                {selected === 0 ? "$15" : "$12.50"}
                <span className="text-[14px] font-medium text-[#696e7e89]">
                  /month
                </span>
                {selected === 1 && (
                  <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[45px]">
                    $150 billed Annually
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                borderColor:
                  plan === 2 ? "#38F8AC" : dark ? "#1F2329" : "#ebebeb",
              }}
              onClick={() => {
                setPlan(2);
              }}
              className="w-[100%] cursor-pointer overflow-hidden h-[110px] mt-[10px]  rounded-[5px] border-[1px] relative px-[17px] flex items-center justify-between"
            >
            <CurrentPlan />
              <div>
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px] font-bold "
                >
                  Growth
                </h1>
                <h1
                  style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                  className="text-[14px] text-[#696e7e89] font-medium "
                >
                  200,000 page views/mo, 100 GB CDN bandwidth/mo
                </h1>
              </div>

              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[150px] ml-[10px] shrink-0 relative  "
              >
                <div className="text-[30px] font-bold">
                  {selected === 0 ? "$40" : "$33.33"}
                  <span className="text-[14px] font-medium text-[#696e7e89]">
                    /month
                  </span>
                </div>
                {selected === 1 && (
                  <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[45px]">
                    $400 billed Annually
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                borderColor:
                  plan === 3 ? "#38F8AC" : dark ? "#1F2329" : "#ebebeb",
              }}
              onClick={() => {
                setPlan(3);
              }}
              className="w-[100%] cursor-pointer overflow-hidden h-[110px] mt-[10px]  rounded-[5px] border-[1px] relative px-[17px] flex items-center justify-between"
            >
              <div>
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px] font-bold "
                >
                  {" "}
                  Pro
                </h1>
                <h1
                  style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                  className="text-[14px] text-[#696e7e89] font-medium "
                >
                  1,000,000 page views/mo, 500 GB CDN bandwidth/mo
                </h1>
              </div>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[150px] relative ml-[10px] shrink-0 text-[30px] font-bold "
              >
                {selected === 0 ? "$150" : "$125"}
                <span className="text-[14px] font-medium text-[#696e7e89]">
                  /month
                </span>
                {selected === 1 && (
                  <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[45px]">
                    $1500 billed Annually
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-[10px] mb-[10px] h-[36px] flex justify-end items-center">
          <div
            style={{
              color: "#696E7E",
            }}
            onClick={() => {
              cancel();
            }}
            className="px-[20px] rounded-[3px] mr-[10px] text-[14px] cursor-pointer font-medium h-[38px] hover:bg-[#e8e8eccb] bg-[#E8E8EC] flex items-center justify-center"
          >
            Cancel
          </div>
          <div
            style={{
              color: "#191925",
            }}
            className="px-[20px] rounded-[3px] text-[14px] cursor-pointer font-bold h-[38px] hover:bg-[#2FE49C]  bg-[#38F8AC] flex items-center justify-center"
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
