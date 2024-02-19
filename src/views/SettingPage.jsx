import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";

import TitleManager from "../components/TitleManager";
import useWidth from "../hooks/useWidth";
import SaveButton from "../components/button/SaveButton";
import Navigator from "../components/Navigator";
import { GetAxiosConfig } from "../utils/axiosConfig";
import { setToggle } from "../slice/statusToggleSlice";

import MobileViewNavigator from "../components/MobileViewNavigator";
import UserTabSettings from "../components/SettingsComponent/userTabSetting";
import FontsTabSettings from "../components/SettingsComponent/FontsTabSettings";
import ImageTabSettings from "../components/SettingsComponent/ImageTabSettings";
import HtmlTabSettings from "../components/SettingsComponent/HtmlTabSettings";
import CssTabSettings from "../components/SettingsComponent/CssTabSettings";
import JSTabSettings from "../components/SettingsComponent/JSTabSettings";

import OptimizationModeCard from "../components/SettingsComponent/OptimizationModeCard";
import AnimatedLoader from "../components/loader/AnimatedLoader";

const SettingPage = () => {

  const [activeTab, updateActiveTab] = useState(0);
  const [test, updateTest] = useState(true)
  // const [test, updateTest] = useState(false);

  const deviceWith = useWidth();
  const dark = useSelector((state) => state.home.dark);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();

  // const fetchingPlanName = async () => {
  //   try {
  //     const res = await GetAxiosConfig(`user/current-plan-detail`);
  //     const resJSON = res?.data;

  //     if (resJSON.status === 200) {
  //       const planName = resJSON?.data?.plan;
  //       dispatch(setToggle({ key: "planName", value: planName }));
  //     } else if (resJSON.status === 403) {
  //       localStorage.removeItem('authToken');
  //       window.location.replace('/login-shopify');
  //     }
  //   } catch (error) {
  //     if (error?.response?.status === 401) {
  //       localStorage.removeItem('authToken');
  //       window.location.replace('/login-shopify');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchingPlanName();
  // }, [])

  // console.log()


  useEffect(() => {
    const timer = setTimeout(() => {
      updateTest(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    test ? <AnimatedLoader /> :
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <TitleManager title="Settings" conicalURL="settings" />
      <div className="w-[100%] h-[50px] shrink-0"></div>

      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] pb-[40px] mobile:px-[10px] laptop:px-[80px]"
      >
        <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
          <div className="w-[100%] pt-[30px]">
            <h1
              style={{ color: dark ? "#fff" : "#000" }}
              className="text-[24px] font-bold tracking-wide "
            >
              Settings
            </h1>
          </div>
          <div className="w-[100%] mobile:my-[20px] laptop:my-0 h-[34px] flex justify-end gap-[10px] items-center">
            {deviceWith < 1000 && (
              <MobileViewNavigator
                activeTab={activeTab}
                updateActiveTab={updateActiveTab}
              />
            )}
            {
              activeTab !== 0 &&
               <SaveButton
              btnText="Save Settings"
              style={{ margin: isMobile ? "-20px 0  0 0" : 0 }}
            />
            }
           
          </div>
          {deviceWith > 1000 && (
            <Navigator
              activeTab={activeTab}
              updateActiveTab={updateActiveTab}
            />
          )}
          {activeTab === 0 && (
            <>
              <UserTabSettings
                // updateTest={updateTest}
              />

              <ToastContainer />
            </>
          )}
          {activeTab >= 1 && activeTab <= 6 && (
            <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
              {/* {activeTab === 1 && <GeneralTabSetting1 />} */}
              {activeTab === 1 && <FontsTabSettings />}
              {activeTab === 2 && <ImageTabSettings />}
              {activeTab === 3 && <HtmlTabSettings />}
              {activeTab === 4 && <CssTabSettings />}
              {activeTab === 5 && <JSTabSettings />}
              <OptimizationModeCard />
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default SettingPage;
