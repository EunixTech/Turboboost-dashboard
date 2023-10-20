import React from "react";
import FeatureCard from "../FeatureCard";
import InputFields from "../InputFields";
import OptimizationModeCard from "../OptimizationModeCard";
import { useSelector } from "react-redux";

const ImageTabSettings = () => {
    const dark = useSelector((state) => state.home.dark);

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
            last={true}
            title="Image Optimization"
            isSubSectionExist={true}
            p="10px 15px 20px 15px"
            subSectionTitile={"Adjust Image Quality"}
            description="Enable or disable image optimization for size and delivery"
          >
            <div className="w-[100%] py-[10px]">
              <InputFields labelText="Image Quality" type="text" />

              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Choose the desired optimization image quality, from 0 to 100,
                Google recommends 80.
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Adaptive Image Sizing"
            description="Image files are resized to match their container dimensions, reducing image file size. learn more"
            h={"80px"}
          />
          <FeatureCard
            title="Automatic Image Lazy Loading"
            isSubSectionExist={true}
            p="10px 15px 20px 15px"
            subSectionTitile={"Additional Options"}
            description="Load images only when they become visible. This reduce the initial weight of the pages."
          >
            <div className="w-[100%] py-[10px]">
              <InputFields
                labelText="Size Images Preemptively"
                list={["Enabled"]}
                type="dropdown"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Images will get width and heiht pre-configured before the actual
                image is loaded. Helps with some element sizing issues
              </div>

              <InputFields
                labelText="Lazy Load iFrames"
                list={["Enabled"]}
                type="dropdown"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                In addition to images, iframe elements will be lazy loaded as
                well.
              </div>

              <InputFields
                labelText="Specify CSS selector to force include CSS for matching elemnts"
                type="textarea"
                inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
              />

              <InputFields
                labelText="DOM-rebuilding Slider Compatibility"
                list={["Enabled"]}
                type="dropdown"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Images will get width and heiht pre-configured before the actual
                image is loaded. Helps with some element sizing issues
              </div>

              <InputFields
                labelText="Detect Theme Video Overlays"
                list={["Enabled"]}
                type="dropdown"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Some themes allow configuring an overlay for embedded videos.
                With this setting enabled, TurboBoost will display that overlay
                instead of the video thumbnail before the video is loaded.
              </div>

              <InputFields labelText="Loading Threshold" type="text" />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Elements approaching the viewport will be lazy loaded when they
                get the configured threshold or close
              </div>

              <InputFields
                labelText="Hidden Image Loading"
                list={["Default"]}
                type="dropdown"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Images with visibility: hidden; take up space on the page but
                are not visible - use Default to have them loaded as soon as
                they enter the viewport, and On visibility change to have them
                loaded when their visibility property changes.
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Additional Images"
            description="Specify any custom DOM element attributes that contain image URLs to have TurboBoost optimize them as well."
            h={"80px"}
          />
        </div>
      </div>

      <OptimizationModeCard />
    </div>
  );
};

export default ImageTabSettings;
