import React, { useState, useEffect } from 'react';
import FeatureCard from '../FeatureCard';
import InputFields from '../InputFields';
import OptimizationModeCard from '../OptimizationModeCard';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const FontsTabSettings = () => {
  const dark = useSelector((state) => state.home.dark);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        const message = 'You have unsaved changes. Are you sure you want to leave?';
        event.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleInputChange = () => {
    // Your logic to handle input changes and set unsavedChanges to true
    setUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    // Your logic to save changes
    setUnsavedChanges(false); // Reset unsavedChanges after saving
  };

  const handleCancelChanges = () => {
    // Your logic to cancel changes
    setUnsavedChanges(false); // Reset unsavedChanges after canceling
  };
  return (
    <>
    <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
      <div className="w-[100%] ">
        <div
          style={{
            backgroundColor: dark ? "#111317" : "#fff",
            borderColor: dark ? "#1F2329" : "#ebebeb",
          }}
          className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
        >
          <FeatureCard
            last={true}
            title="Override Font Rendering Behavior"
            isSubSectionExist={true}
            p="10px 15px 20px 15px"
            subSectionTitile={"Additional Options"}
            description="Use this option to set a desired value for the CSS front-display rule"
          >
            <div className="w-[100%] py-[10px]">
              <InputFields
                labelText="Font-display Value"
                list={["Swap"]}
                type="dropdown"
              />

              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                The selected value will be applied to all @font-face
                definitions
              </div>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Font Loading"
            isSubSectionExist={true}
            p="10px 15px 20px 15px"
            subSectionTitile={"Additional Options"}
            description="Use this option to configure the method of loading fonts on your pages"
          >
            <div className="w-[100%] py-[10px]">
              <InputFields
                labelText="Loading Strategy"
                list={["Onload"]}
                type="dropdown"
              />
            </div>
          </FeatureCard>
          <FeatureCard
            featured={true}
            title="Font Subsetting (Remove Unused Glyphs)"
            description="When this option is enabled, TurboBoost will optimize fonts by removing symbols(glyphs), when are not used anywhere. This can dramatically reduce the size of these fonts. Learn more"
            h={"100px"}
          />
          <FeatureCard
            title="Enable Font Compression Upgrade"
            description="When this option is enabled, TurboBoost will optimize fonts by upgrading their compression to WOFF2 format. This can reduce the size of these fonts by up to 50%."
            h={"100px"}
          />
        </div>
      </div>

      <OptimizationModeCard />
        {unsavedChanges && (
        <div className="confirmation-popup">
          <div>Save changes before leaving?</div>
          <button onClick={handleSaveChanges}>Yes</button>
          <button onClick={handleCancelChanges}>No</button>
        </div>
      )}
    </div>
  </>
  );
}

export default FontsTabSettings;
