import React, { useState } from "react";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
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

  console.log(`activeTab`, activeTab);

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

  const handleSaveSettings = async () => {
    try {
      let updatedUserData = {};
      let updatedGeneralData = {};

      // Save user settings
      if (activeTab === 0) {
        updatedUserData = await saveUserSettings(userSettings);
      }

      // Save general settings
      if (activeTab === 1) {
        updatedGeneralData = await saveGeneralSettings(generalSettings);
      }

      // Handle other tabs as needed

      console.log("User information updated:", {
        userSettings: updatedUserData,
        generalSettings: updatedGeneralData,
      });
    } catch (error) {
      console.error("Error updating user information:", error.message);
    }
  };
  const saveUserSettings = async (newData) => {
    return newData; 
  };

  const saveGeneralSettings = async (newData) => {
    return newData; 
  };

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

              {/* <EmailPreferecesSetting /> */}
            </>
          )}
          {/* {activeTab === 1 && (
            <GeneralTabSetting onUpdate={handleGeneralSettingsChange} />
          )} */}
          {/* {activeTab === 2 && <CachingTabSetting />} */}
          {activeTab === 1 && <FontsTabSettings />}
          {activeTab === 2 && <ImageTabSettings />}
          {activeTab === 3 && <HtmlTabSettings />}
          {activeTab === 4 && <CssTabSettings />}
          {activeTab === 5 && <JSTabSettings />}
          {/* {activeTab === 8 && <IntegrationsTabSettings />} */}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
