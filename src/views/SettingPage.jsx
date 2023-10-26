import React, { useState } from "react";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import { countries } from "../static/countries";
import SaveButton from "../components/button/SaveButton";
import Navigator from "../components/Navigator";
import MobileViewNavigator from "../components/MobileViewNavigator";
import UserTabSettings from "../components/SettingsComponent/userTabSetting";
import GeneralTabSetting from "../components/SettingsComponent/generalTabSetting";
import CachingTabSetting from "../components/SettingsComponent/CachingTabSetting";
import FontsTabSettings from "../components/SettingsComponent/FontsTabSettings";
import ImageTabSettings from "../components/SettingsComponent/ImageTabSettings";
import HtmlTabSettings from "../components/SettingsComponent/HtmlTabSettings";
import CssTabSettings from "../components/SettingsComponent/CssTabSettings";
import JSTabSettings from "../components/SettingsComponent/JSTabSettings";
import IntegrationsTabSettings from "../components/SettingsComponent/IntegrationsTabSettings";
import EmailPreferecesSetting from "../components/SettingsComponent/EmailPreferecesSetting";
const SettingPage = () => {
  const [activeTab, updateActiveTab] = useState(0);

  const deviceWith = useWidth();
  const dark = useSelector((state) => state.home.dark);
  const [userSettings, setUserSettings] = useState({
    /* user settings data */
  });
  const [generalSettings, setGeneralSettings] = useState({
    /* general settings data */
  });
  const handleUserSettingsChange = (newData) => {
    setUserSettings(newData);
  };

  const handleGeneralSettingsChange = (newData) => {
    setGeneralSettings(newData);
  };

  const handleSaveSettings = () => {
    const allSettings = {
      userSettings,
      generalSettings,
    };
    console.log("All Settings:", allSettings);
  };
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
            <SaveButton btnText="Save Settings" onClick={handleSaveSettings} />
          </div>
          {deviceWith > 1000 && (
            <Navigator
              activeTab={activeTab}
              updateActiveTab={updateActiveTab}
            />
          )}
          {activeTab === 0 && (
            <>
              <UserTabSettings onUpdate={handleUserSettingsChange} />

              <EmailPreferecesSetting />
            </>
          )}
          {activeTab === 1 && (
            <GeneralTabSetting onUpdate={handleGeneralSettingsChange} />
          )}
          {activeTab === 2 && <CachingTabSetting />}
          {activeTab === 3 && <FontsTabSettings />}
          {activeTab === 4 && <ImageTabSettings />}
          {activeTab === 5 && <HtmlTabSettings />}
          {activeTab === 6 && <CssTabSettings />}
          {activeTab === 7 && <JSTabSettings />}
          {activeTab === 8 && <IntegrationsTabSettings />}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
