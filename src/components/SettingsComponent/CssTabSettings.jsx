import React from "react";

import FeatureCard from "../FeatureCard";
import InputFields from "../InputFields";
import OptimizationModeCard from "../OptimizationModeCard";
import { setToggle } from "../../slice/statusToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { featureAPIHandling } from "../../utils/featureAPIHandling";
const CssTabSettings = () => {
    const dark = useSelector((state) => state.home.dark);
    const dispatch = useDispatch();

    const criticalCSSToggleValue = useSelector((state) => state.toggles?.criticalCSS);
    const removeUnsedCSSToggleValue = useSelector((state) => state.toggles?.removeUnsedCSS);
    
    const handleCriticalCSS = async() =>{
      let endPoint = "";
      if (!criticalCSSToggleValue) endPoint = "/api/shopify/minify-javascript-code";
      else endPoint = "/api/shopify/minify-javascript-code";
      await featureAPIHandling(endPoint);
      dispatch(setToggle({ key: "criticalCSS", value: !criticalCSSToggleValue }));
    }
    const handleRemoveUnsedCSS = async() =>{
      let endPoint = "";
      if (!removeUnsedCSSToggleValue) endPoint = "/api/shopify/minify-javascript-code";
      else endPoint = "/api/shopify/minify-javascript-code";
      await featureAPIHandling(endPoint);
      dispatch(setToggle({ key: "removeUnsedCSS", value: !removeUnsedCSSToggleValue }));
    }

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
               handlingToggle={handleCriticalCSS}
               toggleValue= {criticalCSSToggleValue}
              last={true}
              title="Optimize CSS Delivery"
              // isSubSectionExist={true}
              p="10px 15px 20px 15px"
              // subSectionTitile={"Additional Options"}
              description="Create critical CSS as well as rework your website CSS for optimal delivery"
            >
              {/* <div className="w-[100%] py-[10px]">
                <InputFields
                  labelText="Remove @font-face rules from the critical CSS"
                  list={["Disabled"]}
                  type="dropdown"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  Enabling this will remove the @font-face rules from the
                  critical CSS, which will delay font loading and help improve
                  the first meaningful paint.
                </div>

                <InputFields
                  labelText="Specify CSS selector to force include CSS for matching elemnts"
                  type="textarea"
                  inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                />

                <InputFields
                  labelText="Specify CSS selector to force include CSS for matching elemnts"
                  type="textarea"
                  inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                />
              </div> */}
            </FeatureCard>

            <FeatureCard
               handlingToggle={handleRemoveUnsedCSS}
               toggleValue= {removeUnsedCSSToggleValue}
              title="Remove Unused CSS"
              // isSubSectionExist={true}
              p="10px 15px 20px 15px"
              // subSectionTitile={"Additional Options"}
              description="Unused CSS rules are removed from optimized CSS files for faster page rendering."
            >
              {/* <div className="w-[100%] py-[10px]">
                <InputFields
                  labelText="Debupe Based on Critical CSS"
                  list={["Disabled"]}
                  type="dropdown"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  Remove duplicate rules from the final CSS files for rules that
                  are present in the critical CSS
                </div>

                <InputFields
                  labelText="Inline the final CSS"
                  list={["Disabled"]}
                  type="dropdown"
                />

                <InputFields
                  labelText="Inline the final CSS"
                  list={["Disabled"]}
                  type="dropdown"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  Remove duplicate rules from the final CSS files for rules that
                  are present in the critical CSS
                </div>

                <InputFields
                  labelText="Specify CSS selector to force include CSS for matching elemnts"
                  type="textarea"
                  inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                />

                <InputFields
                  labelText="Specify CSS selector to force exclude CSS for matching elemnts"
                  type="textarea"
                  inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                />
              </div> */}
            </FeatureCard>

            {/* <FeatureCard
              title="Combine CSS into one resource"
              isSubSectionExist={true}
              p="10px 15px 20px 15px"
              subSectionTitile={"Additional Options"}
              description="Use a single file for all CSS rules grouped by media type. This reduces the number of network requests and makes rendering more efficient"
            >
              <div className="w-[100%] py-[10px]">
                <InputFields
                  labelText="Merge resources for media “screen” and “all”"
                  list={["Disabled"]}
                  type="dropdown"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  Enabling this will use a single group for styles using media
                  “screen” and “all”. Otherwise 2 separate files will be created
                  for each group. In most cases this setting must be enabled for
                  best results.
                </div>
              </div>
            </FeatureCard> */}
{/* 
            <FeatureCard
               handlingToggle={handleCombineJsFeature}
              toggleValue= {criticalCSSToggleValue}
              title="Custom CSS"
              description="Specify custom CSS rules which will be applied to the optimized pages."
            /> */}
          </div>
        </div>
        {/* <OptimizationModeCard /> */}
      </div>
    </>
  );
};

export default CssTabSettings;
