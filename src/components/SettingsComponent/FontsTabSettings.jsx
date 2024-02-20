import React from 'react';
import FeatureCard from '../FeatureCard';
import InputFields from '../InputFields';
import 'react-toastify/dist/ReactToastify.css';
import { setToggle } from "../../slice/statusToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { featureAPIHandling } from '../../utils/featureAPIHandling';
import toast from "react-hot-toast";

const FontsTabSettings = () => {
  const dark = useSelector((state) => state.home.dark);

  const dispatch = useDispatch();

  const fontRenderBehaviorToggleValue = useSelector((state) => state.toggles?.fontRenderBehavior);
  const fontLoadingToggleValue = useSelector((state) => state.toggles?.fontLoading);
  const planName = useSelector((state) => state.toggles?.planName);

  const handleFontRenderBehavior = async () => {
    let endPoint = "";
    if (!fontRenderBehaviorToggleValue) endPoint = "api/shopify/adding-font-swap-properties";
    else endPoint = "api/shopify/restore-adding-font-swap-properties";
    const data = await featureAPIHandling(endPoint);
    if (data.status === 200) {
      dispatch(setToggle({ key: "fontRenderBehavior", value: !fontRenderBehaviorToggleValue }));
      // return toast.success(data.message);
    } else return toast.error(data?.message)

  }

  const handleFontLoading = async () => {
    let endPoint = "";
    if (!fontLoadingToggleValue) endPoint = "api/shopify/font-loading-optimization";
    else endPoint = "api/shopify/restore-font-loading-optimization";
    const data = await featureAPIHandling(endPoint);
    if (data.status === 200) {
      dispatch(setToggle({ key: "fontLoading", value: !fontLoadingToggleValue }));
      // return toast.success(data.message);
    } else return toast.error(data?.message)


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
              handlingToggle={handleFontRenderBehavior}
              getFeature = {planName === "Basic" || planName === "Starter" ? true : false}
              toggleValue={fontRenderBehaviorToggleValue}
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
              handlingToggle={handleFontLoading}
              toggleValue={fontLoadingToggleValue}
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
        
          </div>
        </div>

      </div>
    </>
  );
}

export default FontsTabSettings;
