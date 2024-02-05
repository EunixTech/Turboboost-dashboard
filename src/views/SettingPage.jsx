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
// import GeneralTabSetting from "../components/SettingsComponent/GeneralTabSetting";
import GeneralTabSetting1 from "../components/SettingsComponent/GeneralTabSetting";
import CachingTabSetting from "../components/SettingsComponent/CachingTabSetting";
import IntegrationsTabSettings from "../components/SettingsComponent/IntegrationsTabSettings";
import OptimizationModeCard from "../components/SettingsComponent/OptimizationModeCard";

const SettingPage = () => {
  // const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [activeTab, updateActiveTab] = useState(0);
  const deviceWith = useWidth();
  const dark = useSelector((state) => state.home.dark);
  const [userSettings, setUserSettings] = useState({
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     if (unsavedChanges) {
  //       const message = "You have unsaved changes. Are you sure you want to leave?";
  //       event.returnValue = message;
  //       return message;
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [unsavedChanges]);

  const fetchingPlanName = async () => {
    try {
      const res = await GetAxiosConfig(`user/current-plan-detail`);
      const resJSON = res?.data;

      if (resJSON.status === 200) {
        const planName = resJSON?.data?.plan;
        dispatch(setToggle({ key: "planName", value: planName }));
      } else if (resJSON.status === 403) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    }
  };

  useEffect(() => {
    fetchingPlanName();
  }, [])

  console.log("**************", activeTab)



  const handleUserSettingsChange = (newData) => {
    setUserSettings(newData);
  };

  const handleSaveSettings = async () => { };

  return (
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
          <div className="w-[100%] mobile:my-[20px] laptop:my-0 h-[34px] flex justify-end items-center">
            {deviceWith < 1000 && (
              <MobileViewNavigator
              activeTab={activeTab}
              updateActiveTab={updateActiveTab}
              />
            )}
            <SaveButton
              btnText="Save Settings"
              onClick={handleSaveSettings}
              style={{ margin: isMobile ? "-20px 0  0 0" : 0 }}
            />
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
                userProfile={userSettings}
                onUpdate={handleUserSettingsChange}
              />

              <ToastContainer />
            </>
          )}
          {activeTab >= 1 && activeTab <= 8 && (
            <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
              {activeTab === 1 && <GeneralTabSetting1 />}
              {activeTab === 2 && <CachingTabSetting />}
              {activeTab === 3 && <FontsTabSettings />}
              {activeTab === 4 && <ImageTabSettings />}
              {activeTab === 5 && <HtmlTabSettings />}
              {activeTab === 6 && <CssTabSettings />}
              {activeTab === 7 && <JSTabSettings />}
              {activeTab === 8 && <IntegrationsTabSettings />}
              <OptimizationModeCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
