import React, { useState } from "react";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import { countries } from "../static/countries";
import InputFields from "../components/InputFields";
import SaveButton from "../components/button/SaveButton";
import OptimizationModeCard from "../components/OptimizationModeCard";
import FeatureCard from "../components/FeatureCard";
import ExcludedResources from "../components/ExcludedResources";
import Navigator from "../components/Navigator";
import MobileViewNavigator from "../components/MobileViewNavigator";
import CookieVariationCard from "../components/CookieVariationCard";
import UserTabSettings from "../components/integrationComponent/userTabSetting";
import GeneralTabSetting from "../components/integrationComponent/generalTabSetting";
import CachingTabSetting from "../components/integrationComponent/CachingTabSetting";
import FontsTabSettings from "../components/integrationComponent/FontsTabSettings";
import ImageTabSettings from "../components/integrationComponent/ImageTabSettings";
import HtmlTabSettings from "../components/integrationComponent/HtmlTabSettings";
import CssTabSettings from "../components/integrationComponent/CssTabSettings";
import JSTabSettings from "../components/integrationComponent/JSTabSettings";
import IntegrationsTabSettings from "../components/integrationComponent/IntegrationsTabSettings";
const SettingPage = () => {
  const [activeTab, updateActiveTab] = useState(0);

  const deviceWith = useWidth();
  const dark = useSelector((state) => state.home.dark);

  const countriesData = countries.map((item, i) => {
    return item.label;
  });

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
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
                onChangeHandler={(e) => {
                  updateActiveTab(e);
                }}
              />
            )}
            <SaveButton btnText="Save Settings" />
          </div>
          {deviceWith > 1000 && (
            <Navigator
              activeTab={activeTab}
              updateActiveTab={updateActiveTab}
            />
          )}
          {activeTab === 0 && (
             <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
            <UserTabSettings />
            </div>
          )}
          {activeTab === 1 && (
           <GeneralTabSetting />
          )}
          {activeTab === 2 && (
            <CachingTabSetting />
          )}
          {activeTab === 3 && (
           <FontsTabSettings />
          )}
          {activeTab === 4 && (
            <ImageTabSettings />
          )}
          {activeTab === 5 && (
           <HtmlTabSettings />
          )}
          {activeTab === 6 && (
          <CssTabSettings />
          )}
          {activeTab === 7 && (
           <JSTabSettings />
          )}
          {activeTab === 8 && (
           <IntegrationsTabSettings />
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
