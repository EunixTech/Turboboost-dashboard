import React from "react";
import FeatureCard from "../FeatureCard";
import InputFields from "../InputFields";
import OptimizationModeCard from "../OptimizationModeCard";
import { setToggle } from "../../slice/statusToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { featureAPIHandling } from "../../utils/featureAPIHandling";
import toast from "react-hot-toast";
const ImageTabSettings = () => {
    const dark = useSelector((state) => state.home.dark);
    const dispatch = useDispatch();

    const imageSizeAdaptionToggleValue = useSelector((state) => state.toggles?.imageSizeAdaption);
    const lazyLoadingToggleValue = useSelector((state) => state.toggles?.lazyLoading);

    const handleImageSizeAdaption = async() =>{
      let endPoint = "";
      if (!lazyLoadingToggleValue) endPoint = "api/shopify/adaptive-image-size-optimization";
      else endPoint = "/restore-adaptive-image-size-optimization";
      const data = await featureAPIHandling(endPoint);
      if(data.status === 200){
        dispatch(setToggle({ key: "imageSizeAdaption", value: !imageSizeAdaptionToggleValue }));
        return toast.success(data.message);
      }  else return toast.error(data?.message)

    }
      const handlelazyLoading = async() =>{
      let endPoint = "";
      if (!lazyLoadingToggleValue) endPoint = "api/shopify/adding-image-lazy-loading";
      else endPoint = "api/shopify/restore-adding-image-lazy-loading";
      const data = await featureAPIHandling(endPoint);
      if(data.status === 200){
        dispatch(setToggle({ key: "lazyLoading", value: !lazyLoadingToggleValue }));
        return toast.success(data.message);
      }  else return toast.error(data?.message)

    }
    
  return (
    <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
      <div className="w-[100%] ">
        <div
          style={{
            backgroundColor: dark ? "#111317" : "#fff",
            borderColor: dark ? "#1F2329" : "#ebebeb",
          }}
          className=" bg-[#fff] mt-[10px] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
        >
          <FeatureCard
                                   handlingToggle={handlelazyLoading}
                                   toggleValue= {lazyLoadingToggleValue}

            last={true}
            title="Automatic Image Lazy Loading"
            // isSubSectionExist={true}
            p="10px 15px 20px 15px"
            // subSectionTitile={"Adjust Image Quality"}
            description="Load images only when they become visible. This reduce the initial weight of the pages."
          >
            {/* <div className="w-[100%] py-[10px]">
              <InputFields labelText="Image Quality" type="text" />

              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Choose the desired optimization image quality, from 0 to 100,
                Google recommends 80.
              </div>
            </div> */}
          </FeatureCard>

          <FeatureCard
                         handlingToggle={handleImageSizeAdaption}
                         toggleValue= {imageSizeAdaptionToggleValue}
            title="Adaptive Image Sizing"
            description="Image files are resized to match their container dimensions, reducing image file size. learn more"
            h={"80px"}
          />
     
          {/* <FeatureCard
            title="Additional Images"
            description="Specify any custom DOM element attributes that contain image URLs to have TurboBoost optimize them as well."
            h={"80px"}
          /> */}
        </div>
      </div>

      {/* <OptimizationModeCard /> */}
    </div>
  );
};

export default ImageTabSettings;
