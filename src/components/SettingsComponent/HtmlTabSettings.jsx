import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FeatureCard from '../FeatureCard';
import OptimizationModeCard from '../OptimizationModeCard';
import { setToggle } from "../../slice/statusToggleSlice";
import { featureAPIHandling } from '../../utils/featureAPIHandling';
import toast from "react-hot-toast";

const HtmlTabSettings = () => {
  const dark = useSelector((state) => state.home.dark);

  const dispatch = useDispatch();

  const minifyHTMLToggleValue = useSelector((state) => state.toggles?.minifyHTML);
  const keepHTMLCommentToggleValue = useSelector((state) => state.toggles?.keepHTMLComment);

  const handleMinifyHTML = async () => {
    let endPoint = "";
    if (!minifyHTMLToggleValue) endPoint = "api/shopify/minify-html";
    else endPoint = "api/shopify/restore-minify-html";
    const data = await featureAPIHandling(endPoint);
    if (data.status === 200) {
      dispatch(setToggle({ key: "minifyHTML", value: !minifyHTMLToggleValue }));
      return toast.success(data.message);
    } else return toast.error(data?.message)
  }

    const handleKeepHTMLComment = async () => {
    let endPoint = "";
    if (!keepHTMLCommentToggleValue) endPoint = "api/shopify/keep-html-comment";
    else endPoint = "api/shopify/restore-keep-html-comment";
    const data = await featureAPIHandling(endPoint);
    if (data.status === 200) {
      dispatch(setToggle({ key: "keepHTMLComment", value: !keepHTMLCommentToggleValue }));
      return toast.success(data.message);
    } else return toast.error(data?.message)


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
            toggleValue={minifyHTMLToggleValue}
            last={true}
            h="70px"
            title="Minify HTML"
            description="When enabled TurboBoost will minify the HTML by removing extra whitespace."
          />
          <FeatureCard
            handlingToggle={handleKeepHTMLComment}
            toggleValue={keepHTMLCommentToggleValue}
            h="70px"
            title="Keep HTML comments"
            description="When enabled TurboBoost will not remove the HTML comments from the files while removing unused HTML code."
          />
        </div>
      </div>
    
    </div>
  );
}

export default HtmlTabSettings;
