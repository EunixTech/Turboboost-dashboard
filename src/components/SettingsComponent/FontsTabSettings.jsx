import React from 'react';
import FeatureCard from '../FeatureCard';
import InputFields from '../InputFields';
import OptimizationModeCard from '../OptimizationModeCard';
import { useSelector } from 'react-redux';

const FontsTabSettings = () => {
  const dark = useSelector((state) => state.home.dark);

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
    </div>
  </>
  );
}

export default FontsTabSettings;
