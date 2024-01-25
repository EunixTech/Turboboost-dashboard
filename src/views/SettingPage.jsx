import React, { useState, useEffect } from "react";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import SaveButton from "../components/button/SaveButton";
import Navigator from "../components/Navigator";
import MobileViewNavigator from "../components/MobileViewNavigator";
import UserTabSettings from "../components/SettingsComponent/userTabSetting";
import FontsTabSettings from "../components/SettingsComponent/FontsTabSettings";
import ImageTabSettings from "../components/SettingsComponent/ImageTabSettings";
import HtmlTabSettings from "../components/SettingsComponent/HtmlTabSettings";
import CssTabSettings from "../components/SettingsComponent/CssTabSettings";
import JSTabSettings from "../components/SettingsComponent/JSTabSettings";
import { toast, ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import TitleManager from "../components/TitleManager";

const SettingPage = ({ registrationData }) => {
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [activeTab, updateActiveTab] = useState(0);
  const deviceWith = useWidth();
  const dark = useSelector((state) => state.home.dark);
  const [userDetail, updateUserDetail] =  useState()
  const [userSettings, setUserSettings] = useState({
   });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message; 
        return message; 
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleUserSettingsChange = (newData) => {
    setUserSettings(newData);
    setUnsavedChanges(true);
  };

  const handleSaveSettings = async () => {
    try {
      const response = await fetch(

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userSettings),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to update user information"
        );
      }

      const updatedUserData = await response.json();
      
      toast.success("Settings updated successfully!");
      handleUserSettingsChange(updatedUserData);
      setUnsavedChanges(false); // Reset unsaved changes after successful save
    } catch (error) {
      console.error("Error updating user information:", error.message);
      toast.error("Failed to update settings");
    }
  };






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
                onChangeHandler={(e) => {
                  updateActiveTab(e);
                }}
              />
            )}
            {/* <SaveButton
              btnText="Save Settings"
              onClick={handleSaveSettings}
              style={{ margin: isMobile ? "-20px 0  0 0" : 0 }}
            /> */}
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
          {activeTab === 1 && <FontsTabSettings />}
          {activeTab === 2 && <ImageTabSettings />}
          {activeTab === 3 && <HtmlTabSettings />}
          {activeTab === 4 && <CssTabSettings />}
          {activeTab === 5 && <JSTabSettings />}
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
