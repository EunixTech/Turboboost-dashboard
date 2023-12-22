import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FeatureCard from '../FeatureCard';
import OptimizationModeCard from '../OptimizationModeCard';
import { setToggle } from "../../slice/statusToggleSlice";
import { featureAPIHandling } from '../../utils/featureAPIHandling';

const HtmlTabSettings = () => {
    const dark = useSelector((state) => state.home.dark);

    const dispatch = useDispatch();

    const minifyHTMLToggleValue = useSelector((state) => state.toggles?.minifyHTML);
    const handleMinifyHTML = async() =>{
      let endPoint = "";
      if (!minifyHTMLToggleValue) endPoint = "/api/shopify/minify-javascript-code";
      else endPoint = "/api/shopify/minify-javascript-code";
      await featureAPIHandling(endPoint);
      dispatch(setToggle({ key: "minifyHTML", value: !minifyHTMLToggleValue }));
    }

  return (
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
                           handlingToggle={handleMinifyHTML}
                           toggleValue= {minifyHTMLToggleValue}
                    last={true}
                    h="70px"
                    title="Minify HTML"
                    description="When enabled TurboBoost will minify the HTML by removing extra whitespace."
                  />
                  {/* <FeatureCard
                           handlingToggle={handleCombineJsFeature}
                           toggleValue= {criticalCSSToggleValue}
                    h="70px"
                    title="Keep HTML comments"
                    description="When enabled TurboBoost will not remove the HTML comments from the final cache files."
                  /> */}
                </div>
              </div>
              {/* <OptimizationModeCard /> */}
            </div>
  );
}

export default HtmlTabSettings;
