import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ComparePlans,
  planMockData,
} from "../utils/constant";
import axios from "axios";
import { billingApi } from "../utils/billingApi1";
import appURLs from "../appURL";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../slice/statusToggleSlice";

import TitleManager from "../components/TitleManager";

const OnboardingBillings = () => {
  const  appURL = appURLs();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const [token1, updateToken] = useState("");
  const [loader, toggleLoader] = useState(true);
  const dark = useSelector((state) => state.home.dark);

  const handleBilling = async (item) => {
    try {
      let response = await billingApi(item, selected, token1);

      localStorage.clear();
      if (response?.data?.confirmationUrl) {
        localStorage.setItem("authToken", token1);
        // console.log(response?.data?.confirmationUrl);
        window.location.replace(response?.data?.confirmationUrl);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const { search } = useLocation(),
    query = new URLSearchParams(search),
    userToken = query.get("userToken");

  const fetchingUserDataByToken = async () => {
    try {
      toggleLoader(true);
      localStorage.clear();
      localStorage.removeItem("authToken");
      axios.defaults.withCredentials = true;

      const resJson = await axios.get(
        `${appURL}/user/redirect/login/${userToken}`
      );

      const res = resJson?.data?.data;
      const redirectURL = res?.redirectURI;
      const token = res?.token;
      const websiteURL = res?.userData?.app_token?.shopify?.shop;
      updateToken(token);

      dispatch(setToggle({ key: "websiteURL", value: websiteURL }));

      if (redirectURL === "/dashboard") {
        localStorage.setItem("authToken", token);
        window.location.href = "/dashboard";
      } else {
        setTimeout(() => {
          toggleLoader(false);
        }, 2000);
      }
    } catch (error) {
      toggleLoader(false);
    }
  };

  useEffect(() => {
    fetchingUserDataByToken();
  }, []);

  if (loader) {
    return <div></div>;
  }

  return (
    <div className=" flex flex-col">
      <TitleManager title="Onboarding" conicalURL="onboarding" />
      <div className="w-full max-w-screen-xl"></div>

      <div
        style={{
          backgroundColor: dark ? "#fff" : "#000",
          height: "800px",
          paddingLeft:"40px",
          paddingRight:"40px"
        }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center billing-modal-background bg-[#FAFAFC] mobile:px-[20px] rounded-md relative w-full md:w-900 md:ml-50"
        >
        <div className="w-full max-w-screen-xl">
          <h1
            style={{
              color: dark ? "#fff" : "#fff",
            }}
            className="text-[23px] font-bold tracking-wide text-center pt-[20px]"
          >
            Select A Plan{" "}
          </h1>
          <h1 className="text-[12px] font-medium text-[#696e7ea8] tracking-wide text-center mt-[2px]">
            A faster website is just a click away!{" "}
          </h1>
          <div className="w-[100%] mt-[5px] flex items-center justify-center">
            <div
             
              className="flex w-[200px] h-[40px]  border-[1px]   rounded-[4px] px-[3px] py-[3px]"
            >
              <div
                onClick={() => {
                  setSelected(0);
                }}
                style={{
                  backgroundColor: selected === 0 ? "#18df903f" : "",
                  color: selected === 0 ? "#0FE38F" : "#85858C",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[12px] font-medium flex items-center justify-center tracking-wide"
              >
                Monthly
              </div>
              <div
                onClick={() => {
                  setSelected(1);
                }}
                style={{
                  backgroundColor: selected === 1 ? "#18df903f" : "",
                  color: selected === 1 ? "#0FE38F" : "#85858C",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[12px] font-medium flex items-center justify-center tracking-wide"
              >
                Annually
              </div>
            </div>
            <img
              src="/AnualArrow.svg"
              className="ml-[1px] annualArrow"
              alt=""
            />
          </div>
          <p className="annualText">2 months free!</p>

          <div className="w-[100%] mt-[15px] gap-[20px] grid laptop:grid-cols-3">
            {planMockData.slice(0, 3).map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                    width: "280px",
                    height: "auto",
                  }}
                  className="bg-[#fff]  border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[17px]  px-[17px] font-bold tracking-wide"
                  >
                    {item?.name !== "Starter" ? (
                      item?.name
                    ) : (
                      <>
                        <div style={{ display: "flex" }}>
                          {item?.name}
                          <div className="text-[#000] bg-[#0FE38F] px-[12px] py-[2px] leading-[8px] rounded-[20px] ml-[9px] translate-y-[-1px] text-[10px]  tracking-wide font-medium flex items-center justify-center h-[22px]">
                            <span
                              style={{
                                color: "#18113",
                                fontSize: "10px",
                                fontWeight: "600",
                                marginRight: "5px",
                              }}
                            >
                              Recommended for you
                            </span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4 4.2H6.6V3H5.4V4.2ZM5.4 9H6.6V5.4H5.4V9ZM5.994 12C2.682 12 0 9.312 0 6C0 2.688 2.682 0 5.994 0C9.312 0 12 2.688 12 6C12 9.312 9.312 12 5.994 12ZM6 1.2C3.348 1.2 1.2 3.348 1.2 6C1.2 8.652 3.348 10.8 6 10.8C8.652 10.8 10.8 8.652 10.8 6C10.8 3.348 8.652 1.2 6 1.2Z"
                                fill="#18113C"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </h1>

                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[12px] h-[30px] px-[17px] text-[#0a0a187a] font-medium tracking-wide"
                  >
                    {item?.desc}
                  </p>
                  <div
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="w-[100%] leading-[15px] px-[17px] relative mt-[10px] shrink-0 text-[20px] font-bold "
                  >
                    {selected === 0
                      ? `$ ${item?.monthlyPrice}`
                      : `$ ${item?.annuallyPrice}`}
                    <span className="text-[10px] font-medium text-[#696e7e89]">
                      {" "}
                      /{selected === 0 ? "month" : "year"}
                    </span>
                  </div>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[12px]  px-[17px] mt-[10px] text-[#0a0a187a]  tracking-wide"
                  >
                    <span className="font-bold">{item?.pageViews}</span> page
                    views/mo
                  </p>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[12px]  px-[17px] text-[#0a0a187a]  tracking-wide"
                  >
                    $15 per 5,000 additional page
                  </p>

                  {item?.name === "Basic" ? (
                    <div className="w-[100%] px-[17px] mt-[8px]">
                      <div
                        onClick={() => {
                          handleBilling(item);
                        }}
                        className={`w-[100%] h-[35px] text-[${
                          dark ? "#fff" : "#000"
                        }] bg-[#fff] hover:text-[#000] cursor-pointer rounded-[3px] border-[1px] border-[#38F8AC] text-[12px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                      >
                        Get Started Free
                      </div>
                    </div>
                  ) : (
                    <div className="w-[100%] px-[17px] mt-[8px]">
                      <div
                        onClick={() => {
                          handleBilling(item);
                        }}
                        className={`w-[100%] h-[35px] text-[${
                          dark ? "#fff" : "#000"
                        }] bg-[#38F8AC] hover:bg-[#fff] hover:text-[#000] cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] text-[12px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                      >
                        Start Free Trial
                      </div>
                    </div>
                  )}

                  <div className="w-[100%]  px-[17px] mt-[8px] pt-[8px] border-t-[1px] border-[#ebebeb]">
                    <p
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[12px] font-bold tracking-wide"
                    >
                      {item?.name} Plan Includes
                    </p>
                    {item?.includes?.map((includesItems, includesIndex) => {
                      return (
                        <div
                          className="w-[100%] mt-[8px] flex justify-between"
                          key={includesIndex}
                        >
                          <img
                            src="/graphic/status/check.svg"
                            className="w-[13px] mr-[10px] shrink-0"
                            alt=""
                          />
                          <p
                            style={{
                              color: dark ? "#ffffff74" : "#0a0a187e",
                            }}
                            className="text-[13px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                          >
                            {includesItems}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mobile-container">
          <h1
            style={{
              color: dark ? "#fff" : "#fff",
            }}
            className="text-[15px] font-bold tracking-wide text-center pt-[20px]"
          >
            Select A Plan{" "}
          </h1>
          <h1 className="text-[12px] font-medium text-[#696e7ea8] tracking-wide text-center mt-[2px]">
            A faster website is just a click away!{" "}
          </h1>
          <div className="w-[100%] mt-[5px] flex items-center justify-center">
            <div
              style={
                {
                  // backgroundColor: dark ? "#12122B" : "#12122B",
                  // borderColor: dark ? "#1F2329" : "#ebebeb",
                }
              }
              className="flex w-[200px] h-[40px]  border-[1px]   rounded-[4px] px-[3px] py-[3px]"
            >
              <div
                onClick={() => {
                  setSelected(0);
                }}
                style={{
                  // backgroundColor: selected === 0 ? "#18df903f" : "",
                  color: selected === 0 ? "#0FE38F" : "#85858C",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[12px] font-medium flex items-center justify-center tracking-wide"
              >
                Monthly
              </div>
              <div
                onClick={() => {
                  setSelected(1);
                }}
                style={{
                  backgroundColor: selected === 1 ? "#18df903f" : "",
                  color: selected === 1 ? "#0FE38F" : "#85858C",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[12px] font-medium flex items-center justify-center tracking-wide"
              >
                Annually
              </div>
            </div>
            <img
              src="/AnualArrow.svg"
              className="ml-[1px] annualArrow"
              alt=""
            />
          </div>
          <p className="annualText">2 months free!</p>

          <div className="w-[100%] mt-[15px] gap-[20px] grid laptop:grid-cols-3">
            {planMockData.slice(0, 3).map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                    width: "280px",
                    height: "auto",
                  }}
                  className="bg-[#fff]  border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[15px]  px-[17px] font-bold tracking-wide"
                  >
                    {item?.name !== "Starter" ? (
                      item?.name
                    ) : (
                      <>
                        <div style={{ display: "flex" }}>
                          {item?.name}
                          <div className="text-[#000] bg-[#0FE38F] px-[14px] py-[6.5px] leading-[8px] rounded-[20px] ml-[9px] translate-y-[-1px] text-[12px]  tracking-wide font-medium flex items-center justify-center">
                            <span
                              style={{
                                color: "#18113C",
                                fontSize: "11px",
                                fontWeight: "600",
                                marginRight: "5px",
                              }}
                            >
                              Recommended for you
                            </span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4 4.2H6.6V3H5.4V4.2ZM5.4 9H6.6V5.4H5.4V9ZM5.994 12C2.682 12 0 9.312 0 6C0 2.688 2.682 0 5.994 0C9.312 0 12 2.688 12 6C12 9.312 9.312 12 5.994 12ZM6 1.2C3.348 1.2 1.2 3.348 1.2 6C1.2 8.652 3.348 10.8 6 10.8C8.652 10.8 10.8 8.652 10.8 6C10.8 3.348 8.652 1.2 6 1.2Z"
                                fill="#18113C"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </h1>

                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[12px] h-[30px] px-[17px] text-[#0a0a187a] font-medium tracking-wide"
                  >
                    {item?.desc}
                  </p>
                  <div
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="w-[100%] leading-[15px] px-[17px] relative mt-[10px] shrink-0 text-[20px] font-bold "
                  >
                    {selected === 0
                      ? `$ ${item?.monthlyPrice}`
                      : `$ ${item?.annuallyPrice}`}
                    <span className="text-[10px] font-medium text-[#696e7e89]">
                      {" "}
                      /{selected === 0 ? "month" : "year"}
                    </span>
                  </div>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[12px]  px-[17px] mt-[10px] text-[#0a0a187a]  tracking-wide"
                  >
                    <span className="font-bold">{item?.pageViews}</span> page
                    views/mo
                  </p>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[10px]  px-[17px] text-[#0a0a187a]  tracking-wide"
                  >
                    $15 per 5,000 additional page
                  </p>

                  {item?.name === "Basic" ? (
                    <div className="w-[100%] px-[17px] mt-[8px]">
                      <div
                        onClick={() => {
                          handleBilling(item);
                        }}
                        className={`w-[100%] h-[35px] text-[${
                          dark ? "#fff" : "#000"
                        }] bg-[#fff] hover:text-[#000] cursor-pointer rounded-[3px] border-[1px] border-[#38F8AC] text-[12px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                      >
                        Get Started Free
                      </div>
                    </div>
                  ) : (
                    <div className="w-[100%] px-[17px] mt-[8px]">
                      <div
                        onClick={() => {
                          handleBilling(item);
                        }}
                        className={`w-[100%] h-[35px] text-[${
                          dark ? "#fff" : "#000"
                        }] bg-[#38F8AC] hover:bg-[#fff] hover:text-[#000] cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] text-[12px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                      >
                        Start Free Trial
                      </div>
                    </div>
                  )}

                  <div className="w-[100%]  px-[17px] mt-[8px] pt-[8px] border-t-[1px] border-[#ebebeb]">
                    <p
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[12px] font-bold tracking-wide"
                    >
                      {item?.name} Plan Includes
                    </p>
                    {item?.includes?.map((includesItems, includesIndex) => {
                      return (
                        <div
                          className="w-[100%] mt-[8px] flex justify-between"
                          key={includesIndex}
                        >
                          <img
                            src="/graphic/status/check.svg"
                            className="w-[13px] mr-[10px] shrink-0"
                            alt=""
                          />
                          <p
                            style={{
                              color: dark ? "#ffffff74" : "#0a0a187e",
                            }}
                            className="text-[10px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                          >
                            {includesItems}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


export default OnboardingBillings;
